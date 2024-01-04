import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import slide1 from '../../../src/assets/img/main1.jpg';
import slide2 from '../../../src/assets/img/main2.jpg';
import slide3 from '../../../src/assets/img/main5.jpg';
import Header from '../Header/Header';
import './Home.scss';
import SlideSlick from './SlideSlick';
import SlideSlick2 from './SlideSlick2';
import SlideSlick3 from './SlideSlick3';

const items = [
  {
    src: slide1,
    alt: '',
    caption: (
      <p className='seoul-solo-service'>
        <span className='text-wrapper'>
          <h1 className='text-title'>1NTERFACE</h1>
        </span>
        <span className='span'>
          <h3 className='text-content1'>외로움 없는 나, 소외감 없는 너</h3>
          <h3 className='text-content2'>안전한 우리, 행복한 1인가구</h3>
          <h3 className='text-content3'>
            다양한 정보를 통해 소소한 행복을 찾아보세요
          </h3>
        </span>
      </p>
    ),
  },

  {
    src: slide2,
  },
  {
    src: slide3,
    alt: '',
    caption: '',
  },
];
function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item, i) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
      className='carousel-main'
    >
      <div
        className='Home-img'
        style={{ width: '100%', height: '100%' }}
      >
        <img
          className='Home-minImg'
          style={{ width: '1930px', height: '945px' }}
          src={item.src}
          alt={item.alt}
        />
      </div>
      <div
        className='carousel-caption d-none d-md-block animated-text fadeIn'
        style={{
          fontSize: 'xx-large',
          bottom: '65%',
          right: '60%',
          transform: 'translateY(50%)',
        }}
      >
        {item.caption}
      </div>
      {i === 1 ? (
        <div
          className='carousel-caption d-none d-md-block'
          style={{
            position: 'absolute',
            bottom: '50%',
            right: '75%',
            transform: 'translateX(50%) translateY(-50%)',
          }}
        >
          <SlideSlick />
        </div>
      ) : (
        item.alt
      )}
      {i === 2 ? (
        <div
          className='carousel-caption d-none d-md-block'
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '75%',
            transform: 'translateX(50%) translateY(-50%)',
            // marginBottom: '50px',
            // marginTop: '50px',
          }}
        >
          <SlideSlick2 />
          <div
            className='carousel-caption d-none d-md-block'
            style={{
              position: 'absolute',
              // bottom: '100%',
              right: '75%',
              transform: 'translateX(50%) translateY(-50%)',
              marginBottom: '50px',
            }}
          ></div>

          <SlideSlick3 />
        </div>
      ) : (
        item.alt
      )}
    </CarouselItem>
  ));
  return (
    <>
      <Header
        styleHeader={{
          position: 'absolute',
          width: '100%',
          zIndex: '100',
        }}
        styleBackground={{ backgroundColor: 'transparent' }}
        styleWhite={true}
      />
      <div
        className='qqq'
        style={{ transform: '500ms' }}
      >
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          interval={false}
          className='carousel-main'
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction='prev'
            directionText='Previous'
            onClickHandler={previous}
          />
          <CarouselControl
            direction='next'
            directionText='Next'
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </>
  );
}
export default Home;
