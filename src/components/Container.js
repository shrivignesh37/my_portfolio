import React from 'react';
import Typewriter from 'react-typewriter-effect';
import './css/Container.css';

const Container = () => {
  return (
    <div className="container">
      <div style={{ color: "green", fontFamily: "Courier", fontSize: "24px" }}>
        <Typewriter
          text="Hello World " 
          onInit={(typewriter) => {
            typewriter.typeString(typewriter.props.text)
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default Container;