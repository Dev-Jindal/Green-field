import { ArrowRight } from "lucide-react";

export default function AutoWellz() {
  return (
    <div className="pt-24">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-[#e8f5e9] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-[#1B4D3E] font-semibold text-lg mb-2">AutoWellz</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Smarter Wells.  
              <br /> Automated Diagnostics.
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
              AutoWellz provides automated well-performance diagnostics using 
              real-time analytics, helping operators reduce downtime, detect 
              anomalies early, and optimize well output without manual intervention.
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
                src="https://via.placeholder.com/500x300?text=Well+Diagnostics" 
                alt="AutoWellz Analytics"
                className="rounded-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* Monitoring */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Diagnostics</h2>
            <div className="mt-6 space-y-6">

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Real-Time Health Check</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Get instant well performance evaluations using AI-driven diagnostics.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Anomaly Detection</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Identify abnormal well behavior before it leads to failures.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Flow Pattern Recognition</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Analyze production patterns using intelligent ML algorithms.
                </p>
              </div>

            </div>
          </div>

          {/* Optimization */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Optimization</h2>
            <div className="mt-6 space-y-6">

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Performance Boost</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Optimize choke settings, flow rates, and well stability automatically.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Production Forecasting</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Predict well performance using AutoWellz’ data-driven forecasting engine.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Failure Prevention</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Reduce downtime through predictive alerts and optimization insights.
                </p>
              </div>

            </div>
          </div>

          {/* Reporting */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Reporting</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Auto-Generated Reports</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Get automated daily well diagnostics and performance summaries.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Operational Insights</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Understand root causes of well issues with easy-to-read insights.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Export Options</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Share reports with engineering and operations teams instantly.
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
            Frequently Asked Questions About AutoWellz
          </h2>

          <div className="space-y-6">
            {[
              "What types of diagnostics does AutoWellz provide?",
              "Is AutoWellz compatible with existing SCADA systems?",
              "Can AutoWellz detect production anomalies?",
              "Does it support remote well monitoring?",
              "Can I export AutoWellz reports?",
              "Is AutoWellz suitable for multi-well monitoring?"
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
          Automate Well Performance with Confidence.
        </h2>
        <button className="mt-8 px-8 py-3 bg-[#20c997] text-white font-semibold rounded-xl shadow-lg 
                           hover:bg-[#17a984] transition">
          Connect With Our Team
        </button>
      </section>
    </div>
  );
}
