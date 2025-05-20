
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png"; // Updated path for the logo image

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#004f44" }} // Change to your preferred color
    >
      <div className="container-fluid d-flex justify-content-start align-items-center">
        {/* Logo Image */}
        <img
          src={Logo}
          alt="LeafLink Logo"
          style={{ width: "110px", height: "110px", marginRight: "11px" }} // Logo size
        />

        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontSize: "50px", // Increase font size for LeafLink
            fontWeight: "bold", // Make LeafLink text bold
            color: "#FFFFFF", // Change logo text color to white
          }}
        >
          LeafLink
        </Link>

        {/* Conditional rendering: Only show the Manager Dashboard link if not on the shop page */}
        {location.pathname !== "/shop" && (
          <div className="d-flex ms-2 align-items-center">
            <Link
              className="navbar-brand"
              to="/"
              style={{
                fontSize: "24px",
                fontWeight: "600", // Slightly lower bold for Manager Dashboard
                color: "#FFFFFF", // Change to white for better visibility
                marginTop: "12px", // Adjust spacing
              }}
            >
              Shop
            </Link>
          </div>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/"
                style={{ color: "#FFFFFF", fontSize: "20px" }} // Change to white
              >
                shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/insert"
                style={{ color: "#FFFFFF", fontSize: "20px" }} // Change to white
              >
                Add Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/shop"
                style={{ color: "#FFFFFF", fontSize: "20px" }} // Change to white
              >
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="#"
                style={{ color: "#FFFFFF", fontSize: "20px" }} // Change to white
              >
                Disabled
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
