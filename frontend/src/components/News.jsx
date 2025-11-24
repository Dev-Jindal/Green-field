import React from "react";
import { Newspaper, Calendar, Globe2, Link2 } from "lucide-react";

export default function News({ newsEvents }) {
  return (
    <section className="py-20 bg-[#e8f5e9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-[#1B4D3E]">
              <Newspaper className="w-8 h-8" /> News & Events
            </h2>
            <p className="text-gray-700 mt-2 max-w-2xl">Stay up to date with our latest activities.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsEvents.map((item, i) => (
            <article key={i} className="bg-white rounded-2xl shadow p-6 transition hover:shadow-xl flex flex-col">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover rounded-xl mb-4" />
              <div className="flex justify-between text-xs text-gray-500 mb-3 uppercase tracking-wide">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{item.date}</div>
                <div className="flex items-center gap-2"><Globe2 className="w-4 h-4" />{item.location}</div>
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E] mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm flex-1 mb-4">{item.description}</p>
              <button className="text-[#1B4D3E] flex items-center gap-1 font-semibold text-sm">Read More <Link2 className="w-4 h-4" /></button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
