
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";

interface Image {
  src: string;
  alt: string;
  date?: string;
}

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(0);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  useEffect(() => {
    // Preload all images
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, [images]);

  // Positions for the scattered hearts
  const heartPositions = [
    { top: '5%', left: '5%', size: 12, rotate: '15deg', opacity: 0.7 },
    { top: '10%', right: '8%', size: 8, rotate: '-10deg', opacity: 0.5 },
    { bottom: '15%', left: '10%', size: 10, rotate: '5deg', opacity: 0.6 },
    { bottom: '8%', right: '12%', size: 14, rotate: '-8deg', opacity: 0.8 },
    { top: '40%', left: '2%', size: 9, rotate: '20deg', opacity: 0.65 },
  ];

  return (
    <div className="relative overflow-hidden rounded-lg shadow-md max-w-xl mx-auto border border-gray-300 newspaper-border bg-gray-100">
      {/* Newspaper Frame */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/old-paper.png')", opacity: 0.2 }}>
      </div>
      
      {/* Scattered Hearts */}
      {heartPositions.map((pos, idx) => (
        <Heart
          key={idx}
          className="absolute z-10 text-black"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
            width: pos.size,
            height: pos.size,
            transform: `rotate(${pos.rotate})`,
            opacity: pos.opacity,
            fill: "black"
          }}
        />
      ))}

      <div className="aspect-w-16 aspect-h-9 bg-gray-200 max-h-[250px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover filter grayscale contrast-125"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            onLoad={handleImageLoad}
          />
        </AnimatePresence>
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 backdrop-blur-sm text-white">
        <div className="flex justify-between items-center">
          <p className="text-xs">{images[currentIndex].alt}</p>
          {images[currentIndex].date && (
            <p className="text-xs text-white/80">
              {images[currentIndex].date}
            </p>
          )}
        </div>
      </div>

      {/* Navigation */}
      <button
        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-1 rounded-full transition-all"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <ArrowLeft className="w-3 h-3" />
      </button>
      <button
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-1 rounded-full transition-all"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ArrowRight className="w-3 h-3" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-1 pb-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-1 h-1 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
