import React from "react";

export default function Partners({ logos = [] }) {
  const logosLoop = [...logos, ...logos];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] text-center mb-10">
          Our Partners
        </h3>

        <div className="overflow-hidden relative">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {logosLoop.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-10"
                style={{ width: "260px" }}   // equal spacing
              >
                <img
                  src={img}
                  alt={`partner-${i}`}
                  className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .animate-marquee {
            animation: marquee 22s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}
