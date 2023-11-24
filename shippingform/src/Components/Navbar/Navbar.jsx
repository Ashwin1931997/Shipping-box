import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to={"/home"}>Home</Link>
        <Link to={"/ShippingForm"}>ShippingForm</Link>
        <Link to={"/ShippingList"}>ShippingList</Link>
      </nav>
    </div>
  );
}

export default Navbar;