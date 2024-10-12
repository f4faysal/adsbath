"use client";

import React, { useState } from "react";
import { slideDataArray } from "@/data/slideData";
import { motion, AnimatePresence } from "framer-motion";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

const CardCarouselMobile: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideDataArray.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slideDataArray.length) % slideDataArray.length
    );
  };

  return (
    <div className="md:hidden">
      <div className="relative w-full max-w-[300px] mx-auto ">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1E293B] rounded-lg overflow-hidden shadow-lg custom-border"
          >
            <motion.div
              className="relative h-[180px] overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="bg-cover bg-center w-full h-full"
                style={{
                  backgroundImage: `url(${slideDataArray[currentSlide].imageUrl})`,
                }}
              ></div>
            </motion.div>
            <div className="p-4 text-white">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold mb-2 text-center"
              >
                {slideDataArray[currentSlide].title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm mb-4 text-justify"
              >
                {slideDataArray[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-between"
              >
                <div className="text-center">
                  <p className="text-sm font-medium">Current Client</p>
                  <p className="text-lg font-bold">
                    {slideDataArray[currentSlide].currentClients}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">Total Project Complete</p>
                  <p className="text-lg font-bold">
                    {slideDataArray[currentSlide].totalProjects}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrevSlide}
          className="bg-[#2a0d34] text-white p-2 rounded-full shadow-lg"
        >
          <PiArrowLeft size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNextSlide}
          className="bg-[#2a0d34] text-white p-2 rounded-full shadow-lg"
        >
          <PiArrowRight size={24} />
        </motion.button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slideDataArray.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
            initial={{ scale: 1 }}
            animate={{ scale: index === currentSlide ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardCarouselMobile;
