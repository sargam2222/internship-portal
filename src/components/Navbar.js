import React from "react";
import { Link } from "react-router-dom";
import logo1 from '../assets/logo1.png'

const Navbar = () => {
  return (
    
    <nav style={{ padding: "3px", background: "#282c34", color: "#fff" }}>
            <img src={logo1} style={{ margin: "0 20px", color: "#fff", height:'80px'}}/>
      <Link to="/" style={{ margin: "0 50px", color: "#fff" }}>Login/signup</Link>
      <Link to="/home" style={{ margin: "0 20px", color: "#fff" }}>Home</Link>
      <Link to="/internships" style={{ margin: "0 30px", color: "#fff" }}>Internships</Link>
      <Link to="/apply" style={{ margin: "0 30px", color: "#fff" }}>Apply</Link>
      <Link to="/profile" style={{ margin: "0 30px", color: "#fff" }}>Profile</Link>
    </nav>
  
  );
};

export default Navbar;
