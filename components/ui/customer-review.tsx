"use client";
import { BiUpArrowCircle } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CustomerReview: React.FC = () => {
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
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="container mx-auto text-white py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <motion.div className="flex flex-col justify-center lg:w-1/2" variants={itemVariants}>
          <motion.button
            className="h-10 w-36 uppercase bg-white text-purple-700 rounded-full mb-6 font-semibold hover:bg-purple-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Testimonial
          </motion.button>

          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight" variants={itemVariants}>
            Customer Review
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div className="bg-gradient-to-br from-purple-900 to-blue-900 p-6 rounded-xl shadow-lg" variants={itemVariants}>
              <p className="text-lg font-semibold mb-4">Total Reviews</p>
              <div className="flex items-center gap-4">
                <h3 className="text-4xl lg:text-5xl font-bold">122K</h3>
                <motion.button
                  className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>24%</span>
                  <BiUpArrowCircle className="text-xl" />
                </motion.button>
              </div>
              <p className="mt-4 text-sm text-gray-300">Pulvinar commodo arcu</p>
            </motion.div>

            <motion.div className="bg-gradient-to-br from-purple-900 to-blue-900 p-6 rounded-xl shadow-lg" variants={itemVariants}>
              <p className="text-lg font-semibold mb-4">Average Rating</p>
              <div className="flex items-center gap-2">
                <h3 className="text-4xl lg:text-5xl font-bold">4.8</h3>
                <div className="flex items-center gap-1">
                  {[...Array(4)].map((_, index) => (
                    <IoIosStar key={index} className="text-purple-400 text-xl" />
                  ))}
                  <FaStarHalfAlt className="text-purple-400 text-xl" />
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-300">Pulvinar commodo arcu</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="lg:w-1/2 flex justify-center" variants={itemVariants}>
          <Image
            src="https://via.placeholder.com/800x500"
            alt="Customer review logo"
            width={800}
            height={500}
            className="object-cover rounded-2xl shadow-lg w-full h-auto max-w-md lg:max-w-lg"
          />
        </motion.div>
      </div>

      <motion.div
        className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 mt-12 rounded-full"
        initial={{ scaleX: 0 }}
        animate={controls}
        variants={{
          visible: { scaleX: 1, transition: { duration: 1, delay: 0.5 } }
        }}
      ></motion.div>
    </motion.div>
  );
};

export default CustomerReview;
