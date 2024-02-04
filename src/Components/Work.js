import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import k1 from '../images/k1.jpeg';
import k2 from '../images/k2.jpeg';
import k3 from '../images/k3.jpeg';
import k4 from '../images/k4.jpeg';
import k5 from '../images/k5.jpeg';
import k6 from '../images/k6.jpeg';
import k7 from '../images/k7.jpeg';
import k8 from '../images/k8.jpeg';
import k9 from '../images/k9.jpeg';

function Work() {
  return (<>
    <h1 className='featured' style={{ textAlign: "center", margin: "4% 0"}}>Featured Courses</h1>
    <Carousel className='caro' fade wrap style={{ borderRadius: '25px' ,overflow: 'hidden', margin: '0 auto',width:"60%"}}>
      <Carousel.Item className='caro-item' style={{ height: '400px' }}>
        <ExampleCarouselImage imageSource={k1} />
        <Carousel.Caption >
          <h1>CNC Machining Processes</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='caro-item' style={{color:"black"}}>
        <ExampleCarouselImage imageSource={k2} style={{width:"400px"}}/>
        <Carousel.Caption>
          <h1>Hydraulic Machine Operation</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '400px' }} className='caro-item'>
        <ExampleCarouselImage imageSource={k3} />
        <Carousel.Caption>
          <h1>Refrigeration Systems</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '400px' }} className='caro-item'>
        <ExampleCarouselImage imageSource={k4} />
        <Carousel.Caption>
          <h1>Automobile Engineering</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '400px' }} className='caro-item'>
        <ExampleCarouselImage imageSource={k5} />
        <Carousel.Caption>
          <h1>Automation Systems</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '400px' }} className='caro-item'>
        <ExampleCarouselImage imageSource={k6} />
        <Carousel.Caption>
          <h1>CATIA for 3D Modeling</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '400px' }} className='caro-item'>
        <ExampleCarouselImage imageSource={k7} />
        <Carousel.Caption>
          <h1>3D Printing Techniques</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '400px' }} className='caro-item'>
        <ExampleCarouselImage imageSource={k8} />
        <Carousel.Caption>
          <h1>Specialized Machines</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '400px' }} className='caro-item'>
        <ExampleCarouselImage imageSource={k9} />
        <Carousel.Caption>
          <h1>Testing of Advanced Materials</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  );
}

export default Work;