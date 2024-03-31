import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar1" style={{backgroundColor: '#152238', boxShadow: '0 15px 70px 0 rgba(31, 38, 135, 0.37)' ,  backdropFilter: 'blur(25px)'}}>
            <div className="navbar-brand1" style={{color:'white'}}>Shri vignesh</div>
            <ul className="navbar-nav1">
                <li><a href="/">Home</a></li>
                <li><a href="/ProfileCard">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};


export default Navbar;

