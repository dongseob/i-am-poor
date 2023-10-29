"use client";
import { useEffect, useState } from "react";

const Main = () => {
  const images = ["/background1.jpg", "/background2.jpg", "/background3.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('background')
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <picture>
        <img
          src={images[currentImageIndex]}
          alt={`background${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </picture>
    </div>
  );
};

export default Main;
