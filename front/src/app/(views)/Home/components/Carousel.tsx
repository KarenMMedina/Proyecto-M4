"use client";
import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

const images = [
  '/imagen-cinco.jpg',
  '/imagen-cuatro.jpg',
  '/imagen-tres.jpg',
  '/imagen-dos.jpg',
  '/imagen-uno.jpg',
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-96 border rounded-2xl overflow-hidden relative">
      {images.map((src, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.activeSlide : ''}`}
        >
          <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
        </div>
      ))}

      <button onClick={prevSlide} className={`${styles.controls} ${styles.left}`}>
        ‹
      </button>
      <button onClick={nextSlide} className={`${styles.controls} ${styles.right}`}>
        ›
      </button>

      <div className={styles.indicators}>
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;