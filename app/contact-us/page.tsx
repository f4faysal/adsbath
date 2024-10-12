"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-[#0f1320] min-h-screen text-white py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Contact Us
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <motion.div
            className="w-full md:w-1/2 bg-[#1a1f2e] rounded-lg p-8"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#0f1320] rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#0f1320] rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-[#0f1320] rounded px-3 py-2"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 bg-[#1a1f2e] rounded-lg p-8"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="mr-4 text-2xl text-indigo-500" />
                <p>info@adsbath.com</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-4 text-2xl text-indigo-500" />
                <p>+880 1234-567890</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-4 text-2xl text-indigo-500" />
                <p>123 Digital Street, Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
