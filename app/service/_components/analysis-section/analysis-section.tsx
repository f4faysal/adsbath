export default function AnalysisSection() {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Could your Google Ads campaigns drive more profit into your
            business?
          </h1>
          <p className="text-gray-100">
            Grow My Ads uses 90-Day Growth Sprints to profitably accelerate your
            business and turn your account into a profit-generating machine. Our
            proven system and hands-on approach deliver results most companies
            can only dream of.
          </p>

          <p className="text-lg font-medium">
            Here’s how it works:{" "}
            <span className="inline-block ml-2 transform rotate-12 text-blue-400">
              ➤
            </span>
          </p>

          {/* Button */}
          <button className="mt-4 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md shadow hover:bg-yellow-300 transition-all">
            Get Your FREE Analysis
          </button>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side of Right Column */}
          <div className="space-y-8">
            <RightSection
              title="Solution-Driven Google Ad Results:"
              content="Increase conversions and ROI with our 90-Day Growth Sprints designed to reassess your Google Ad strategy every 90 days."
            />
            <RightSection
              title="Change What You Get to How You Benefit:"
              content="Grow My Ads continually tests, expands, and improves your Google Ads performance and ROI in 90-Day Growth Sprints that deliver the best results."
            />
            <RightSection
              title="Get Started Today:"
              content="Ready for a detailed analysis of your Google Ads account to pinpoint where you can get better results?"
            />
          </div>

          {/* Right Side of Right Column */}
          <div className="space-y-8">
            <RightSection
              title="Proven Track Record:"
              content="Using our proven framework, Google My Ads helps businesses increase lead generation and revenue growth by 3-10X."
            />
            <RightSection
              title="Dominate the Market"
              content={
                <>
                  Maximize the potential of{" "}
                  <a href="#" className="text-blue-400 underline">
                    Google search
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-400 underline">
                    Google shopping
                  </a>
                  , and display ads in 90 days or less.
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Right Section Component
function RightSection({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-100">{content}</p>
    </div>
  );
}
