
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface LoveReasonProps {
  title: string;
  description: string;
  index: number;
}

const LoveReason = ({ title, description, index }: LoveReasonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-xl p-6 h-full flex flex-col"
    >
      <div className="flex items-center mb-3">
        <Heart
          className="w-5 h-5 text-romance-500 mr-2 flex-shrink-0"
          fill="#ea384c"
        />
        <h3 className="text-xl font-bold text-romance-900">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
};

export default LoveReason;
