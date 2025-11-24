import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services({ services }) {
  return (
    <section className="py-20 bg-[#e8f5e9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-2">Our Core Services</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Comprehensive solutions designed to optimize your operations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} tabIndex={0} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition focus:outline-none focus:ring-4 focus:ring-[#1B4D3E]/20">
              <div className="bg-[#1B4D3E] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[#1B4D3E] mb-3">{s.title}</h4>
              <p className="text-gray-700 mb-6">{s.description}</p>
              <Link to="/services" className="text-[#1B4D3E] font-semibold inline-flex items-center gap-2">Learn More <ArrowRight className="w-4 h-4" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
