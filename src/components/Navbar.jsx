import React, { useState } from 'react';
import './css/Navbar.css';
import 'react-bootstrap';
import { MDBNavbar ,MDBBtn} from 'mdb-react-ui-kit';

const Navbar = () => {
    const [isWhiteTheme, setIsWhiteTheme] = useState(true);

    const toggleTheme = () => {
        setIsWhiteTheme(!isWhiteTheme);
        document.body.style.backgroundColor = isWhiteTheme ? '#202d3e' : '#D3D3D3';
    };

    return (
        <MDBNavbar fixed='top' className='nav-container_'>
            <nav
                className='navbar1'
                style={{
                    backgroundColor: isWhiteTheme ? '#152238' : '#152238',
                    boxShadow: '0 15px 70px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(25px)',
                    borderRadius: '3vh',
                }}
            >
                <div className='navbar-brand1' style={{ color: isWhiteTheme ? 'white' : 'white' }}>
                    Shri vignesh
                </div>
                <ul className='navbar-nav1'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/ProfileCard'>About</a>
                    </li>
                    <li>
                        <a href='/projects'>Projects</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact</a>
                    </li>
                </ul>
                <MDBBtn  outline color='white'  onClick={toggleTheme}>Theme</MDBBtn>
            </nav>
        </MDBNavbar>
    );
};

export default Navbar;

