import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

library.add(faEarthAmericas);

export default function Navbar() {
    return (
        <nav className="navbar">
            <FontAwesomeIcon className="navbar-icon" icon="fa-solid fa-earth-americas" />
            <p>My Travel Journal</p>
        </nav>
    );
}