import React from "react";
import Image from "next/image";
import AboutUsContent from "@/components/AboutUsContent";

const AboutUs = () => {
  return (
    <div className="bg-[#040710] text-white min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="/about-us-hero.png"
          alt="About Us Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl">Innovating for a Digital Future</p>
        </div>
      </section>
      <AboutUsContent />
    </div>
  );
};

export default AboutUs;
