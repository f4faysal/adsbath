import Image from "next/image";
import Analysis from "@/assets/AdsBath/analysis.png";

export default function AdvertisersSection() {
  return (
    <section className="py-16 px-6">
      <div className="w-[50%] mx-auto my-10">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug text-center">
          Are you one of the{" "}
          <span className="bg-yellow-200">90% of Google advertisers</span> who
          experiences these problems?
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Illustration */}
        <div className="flex justify-center">
          <Image
            src={Analysis}
            alt="Clock Illustration"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Right Column: Text and Checklist */}
        <div className="space-y-8">
          {/* Checklist Items */}
          <div className="space-y-6">
            <ChecklistItem text="Your Google Ads results are okay, but you want to see more conversions and ROI from your marketing spend." />
            <ChecklistItem text="You know Google’s platform has changed significantly over the last few years, and you’re struggling to stay up to date with the new features or avoid money traps that eat up your ad spend." />
            <ChecklistItem text="You used to be at the top of your market in PPC advertising, but competition is getting more aggressive, and you’ve seen your results start to drop." />
            <ChecklistItem text="You want to scale up and drive more conversions, but every time you try to spend, your ROI drops off and costs blow out." />
          </div>
        </div>
      </div>
      <div className="w-[50%] mx-auto mt-[5rem]">
        {/* Supporting Text */}
        <div className="space-y-4 text-gray-700">
          <p className="text-center">
            Grow My Ads has your back and will help you get the best possible
            results from your ad spend by re-evaluating your strategy every 3
            months with our 90-day Growth Sprints.
          </p>
          <p className="text-center">
            Over the past 5 years, we’ve helped 230+ businesses dramatically
            increase their conversions and ROI from their Google ads campaigns
            by revamping their paid media and marketing strategy.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-6 flex justify-center">
          <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-md shadow hover:bg-yellow-300 transition-all">
            Get Your FREE Analysis
          </button>
        </div>
      </div>
    </section>
  );
}

// Checklist Item Component
function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-start space-x-3">
      {/* Check Icon */}
      <div className="mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M20.285 5.707a1 1 0 01.03 1.412l-10 11a1 1 0 01-1.44.02l-5-5a1 1 0 011.41-1.42l4.3 4.29 9.29-10.29a1 1 0 011.41-.02z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {/* Text */}
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
