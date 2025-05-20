import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./EmployeeDetails.css";

function ShowEmployeeDetail() {
  const [employees, setEmployees] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/employees/${id}`)
      .then((res) => {
        setEmployees(res.data);
      })
      .catch(() => {
        console.log("Error from ShowEmployeeDetail");
      });
  }, [id]);

  const TableItem = (
    <div>
      <table className="table table-hover" style={{ backgroundColor: "white", color: "black" }}>
        <tbody>
          <tr>
            <th scope="row" style={{ backgroundColor: "#0c583b", color: "white" }}>1</th>
            <td>ID-</td>
            <td>{employees.employeeID}</td>
          </tr>
          <tr>
            <th scope="row" style={{ backgroundColor: "#0c583b", color: "white" }}>2</th>
            <td>NAME-</td>
            <td>{employees.name}</td>
          </tr>
          <tr>
            <th scope="row" style={{ backgroundColor: "#0c583b", color: "white" }}>3</th>
            <td>ADDRESS-</td>
            <td>{employees.address}</td>
          </tr>
          <tr>
            <th scope="row" style={{ backgroundColor: "#0c583b", color: "white" }}>4</th>
            <td>NIC-</td>
            <td>{employees.nic}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="showEmployeeDetails" style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
      <div className="col-md-10 m-auto">
        <br />
        <Link to={"/"} className="btn btn-outline-danger float-right">
          Back to main
        </Link>
      </div>

      <br />
      <div className="col-md-8 m-auto">
        <h1 className="display-6-bold text-center" style={{ color: "#0c583b" }}>Employee Detail</h1>
        <p className="text-center" style={{ color: "#0c583b" }}>This is full detail of employee</p>
        <hr />
        <br />
      </div>
      <div className="col-md-10 m-auto">{TableItem}</div>
      <div className="col-md-6 m-auto">
        <Link
          to={`/updatedetails/${employees._id}`}
          className="btn btn-outline-info btn-lg btn-block d-flex justify-content-center"
          style={{ backgroundColor: "#0c583b", color: "white" }} // Green button
        >
          Edit Employee
        </Link>
      </div>
    </div>
  );
}

export default ShowEmployeeDetail;
