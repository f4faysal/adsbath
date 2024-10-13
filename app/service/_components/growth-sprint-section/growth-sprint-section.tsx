export default function GrowthSprintsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Our <span className="bg-yellow-700">90-Day Growth Sprints</span>{" "}
          typically include:
        </h1>

        {/* Two-Column Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mx-auto">
          <ChecklistItem text="Kickoff assessment" />
          <ChecklistItem text="PPC campaign expansion" />
          <ChecklistItem text="Updated Strategy" />
          <ChecklistItem text="Ongoing optimization" />
          <ChecklistItem text="Initial cleanup" />
          <ChecklistItem text="Monthly reporting" />
          <ChecklistItem text="Account Restructuring" />
          <ChecklistItem text="A roadmap review & update every 90 days." />
        </div>

        {/* Description Text */}
        <p className="text-gray-100">
          The bottom line? We’re committed to helping you understand exactly how
          much money you’re making for every dollar you invest in ad spend...and
          we love seeing your reaction as that number grows again and again!
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="#_"
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
          >
            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-yellow-100 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
            <span className="absolute inset-0 w-full h-full bg-yellow-400 rounded-md "></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-yellow-400 rounded-md opacity-0 group-hover:opacity-100 "></span>
            <span className="relative text-black transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
              Get Your FREE Analysis
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Reusable Checklist Item Component
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
      {/* Checklist Text */}
      <p className="text-lg text-gray-100">{text}</p>
    </div>
  );
}
