import { FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";

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
            <span className="self-center text-3xl lg:text-4xl font-semibold">
              AdsBath
            </span>
          </a>
          <div className="mt-4 text-center lg:text-left">
            <p className="my-2">Empowering your digital presence</p>
            <p className="my-2">with innovative solutions.</p>
            <div className="flex justify-center lg:justify-start gap-4 my-4 text-2xl">
              <FiTwitter className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors" />
              <FiInstagram className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors" />
              <FiYoutube className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-2/3">
          <div className="space-y-3">
            <h3 className="uppercase text-purple-300 font-semibold">
              Services
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-purple-300 transition-colors"
                >
                  Digital Strategy
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-purple-300 transition-colors"
                >
                  Content Planning
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-purple-300 transition-colors"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-purple-300 transition-colors"
                >
                  Website Design
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-purple-300 font-semibold">Company</h3>
            <ul className="space-y-1">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-purple-300 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-purple-300 transition-colors"
                >
                  Contact Info
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-purple-300 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-purple-300 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3 col-span-2 md:col-span-1">
            <h3 className="uppercase text-purple-300 font-semibold">
              Subscribe
            </h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                className="bg-white text-black border w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your email"
              />
              <button className="uppercase bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center lg:text-left">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0">
            <span>&copy; 2023 AdsBath. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-4">
            <a href="#" className="hover:text-purple-300 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
