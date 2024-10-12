"use client";

import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ScheduleFreeConsultation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("schedule-consultation");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      id="schedule-consultation"
      className="bg-gradient-to-r from-[#1a0b2e] to-[#2a133f] py-16"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center rounded-2xl px-8 bg-gradient-to-br from-[#3e1d72] to-[#5a2d9a] py-10 space-y-8 md:space-y-0 shadow-2xl">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Schedule a Free Consultation
          </h2>
          <p className="text-gray-300 text-lg">
            Unlock your digital potential with our expert guidance
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <motion.button
            className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCalendarAlt className="text-2xl" />
            GET FREE CONSULTATION
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ScheduleFreeConsultation;
