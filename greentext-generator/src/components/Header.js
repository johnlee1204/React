import React from "react";

export default function Header() {
    return (
        <nav className="navbar">
            <img className="navbar-logo" src={require("../images/logo.jpg")} alt="logo"></img>
            <p className="navbar-title">GreenText Generator</p>
        </nav>
    )
};