import React from "react";
import { Navbar } from "../components/Navbar"; // Make sure this path matches your project
import { BookOpen, BarChart, Zap } from "lucide-react";

const features = [
  {
    title: "Perk 1",
    description: "Description.",
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Perk 2",
    description: "Description.",
    icon: <BarChart className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Perk 3",
    description: "Description.",
    icon: <Zap className="w-8 h-8 text-blue-600" />,
  },
];

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white pt-28 pb-20 text-center px-6">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Empower Faster Workflow with EdApp
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Streamline your workflow with our data visualization.
        </p>
        <div className="mt-6">
          <button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border rounded-2xl shadow hover:shadow-md transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
