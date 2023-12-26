import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

import slide1 from '../../../src/assets/img/1a459042-2795-4e80-a443-6dd6f04af18d.png';
import slide2 from '../../../src/assets/img/640bd914-f8d6-48da-88a5-3019f779a1fa.jpg';
import slide3 from '../../../src/assets/img/b1089d49-a597-472b-bcc4-4b1e29074c22.jpg';
import Header from '../Header/Header';

const items = [
  {
    src: slide1,
    alt: 'First slide',
    caption: (
      <p className='seoul-solo-service'>
        <span className='text-wrapper'>
          Seoul Solo Service
          <br />
        </span>
        <span className='span'>
          <br />
          <br />
          Recipe service
          <br />
          <br />
          Nearby service <br />
          <br />
          Policy service <br />
          <br />
          Community service
          <br />
          <br />
          S-chatting service
        </span>
      </p>
    ),
  },
  {
    src: slide2,
  },
  {
    src: slide3,
    alt: 'Third slide',
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

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img
        src={item.src}
        alt={item.alt}
      />
      <div
        className='carousel-caption d-none d-md-block'
        style={{
          // backgroundColor: 'rgba(0, 0, 0, 0.5)',
          fontSize: 'xx-large',
          bottom: '75%',
          right: '60%',
          transform: 'translateY(50%)',
        }}
      >
        {item.caption}
      </div>
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
