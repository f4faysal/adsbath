import ScheduleFreeConsultation from "./ui/schedule-a-free-consultation";
import OurMember from "./ui/our-member";
import CustomerReview from "./ui/customer-review";
import WhyChooseUs from "./ui/why-choose-us";
import dynamic from "next/dynamic";
import CaseStudy from "./CaseStudy";
import ServiceWeProvideForYou from "./ServiceWeProvideForYou";

const CardCarousel = dynamic(() => import("./card-carousel"), { ssr: false });

const TheService = () => {
  return (
    <section className="relative bg-[#0f1320] overflow-hidden">
      {/* The Service We ProvideFor You */}
      <ServiceWeProvideForYou />
      {/* Case Study */}
      <CaseStudy />
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
