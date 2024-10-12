"use client";
import { TbActivityHeartbeat } from "react-icons/tb";
import Waveform from "./waveform";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
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
        staggerChildren: 0.1,
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
      className="container mx-auto text-white relative pb-5"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="z-10">
        <div className="container flex flex-col lg:flex-row justify-around p-6 mx-auto sm:py-16 lg:py-24">
          <motion.div
            className="flex items-center justify-start w-full lg:w-fit relative z-10"
            variants={itemVariants}
          >
            <div className="relative w-full lg:w-auto">
              <Image
                src="https://via.placeholder.com/500"
                alt="logo"
                width={400}
                height={400}
                className="object-contain rounded-2xl w-full h-auto lg:w-[400px] lg:h-[400px]"
              />
              <motion.div
                className="h-32 lg:h-40 flex flex-col items-start justify-center aspect-square bg-[#E025CE] absolute p-3 lg:p-5 rounded-md -right-4 lg:-right-[80px] lg:top-[50%] -translate-y-[50%]  bottom-4 lg:bottom-auto gap-1 lg:gap-2"
                variants={itemVariants}
              >
                <Waveform className="p-1 lg:p-2 rounded-full bg-[#EE46BC] w-fit" />
                <h5 className="text-2xl lg:text-4xl font-bold">20K+</h5>
                <span className="text-[10px] lg:text-xs">Project Done</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col items-center lg:items-start"
            variants={itemVariants}
          >
            <motion.button
              className="h-7 w-36 bg-white rounded-3xl text-purple-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Why Choose Us
            </motion.button>

            <motion.h1
              className="lg:text-5xl md:text-3xl text-2xl font-semibold text-center lg:text-left mt-4 lg:mt-0"
              variants={itemVariants}
            >
              <span className="block py-3">Choose Us to Grow</span>
              <span className="block">Your Business</span>
            </motion.h1>

            <motion.div
              className="text-center lg:text-left mt-4"
              variants={itemVariants}
            >
              <p className="py-2">
                Placerat sed enim felis arcu. Placerat aliquam amet eleifend
              </p>
              <p className="">
                sollicitudin mauris. Nibh sit diam vitae velit cras elit eget.
              </p>
            </motion.div>

            <motion.div className="py-6" variants={itemVariants}>
              {[
                "Results-Driven Approach",
                "Tailored Solutions",
                "Proven Track Record",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="flex py-2 gap-3 items-center justify-start"
                  variants={itemVariants}
                >
                  <TbActivityHeartbeat className="bg-pink-500 h-8 w-8 rounded-full my-2 -mt-1" />
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.button
              className="uppercase h-10 w-32 lg:h-12 lg:w-40 rounded-lg bg-gradient-to-r from-blue-800 to-pink-600 text-white flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="why-choose-us-pink absolute -left-10 top-20 -z-0"
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
        }}
      />
      <motion.div
        className="why-choose-us-pale absolute right-0 top-0 -z-0"
        initial={{ opacity: 0, x: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
        }}
      />
    </motion.div>
  );
};

export default WhyChooseUs;
