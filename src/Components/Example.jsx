import React, { useState, useEffect } from 'react';

const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150"
];

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + direction;
        if (nextIndex >= images.length-4) {
          setDirection(-1);
          return prevIndex - 1;
        } else if (nextIndex < 0) {
          setDirection(1);
          return prevIndex + 1;
        }
        return nextIndex;
      });
    }, 500);
    return () => clearInterval(interval);
  }, [direction]);

  const handleChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex items-center">
      <div className="flex-1 text-left">
        <h2>Title</h2>
      </div>
      <div className="flex-3 overflow-hidden relative">
        <div className="flex transition-transform" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="w-1/4" style={{ marginRight: index === images.length - 1 ? '-75%' : 0 }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
