"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCheck } from "react-icons/fa";
import { Briefcase, Train, TrendingUp, TriangleRightIcon } from "lucide-react";

const PricingFeature: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center mb-6">
    <FaCheck className="text-white mr-3" />
    <span>{text}</span>
  </li>
);
const PricingFeatureCircle: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center mb-6 gap-3">
    <div className="bg-white rounded-full p-1">
      <FaCheck className="text-black h-4 w-4 " />
    </div>
    <span>{text}</span>
  </li>
);

const PricingPage: React.FC = () => {
  return (
    <div className="bg-[#000000] text-white py-20">
      <div className="container mx-auto px-4 mt-8 sm:mt-16">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="bg-white rounded-[2px] p-1 text-black">
              <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6" />
            </span>
            <h2 className="text-xs sm:text-sm uppercase">Simple, Fair Pricing</h2>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            ROI Positive Investment
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            For Every Ad Budget
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Our pricing structure was calculated to ensure we pay for ourselves.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {/* Get Moving Plan */}
          <motion.div
            className="bg-[#1B1C1D] rounded-lg p-6 sm:p-12 flex flex-col w-full md:w-[40%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs sm:text-sm rounded-full px-3 py-1 inline-block mb-4 w-max border border-[#333435]">
              &lt; $10K MONTHLY SPEND
            </div>
            <h2 className="text-3xl sm:text-5xl font-extralight mb-4">Get Moving</h2>

            <div className="h-[1px] w-full bg-[#333435] my-4 sm:my-6"></div>
            <ul className="flex-grow mb-4 sm:mb-6">
              <PricingFeature text="Full Scope Ad Management" />
              <PricingFeature text="Complete Keyword Strategy" />
              <PricingFeature text="Detailed Weekly Reporting" />
              <PricingFeature text="Dedicated Account Team" />
              <PricingFeature text="No Long-Term Contract" />
            </ul>
            <div className="h-[1px] w-full bg-[#333435] my-4 sm:my-6"></div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                $2,000<span className="text-xs sm:text-sm font-normal"> / month</span>
              </div>
              <button className="bg-white text-black font-bold py-2 px-4 rounded w-full sm:w-auto">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Find Your Stride Plan */}
          <motion.div
            className="bg-[#0d0d0d] rounded-lg p-6 sm:p-12 flex flex-col w-full md:w-[60%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-700 text-xs sm:text-sm rounded-full px-3 py-1 inline-block mb-4 w-max">
              $10K+ MONTHLY SPEND
            </div>
            <h2 className="text-3xl sm:text-5xl font-extralight mb-4">Find Your Stride</h2>
            {/* separator */}
            <div className="h-[1px] w-full bg-[#333435] my-4 sm:my-6"></div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 flex-grow mb-4 sm:mb-6">
              <PricingFeatureCircle text="Unlimited Spend" />
              <PricingFeatureCircle text="ROAS Monitoring" />
              <PricingFeatureCircle text="Daily Spend Audits" />
              <PricingFeatureCircle text="Creative A/B Testing" />
              <PricingFeatureCircle text="Keyword Arbitrage™" />
              <PricingFeatureCircle text="Website Heatmaps" />
              <PricingFeatureCircle text="Competitor Analysis" />
              <PricingFeatureCircle text="Audience Insights" />
              <PricingFeatureCircle text="No Contract Lock-In" />
              <PricingFeatureCircle text="Smart Remarketing" />
            </ul>
            <div className="h-[1px] w-full bg-[#333435] my-4 sm:my-6"></div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                Custom<span className="text-xs sm:text-sm font-normal"> Spend Tiers</span>
              </div>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
                Schedule A Call
              </button>
            </div>
          </motion.div>
        </div>

        {/* Multiple Accounts CTA */}
        <motion.div
          className="mt-8 sm:mt-12 bg-blue-600 rounded-lg p-6 sm:p-12 flex flex-col md:flex-row justify-between items-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-4 md:mb-0">
            <span className="bg-[#e1ffa0] p-2 rounded-full mr-4">
              <FaBriefcase className="w-4 h-4 sm:w-6 sm:h-6 text-[#32735f]" />
            </span>
            <p className="text-2xl sm:text-4xl font-extralight">Multiple Accounts?</p>
          </div>

          <p className="text-xs sm:text-sm font-thin text-center md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 mb-4 md:mb-0">
            We actively support marketing agencies & holding companies.
          </p>

          <div>
            <motion.button
              className="bg-black text-white font-extralight py-2 sm:py-3 px-4 sm:px-6 rounded-sm shadow-lg transition-all duration-300 ease-in-out w-full sm:w-auto"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Work With Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
