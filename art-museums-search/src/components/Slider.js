import React, { useState, useEffect, useRef } from 'react';
import classes from './Slider.module.css';

const slides = [
  {
    id: 1,
    title: 'City 1',
    bgImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--1-min-min.jpg'
  },
  {
    id: 2,
    title: 'City 2',
    bgImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--2-min-min.jpg'
  },
  {
    id: 3,
    title: 'City 3',
    bgImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--3-min-min.jpg'
  },
  {
    id: 4,
    title: 'City 4',
    bgImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--4-min-min.jpg'
  },
  {
    id: 5,
    title: 'City 5',
    bgImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--5-min-min.jpg'
  },
];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener('transitionend', () => {
      setAnimating(false);
    });
  }, []);

  const handleSlideChange = (index) => {
    if (!animating && index !== activeSlide) {
      setAnimating(true);
      setActiveSlide(index);
    }
  };

  return (
    <div className={classes.cont}>
      <div className={`${classes.slider} ${animating ? classes.animation : ''}`} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${classes.slide} ${classes[`slide--${index + 1}`]} ${activeSlide === index ? classes.active : ''}`}
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
            }}
          >
            <div
              className={classes.slide__darkbg}
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            ></div>
            <div className={classes.slide__textWrapper}>
              <div className={classes.slide__letter} style={{ backgroundImage: `url(${slide.bgImage})` }}>
                {slide.title.charAt(0)}
              </div>
              <div className={classes.slide__text}>{slide.title}</div>
            </div>
          </div>
        ))}
      </div>
      <ul className={classes.nav}>
        {slides.map((slide, index) => (
          <li
            key={slide.id}
            className={`${classes.nav__slide} ${activeSlide === index ? classes.navActive : ''}`}
            onClick={() => handleSlideChange(index)}
          ></li>
        ))}
      </ul>
      <div
        className={`${classes.sideNav} ${classes.sideNavLeft}`}
        onClick={() => handleSlideChange((activeSlide - 1 + slides.length) % slides.length)}
      ></div>
      <div
        className={`${classes.sideNav} ${classes.sideNavRight}`}
        onClick={() => handleSlideChange((activeSlide + 1) % slides.length)}
      ></div>
    </div>
  );
};

export default Slider;
