import { ArrowRight } from "lucide-react";

export default function AutoPro() {
  return (
    <div className="pt-24">

      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#e8f5e9] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-[#1B4D3E] font-semibold text-lg mb-2">AutoPro</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Automated Production.  
              <br /> Maximum Efficiency.
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
              AutoPro optimizes production operations with automated analysis, 
              intelligent performance tuning, and predictive insights that reduce costs 
              and maximize output across your asset portfolio.
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
                src="https://via.placeholder.com/500x300?text=Production+Analytics" 
                alt="AutoPro Analytics"
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
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Production Intelligence</h2>

            <div className="mt-6 space-y-6">

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Real-Time Optimization</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Monitor production dynamics and optimize parameters automatically.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Loss Detection</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Identify losses and deviations in real time before they impact output.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Performance Insights</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Access instant insights for better production strategy decisions.
                </p>
              </div>

            </div>
          </div>

          {/* Optimization */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Optimization</h2>

            <div className="mt-6 space-y-6">

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">AI-Driven Tuning</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Maximize well output with intelligent AI-powered performance tuning.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Predictive Operations</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Forecast production efficiency based on real-time data trends.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Workflow Automation</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Reduce manual work with automated production workflows.
                </p>
              </div>

            </div>
          </div>

          {/* Reporting */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Reporting</h2>

            <div className="mt-6 space-y-6">

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Auto Reports</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Generate production, variance, and efficiency reports instantly.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Operational KPIs</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Track KPIs that matter to your field and operations teams.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Export Tools</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Export clean reports for engineering, financial, or compliance needs.
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
            Frequently Asked Questions About AutoPro
          </h2>

          <div className="space-y-6">
            {[
              "How does AutoPro optimize production performance?",
              "Does AutoPro support multi-well operations?",
              "Can AutoPro detect production losses automatically?",
              "What automation features does AutoPro include?",
              "Can I export AutoPro production reports?",
              "Is AutoPro compatible with artificial lift systems?"
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
          Automate Production Efficiency Across Your Operations.
        </h2>
        <button className="mt-8 px-8 py-3 bg-[#20c997] text-white font-semibold rounded-xl shadow-lg 
                           hover:bg-[#17a984] transition">
          Connect With Our Team
        </button>
      </section>

    </div>
  );
}
