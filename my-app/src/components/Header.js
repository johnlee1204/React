import Logo from "../images/logo512.png";
import "../style.css"

function Header() {
    return (
        <nav className="header">
            <img className="header-logo" src={Logo} alt="Logo"/>
            <h2 className="header-title">JohnScript</h2>
            <ul className="header-list">
                <li><a href = "https://blog.johnscript.dev/">Blog</a></li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Header;