import Image from "next/image";
import { PiArrowCircleUpRight } from "react-icons/pi";
import { services } from "@/lib/data";
// import CardCarousel from "../card-carousel";
import ScheduleFreeConsultation from "./schedule-a-free-consultation";
import OurMember from "./our-member";
import CustomerReview from "./customer-review";
import WhyChooseUs from "./why-choose-us";
import dynamic from "next/dynamic";

const CardCarousel = dynamic(() => import("../card-carousel"), { ssr: false });

const TheService = () => {
  return (
    <section className="relative bg-[#0f1320] overflow-hidden">
      {/* The Service We ProvideFor You */}
      <div id="service">
        {/* Title  */}
        <div className="container mx-auto items-center justify-center flex flex-col">
          <h1 className="service-hading text-center lg:text-[60px] md:text-4xl text-2xl my-4">
            The Service We Provide
            <br className="md:hidden" />
            For You
          </h1>
          <p className="my-5 text-center text-sm sm:text-base   md:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim
            non iusto cum nemo, magnam dolore reprehenderit? Nam praesentium
            voluptas suscipit, omnis aliquam earum minima! Perspiciatis nemo
            illo eaque maxime blanditiis necessitatibus, deserunt delectus
            quisquam rem
          </p>
        </div>

        <CardCarousel />

        <div className="flex justify-center my-7">
          <button className="bg-[#fff] lg:ml-0  ml-0 md:ml-52 w-64 sm:w-48 md:w-56 lg:w-64 xl:w-48 h-12 font-semibold rounded-full  bg-gradient-to-r from-blue-600 to-purple-600 text-white my-4 flex items-center justify-center space-x-2">
            <span>View Details</span>
            <PiArrowCircleUpRight className="text-lg md:text-xl" />
          </button>
        </div>
        {/*  */}
      </div>

      {/* Behind the Scenes: Our Process
for Digital Dominance */}
      <div className="relative pb-7">
        <div className="container mx-auto items-center justify-center flex flex-col">
          <h1 className="service-hading text-center lg:text-[60px] md:text-4xl text-2xl my-4">
            Behind the Scenes: Our Process <br className="hidden md:block" />
            for Digital Dominance
          </h1>
          <p className="my-5 text-center text-sm sm:text-base md:w-3/4">
            At [Agency Name], we specialize in meticulous digital marketing. By
            understanding your goals and exploring your brand and audience, we
            create tailored strategies integrating SEO, PPC, and cutting-edge
            techniques. Our transparent communication and measurable results
            ensure every step aligns with your vision. Choose [Agency Name] for
            a strategic partnership driving impactful growth.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                boxShadow: "1px 1px 10.9px 5px rgba(86, 86, 86, 0.20)",
              }}
              className="w-full rounded-2xl bg-[#100C1D] p-8   z-10"
            >
              <Image
                width={1000}
                height={1000}
                className="h-[253px] w-full rounded-lg object-cover"
                src={service.url}
                alt={service.name}
              />

              <h1
                className="text-lg  font-bold pt-4"
                style={{ alignSelf: "stretch" }}
              >
                {service.name}
              </h1>
            </div>
          ))}
        </div>

        <div className="background-blur-service absolute top-[20%] -right-[20%] z-0"></div>
        <div className="background-blur-service-2 absolute top-[20%] -left-[20%] z-0"></div>

        <div className="absolute top-[70%] left-0 z-0 overflow-hidden">
          <Image
            src="/service-vector.png"
            alt="section-image.png"
            height={1000}
            width={1000}
            className="object-contain w-[60%] "
          />
        </div>
        <div className="absolute top-[30%] right-0 z-0 overflow-hidden rotate-180">
          <Image
            src="/service-vector.png"
            alt="section-image.png"
            height={1000}
            width={1000}
            className="object-contain w-[60%] "
          />
        </div>
      </div>

      {/* WhyChooseUs */}
      <WhyChooseUs />
      {/* Customer Review */}
      <CustomerReview />
      {/* What Our Member Say About Us? */}
      <OurMember />
      {/* Our Member */}
      <ScheduleFreeConsultation />
    </section>
  );
};

export default TheService;
