import React from 'react';
import './Marquee.css'; 
import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';
import s4 from '../images/s4.png';
import s5 from '../images/s5.png';
import s6 from '../images/s6.png';
import s7 from '../images/s7.png';


const MarqueeComponent = () => {
    return (
        <div className="marquee-container" style={{marginTop: "0"}}>
            <h2 className="marquee-heading" style={{}}>Our Trainers</h2>
            <div className="marquee-content slow">
                <div className="marquee-item">
                    <img src={s1} alt="image1" />
                </div>
                <div className="marquee-item">
                    <img src={s2} alt="image1" />
                </div>
                <div className="marquee-item">
                    <img src={s3} alt="image1" />
                </div><div className="marquee-item">
                    <img src={s4} alt="image1" />
                </div><div className="marquee-item">
                    <img src={s5} alt="image1" />
                </div><div className="marquee-item">
                    <img src={s6} alt="image1" />
                </div><div className="marquee-item end">
                    <img src={s7} alt="image1" />
                </div>
            </div>
        </div>
    );
};

export default MarqueeComponent;
