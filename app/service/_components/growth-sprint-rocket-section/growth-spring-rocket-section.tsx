import rocket from "@/assets/AdsBath/rocket.png";
import Image from "next/image";
export default function GrowthSprintsRocketSection() {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Title */}
        <h1 className="text-lg font-semibold uppercase tracking-wide text-gray-600">
          Heres how our
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          90-Day Growth Sprints Help Your Business Boom
        </h2>
      </div>

      {/* Rocket and Steps Layout */}
      <div className="relative max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-12">
          <StepItem
            stepNumber="1"
            title="Analysis"
            duration="Approx 1 Week"
            points={[
              "Identify issues in your strategy",
              "Ideas for improving ads",
              "Pinpoint wasted ad spend",
              "Suggestions for moving forward",
            ]}
          />
          <StepItem
            stepNumber="2"
            title="Roadmap + Kickoff"
            duration="Approx 1 Week"
            description="We’ll form a roadmap and share it during kickoff. You’ll get a clear picture of how we’ll execute strategies to grow your business."
          />
        </div>

        {/* Rocket Illustration */}
        <div className="flex justify-center items-center relative">
          <Image
            src={rocket}
            alt="Rocket Launch"
            className="w-40 md:w-10 h-auto"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-1 h-full bg-gray-300"></div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          <StepItem
            stepNumber="3"
            title="Execution"
            duration="30 Days"
            description="This is where the magic happens. We continuously optimize your ads and send detailed updates every 30 days."
          />
          <StepItem
            stepNumber="4"
            title="Re-Assess"
            duration="1 Week"
            description="We analyze the previous 90 days and create a new roadmap for the next sprint, refining strategies and improving performance."
          />
        </div>
      </div>
    </section>
  );
}

// StepItem Component
function StepItem({
  stepNumber,
  title,
  duration,
  points,
  description,
}: {
  stepNumber: string;
  title: string;
  duration: string;
  points?: string[];
  description?: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <span className="text-4xl font-extrabold text-blue-500">
          {stepNumber}
        </span>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{duration}</p>
        </div>
      </div>
      {points && (
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M20.285 5.707a1 1 0 01.03 1.412l-10 11a1 1 0 01-1.44.02l-5-5a1 1 0 011.41-1.42l4.3 4.29 9.29-10.29a1 1 0 011.41-.02z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-700">{point}</p>
            </li>
          ))}
        </ul>
      )}
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  );
}

