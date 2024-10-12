"use client";

import React from "react";
import dynamic from "next/dynamic";
import { PiArrowCircleUpRight } from "react-icons/pi";
import { motion } from "framer-motion";
import CardCarouselMobile from "./card-carousel-mobile";

const CardCarousel = dynamic(() => import("./card-carousel"), { ssr: false });

const ServiceWeProvideForYou = () => {
  return (
    <motion.div
      id="service"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-14"
    >
      <div className="container mx-auto items-center justify-center flex flex-col">
        <motion.h1
          className="service-hading text-center lg:text-[60px] md:text-[40px] text-3xl my-4 leading-tight sm:leading-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-2xl sm:text-3xl md:text-[40px] lg:text-[60px]">
            The Service We Provide
            <br className="md:hidden" />
            For You
          </span>
        </motion.h1>

        <motion.p
          className="my-5 text-center text-sm sm:text-base md:w-3/4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Your business is unique, and so are your marketing needs. We
          understand that every business is different, and we tailor our
          services to meet your specific requirements.
        </motion.p>
      </div>

      <CardCarousel />
      <CardCarouselMobile />
    </motion.div>
  );
};

export default ServiceWeProvideForYou;
