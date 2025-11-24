// src/components/Stats.jsx
import React from "react";
import { Briefcase, Users, Award, TrendingUp } from "lucide-react";

export default function Stats() {
  const stats = [
    { Icon: Briefcase, label: "Successful Projects", value: "15+" },
    { Icon: Users, label: "Happy Clients", value: "10+" },
    { Icon: Award, label: "Years Experience", value: "9+" },
    { Icon: TrendingUp, label: "Carbon Reduction", value: "344 MT" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ Icon, label, value }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-[#e8f5e9] rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 mb-4">
                <Icon className="w-8 h-8 text-[#1B4D3E]" aria-hidden="true" />
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1B4D3E]">
                {value}
              </h3>

              <p className="text-gray-700 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
