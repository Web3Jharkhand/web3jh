import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = ({ images }) => {
    const slideshowProperties = {
      autoplay: true, // Enable autoplay
      duration: 3000, // Set the duration (3 seconds per image)
    };
  
    return (
      <div className="slide-container">
        <Slide {...slideshowProperties}>
          {images.map((image, index) => (
            <div key={index} className="each-slide">
              <img src={image} alt={`Slide ${index}`} className="slide-image" />
            </div>
          ))}
        </Slide>
      </div>
    );
  };
  
  export default Slideshow;