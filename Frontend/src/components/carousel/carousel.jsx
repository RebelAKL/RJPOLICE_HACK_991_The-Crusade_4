import React from 'react';
import './style.css';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div className="slide" key={index}>
          . THE CRUSADE
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
