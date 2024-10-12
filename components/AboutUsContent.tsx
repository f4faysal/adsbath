"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutUsContent: React.FC = () => {
  return (
    <>
      {/* Brand Awareness Section */}
      <section className="bg-[#080c16] py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-56">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white text-center">
              Looking for better brand awareness?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
              You've come to the right place! At Tenlee Media, we are here to
              exceed your expectations.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
              Nothing more than satisfying our clients. Were a small team that
              truly cares about our clients and their success. We look to retain
              clients for long-term relationships – NOT to squeeze you dry and
              move on to the next. Our clients are our foundation, and we take
              their trust and business seriously. We put the utmost care into
              every campaign we create and project we take on.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
              We want to help you increase your profits and boost your presence
              online, so your business can flourish like never before. We will
              work tirelessly to give you the results that you deserve. We have
              years of experience, have worked with more industries than you
              could possibly think of, and have a fully transparent, no-B.S.
              approach to our work. Consider us your one-stop-shop for all of
              your digital marketing needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#000000] py-12 sm:py-16 md:py-20 relative">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/about-us-free-strategy-session.png')",
          }}
        />

        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white text-center">
            We are now offering free strategy sessions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 text-center">
            Learn what a free strategy session consists of
          </p>
          <div className="flex justify-center">
            <motion.button
              className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Free Strategy Session
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsContent;
