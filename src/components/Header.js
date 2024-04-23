import React from "react";
import "./Header.css";
function Header() {
    return (
        <header>
            <nav  className="navbar">
                <h2>Hello World Again!</h2>
                <ul className="navItem">
                    <li className="listItem">Home</li>
                    <li className="listItem">About</li>
                    <li className="listItem">Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;