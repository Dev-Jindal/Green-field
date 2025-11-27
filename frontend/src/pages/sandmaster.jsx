import { ArrowRight } from "lucide-react";

export default function SandMaster() {
  return (
    <div className="pt-24">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-gradient-to-r from-[#e8f5e9] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-[#1B4D3E] font-semibold text-lg mb-2">SandMaster</h3>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Advanced Sand Management System for  
              <br />Optimized Well Performance
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
              SandMaster delivers complete sand monitoring, solids modeling, erosion prediction, 
              deposition analysis, choke optimization and long-term risk management across the 
              entire production system — from downhole to topside facilities.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-6 py-3 bg-[#1B4D3E] text-white rounded-xl font-semibold hover:bg-[#163f33] transition inline-flex items-center gap-2">
                Book a Demo <ArrowRight size={18} />
              </button>

              <a
                href="#"
                target="_blank"
                className="px-6 py-3 border-2 border-[#1B4D3E] text-[#1B4D3E] rounded-xl font-semibold hover:bg-[#1B4D3E] hover:text-white transition inline-flex items-center gap-2"
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* RIGHT: VIDEO */}
     <div className="flex justify-center">
  <div className="w-full max-w-2xl shadow-lg rounded-2xl overflow-hidden bg-white">
    <div className="relative pb-[56.25%]">
      <iframe
        src="https://player.vimeo.com/video/637143154?autoplay=1&muted=1&loop=1&controls=0&playsinline=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      ></iframe>
    </div>
  </div>
</div>


        </div>
      </section>

      {/* ========================================================= */}
      {/* BRING TOGETHER */}
      {/* ========================================================= */}
      <section className="py-24 text-center bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] max-w-4xl mx-auto">
          Bring together sand monitoring, solids modeling and risk prediction  
          <br />in one powerful platform with <span className="text-[#0f8f6d]">SandMaster</span>.
        </h2>
      </section>

      {/* ========================================================= */}
      {/* FEATURE CARDS */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Sand Monitoring</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Real-Time Insights</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Live sand production tracking with automated diagnostics.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Accurate Thresholds</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Detect when facilities cross safe operating limits.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Historical Insights</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Identify trends & compare field behavior over time.</p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Facility Modelling</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Complete Flow Analysis</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Model erosion, deposition & PSD across the facility.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Predictive Modelling</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Understand solids movement across pipelines.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Geospatial Intelligence</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Visualize risky zones & sand concentration paths.</p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Operational Economics</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Cost Optimization</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Reduce failures & optimize maintenance cycles.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Real-Time Alerts</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Detect high-risk flow conditions instantly.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Instant Reporting</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Automated reporting for sand trends & erosion risks.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* WHAT IS SANDMASTER */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-4xl font-bold text-[#1B4D3E] mb-6">What is SandMaster?</h2>

            <ul className="space-y-4 text-[#1B4D3E]/80 leading-relaxed">
              <li>• First software in Oil & Gas dedicated entirely to sand management.</li>
              <li>• Built with patented workflows for sand systems & risk evaluation.</li>
              <li>• Uses advanced algorithms & correlations for erosion & deposition prediction.</li>
              <li>• Identifies weak links, risk envelopes & sand production limits.</li>
            </ul>
          </div>

          <img
            src="https://www.greenfield.energy/wp-content/uploads/2021/10/Capture-of-Facility.jpg"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ========================================================= */}
      {/* HIGHLIGHTS */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-4xl font-bold text-[#1B4D3E] mb-12">Highlights of the Main Features</h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">

            <ul className="space-y-6 text-[#1B4D3E]/80">
              <li><b>Entire Facility Modelling:</b> From reservoir inflow to topside separators.</li>
              <li><b>Sand Mapping:</b> Track concentration, velocity & deposition rate.</li>
              <li><b>Multiphase Flow:</b> Gas injection, separation & erosion impacts.</li>
              <li><b>PSD Profiling:</b> Particle size distribution across all equipment.</li>
            </ul>

            <img
              src="https://www.greenfield.energy/wp-content/uploads/2021/10/Particle-Size-Distribution-chart.png"
              className="rounded-xl shadow-lg"
            />

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SOLIDS RISK */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Simulation of Solids Related Risks</h2>

            <ul className="space-y-6 text-[#1B4D3E]/80">
              <li><b>Deposition Risk:</b> Simulates deposition in annulus, casing, tubing & vessels.</li>
              <li><b>Corrosion–Erosion:</b> Evaluates combined erosion–corrosion mechanisms.</li>
              <li><b>Sand Handling Risk:</b> Helps design flushing / removal schedules.</li>
              <li><b>Erosion Risk:</b> Predicts erosion in bends, chokes & pumps.</li>
            </ul>
          </div>

          <img
            src="https://www.greenfield.energy/wp-content/uploads/2021/10/Liquid-Rate-vs-Critical-Velocity-chart.png"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* ADVANCED ALGORITHMS */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">A Unique Blend of Algorithms & Calculations</h2>

            <ul className="space-y-6 text-[#1B4D3E]/80">
              <li><b>Scatter Point Calibration:</b> Matches erosion & deposition models with field data.</li>
              <li><b>Critical Transport Velocity:</b> Determines minimum flow to avoid settling.</li>
              <li><b>Operating Envelope:</b> Predicts safe vs risk flow regions.</li>
              <li><b>Model Calibration:</b> Aligns predictions with long-term well data.</li>
            </ul>
          </div>

          <img
            src="https://www.greenfield.energy/wp-content/uploads/2021/10/chart-Hydrocyclone.png"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* FULL-FIELD SAND MANAGEMENT STRATEGY */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Full-Field Sand Management Strategy</h2>

          <div className="grid md:grid-cols-2 gap-10">
            
            <ul className="list-disc pl-6 space-y-4 text-[#1B4D3E]/80">
              <li>Define short-term & long-term sand management strategy.</li>
              <li>Select optimal sand control techniques based on economics.</li>
              <li>Support perforation design & selective completions.</li>
              <li>Long-term field life prediction using erosion & deposition models.</li>
              <li>Optimize choke strategies & sustainable drawdown limits.</li>
            </ul>

            <img
              src="https://www.greenfield.energy/wp-content/uploads/2021/10/Dashboard-for-Last-page.jpg"
              className="rounded-xl shadow-lg"
            />

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* LONG TERM SUPPORT */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          
          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Long-Term Support</h2>

            <ul className="list-disc pl-6 text-[#1B4D3E]/80 space-y-4">
              <li>SandMaster delivered as a licensed platform with regular updates.</li>
              <li>Field model updates using new operational data.</li>
              <li>Dedicated experts support erosion & sand control strategy.</li>
              <li>Seamless connectivity with complementary tools (AutoPro, RockMaster).</li>
            </ul>
          </div>

          <img
            src="https://www.greenfield.energy/wp-content/uploads/2021/10/Liquid-Rate-vs-Critical-Velocity-chart.png"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOG SECTION */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#f7fffb] text-center">
        <h2 className="text-4xl font-bold text-[#1B4D3E] mb-12">
          Discover More: Handpicked Insights from Sand Management Experts
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format",
              title: "How SandMaster Enhances Sand Evaluation",
              subtitle: "A complete guide to erosion & deposition risk prediction",
              author: "Dr. Aditya Singh",
            },
            {
              img: "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1400&auto=format",
              title: "Why Operators Trust SandMaster",
              subtitle: "Understanding flow risks across the facility",
              author: "Rohit Verma",
            },
            {
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format",
              title: "Boosting Well Performance with SandMaster",
              subtitle: "Choke optimization & PSD modelling strategies",
              author: "Priya Nair",
            },
          ].map((b) => (
            <div key={b.title} className="bg-white rounded-3xl shadow-xl overflow-hidden text-left">
              <img src={b.img} className="w-full h-44 object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B4D3E]">{b.title}</h3>
                <p className="text-[#1B4D3E]/70 mt-2">{b.subtitle}</p>
                <p className="mt-4 text-sm font-semibold text-[#1B4D3E]">{b.author}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 px-8 py-3 bg-[#1B4D3E] text-white rounded-xl font-semibold hover:bg-[#163f33] transition">
          Read Our Blog
        </button>
      </section>

      {/* ========================================================= */}
      {/* FAQ SECTION (UPDATED GREEN THEME) */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-10">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "How does SandMaster calculate erosion risk?",
              "Can SandMaster predict long-term deposition?",
              "Does the software support real-time monitoring?",
              "What inputs are required for PSD modelling?",
              "Can SandMaster integrate with downhole sensors?",
            ].map((q) => (
              <div
                key={q}
                className="border border-[#1B4D3E] bg-white rounded-xl p-5 text-[#1B4D3E] shadow-sm"
              >
                {q}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#0c2f26] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Partner with a team that brings deep sand management expertise.
        </h2>

        <button className="mt-8 px-8 py-3 bg-[#20c997] text-white rounded-xl shadow-lg hover:bg-[#17a984] transition">
          Connect With Our Team
        </button>
      </section>

    </div>
  );
}
