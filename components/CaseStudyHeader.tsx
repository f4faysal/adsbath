import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const CaseStudyHeader = () => (
  <div className="container mx-auto items-center justify-center flex flex-col">
    <motion.h1
      variants={itemVariants}
      className="service-hading text-center lg:text-[60px] md:text-4xl text-2xl my-4"
    >
      Case Study for Digital Dominance
    </motion.h1>
    <motion.p
      variants={itemVariants}
      className="pb-10 text-center text-sm md:text-xl md:w-3/4"
    >
      Explore our successful projects and see how we can help your brand
      thrive in the digital landscape.
    </motion.p>
  </div>
);

export default CaseStudyHeader;
