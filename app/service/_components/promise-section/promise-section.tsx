import { StarIcon } from "lucide-react";

export default function PromisesSection() {
  return (
    <section className="py-12 px-6 text-center">
      {/* Review Stars and Rating */}
      <div className="flex items-center justify-center space-x-1 mb-4">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
          ))}
        <span className="text-gray-500 text-sm">
          GrowMyAds has a 5 / 5 average rating from 29 reviews on Clutch.co
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto mb-6">
        Gone are the days of signing{" "}
        <span className="bg-yellow-200">along contract</span> with a Google Ads
        agency or freelancer and hoping they’ll deliver results.
      </h1>

      {/* Subheading */}
      <p className="text-gray-500 text-lg mb-8">Grow My Ads promises:</p>

      {/* Promises Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <PromiseCard icon="🎯" title="A Strategy Assessment Every 90 Days" />
        <PromiseCard icon="👨‍💼" title="A Dedicated Account Manager" />
        <PromiseCard icon="🚀" title="Exclusive Google Ads-Only Focus" />
      </div>
    </section>
  );
}

// Reusable PromiseCard Component
function PromiseCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
    </div>
  );
}
