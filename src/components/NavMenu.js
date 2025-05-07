import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="navbar-brand">Felipe Tabares CV</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavMenu;
