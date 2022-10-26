import React from "react";
import reactLogo from "../images/logo512.png"

function Header() {
    return (
        <header>
            <nav className="nav-container">
                <div className="nav-container-left">
                    <img className="nav-logo" src={reactLogo} alt="Not Found" />
                    <span className="nav-container-left-title">JohnScript</span>
                </div>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;