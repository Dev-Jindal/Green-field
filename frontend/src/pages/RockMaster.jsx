import { ArrowRight } from "lucide-react";

export default function RockMaster() {
  return (
    <div className="pt-24">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-[#e8f5e9] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-[#1B4D3E] font-semibold text-lg mb-2">RockMaster</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Advanced Rock Integrity Intelligence.  
              <br /> Smarter Structural Decisions.
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
              RockMaster provides real-time rock integrity analytics, enabling operators 
              to evaluate formation behavior, detect instabilities, and optimize well 
              planning decisions with unmatched accuracy.
            </p>

            <button className="mt-8 px-6 py-3 bg-white border-2 border-[#1B4D3E] text-[#1B4D3E]
                               font-semibold rounded-xl hover:bg-[#1B4D3E] hover:text-white 
                               transition-all inline-flex items-center gap-2">
              Book a Demo <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Side Illustration */}
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
              <img
                src="https://via.placeholder.com/500x300?text=Rock+Integrity+Analysis"
                alt="RockMaster Analysis"
                className="rounded-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* Feature Card 1 */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Structural Monitoring</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Formation Stability</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Track real-time formation movement and detect early instability signals.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Fracture Behavior</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Understand fracture shifts and pressure changes impacting well safety.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Geomechanical Insights</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Access predictive rock behavior based on geomechanical responses.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Optimization</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Safe Well Planning</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Reduce drilling risks with rock-strength informed planning tools.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Failure Prevention</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Prevent wellbore collapse and structural failures using early detection.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Stress Prediction</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Model rock stress distribution for optimized drilling and completion.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Reporting</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Integrity Reports</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Generate detailed rock integrity assessments and condition summaries.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Compliance Documentation</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Meet industry compliance requirements with standardized reports.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Data Export</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Export analyses for engineering, geological, or risk assessment teams.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#1B4D3E] to-[#0f3027] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions About RockMaster
          </h2>

          <div className="space-y-6">

            {[
              "What type of rock parameters does RockMaster monitor?",
              "Can RockMaster detect early signs of formation instability?",
              "Is it compatible with subsurface geomechanical models?",
              "Does RockMaster provide real-time fracture behavior insights?",
              "Can I export structural analysis reports?",
              "Is RockMaster suitable for high-pressure/high-temperature wells?"
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
          Improve Structural Integrity and Drilling Confidence.
        </h2>
        <button className="mt-8 px-8 py-3 bg-[#20c997] text-white font-semibold rounded-xl shadow-lg 
                           hover:bg-[#17a984] transition">
          Connect With Our Team
        </button>
      </section>

    </div>
  );
}
