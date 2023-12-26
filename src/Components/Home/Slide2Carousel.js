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

const slide2Items = [
  {
    src: 'path/to/your/small/image1.jpg',
    alt: 'Small image 1',
  },
  {
    src: 'path/to/your/small/image2.jpg',
    alt: 'Small image 2',
  },
  {
    src: 'path/to/your/small/image3.jpg',
    alt: 'Small image 3',
  },
];

function Slide2Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === slide2Items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? slide2Items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = slide2Items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img
        src={item.src}
        alt={item.alt}
      />
    </CarouselItem>
  ));

  const items = [
    {
      src: slide1,
      alt: 'First slide',
      caption: 'Seoul Solo Service',
    },
    {
      src: slide2,
      alt: 'Second slide',
      caption: <Slide2Carousel />,
    },
    {
      src: slide3,
      alt: 'Third slide',
      caption: '',
    },
  ];

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
    >
      <CarouselIndicators
        items={slide2Items}
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
  );
}

export default Slide2Carousel;
