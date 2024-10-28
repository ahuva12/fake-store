import React from 'react';
import style from '../css/Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <h1>Welcome</h1>
            <h2>What do you want to buy today?</h2>
        </div>
    );
};

export default Header;