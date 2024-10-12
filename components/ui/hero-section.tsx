import Image from "next/image";
import { PiArrowCircleUpRight } from "react-icons/pi";

const HeroSection = () => {
  return (
    <section className="hero-bg lg:h-[870px] lg:-mt-[92px] ">
      <div className="container mx-auto h-full w-full flex items-center">
        <div className="flex flex-col md:flex-row flex-1 justify-between items-center py-10 lg:py-0">
          <div className="flex flex-col justify-center ">
            <div className="relative">
              <h1 className="text-3xl lg:text-6xl  ">
                <span className="hero-text ">Amazing Website</span> <br />
                <span className="hero-text ">Create with Bantu</span>{" "}
                <br className="hidden lg:block" />
                <span className="hero-text ">Agency</span>
              </h1>
              <span className="absolute top-32 left-14">
                <Image
                  src="/hero-vector.png"
                  alt="hero-vector"
                  width={200}
                  height={200}
                  className="h-7 w-24 hidden lg:flex "
                />
              </span>
            </div>

            <p className="text-md md:text-lg lg:py-8 py-3">
              help you to build website company this is modern. user friendly.
            </p>

            <button className="flex items-center gap-3 w-fit bg-white rounded-full py-3 px-6 text-black text-sm">
              <span>Get Started</span>
              <PiArrowCircleUpRight className="text-lg md:text-xl" />
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              height={1400}
              width={1400}
              src="/hero-section-image.png"
              alt="hero-section-image"
              className="w-[80%]  lg:w-[663px] lg:h-[646px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
