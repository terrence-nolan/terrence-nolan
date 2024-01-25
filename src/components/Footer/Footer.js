import React from "react";
import "./styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Terrence Nolan</p>
        </footer>
    );
}

export default Footer;
