import React from "react";

const Footer = () => {
  return (
    <div style={{
      backgroundColor: "#0c583b", // Solid background color
      color: "#ffffff", // White text color
      padding: "20px",
      textAlign: "center",
      position: "relative",
      bottom: "0",
      width: "100%",
      fontFamily: "'Arial', sans-serif", // Font family
    }}>
      <div style={{ marginBottom: "15px" }}>
        <h5 style={{ margin: "0", fontSize: "24px", fontWeight: "bold" }}>LeafLink Tea Family</h5>
      </div>
      <blockquote style={{
        fontStyle: "italic",
        fontSize: "18px",
        margin: "0 0 15px 0",
        paddingLeft: "15px", // Keep padding for indentation
      }}>
        <p>LeafLink is your start to an extraordinary Ceylon Tea experience.</p>
        <footer style={{ fontSize: "16px", fontWeight: "normal" }}>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>

      <div style={{ marginTop: "15px" }}>
        <a href="https://www.facebook.com" style={{ margin: "0 10px", color: "#ffffff", textDecoration: "none" }}>
          <i className="fab fa-facebook-f"></i> {/* Font Awesome icon for Facebook */}
        </a>
        <a href="https://www.twitter.com" style={{ margin: "0 10px", color: "#ffffff", textDecoration: "none" }}>
          <i className="fab fa-twitter"></i> {/* Font Awesome icon for Twitter */}
        </a>
        <a href="https://www.instagram.com" style={{ margin: "0 10px", color: "#ffffff", textDecoration: "none" }}>
          <i className="fab fa-instagram"></i> {/* Font Awesome icon for Instagram */}
        </a>
        <a href="https://www.linkedin.com" style={{ margin: "0 10px", color: "#ffffff", textDecoration: "none" }}>
          <i className="fab fa-linkedin-in"></i> {/* Font Awesome icon for LinkedIn */}
        </a>
      </div>

      <div style={{ marginTop: "10px", fontSize: "14px" }}>
        © {new Date().getFullYear()} LeafLink. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
