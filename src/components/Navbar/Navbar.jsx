import React from 'react';
import "./Navbar.module.css";
import navbar from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <div><a href="">Profile</a></div>
            <div><a href="">Message</a></div>
            <div><a href="">News</a></div>
            <div><a href="">Music</a></div>
            <div><a href="">Settings</a></div>
        </nav>

    );

};

export default Navbar;