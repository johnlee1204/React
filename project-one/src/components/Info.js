import React from "react";
import Picture from "../images/john.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faEnvelope, faLinkedin);

function Info() {
    return (
        <div className="info">
            <img className="info-picture" src={Picture} alt="John Pic"></img>
            <span className="info-name">John Lee</span>
            <span className="info-title">Full Stack Developer</span>
            <span className="info-email">johnmlee1204@gmail.com</span>
            <div className="info-buttons">
                <button className="info-buttons-email" onClick={email}><span className="info-buttons-iconSeparator"><FontAwesomeIcon icon="fa-solid fa-envelope" /></span>Email</button>
                <div className="info-buttons-spacer"></div>
                <button className="info-buttons-linkedin" onClick={openLinkedIn}><span className="info-buttons-iconSeparator"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></span>LinkedIn</button>
            </div>
        </div>
    );
}

function email() {
    window.open("mailto:johnmlee1204@gmail.com")
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/john-lee-20b2a4164/")
}

export default Info;