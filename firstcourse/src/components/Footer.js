import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text-container"><div className="footer-text"><small>© {(new Date()).getFullYear()} Lee development. All rights reserved.</small></div></div>
        </footer>
    );
}

export default Footer;