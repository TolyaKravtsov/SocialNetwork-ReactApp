import React from 'react';
import header from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={header.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"/>
            Header
            <div className={header.loginBlock}>

               {
                   props.isAuth
                   ? <div>{props.login} <button onClick={props.logoutUser}>Logout</button></div>
                   : <NavLink to={'/login'}><button>Login</button></NavLink>
               }
            </div>
        </header>
    );

};

export default Header;
