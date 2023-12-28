import React from 'react';
import './css/Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav" style={{color:'white'}}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;