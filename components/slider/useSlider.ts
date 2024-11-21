"use client";
import { useState, useEffect } from "react";
import { images } from "./constants"; // Assuming images are stored here

export const useSlider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      clickNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return { activeImage, clickNext, clickPrev };
};
