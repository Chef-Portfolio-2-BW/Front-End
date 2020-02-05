import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';

const CarouselContainer = styled.div`
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
    @media (max-width: 800px){
      width: 45%;
    }
`

export default () => (
<CarouselContainer>
  <Carousel autoPlay infiniteLoop='true' showThumbs='false' showStatus='false' showIndicators='false' >
    <div>
      <img className='carousel-img' src={require('../img/slide01.jpg')} alt='1'/>
    </div>
    <div>
      <img className='carousel-img' src={require('../img/slide02.jpg')} alt='2'/>
    </div>
    <div>
      <img className='carousel-img' src={require('../img/slide03.jpg')} alt='3'/>
    </div>
    <div>
      <img className='carousel-img' src={require('../img/slide04.jpg')} alt='4'/>
    </div>
    <div>
      <img className='carousel-img' src={require('../img/slide05.jpg')} alt='5'/>
    </div>
    <div>
      <img className='carousel-img' src={require('../img/slide06.jpg')} alt='6'/>
    </div>
    <div>
      <img className='carousel-img' src={require('../img/slide07.jpg')} alt='7'/>
    </div>
    <div>
      <img className='carousel-img' src={require('../img/slide08.jpg')} alt='8'/>
    </div>
  </Carousel>
  </CarouselContainer>
);
