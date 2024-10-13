import { CheckCircleIcon } from "lucide-react";

export default function OpportunitiesSection() {
  const opportunities = [
    'Utilize previous data to build out strong audiences',
    'Super niche means opportunity to capture very interested customers',
    'Lack of social media ads’ use means we can test out new audiences',
  ];

  return (
    <section className="bg-white text-black rounded-md py-12 px-8 md:px-16 flex justify-between items-center h-full container">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Key Opportunities</h2>
      <ul className="space-y-4">
        {opportunities.map((opportunity, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircleIcon className="h-6 w-6 text-green-500" />
            <p className="text-base md:text-lg leading-relaxed">{opportunity}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
