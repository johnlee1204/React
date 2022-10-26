import React from "react";
import airbnbLogo from "../images/airbnb-logo.svg";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar-logo" src={airbnbLogo} alt="Logo"/>
        </nav>
    );
}