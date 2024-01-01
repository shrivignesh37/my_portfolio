import React from 'react';
import Room3d from './Room3d';
import Container from './Container';
import Navbar from './Navbar';
import AboutUs from './About';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div>
        <Room3d />
        <div>
          <Container />
          <AboutUs />
        </div>
      </div>
    </div>
  );
}
