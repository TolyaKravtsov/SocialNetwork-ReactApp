import React from 'react';
import navbar from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={navbar.nav}>
            <div className={navbar.item}>
                <NavLink to="/profile" activeClassName={navbar.activeLink}>Profile</NavLink>
            </div>

            <div className={navbar.item}>
                <NavLink to="/dialogs" activeClassName={navbar.activeLink}>Dialogs</NavLink>
            </div>

            <div className={navbar.item}>
                <a href="">News</a>
            </div>

            <div className={navbar.item}>
                <a href="">Music</a>
            </div>

            <div className={navbar.item}>
                <a href="">Settings</a>
            </div>
        </nav>

    );

};

export default Navbar;