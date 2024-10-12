import React from "react";
import { IoIosArrowForward, IoIosStar } from "react-icons/io";

const OurMember = () => {
  return (
    <div className="text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-6">
        {/* Left Section */}
        <div className="flex flex-col items-start lg:w-1/2 p-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            What Our Member Say About Us?
          </h2>
          <div className="flex items-center">
            <div className="flex -space-x-3">
              <img
                src="https://via.placeholder.com/50"
                alt="Customer 1"
                className="w-12 h-12 border-2 border-white rounded-full"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Customer 2"
                className="w-12 h-12 border-2 border-white rounded-full"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Customer 3"
                className="w-12 h-12 border-2 border-white rounded-full"
              />
            </div>
            <p className="ml-4 text-sm">10K+ Satisfied Customers</p>
          </div>
        </div>

        {/* Right Section */}
        {/* <div className="lg:w-1/2 p-6 bg-[#1c1c1c] rounded-lg shadow-lg relative">
          <p className="text-lg italic mb-4">
            Join this fitness member, the best choice that I&apos;ve made.
            They&apos;re very professional and give you suggestions about what
            food and nutrition that you can eat.
          </p>
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <img
                src="https://via.placeholder.com/50"
                alt="Jonathan Edward"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="ml-4">
              <p className="font-bold">Jonathan Edward</p>
              <p className="text-sm text-gray-400">Office Worker</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              <IoIosStar className="text-yellow-400 text-xl" />
              <IoIosStar className="text-yellow-400 text-xl" />
              <IoIosStar className="text-yellow-400 text-xl" />
              <IoIosStar className="text-yellow-400 text-xl" />
              <IoIosStar className="text-yellow-400 text-xl" />
            </div>
            <button className="bg-blue-600 text-white p-2 rounded-full">
              <IoIosArrowForward className="text-xl" />
            </button>
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <span className="block w-2 h-2 bg-blue-600 rounded-full"></span>
            <span className="block w-2 h-2 bg-gray-500 rounded-full"></span>
            <span className="block w-2 h-2 bg-gray-500 rounded-full"></span>
          </div>
        </div> */}
        <div className="bg-[#2c1053] text-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
          {/* Stars Section */}
          <div className="flex justify-end mb-4">
            <IoIosStar className="text-yellow-400 text-xl" />
            <IoIosStar className="text-yellow-400 text-xl" />
            <IoIosStar className="text-yellow-400 text-xl" />
            <IoIosStar className="text-yellow-400 text-xl" />
            <IoIosStar className="text-yellow-400 text-xl" />
          </div>

          {/* Testimonial Text */}
          <p className="text-lg italic mb-6">
            Join this fitness member, the best choice that Ive made. Theyre very
            professional and give you suggestions about what food and nutrition
            you can eat.
          </p>

          {/* User Info */}
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Jonathan Edward"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <p className="font-bold">Jonathan Edward</p>
              <p className="text-sm text-gray-400">Office Worker</p>
            </div>
          </div>

          {/* Navigation and Indicators */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <span className="block w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-500 rounded-full"></span>
            </div>
            <button className="bg-white text-blue-600 p-2 rounded-full">
              <IoIosArrowForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMember;
