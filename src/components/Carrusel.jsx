import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {/* Previous Button */}
      <button
        className="absolute inset-y-0 left-0 z-10 bg-black bg-opacity-25 text-white hover:text-gray-300 px-4 py-2"
        onClick={prevImage}
      >
        &#8249;
      </button>

      {/* Next Button */}
      <button
        className="absolute inset-y-0 right-0 z-10 bg-black bg-opacity-25 text-white hover:text-gray-300 px-4 py-2"
        onClick={nextImage}
      >
        &#8250;
      </button>

      <img
        className="w-full h-auto"
        src={images[currentImageIndex]}
        alt={`this ${currentImageIndex + 1}`}
      />
    </div>
  );
};

export default ImageCarousel;
