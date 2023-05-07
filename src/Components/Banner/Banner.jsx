import React, { useState } from 'react';
import banner1 from '../../Images/banner-1.jpg'
import banner2 from '../../Images/banner-2.jpg'
import banner3 from '../../Images/banner-3.jpg'
import { Carousel, Navbar } from 'react-bootstrap';
import NavbarLinks from '../Navbar/NavbarLinks';
import './Banner.css'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    
    return (
        <div>
            <NavbarLinks></NavbarLinks>
            <Carousel variant="dark">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
    
        <Carousel.Caption >
          <h5>Why hurry!! Have a Curry</h5>
          <button className='main-button'>Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        
        <Carousel.Caption>
          <h5>Delicious Food Are here</h5>
          <button className='main-button'>Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Its Tempting!!</h5>
          <button className='main-button'>Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
        </div>
    );
};

export default Banner;