/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Swipe from 'react-easy-swipe';
import './styles/index.css';

function Carousel({
  data,
  time,
  width,
  height,
  captionStyle,
  slideNumberStyle,
  radius,
  slideNumber,
  style,
  captionPosition,
  dots,
  automatic,
  pauseIconColor,
  pauseIconSize,
  slideBackgroundColor,
  slideImageFit,
  thumbnails,
  thumbnailWidth,
  showNavBtn = true
}) {
  // Initialize States
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [change, setChange] = useState(0);

  // Function to change slide
  const addSlide = (n) => {
    if (slide + n >= data.length) setSlide(0);
    else if (slide + n < 0) setSlide(data.length - 1);
    else setSlide(slide + n);
  };

  // Start the automatic change of slide
  useEffect(() => {
    if (automatic) {
      let index = slide;
      const interval = setInterval(() => {
        if (!isPaused) {
          setSlide(index);
          index++;
          if (index >= data.length) index = 0;
          if (index < 0) index = data.length - 1;
        }
      }, time || 2000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isPaused, change]);

  function scrollTo(el) {
    const elLeft = el.offsetLeft + el.offsetWidth;
    const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;

    // check if element not in view
    if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({ left: elLeft - elParentLeft, behavior: 'smooth' });
    } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({
        left: el.offsetLeft - el.parentNode.offsetLeft,
        behavior: 'smooth'
      });
    }
  }

  // Listens to slide state changes
  useEffect(() => {
    const slides = document.getElementsByClassName('carousel-item');
    const dots = document.getElementsByClassName('dot');

    const slideIndex = slide;
    let i;
    for (i = 0; i < data.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    // If thumbnails are enabled
    if (thumbnails) {
      const thumbnailsArray = document.getElementsByClassName('thumbnail');
      for (i = 0; i < thumbnailsArray.length; i++) {
        thumbnailsArray[i].className = thumbnailsArray[i].className.replace(
          ' active-thumbnail',
          ''
        );
      }
      if (thumbnailsArray[slideIndex] !== undefined)
        thumbnailsArray[slideIndex].className += ' active-thumbnail';
      scrollTo(document.getElementById(`thumbnail-${slideIndex}`));
    }

    if (slides[slideIndex] !== undefined) slides[slideIndex].style.display = 'block';
    if (dots[slideIndex] !== undefined) dots[slideIndex].className += ' active';
  }, [slide, isPaused]);

  return (
    <div style={style} className="box">
      <div
        style={{
          maxWidth: width || '600px',
          maxHeight: height || '400px'
        }}
      >
        <Swipe
          onSwipeRight={() => {
            addSlide(-1);
            setChange(!change);
          }}
          onSwipeLeft={() => {
            addSlide(1);
            setChange(!change);
          }}
        >
          <div
            className="carousel-container"
            style={{
              maxWidth: width || '600px',
              height: height || '400px',
              backgroundColor: slideBackgroundColor || 'darkgrey',
              borderRadius: radius
            }}
          >
            {data.map((item, index) => (
              <div
                className="carousel-item fade"
                style={{
                  maxWidth: width || '600px',
                  maxHeight: height || '400px'
                }}
                onMouseDown={(e) => {
                  automatic && setIsPaused(true);
                }}
                onMouseUp={(e) => {
                  automatic && setIsPaused(false);
                }}
                onMouseLeave={(e) => {
                  automatic && setIsPaused(false);
                }}
                onTouchStart={(e) => {
                  automatic && setIsPaused(true);
                }}
                onTouchEnd={(e) => {
                  automatic && setIsPaused(false);
                }}
                key={index}
              >
                {slideNumber && (
                  <div className="slide-number" style={slideNumberStyle}>
                    {index + 1} / {data.length}
                  </div>
                )}
                <img
                  src={item.image}
                  alt={item.caption}
                  className="carousel-image"
                  style={{
                    borderRadius: radius,
                    objectFit: slideImageFit || 'cover'
                  }}
                />
                {isPaused && (
                  <div
                    className="pause-icon pause"
                    style={{
                      color: pauseIconColor || 'white',
                      fontSize: pauseIconSize || '40px'
                    }}
                  >
                    II
                  </div>
                )}
                <div
                  className={`carousel-caption-${captionPosition || 'bottom'}`}
                  style={captionStyle}
                  dangerouslySetInnerHTML={{ __html: item.caption }}
                />
              </div>
            ))}

            {showNavBtn && (
              <a
                className="prev"
                onClick={(e) => {
                  addSlide(-1);
                  setChange(!change);
                }}
              >
                &#10094;
              </a>
            )}
            {showNavBtn && (
              <a
                className="next"
                onClick={(e) => {
                  addSlide(1);
                  setChange(!change);
                }}
              >
                &#10095;
              </a>
            )}
            {dots && (
              <div className="dots">
                {data.map((item, index) => (
                  <span
                    className="dot"
                    key={index}
                    onClick={(e) => {
                      setSlide(index);
                      setChange(!change);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </Swipe>
      </div>
      {thumbnails && (
        <div className="thumbnails" id="thumbnail-div" style={{ maxWidth: width }}>
          {data.map((item, index) => (
            <img
              width={thumbnailWidth || '100px'}
              src={item.image}
              alt={item.caption}
              className="thumbnail"
              id={`thumbnail-${index}`}
              key={index}
              onClick={(e) => {
                setSlide(index);
                setChange(!change);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;