import React, { useState } from "react";
import "./InsertEmployee.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InsertEmployee = () => {
  const navigate = useNavigate();

  // Manage state with new fields for Birthday, Salary, and Designation
  const [employeeData, setEmployeedata] = useState({
    employeeID: "",
    name: "",
    address: "",
    nic: "",
    birthday: "",  // New field
    salary: "",    // New field
    designation: "" // New field
  });

  const [errors, setErrors] = useState({
    employeeID: "",
    nic: "",
    birthday: "",
    salary: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict Employee ID to exactly 8 digits
    if (name === "employeeID" && value.length > 8) {
      return; // more than 8 digits
    }

    // Update state with form input values
    setEmployeedata({
      ...employeeData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Employee ID validation (exactly 8 digits)
    if (!employeeData.employeeID) {
      tempErrors.employeeID = "Employee ID is required.";
      isValid = false;
    } else if (!/^\d{8}$/.test(employeeData.employeeID)) {
      tempErrors.employeeID = "Employee ID must be exactly 8 digits.";
      isValid = false;
    }

    // NIC validation
    if (!employeeData.nic) {
      tempErrors.nic = "NIC is required.";
      isValid = false;
    } else if (!/^\d{9}[vVxX]$/.test(employeeData.nic)) {
      tempErrors.nic = "NIC is invalid. Must be 9 digits followed by V/v or X/x.";
      isValid = false;
    }

    // Birthday validation (optional, but you can check the format)
    if (!employeeData.birthday) {
      tempErrors.birthday = "Birthday is required.";
      isValid = false;
    }

    // Salary validation (ensure it's a number)
    if (!employeeData.salary) {
      tempErrors.salary = "Salary is required.";
      isValid = false;
    } else if (isNaN(employeeData.salary)) {
      tempErrors.salary = "Salary must be a number.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post("http://localhost:3000/api/employees", employeeData)
        .then((response) => {
          window.alert("Employee added successfully!");
          setEmployeedata({
            employeeID: "",
            name: "",
            address: "",
            nic: "",
            birthday: "",  // Clear new fields
            salary: "",
            designation: ""
          });
          navigate("/");
        })
        .catch((error) => {
          console.error("Error adding employee:", error.response ? error.response.data : error.message);
        });
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", color: "#054c21", fontSize: "27px" }}>Employee Information Form</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="employee_id">Employee ID:</label>
          <input
            type="text"
            id="employee_id"
            name="employeeID"
            maxLength="8"  // Prevent input beyond 8 digits
            onChange={handleChange}
            value={employeeData.employeeID}
          />
          {errors.employeeID && <span className="error">{errors.employeeID}</span>}
        </div>

        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={employeeData.name}
          />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleChange}
            value={employeeData.address}
          />
        </div>

        <div>
          <label htmlFor="nic">NIC:</label>
          <input
            type="text"
            id="nic"
            name="nic"
            onChange={handleChange}
            value={employeeData.nic}
          />
          {errors.nic && <span className="error">{errors.nic}</span>}
        </div>

        {/* New fields for Birthday, Salary, and Designation */}
        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            onChange={handleChange}
            value={employeeData.birthday}
          />
          {errors.birthday && <span className="error">{errors.birthday}</span>}
        </div>

        <div>
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            onChange={handleChange}
            value={employeeData.salary}
          />
          {errors.salary && <span className="error">{errors.salary}</span>}
        </div>

        <div>
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            name="designation"
            onChange={handleChange}
            value={employeeData.designation}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InsertEmployee;
