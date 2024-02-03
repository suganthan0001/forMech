import React from "react";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import video from "../images/video1.mp4";

const About = () => {
  const youtubeChannelURL = "https://www.youtube.com/@st.josephsgroupofinstituti7921/videos";

  return (<>
    <div className="about-section-container" style={{ marginTop: '1vh' }}>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container" >

        <video height="400" controls id="video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="about-section-text-container " style={{ lineHeight: '1.5' }}>
          <h1 className="primary-heading text-center">About Our Department</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item primary-text">Established in 1998, our Mechanical Engineering Department has seen remarkable growth, now admitting 180 students annually, up from an initial intake of 40</li>
            <li className="list-group-item primary-text">Accredited by NBA in 2007, affirming our commitment to quality education</li>
            <li className="list-group-item primary-text">Consistently achieving 119 university ranks since inception, reflecting our academic excellence</li>
            <li className="list-group-item primary-text">Our faculty comprises 36 members, including 15 Ph.D. holders and 12 research supervisors, guiding 49 research scholars</li>
            <li className="list-group-item primary-text">Recognized as a Research Centre by Anna University, empowering innovative research initiatives</li>
            <li className="list-group-item primary-text">Equipped with state-of-the-art laboratories facilitating hands-on learning and innovation</li>
            <li className="list-group-item primary-text">Encouraging student innovation, resulting in multiple projects honored as Best Innovative Projects by INAE</li>
            <li className="list-group-item primary-text">Our graduates secure placements in renowned national and international industries, with many pursuing higher studies globally</li>
            <li className="list-group-item primary-text">Committed to nurturing academic excellence, research, and innovation to prepare students for success in the dynamic field of mechanical engineering</li>
          </ul>


        <div className="about-buttons-container">
          <a
            href={youtubeChannelURL}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-button"
            style={{
              textDecoration: "none",
            }}
          >
            <BsFillPlayCircleFill /> Watch Video
          </a>
        </div>
      </div>
    </div>
  </>

  );
};

export default About;
