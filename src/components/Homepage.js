import React from 'react';
// import Room3d from './Room3d';
import HackerTextBox from './HackerTextBox';
import Navbar from './Navbar';

import  ProjectCard from './ProfileCard';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div>
          <HackerTextBox/>
          <ProjectCard />
        </div>
      </div>
  );
}
