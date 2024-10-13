export default function CTASection() {
  return (
    <section className="bg-yellow-400 py-4 px-8 flex items-center justify-center">
      <div className="flex items-center space-x-4">
        {/* Text */}
        <p className="text-lg font-semibold">
          Get started with a FREE 30-Minute Account Analysis!
        </p>

        {/* Arrow Icon */}
        <div className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10.293 6.293a1 1 0 011.414 0L16.414 11H3a1 1 0 000 2h13.414l-4.707 4.707a1 1 0 001.414 1.414l6-6a1 1 0 000-1.414l-6-6a1 1 0 00-1.414 1.414z" />
          </svg>
        </div>

        {/* Button */}
        <button className="px-6 py-3 bg-white text-black font-semibold border-2 border-black rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
          Schedule Your FREE Analysis
        </button>
      </div>
    </section>
  );
}
