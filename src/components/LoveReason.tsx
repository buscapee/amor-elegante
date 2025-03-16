
import { motion } from "framer-motion";
import { Heart, Feather } from "lucide-react";

interface LoveReasonProps {
  title: string;
  description: string;
  index: number;
}

const LoveReason = ({ title, description, index }: LoveReasonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="newspaper-card rounded-sm p-6 h-full flex flex-col"
    >
      <div className="flex items-center mb-3 border-b border-gray-800/20 pb-2">
        <Feather
          className="w-5 h-5 text-gray-800 mr-2 flex-shrink-0"
        />
        <h3 className="text-xl font-bold font-serif text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-800 leading-relaxed flex-grow font-serif">{description}</p>
    </motion.div>
  );
};

export default LoveReason;
