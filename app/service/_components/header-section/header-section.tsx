import Image from "next/image";
import astronaut from "@/assets/AdsBath/astronaut-rockstar.png";
import bgImage from "@/assets/AdsBath/Image.png";

export default function HeaderSection() {
  return (
    <header className="relative bg-black text-white overflow-hidden h-[100vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Space Background"
          layout="fill"
          // objectFit="contained"
          className="opacity-90 w-full"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 items-center ">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Finally...the <span className="text-yellow-400">Google Ads</span>{" "}
            agency you’ve been searching for.
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Get better results from your Google Ads account in 90 days with a
            team of PPC specialists 100% focused on making you more money using
            our proven 90-Day Growth Sprints.
          </p>
        </div>

        {/* Astronaut Image */}
        <div className="flex justify-center">
          <Image
            src={astronaut}
            alt="Astronaut with Guitar"
            width={500}
            height={500}
            className="animate-bounce h-[500px]"
          />
        </div>
      </div>
    </header>
  );
}
