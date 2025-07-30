import React from "react";

export const StudentIndicators = ({ onSelect }) => {
  const indicators = [
    { label: "Academic", color: "green-400" },
    { label: "Social/Emotional", color: "yellow-400" },
    { label: "Behavioral", color: "red-400" },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row justify-around items-center gap-12 mt-10">
      {indicators.map((indicator) => (
        <div
          key={indicator.label}
          onClick={() => onSelect(indicator.label)}
          className="flex flex-col items-center cursor-pointer group"
        >
          {/* Label ABOVE the circle */}
          <p className="mb-4 text-lg md:text-xl font-semibold">{indicator.label}</p>

          {/* Outer ring */}
          <div className={`w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-${indicator.color} flex items-center justify-center transition-transform group-hover:scale-105`}>
            {/* Inner circle */}
            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-${indicator.color} shadow-lg`} />
          </div>
        </div>
      ))}
    </div>
  );
};
