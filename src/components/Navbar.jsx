import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar1">
            <div className="navbar-brand1">Shri vignesh</div>
            <ul className="navbar-nav1">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};


export default Navbar;

