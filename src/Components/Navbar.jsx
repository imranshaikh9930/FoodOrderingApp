import React,{useState} from 'react'
import logo from "../Images/logo.png";
import {Link} from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder"
import "../Styles/Navbar.css";

function Navbar() {
    const [openLinks,setOpenLinks] = useState(false);
    const toggleNavbar = ()=>{
        setOpenLinks(!openLinks);
    }
  return (
    <div className="Nav_bar">
      <div className="leftSide" id={openLinks ? "open":"close"}>
        <img src={logo} alt="" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/">Menu</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          {" "}
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar