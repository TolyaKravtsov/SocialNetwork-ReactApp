import React from 'react';
import header from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={header.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"/>
            Header
            <div className={header.loginBlock}>

               {props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    );

};

export default Header;
