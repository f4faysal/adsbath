"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "../data/services";
import CaseStudyHeader from "./CaseStudyHeader";
import CaseStudyCard from "./CaseStudyCard";
import Pagination from "./Pagination";
import LoadingSpinner from "./LoadingSpinner";

const CaseStudy = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    controls.start("hidden").then(() => controls.start("visible"));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative py-7"
      >
        <CaseStudyHeader />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 30, transition: { duration: 0.5 } }}
            className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {currentServices.map((service) => (
              <CaseStudyCard
                key={service.id}
                {...service}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(services.length / servicesPerPage)}
          onPageChange={paginate}
        />

        <div className="background-blur-service absolute top-[20%] -right-[20%] z-0"></div>
        <div className="background-blur-service-2 absolute top-[20%] -left-[20%] z-0"></div>

        <div className="absolute top-[70%] left-0 z-0 overflow-hidden">
          <Image
            src="/service-vector.png"
            alt="section-image.png"
            height={1000}
            width={1000}
            className="object-contain w-[60%]"
          />
        </div>
        <div className="absolute top-[30%] right-0 z-0 overflow-hidden rotate-180">
          <Image
            src="/service-vector.png"
            alt="section-image.png"
            height={1000}
            width={1000}
            className="object-contain w-[60%]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudy;
