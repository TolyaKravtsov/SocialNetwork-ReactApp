import React from 'react';
import header from './Header.module.css'


const Header = () => {
    return (
        <header className={header.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"/>
            Header
        </header>
    );

};

export default Header;
