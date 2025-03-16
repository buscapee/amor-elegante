
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl max-w-4xl mx-auto">
      <div className="aspect-w-16 aspect-h-9 md:aspect-h-10 bg-gray-100">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
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
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm text-white">
        <div className="flex justify-between items-center">
          <p className="text-sm md:text-base">{images[currentIndex].alt}</p>
          {images[currentIndex].date && (
            <p className="text-xs md:text-sm text-white/80">
              {images[currentIndex].date}
            </p>
          )}
        </div>
      </div>

      {/* Navigation */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-all"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-all"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2 pb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white scale-125"
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
