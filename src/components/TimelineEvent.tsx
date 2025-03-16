
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
          "newspaper-card rounded-lg overflow-hidden w-full md:w-4/12 relative",
          isEven ? "md:ml-auto" : "md:mr-auto"
        )}
      >
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

        <div className="p-4">
          <span className="inline-block px-2 py-0.5 rounded-sm bg-gray-200 text-gray-800 text-xs font-medium mb-2">
            {date}
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-1 font-newspaper-headline">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        {image && (
          <div className="relative overflow-hidden h-32">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TimelineEvent;
