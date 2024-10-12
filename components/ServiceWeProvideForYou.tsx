import React from 'react';
import dynamic from 'next/dynamic';
import { PiArrowCircleUpRight } from "react-icons/pi";

const CardCarousel = dynamic(() => import('./card-carousel'), { ssr: false });

const ServiceWeProvideForYou = () => {
  return (
    <div id="service">
      <div className="container mx-auto items-center justify-center flex flex-col">
        <h1 className="service-hading text-center lg:text-[60px] md:text-4xl text-2xl my-4">
          The Service We Provide
          <br className="md:hidden" />
          For You
        </h1>
        <p className="my-5 text-center text-sm sm:text-base md:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim
          non iusto cum nemo, magnam dolore reprehenderit? Nam praesentium
          voluptas suscipit, omnis aliquam earum minima! Perspiciatis nemo
          illo eaque maxime blanditiis necessitatibus, deserunt delectus
          quisquam rem
        </p>
      </div>

      <CardCarousel />

      <div className="flex justify-center my-7">
        <button className="bg-[#fff] lg:ml-0 ml-0 md:ml-52 w-64 sm:w-48 md:w-56 lg:w-64 xl:w-48 h-12 font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white my-4 flex items-center justify-center space-x-2">
          <span>View Details</span>
          <PiArrowCircleUpRight className="text-lg md:text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ServiceWeProvideForYou;