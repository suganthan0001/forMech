import React, { useEffect } from 'react';
import chart from "../images/chart.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

// import image09 from '../images/';
// import image10 from '../images/';
// import image11 from '../images';

const ImageSlider = () => {
  // const [imageIndex, setImageIndex] = useState(0);
  // const [imageOpacity, setImageOpacity] = useState(1);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setImageOpacity(0); // Set opacity to 0 before changing image
  //     setTimeout(() => {
  //       setImageIndex((prevIndex) => (prevIndex + 1) % 8); // Change 11 to the total number of images
  //       setImageOpacity(1); // Set opacity back to 1 after changing image
  //     }, 1500); // Adjust the transition time
  //   }, 4000);

  //   return () => clearInterval(intervalId);
  // }, []);

  // const getImageName = (index) => {
  //   const images = [image01, image02, image03, image04, image05, image06, image07, image08];
  //   return images[index];
  // };

  // const containerStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   textAlign: 'center',
  //   marginTop: '5vh', // Add margin-top
  // };

  const imageStyle = {
    width: '100%', // Adjust the width as needed
    height: 'auto',
    borderRadius: '10px', // Add border radius
    transition: 'opacity 1s ease-in-out' // Add transition
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