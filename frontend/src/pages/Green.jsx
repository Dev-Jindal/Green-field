import { ArrowRight } from "lucide-react";

export default function Green() {
  return (
    <div className="pt-24">

      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#e8f5e9] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-[#1B4D3E] font-semibold text-lg mb-2">GREEN</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Cleaner Energy.  
              <br /> Smarter Sustainability.
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
              GREEN provides advanced environmental intelligence with real-time 
              emissions tracking, sustainability analytics, and operational decision 
              support to help organizations reduce their carbon footprint.
            </p>

            <button className="mt-8 px-6 py-3 bg-white border-2 border-[#1B4D3E] text-[#1B4D3E]
                               font-semibold rounded-xl hover:bg-[#1B4D3E] hover:text-white 
                               transition-all inline-flex items-center gap-2">
              Book a Demo <ArrowRight size={18} />
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
              <img 
                src="https://via.placeholder.com/500x300?text=Sustainability+Dashboard" 
                alt="GREEN Sustainability Dashboard"
                className="rounded-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* Monitoring */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Environmental Tracking</h2>

            <div className="mt-6 space-y-6">

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Real-Time Emissions</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Monitor emissions levels across operations with minute-level accuracy.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Sustainability Metrics</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Track KPIs like CO₂ output, fuel efficiency, and energy usage.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Compliance Alerts</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Receive alerts when environmental thresholds are exceeded.
                </p>
              </div>

            </div>
          </div>

          {/* Optimization */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Optimization</h2>

            <div className="mt-6 space-y-6">

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Sustainable Planning</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Optimize energy usage with intelligent planning tools.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Carbon Reduction</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Identify opportunities to reduce carbon footprint and energy waste.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Operational Efficiency</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Improve sustainability without sacrificing performance.
                </p>
              </div>

            </div>
          </div>

          {/* Reporting */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Reporting</h2>

            <div className="mt-6 space-y-6">

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">ESG Reporting</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Generate ESG-ready environmental reports in one click.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Regulatory Compliance</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Stay aligned with global environmental compliance standards.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Data Export</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Export sustainability insights for corporate reporting teams.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-r from-[#1B4D3E] to-[#0f3027] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions About GREEN
          </h2>

          <div className="space-y-6">
            {[
              "What environmental metrics does GREEN track?",
              "Can GREEN integrate with live emissions sensors?",
              "Does GREEN support ESG reporting?",
              "Can I reduce emissions using GREEN insights?",
              "Is GREEN suitable for large-scale operations?",
              "Does GREEN offer real-time alerts?"
            ].map((q) => (
              <div key={q} className="border-b border-white/20 pb-4">
                <p className="text-lg">{q}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0c2f26] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Build a Sustainable Future with GREEN.
        </h2>
        <button className="mt-8 px-8 py-3 bg-[#20c997] text-white font-semibold rounded-xl shadow-lg 
                           hover:bg-[#17a984] transition">
          Connect With Our Team
        </button>
      </section>

    </div>
  );
}
