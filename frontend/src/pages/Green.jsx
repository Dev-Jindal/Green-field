// src/pages/Green.jsx
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // ✅ ADD THIS
import eventsData from "../data/eventsData";

export default function Green() {
  // Vimeo or any environment video related to sustainability
  
const navigate = useNavigate();
  return (
    <div className="pt-24">

      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#e8f5e9] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-[#1B4D3E] font-semibold text-lg mb-2">GREEN</h3>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Optimize Energy Usage —  
              <br />Decarbonize Operations with Precision
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
              GREEN is an advanced sustainability and decarbonization platform 
              designed for industries seeking cleaner operations. It helps you track 
              carbon footprint, optimize renewable energy usage, monitor emission sources, 
              and automate ESG reporting with real-time insights.
            </p>

            <div className="flex gap-4 mt-8">
             <Link
                             to="/schedule-demo"
                             className="px-6 py-3 bg-[#1B4D3E] text-white rounded-xl font-semibold
                                        hover:bg-[#163f33] transition inline-flex items-center gap-2"
                           >
                             Book a Demo <ArrowRight size={18} />
                           </Link>

              <a
                href="/brochure/Green Brochure reading version.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border-2 border-[#1B4D3E] text-[#1B4D3E] rounded-xl font-semibold hover:bg-[#1B4D3E] hover:text-white transition inline-flex items-center gap-2"
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* RIGHT: Vimeo video */}
        <div className="flex justify-center">
  <div className="w-full max-w-2xl shadow-lg rounded-2xl overflow-hidden bg-white">
    <div className="relative pb-[56.25%]">
      <iframe
        src="https://player.vimeo.com/video/686737424?autoplay=1&muted=1&loop=1&controls=0&playsinline=1"
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

      {/* HEADLINE */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f2730] leading-tight">
            Track emissions, reduce energy wastage and automate ESG reporting — all in one platform with GREEN.
          </h2>
        </div>
      </section>

      {/* THREE FEATURE CARDS */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div className="rounded-3xl border border-[#1B4D3E]/20 p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Carbon Footprint Intelligence</h3>
            <ul className="space-y-4 text-[#1B4D3E]/90">
              <li>Real-time estimation of CO₂, CH₄ and other GHG emissions.</li>
              <li>Track emission sources across operations and departments.</li>
              <li>Automated reduction suggestions based on usage patterns.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#1B4D3E]/20 p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Energy Optimization</h3>
            <ul className="space-y-4 text-[#1B4D3E]/90">
              <li>Monitor solar, wind, and hybrid renewable systems in real-time.</li>
              <li>AI-based energy saving & efficiency recommendations.</li>
              <li>Predictive load balancing to reduce wastage.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#1B4D3E]/20 p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">ESG & Compliance Automation</h3>
            <ul className="space-y-4 text-[#1B4D3E]/90">
              <li>Auto-generate ESG, ISO 14001, GRI & sustainability reports.</li>
              <li>Maintain audit-ready logs and traceable data.</li>
              <li>Compliance tracking with automated alerts.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WHAT IS GREEN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">What is GREEN?</h2>
            <ul className="space-y-4 text-[#1B4D3E]/80 leading-relaxed">
              <li>• A sustainability intelligence tool that helps industries transition into low-carbon and energy-efficient operations.</li>
              <li>• Provides complete visibility into emissions, consumption and ESG compliance.</li>
              <li>• Connects with renewables, IoT meters, SCADA and legacy systems.</li>
              <li>• Supports sustainability teams with automated reporting and intelligent insights.</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/greenhome.png"
              alt="GREEN environment monitoring"
               className="rounded-xl shadow-lg"

            />
          </div>

        </div>
      </section>

      {/* ENERGY MANAGEMENT */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src="https://www.greenfield.energy/wp-content/uploads/2024/02/p-2.jpg"
              alt="energy dashboard"
              className="rounded-xl shadow-lg object-contain w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Energy & Emission Dashboard</h2>
            <p className="text-[#1B4D3E]/80 leading-relaxed mb-4">
              GREEN provides a unified dashboard to visualize energy usage, forecast peak demand 
              and identify emission hotspots — allowing industries to take immediate corrective action.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[#1B4D3E]/80">
              <li>Monitor solar, wind and hybrid power systems.</li>
              <li>Track real-time CO₂ equivalent emissions.</li>
              <li>Automated alerts for abnormal energy spikes.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ESG / COMPLIANCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">ESG Reporting & Compliance</h2>
            <p className="text-[#1B4D3E]/80 leading-relaxed mb-4">
              GREEN simplifies ESG data management with auto-compiled reports aligned with global standards.
              This ensures transparency and readiness for audits and investor reviews.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[#1B4D3E]/80">
              <li>GRI, ISO 14001, SDG, EU Emission Standards.</li>
              <li>Downloadable reports with verifiable data trails.</li>
              <li>Full compliance history for audits.</li>
            </ul>
          </div>

          <div>
            <img
              src="https://www.greenfield.energy/wp-content/uploads/2024/02/p-3.jpg"
              alt="compliance"
                className="rounded-xl shadow-lg object-contain w-full h-auto"
            />
          </div>

        </div>
      </section>

      {/* COST SAVING ANALYSIS */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src="/images/greencostsaving.png"
              alt="cost analysis"
              className="rounded-xl shadow-lg object-contain w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Cost Savings & Optimization</h2>
            <p className="text-[#1B4D3E]/80 leading-relaxed mb-4">
              GREEN identifies the potential cost savings from renewable adoption, equipment optimization 
              and energy-waste reduction, helping companies cut expenses at scale.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[#1B4D3E]/80">
              <li>Predictive cost modeling for renewable energy usage.</li>
              <li>Plan vs actual consumption insights.</li>
              <li>Energy efficiency scoring for each department.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* OPERATIONAL EXCELLENCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Operational Sustainability</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="list-disc pl-6 space-y-3 text-[#1B4D3E]/80">
                <li><b>Green KPI System:</b> Score energy efficiency across departments.</li>
                <li><b>Low Carbon Operations:</b> Immediate insights to cut footprint.</li>
                <li><b>Automation:</b> Digital-first sustainability workflows.</li>
                <li><b>Forecasting:</b> Predict future consumption & emissions.</li>
                <li><b>Cross-Department Visibility:</b> Centralized sustainability portal.</li>
                <li><b>Net-Zero Roadmap:</b> Track company progress towards net-zero goals.</li>
              </ul>
            </div>
             <div>
            <img
              src="/images/greenOperational.png"
              alt="cost analysis"
               className="rounded-xl shadow-lg object-contain w-full h-auto"
            />
          </div>
           
          </div>
        </div>
      </section>

      {/* LONG TERM SUPPORT */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Long Term Support & Integration</h2>
            <p className="text-[#1B4D3E]/80 leading-relaxed mb-4">
              GREEN is built as a scalable sustainability engine that integrates with your existing 
              systems — ensuring seamless data flow, continuous improvements and long-term reliability.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[#1B4D3E]/80">
              <li>IoT & SCADA connectivity.</li>
              <li>Quarterly feature updates.</li>
              <li>Expert-led sustainability optimization support.</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/greenlongterm.png"
              alt="support"
              className="rounded-xl shadow-lg object-cover w-full h-64"
            />
          </div>

        </div>
      </section>

      {/* INTEGRATION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Integration & Connectivity</h2>
          <p className="text-[#1B4D3E]/80 leading-relaxed">
            GREEN integrates across your entire ecosystem — including energy meters, renewable systems,
            analytics tools and ERPs — providing unified sustainability intelligence.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "How does GREEN help reduce carbon footprint?",
              "Can GREEN integrate with existing renewable systems?",
              "Does GREEN support ESG and audit reporting?",
              "How accurate is GREEN’s emission tracking?",
              "Can I connect GREEN to IoT and smart meters?",
            ].map((q) => (
              <div
                key={q}
                className="border border-[#1B4D3E] bg-[#e8f5e9] rounded-xl p-4 text-[#1B4D3E] font-medium shadow-sm"
              >
                {q}
              </div>
            ))}
          </div>

        </div>
      </section>

        {/* ========================================================= */}
{/* INSIGHTS & EVENTS SECTION */}
{/* ========================================================= */}
<section className="py-24 bg-[#f7fffb] text-center">
  <h2 className="text-4xl font-bold text-[#1B4D3E] mb-12">
    Discover More: Insights & Events from GOTS
  </h2>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
    {eventsData.slice(0, 3).map((event) => (
      <div
        key={event.id}
        className="bg-white rounded-3xl shadow-xl overflow-hidden text-left hover:shadow-2xl transition"
      >
        {/* Top Accent */}
        <div className="h-2 bg-[#1B4D3E]" />

        <div className="p-6 flex flex-col h-full">
          {/* Date */}
          <p className="text-xs font-semibold text-[#1B4D3E] uppercase mb-2">
            {event.date}
          </p>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#1B4D3E] leading-snug">
            {event.title}
          </h3>

          {/* Preview */}
          <p className="text-[#1B4D3E]/70 mt-3 flex-1">
            {event.preview}
          </p>

          {/* Read More */}
          <button
            onClick={() => navigate(`/events/${event.id}`)}
            className="mt-6 text-sm font-semibold text-[#1B4D3E] hover:underline"
          >
            Read Update →
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* CTA */}
  <button
    onClick={() => navigate("/events")}
    className="mt-12 px-8 py-3 bg-[#1B4D3E] text-white rounded-xl font-semibold hover:bg-[#163f33] transition"
  >
    Read Our Events
  </button>
</section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#0c2f26] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Build a Sustainable, Energy-Efficient Future with GREEN
        </h2>
        <button className="mt-8 px-8 py-3 bg-[#20c997] text-white font-semibold rounded-xl shadow-lg hover:bg-[#17a984] transition">
          Connect With Our Team
        </button>
      </section>

    </div>
  );
}
