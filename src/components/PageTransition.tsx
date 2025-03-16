
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  delay?: number;
}

const PageTransition = ({ children, delay = 0 }: PageTransitionProps) => {
  const pageVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={pageVariants}
      className="newspaper-section mb-16 md:mb-24"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
