import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './css/About.css'; // Import the CSS file
// import Spline from '@splinetool/react-spline';
const AboutUs = () => {
    return (
        <div className='about-us'>
      

            <h1>About Us</h1>
            <p>Sophomore at Sri Krishna College of Technology (SKCT) studying Information Technology
             with a strong desire for creative roles in the design industry Currently establishing
              my learning curve in Fullstack dev
             | SQL | java | c++| MongoDb | Agile</p>
            <div className="social-media-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-media-icon" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="social-media-icon" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-media-icon" />
                </a>
            </div>
        </div>
    );
};

export default AboutUs;
