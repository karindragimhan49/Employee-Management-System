import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeCard from "./EmployeeCard";
import "./EmployeeList.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

import logo from "../assets/Logo.png"; // Adjust the path according to your project structure

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredEmployees(filtered);
  }, [searchQuery, employees]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/employees")
      .then((res) => {
        setEmployees(res.data);
        setFilteredEmployees(res.data);
      })
      .catch(() => {
        console.log("Error while getting data");
      });
  }, []);

  const onDeleteClick = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/api/employees/${id}`)
        .then(() => {
          setEmployees(employees.filter((employee) => employee._id !== id));
        })
        .catch((err) => {
          console.log("delete error", err);
        });
    }
  };

  const generatePDF = () => {
    const pdf = new jsPDF();

    // Add company logo at the top
    const img = new Image();
    img.src = logo;

    img.onload = function () {
      // Add the image to the PDF after it's loaded
      pdf.addImage(img, "PNG", 10, 10, 50, 40); // Adjust position (x, y) and size (width, height)

      // Set up letterhead
      pdf.setFontSize(16);
      pdf.setFont("Arial", "bold");
      pdf.text("LeafLink", 200, 20, { align: "right" }); // Move company name to the right
      pdf.setFontSize(12);
      pdf.setFont("Arial", "normal");
      pdf.text("404HA", 200, 27, { align: "right" }); // Move address to the right
      pdf.text("Deniyaya road", 200, 34, { align: "right" });
      pdf.text("Deniyaya, Sri Lanka", 200, 41, { align: "right" });
      pdf.text("0113417119", 200, 48, { align: "right" });

      // Add some space before the table
      pdf.setFontSize(14);
      pdf.text("Employee List", 15, 70); // Title of the table

      // Table setup (with ID, Name, and NIC)
      const tableColumn = ["ID", "Name", "NIC"];
      const tableRows = filteredEmployees.map((employee) => [
        employee._id,
        employee.name,
        employee.nic,
      ]);

      pdf.autoTable({
        startY: 75, // Position table below the title
        head: [tableColumn],
        body: tableRows,
        theme: "grid",
        headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255] }, // Header style
        styles: { fontSize: 12, cellPadding: 3 }, // Table font size and padding
        margin: { horizontal: 10 },
        columnStyles: {
          0: { cellWidth: "auto" }, // Adjust ID column width
          1: { cellWidth: "auto" }, // Adjust Name column width
          2: { cellWidth: "auto" }, // Adjust NIC column width
        },
      });

      // Footer: Signature section
      pdf.setFontSize(12);
      pdf.text("Manager's Signature: __________________", 15, pdf.internal.pageSize.height - 40);
      pdf.text("Name: Manager", 15, pdf.internal.pageSize.height - 30);

      // Footer: Date section
      pdf.setFontSize(10);
      pdf.text(
        `Generated on: ${new Date().toLocaleString()}`,
        10,
        pdf.internal.pageSize.height - 10
      );

      // Save the PDF
      pdf.save("employees_report.pdf");
    };
  };

  const employeesList =
    filteredEmployees.length === 0
      ? "No employees found!"
      : filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee._id}
            employee={employee}
            onDelete={onDeleteClick}
          />
        ));

  return (
    <div className="Show_EmployeeList">
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search employees ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="button">
          <button onClick={generatePDF}>Download Report</button>
        </div>

        <div className="list">{employeesList}</div>
      </div>
    </div>
  );
};

export default EmployeeList;
