"use client";

import React, { useState } from "react";
import { IoIosArrowForward, IoIosStar } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const OurMember = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Join this fitness member, the best choice that I've made. They're very professional and give you suggestions about what food and nutrition you can eat.",
      name: "Jonathan Edward",
      job: "Office Worker",
      image: "https://via.placeholder.com/50",
    },
    {
      text: "আমি এই ফিটনেস সদস্যতা নিয়ে খুবই সন্তুষ্ট। তারা আমাকে স্বাস্থ্যকর জীবনযাপনের জন্য অনেক মূল্যবান পরামর্শ দিয়েছে।",
      name: "সায়মা আহমেদ",
      job: "শিক্ষক",
      image: "https://via.placeholder.com/50",
    },
    {
      text: "The trainers here are exceptional. They've helped me achieve fitness goals I never thought possible.",
      name: "Emily Chen",
      job: "Software Engineer",
      image: "https://via.placeholder.com/50",
    },
    {
      text: "এই জিমের পরিবেশ খুবই উৎসাহব্যঞ্জক। আমি প্রতিদিন অনুপ্রাণিত হয়ে এখানে আসি।",
      name: "রাফি হাসান",
      job: "ব্যবসায়ী",
      image: "https://via.placeholder.com/50",
    },
    {
      text: "I've seen incredible results since joining. The personalized workout plans are game-changers!",
      name: "Michael Johnson",
      job: "Marketing Executive",
      image: "https://via.placeholder.com/50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <motion.div
      className="text-white py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-6">
        {/* Left Section */}
        <motion.div
          className="flex flex-col items-start lg:w-1/2 p-6 mb-8 lg:mb-0"
          variants={itemVariants}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            What Our Members Say About Us?
          </h2>
          <div className="flex items-center">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <Image
                  key={index}
                  src={testimonial.image}
                  alt={`Customer ${index + 1}`}
                  width={48}
                  height={48}
                  className="border-2 border-white rounded-full"
                />
              ))}
            </div>
            <p className="ml-4 text-sm">10K+ Satisfied Customers</p>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="bg-gradient-to-br from-[#2c1053] to-[#1c0a3b] text-white rounded-lg shadow-lg p-8 max-w-lg mx-auto lg:w-1/2 h-[350px] overflow-y-auto required:"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars Section */}
              <div className="flex justify-end mb-4">
                {[...Array(5)].map((_, index) => (
                  <IoIosStar key={index} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg italic mb-6">
                {testimonials[currentIndex].text}
              </p>

              {/* User Info */}
              <div className="flex items-center mb-4">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="font-bold">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonials[currentIndex].job}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation and Indicators */}
          <div className="flex justify-between items-center absolute bottom-10 gap-4 right-10">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`block w-2 h-2 ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-500"
                  } rounded-full`}
                ></span>
              ))}
            </div>
            <motion.button
              className="bg-white text-blue-600 p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
            >
              <IoIosArrowForward className="text-xl" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurMember;
