import React from "react";

export default function Partners({ logos = [] }) {
  // duplicate logos list in consumer if you want continuous marquee
  const logosLoop = [...logos, ...logos];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] text-center mb-8">Our Partners</h3>

        <div className="overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {logosLoop.map((img, i) => (
              <div key={i} className="flex-shrink-0 w-1/6 flex justify-center px-6">
                <img src={img} alt={`partner-${i}`} className="h-20 md:h-24 lg:h-28 object-contain rounded-xl transition-transform duration-300 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>

        {/* inline keyframes for marquee */}
        <style>{`
          .animate-marquee { animation: marquee 20s linear infinite; }
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        `}</style>
      </div>
    </section>
  );
}
