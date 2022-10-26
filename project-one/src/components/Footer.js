import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faTwitter, faFacebook, faInstagram, faGithub)

function Footer() {
    return (
        <div className="footer">
            <div className="footer-icons">
                <a href="https://twitter.com/JohnLee05246796"><FontAwesomeIcon icon="fa-brands fa-twitter"></FontAwesomeIcon></a>
                <a href="https://www.facebook.com/profile.php?id=100002557626356"><FontAwesomeIcon icon="fa-brands fa-facebook"></FontAwesomeIcon></a>
                <a href="https://www.instagram.com/johnmlee1204/"><FontAwesomeIcon icon="fa-brands fa-instagram"></FontAwesomeIcon></a>
                <a href="https://github.com/johnlee1204"><FontAwesomeIcon icon="fa-brands fa-github"></FontAwesomeIcon></a>
            </div>
        </div>
    );
}

export default Footer;