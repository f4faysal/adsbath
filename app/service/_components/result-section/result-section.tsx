"use client";''
import { useState } from "react";

const tabData = [
  {
    icon: "🎯",
    title: "Experience Managing Millions in Ad Spend",
    content:
      "Exceptional results demand more than unparalleled technical expertise. Knowing Google Ads inside and out also means knowing how to minimize wasted expenses that pad Google’s coffers. Plus, we know how to manage accounts whose monthly budgets range from $5k to $500k+. And we put that know-how to work for you.",
  },
  {
    icon: "📊",
    title: "Strategy-First Approach",
    content:
      "We always start with strategy, ensuring every campaign aligns with your business objectives. This enables us to drive long-term, sustainable growth.",
  },
  {
    icon: "💼",
    title: "Exclusive Google Ads-Only Focus",
    content:
      "Our specialization in Google Ads means we stay on top of platform changes and best practices, giving you a competitive advantage.",
  },
  {
    icon: "⏳",
    title: "Proactive 90-Day Growth Sprints",
    content:
      "Our 90-Day Growth Sprints ensure continuous improvement by evaluating, optimizing, and scaling campaigns every three months.",
  },
];

export default function ResultsTabsSection() {
  const [activeTab, setActiveTab] = useState(0); // Track the active tab

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Here’s how we get results that{" "}
          <span className="relative inline-block">
            blow away
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-300"></span>
          </span>{" "}
          the competition
        </h1>

        {/* Tabs for Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {tabData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex flex-col items-center space-y-2 p-4 transition-all border-b-2 border-black ${
                activeTab === index ? "border-blue-400" : ""
              }`}
            >
              <div className="text-4xl">{tab.icon}</div>
              <h3 className="text-lg font-semibold">{tab.title}</h3>
            </button>
          ))}
        </div>

        {/* Content for Active Tab */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            {tabData[activeTab].title}
          </h2>
          <p className="text-gray-700">{tabData[activeTab].content}</p>
        </div>
      </div>
    </section>
  );
}
