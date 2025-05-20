import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

function UpdateEmployee() {
  const [employee, setEmployees] = useState({
    employeeID: "",
    name: "",
    address: "",
    nic: "",
  });
  
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/employees/${id}`)
      .then((res) => {
        setEmployees({
          employeeID: res.data.employeeID,
          name: res.data.name,
          address: res.data.address,
          nic: res.data.nic,
        });
      })
      .catch((err) => {
        console.log("Error from Update Employee", err);
      });
  }, [id]);

  const onChange = (e) => {
    setEmployees({ ...employee, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Validate Employee ID (not empty and numeric)




    if (!employee.employeeID) {
      tempErrors.employeeID = "Employee ID is required.";
      isValid = false;
    } else if (!/^\d+$/.test(employee.employeeID)) {
      tempErrors.employeeID = "Employee ID must be numeric.";
      isValid = false;
    }

    // Validate Name (not empty)



    if (!employee.name) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }

    // Validate NIC (not empty and valid NIC pattern)


    if (!employee.nic) {
      tempErrors.nic = "NIC is required.";
      isValid = false;
    } else if (!/^\d{9}[vVxX]$/.test(employee.nic)) {
      tempErrors.nic = "NIC is invalid. Must be 9 digits followed by V/v or X/x.";
      isValid = false;
    }

    // Validate Address (not empty)
    if (!employee.address) {
      tempErrors.address = "Address is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const data = {
        employeeID: employee.employeeID,
        name: employee.name,
        address: employee.address,
        nic: employee.nic,
      };

      axios
        .put(`http://localhost:3000/api/employees/${id}`, data)
        .then((res) => {
          // Show success popup
          window.alert("Employee updated successfully!");
          
          // Redirect to the employee details page after success
          navigate(`/showdetails/${id}`);
        })
        .catch((err) => {
          console.log("Error in Update", err);
        });
    }
  };

  return (
    <div>
      <div className="UpdateEmployee">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Employee List
              </Link>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="employeeID" maxlength="8" oninput="removeSpaces(this)" >Employee ID</label>
                <input
                  type="text"
                  name="employeeID"
                  className="form-control"
                  value={employee.employeeID}
                  onChange={onChange}
                />
                {errors.employeeID && <span className="error">{errors.employeeID}</span>}
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={employee.name}
                  onChange={onChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={employee.address}
                  onChange={onChange}
                />
                {errors.address && <span className="error">{errors.address}</span>}
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="nic">NIC</label>
                <input
                  type="text"
                  name="nic"
                  className="form-control"
                  value={employee.nic}
                  onChange={onChange}
                />
                {errors.nic && <span className="error">{errors.nic}</span>}
              </div>
              <br />

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Update Employee
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployee;
