import React from "react";
import { motion } from "framer-motion";

const RotatingText: React.FC = () => {
  return (
    <motion.div
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="curve"
          d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
          fill="transparent"
        />
        <text className="text-xs fill-white">
          <textPath xlinkHref="#curve">
            Scroll Down • Scroll Down • Scroll Down •
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
};

export default RotatingText;
