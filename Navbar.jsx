import React from "react";
import { Link } from "react-router-dom";

// Using placeholder images for simplicity
const homeIcon = "https://via.placeholder.com/24?text=H";
const addIcon = "https://via.placeholder.com/24?text=+"; 

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "#f5f5f5",
        alignItems: "center",
      }}
    >
      <div className="navbar-left">
        <Link
          to="/"
          style={{ textDecoration: "none", fontWeight: "bold", fontSize: "20px", color: "#333" }}
        >
          EmployeeApp
        </Link>
      </div>
      <div className="navbar-right" style={{ display: "flex", gap: "15px" }}>
        <Link to="/">
          <img src={homeIcon} alt="Home" style={{ width: "24px", height: "24px" }} />
        </Link>
        <Link to="/add">
          <img src={addIcon} alt="Add" style={{ width: "24px", height: "24px" }} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
