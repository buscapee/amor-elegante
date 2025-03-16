
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

  return (
    <div className={cn("relative mb-8", isLast ? "pb-0" : "pb-8")}>
      {/* Line */}
      {!isLast && (
        <div className="absolute left-1/2 transform -translate-x-1/2 border-r-2 border-dashed border-romance-200 h-full top-6 z-0" />
      )}

      {/* Circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-romance-100 border-2 border-romance-500 z-10" />

      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "glass-card rounded-xl overflow-hidden w-full md:w-5/12",
          isEven ? "md:ml-auto" : "md:mr-auto"
        )}
      >
        <div className="p-6">
          <span className="inline-block px-3 py-1 rounded-full bg-romance-100 text-romance-700 text-sm font-medium mb-3">
            {date}
          </span>
          <h3 className="text-xl font-bold text-romance-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover object-center"
          />
        )}
      </motion.div>
    </div>
  );
};

export default TimelineEvent;
