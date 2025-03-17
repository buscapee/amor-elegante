
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  image?: string;
  index: number;
  isLast?: boolean;
}

const TimelineEvent = ({
  date,
  title,
  description,
  image,
  index,
  isLast = false,
}: TimelineEventProps) => {
  const isEven = index % 2 === 0;

  // Heart positions for decoration
  const heartPositions = [
    { top: '5%', right: isEven ? '90%' : '10%', size: 10, rotate: '10deg', opacity: 0.7 },
    { bottom: '8%', left: isEven ? '90%' : '10%', size: 8, rotate: '-5deg', opacity: 0.5 },
  ];

  return (
    <div className={cn("relative mb-6", isLast ? "pb-0" : "pb-6")}>
      {/* Line */}
      {!isLast && (
        <div className="absolute left-1/2 transform -translate-x-1/2 border-r-2 border-dashed border-gray-300 h-full top-6 z-0" />
      )}

      {/* Circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-gray-500 z-10" />

      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "newspaper-card rounded-lg overflow-hidden w-full md:w-5/12 relative", // Made width smaller (was 4/12)
          isEven ? "md:ml-auto" : "md:mr-auto"
        )}
      >
        {/* Newspaper texture overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-30"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/newspaper.png')`,
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Newspaper fold effect */}
        <div 
          className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-black/10 to-transparent z-1"
        />
        
        {/* Scattered Hearts */}
        {heartPositions.map((pos, idx) => (
          <Heart
            key={idx}
            className="absolute z-20 text-black"
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

        <div className="p-3 relative z-10">
          <span className="inline-block px-2 py-0.5 rounded-sm bg-gray-200 text-gray-800 text-xs font-medium mb-2 font-serif">
            {date}
          </span>
          <h3 className="text-base font-bold text-gray-900 mb-1 font-newspaper-headline">{title}</h3>
          <p className="text-gray-600 text-xs">{description}</p>
        </div>
        {image && (
          <div className="relative overflow-hidden h-24">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute inset-0 border border-gray-200 z-10"></div>
            <div className="absolute inset-0 shadow-inner z-10"></div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TimelineEvent;
