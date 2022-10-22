import React from 'react';
import { Carousel } from 'react-bootstrap';
import BrandOne from '../../../../assets/brands/brands_1.jpg';
import BrandTwo from '../../../../assets/brands/brands_2.jpg';

const BrandCarousel = () => {
    return (
        <div>
           <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BrandOne}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BrandTwo}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel> 
        </div>
    );
};

export default BrandCarousel;