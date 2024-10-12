import { TbActivityHeartbeat } from "react-icons/tb";
import Waveform from "./waveform";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto text-white relative pb-5">
      <div className=" z-10">
        <div className="container flex flex-col lg:flex-row justify-around p-6 mx-auto sm:py-16 lg:py-24">
          <div className="flex items-center justify-start w-fit relative z-10 ">
            <img
              src="https://via.placeholder.com/500"
              alt="logo"
              className="object-contain h-[400px] aspect-square rounded-2xl"
            />
            <div className="h-40 flex flex-col  items-start justify-center aspect-square bg-[#E025CE] absolute p-5 rounded-md -right-[80px] gap-2">
              <Waveform className="p-2 rounded-full bg-[#EE46BC] w-fit " />
              <h5 className="text-4xl font-bold">20K+</h5>
              <span className="text-xs">Project Done</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center lg:items-start">
            <button className="h-7 w-36 bg-white rounded-3xl text-purple-700">
              Why Choose Us
            </button>

            <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold text-center lg:text-left mt-4 lg:mt-0">
              <span className="block py-3">Choose Us to Grow</span>
              <span className="block ">Your Business</span>
            </h1>

            <div className="text-center lg:text-left mt-4">
              <p className="py-2">
                Placerat sed enim felis arcu. Placerat aliquam amet eleifend
              </p>
              <p className="">
                sollicitudin mauris. Nibh sit diam vitae velit cras elit eget.
              </p>
            </div>

            <div className="py-6">
              {[
                "Results-Driven Approach",
                "Tailored Solutions",
                "Proven Track Record",
              ].map((text, index) => (
                <p
                  key={index}
                  className="flex py-2 gap-3 items-center justify-center lg:justify-start"
                >
                  <TbActivityHeartbeat className="bg-pink-500 h-8 w-8 rounded-full my-2 -mt-1" />
                  {text}
                </p>
              ))}
            </div>

            <button className="uppercase h-10 w-32 lg:h-12 lg:w-40 rounded-lg bg-gradient-to-r from-blue-800 to-pink-600 text-white flex items-center justify-center">
              Contact Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full border-b-2 py-5 z-10">
        {Array(5).map((_, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="w-10 h-10 bg-[#E025CE] rounded-full" />
          </div>
        ))}
      </div>

      <div className="why-choose-us-pink absolute -left-10 top-20 -z-0" />
      <div className="why-choose-us-pale absolute right-0 top-0 -z-0" />
    </div>
  );
};

export default WhyChooseUs;
