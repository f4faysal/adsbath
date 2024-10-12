"use client";

import React, { useState, useCallback, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config, useSpring, animated } from "react-spring";
import { slideDataArray } from "@/data/slideData";

const CardCarousel: React.FC = () => {
  const [goToSlide, setGoToSlide] = useState<number>(0);
  const [offsetRadius] = useState<number>(2);
  const [enableSwipe] = useState<boolean>(true);
  const [animationConfig] = useState(config.gentle);

  const [props, set] = useSpring(() => ({
    opacity: 1,
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    set({ opacity: 1, scale: 1 });
    setClickedIndex(null);
  }, [goToSlide, set]);

  const slides = slideDataArray.map((slide, index) => ({
    key: index,
    content: (
      <animated.div
        style={clickedIndex === index ? { opacity: 1, scale: 1 } : props}
        className="h-fit w-[400px] custom-border rounded-sm p-4 text-white transition-all duration-300 hover:shadow-xl"
      >
        <div className="relative h-[220px] w-full overflow-hidden rounded-lg">
          <div
            className="bg-cover bg-center w-full h-full transition-transform duration-300 transform hover:scale-110"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          ></div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-center py-2">{slide.title}</h1>
          <p className="text-base text-justify pb-6">{slide.description}</p>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <h3 className="text-lg font-medium">Current Client</h3>
              <p className="text-lg font-bold">{slide.currentClients}</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg">Total Project Complete</h3>
              <p className="text-lg font-bold">{slide.totalProjects}</p>
            </div>
          </div>
        </div>
      </animated.div>
    ),
    onClick: () => {
      if (index !== goToSlide) {
        set({ opacity: 0, scale: 0.8 });
        setClickedIndex(index);
        setTimeout(() => setGoToSlide(index), 300);
      }
    },
  }));

  const handleTouchStart = useCallback(
    (evt: React.TouchEvent) => {
      if (!enableSwipe) return;
      const firstTouch = evt.touches[0];
      const { clientX: xDown, clientY: yDown } = firstTouch;
      (evt.currentTarget as HTMLElement).setAttribute(
        "data-xDown",
        xDown.toString()
      );
      (evt.currentTarget as HTMLElement).setAttribute(
        "data-yDown",
        yDown.toString()
      );
    },
    [enableSwipe]
  );

  const handleTouchMove = useCallback(
    (evt: React.TouchEvent) => {
      if (!enableSwipe) return;

      const xDown = parseFloat(
        (evt.currentTarget as HTMLElement).getAttribute("data-xDown") || "0"
      );
      const yDown = parseFloat(
        (evt.currentTarget as HTMLElement).getAttribute("data-yDown") || "0"
      );

      if (!xDown || !yDown) return;

      const xUp = evt.touches[0].clientX;
      const yUp = evt.touches[0].clientY;

      const xDiff = xDown - xUp;
      const yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          setGoToSlide((prev) => Math.min(prev + 1, slides.length - 1)); // left swipe
        } else {
          setGoToSlide((prev) => Math.max(prev - 1, 0)); // right swipe
        }
      }

      (evt.currentTarget as HTMLElement).removeAttribute("data-xDown");
      (evt.currentTarget as HTMLElement).removeAttribute("data-yDown");
    },
    [enableSwipe, slides.length]
  );

  return (
    <div
      className="container mx-auto md:w-3/4 h-[590px] m-0 hidden md:block"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={false}
        animationConfig={animationConfig}
      />
    </div>
  );
};

export default CardCarousel;
