"use client";
import { useEffect, useState, useRef } from "react";

const Background = () => {
  const images = ["/background1.jpg", "/background2.jpg", "/background3.jpg", "/background4.jpg", "/background5.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImageIndexRef = useRef(currentImageIndex);

  useEffect(() => {
    currentImageIndexRef.current = currentImageIndex;
  }, [currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      {images.map((imgSrc, index) => (
        <picture key={index} className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: index === currentImageIndex ? 1 : 0 }}>
          <img src={imgSrc} alt={`background${index}`} className="w-full h-full object-cover opacity-30" />
        </picture>
      ))}
    </div>
  );
};

export default Background;
