import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="px-4 divide-y divide-[#3E1C96] footer-gradient text-white">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <span className="self-center lg:text-4xl text-3xl font-semibold">
              AdsBath
            </span>
          </a>
          <div>
            <p className="my-2">Tempus congue tellus semper sapien </p>
            <p className="my-2">urna. Tellus posuere ut.</p>
            <div className="flex gap-3 my-2 text-2xl">
              <p>
                <FiTwitter className="text-purple-600" />
              </p>
              <p>
                <FaInstagram className="text-purple-600" />
              </p>
              <p>
                <CiYoutube className="text-purple-600" />
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 ml-0 lg:ml-56 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">services</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Digital Strategy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Content Planing
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Graphic Design
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Website Design
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">company</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Contact Info
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Our service
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="text-white uppercase">subscribe</div>
            <div className="flex justify-start space-x-3">
              <input
                type="text"
                className="bg-white text-black border lg:w-full w-28 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter text here"
              />
            </div>
            <button className="uppercase bg-purple-900 text-white h-11 rounded-md w-full">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between py-10 mx-4 lg:mx-56 text-sx">
        <div className="flex flex-col lg:flex-row gap-4 mb-4 lg:mb-0">
          <span>Copyright © 2023 AdsBath</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <span className="border-r pr-2 border-[#3E1C96]">Term of use</span>
          <span className="border-r pr-2 border-[#3E1C96]">Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
