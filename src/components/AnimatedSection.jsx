// AnimatedSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation will trigger only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
