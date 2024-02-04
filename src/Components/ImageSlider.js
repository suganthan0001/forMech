import React, { useEffect } from 'react';
import chart from "../images/chart.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = () => {
  const imageStyle = {
    width: '100%', 
    height: 'auto',
    borderRadius: '10px', 
    transition: 'opacity 1s ease-in-out' 
  };
  useEffect(
    () => {
      document.getElementById("fullscreen-button").addEventListener("click", function () {
        const element = document.getElementById("fullscreen-image");
        if (!document.fullscreenElement) {
          element.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
          });
        } else {
          document.exitFullscreen();
        }
      });
    }
  ,[])

  return (
    // <div style={containerStyle}>
    //   <img
    //     src={chart}
    //     alt='altIImage'
    //     style={imageStyle}
    //     className='high-images'
    //   />
    // </div>
    <div class="container">
    <img
        src={chart}
        alt='altIImage'
        style={imageStyle}
        className='high-images img-fluid'
        id='fullscreen-image'
      />
    <button id="fullscreen-button" className="btn btn-outline-dark btn-sm"><FontAwesomeIcon icon={faExpand} /></button>
</div>
  );
};


export default ImageSlider;