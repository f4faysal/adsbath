"use client";
import Image from "next/image";
import { PiArrowCircleUpRight } from "react-icons/pi";
import BgAnimationGradient from "../BgAnimationGradient";
import { motion } from "framer-motion";

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative lg:h-[870px] lg:-mt-[92px] overflow-hidden">
      {/* Animated Background Gradient */}
      <BgAnimationGradient />

      {/* Content Section */}
      <div className="container mx-auto h-full w-full flex items-center relative z-10">
        <motion.div
          className="flex flex-col md:flex-row flex-1 justify-between items-center py-10 lg:py-0"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.div
            className="flex flex-col justify-center mt-14 lg:mt-0"
            variants={fadeInUp}
          >
            <div className="relative">
              <motion.h1 className="text-3xl lg:text-6xl" variants={fadeInUp}>
                <motion.span className="hero-text" variants={fadeInUp}>
                  Amazing Website
                </motion.span>{" "}
                <br />
                <motion.span className="hero-text" variants={fadeInUp}>
                  Create with Bantu
                </motion.span>{" "}
                <br className="hidden lg:block" />
                <motion.span className="hero-text" variants={fadeInUp}>
                  Agency
                </motion.span>
              </motion.h1>
              <motion.span
                className="absolute top-32 left-14"
                variants={fadeInUp}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Image
                  src="/hero-vector.png"
                  alt="hero-vector"
                  width={200}
                  height={200}
                  className="h-7 w-24 hidden lg:flex"
                />
              </motion.span>
            </div>

            <motion.p
              className="text-md md:text-lg lg:py-8 py-3"
              variants={fadeInUp}
            >
              Help you to build a website company that is modern and
              user-friendly.
            </motion.p>

            <motion.button
              className="flex items-center gap-3 w-fit bg-white rounded-full py-3 px-6 text-black text-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <PiArrowCircleUpRight className="text-lg md:text-xl" />
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center"
            variants={fadeInUp}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              height={1400}
              width={1400}
              src="/hero-section-image.png"
              alt="hero-section-image"
              className="w-[80%] lg:w-[663px] lg:h-[646px] object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
