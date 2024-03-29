import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div
      className={`home-container`}
      style={{
        background: `url("../Assets/entrance.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: '2vh',
      }}
    >
      <div
        className="home-text-section with-shadow top-container"
        style={{
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out, scale 1s ease-in-out',
          // opacity: inView ? 1 : 0,
          // transform: inView ? 'translateY(0)' : 'translateY(20px) scale(0.9)',
          backgroundColor: 'transparent', // Transparent background
          padding: '20px', // Adjust padding as needed
          borderRadius: '10px', // Adjust border radius as needed
          color: 'white', // Text color
          gap: "20px"
        }}
      >
        <h1 className="primary-heading" style={{ textAlign: 'center'}}>
          Department of Mechanical Engineering
          <br />
          </h1>
        <h2 style={{ textAlign: 'center', whiteSpace: 'pre-line', fontSize: '2rem', color: '#4c4c4c' }}>
          Offers a summer internship by the best professionals. <br />
        </h2>
        <h3 style={{ textAlign: 'center', whiteSpace: 'pre-line', fontSize: '2rem', color: '#4c4c4c' }}>
        From 15<sup>th</sup> April to 24<sup>th</sup> May
 <br /></h3>
        <a target="_blank" rel="noreferrer" href="https://forms.gle/RvopA1DgqHHCYZyz9">
          <button className="btn btn-lg btn-outline-primary" >
            Register Now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "5px" }} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
