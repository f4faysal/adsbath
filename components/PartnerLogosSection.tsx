"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Mouse } from "lucide-react";
import RotatingText from "./RotatingText";
import PartnerLogo from "./PartnerLogo";
import { useInView } from "react-intersection-observer";

const partnerLogos = [
  { src: "/shopify-grayscale.png", alt: "Cole Haan" },
  { src: "/shopify-grayscale.png", alt: "Expedia" },
  { src: "/shopify-grayscale.png", alt: "Levi's" },
  { src: "/shopify-grayscale.png", alt: "Time Magazine" },
  { src: "/shopify-grayscale.png", alt: "Shopify" },
  { src: "/shopify-grayscale.png", alt: "Medium" },
];

const PartnerLogosSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative w-full partner-bg-gradient overflow-hidden flex flex-col items-center justify-center py-10">
      <motion.div
        ref={ref}
        className="flex justify-center space-x-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {partnerLogos.slice(0, 3).map((logo, index) => (
          <motion.div key={index} variants={itemVariants}>
            <PartnerLogo src={logo.src} alt={logo.alt} />
          </motion.div>
        ))}

        {/* Rotating Circular Text with Mouse Icon */}
        <motion.div className="relative w-32 h-32" variants={itemVariants}>
          <RotatingText />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Mouse className="w-8 h-8 text-white animate-bounce" />
          </motion.div>
        </motion.div>

        {partnerLogos.slice(3, 6).map((logo, index) => (
          <motion.div key={index + 3} variants={itemVariants}>
            <PartnerLogo src={logo.src} alt={logo.alt} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnerLogosSection;
