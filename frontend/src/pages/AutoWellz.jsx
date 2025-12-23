import { ArrowRight } from "lucide-react";

export default function AutoWellz() {
  return (
    <div className="pt-24">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-gradient-to-r from-[#e8f5e9] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-[#1B4D3E] font-semibold text-lg mb-2">AutoWellz</h3>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Workflow Automation &  
              <br />Advanced Analytics for Oil & Gas Operations
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
              AutoWellz is an oil and gas industry software application patented 
              for simplifying procedure-making, reporting, real-time monitoring, 
              and analytics — ensuring seamless workflow and optimized operational decision-making.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-6 py-3 bg-[#1B4D3E] text-white rounded-xl font-semibold hover:bg-[#163f33] transition inline-flex items-center gap-2">
                Book a Demo <ArrowRight size={18} />
              </button>

              <a
                href="/brochure/Autowellz Brochure.pdf"
                target="_blank"
                className="px-6 py-3 border-2 border-[#1B4D3E] text-[#1B4D3E] rounded-xl font-semibold hover:bg-[#1B4D3E] hover:text-white transition inline-flex items-center gap-2"
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* RIGHT VIDEO */}
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

      {/* ========================================================= */}
      {/* BRING TOGETHER */}
      {/* ========================================================= */}
      <section className="py-24 text-center bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] max-w-4xl mx-auto">
          A unified platform for workflow automation, reporting,  
          <br />and advanced data analytics with <span className="text-[#0f8f6d]">AutoWellz</span>.
        </h2>
      </section>

      {/* ========================================================= */}
      {/* FEATURE CARDS */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Program Generation</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Unified Workflow</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Create, modify, approve & submit programs in one platform.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Attachment Support</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Add images, tables, logs & important documents easily.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Cost & Time Estimation</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Auto-calculate resources, inventory and operational estimates.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Reporting</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Error-Free Compilation</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Program-reference ensures correct & complete reporting.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Operational Tracking</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Real-time monitoring of activities, cost & resources.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Digital Resources</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Converts all reports to structured digital formats.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Analysis</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Interactive Dashboards</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  One-click analytics for cost, performance & operations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Advanced Algorithms</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Automated EoW reports & operational insights.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Multi-Well Comparison</h4>
                <p className="text-[#1B4D3E]/70 text-sm">
                  Analyze multiple wells instantly across metrics.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* WHAT IS AUTOWELLZ */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          
          <div>
            <h2 className="text-4xl font-bold text-[#1B4D3E] mb-6">What is AutoWellz?</h2>

            <ul className="space-y-4 text-[#1B4D3E]/80 leading-relaxed">
              <li>• A patented workflow-based application for drilling & production operations.</li>
              <li>• Combines program design, reporting & analytics in one digital portal.</li>
              <li>• Eliminates manual errors through standardized workflows.</li>
              <li>• Stores complete well history, attachments, lessons learned & KPIs.</li>
            </ul>
          </div>

          <img
            src="https://www.greenfield.energy/wp-content/uploads/2022/04/img2.jpg"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ========================================================= */}
      {/* HIGHLIGHTS */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#1B4D3E] mb-12">
            Highlights of the Main Features
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">

            <ul className="space-y-6 text-[#1B4D3E]/80">
              <li><strong>Process Automation:</strong> Streamlined workflows for drilling & production.</li>
              <li><strong>Real-Time Tracking:</strong> Instant monitoring of planned vs actual.</li>
              <li><strong>Multi-Well Analytics:</strong> Compare wells, cost, NPT & KPIs.</li>
              <li><strong>Seamless Reporting:</strong> Auto-generated summaries for cost, time & resources.</li>
            </ul>

            <img
              src="https://www.greenfield.energy/wp-content/uploads/2022/04/img3.jpg"
              className="rounded-xl shadow-lg"
            />

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ANALYSIS SECTION */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          
          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Comprehensive Operational Analysis</h2>

            <ul className="space-y-6 text-[#1B4D3E]/80">
              <li><b>Cost & Time Analysis:</b> Track expenditures & timeline deviations.</li>
              <li><b>Performance Tracking:</b> Analyze rig hours, contractor efficiency & KPIs.</li>
              <li><b>NPT Insights:</b> Root-cause analysis for non-productive intervals.</li>
              <li><b>Resource Utilization:</b> Manpower & equipment performance analytics.</li>
            </ul>
          </div>

          <img
            src="https://www.greenfield.energy/wp-content/uploads/2022/04/img1-1.jpg"
            
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* FULL FIELD STRATEGY SECTION */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">
            Full-Field Workflow & Operation Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <ul className="list-disc pl-6 space-y-4 text-[#1B4D3E]/80">
              <li>Standardize field operations through consistent workflows.</li>
              <li>Plan & execute well programs with minimal manual errors.</li>
              <li>Track sequence of operations for improved field learning.</li>
              <li>Optimize operational costs through historical data insights.</li>
              <li>Generate templates for repetitive drilling activities.</li>
            </ul>

            <img
              src="https://www.greenfield.energy/wp-content/uploads/2022/04/img4.jpg"
              className="rounded-xl shadow-lg"
            />

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTEGRATION SECTION */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Integration & Connectivity</h2>

            <ul className="list-disc pl-6 space-y-4 text-[#1B4D3E]/80">
              <li>Integrates with sensors, well logs & real-time monitoring tools.</li>
              <li>Supports import/export of operational data & reports.</li>
              <li>Cloud compatibility for multi-location access.</li>
              <li>Seamless connectivity with AutoPro, RockMaster & SandMaster.</li>
            </ul>
          </div>

          <img
            src="https://www.greenfield.energy/wp-content/uploads/2022/04/img5.jpg"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* OPERATIONAL EXCELLENCE */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Operational Excellence</h2>

            <ul className="list-disc pl-6 space-y-4 text-[#1B4D3E]/80">
              <li>Agile workflows enabling faster operations.</li>
              <li>Automated processes to reduce paperwork & manual tasks.</li>
              <li>Six Sigma inspired optimization across workflows.</li>
              <li>Improved field learning through structured digital history.</li>
              <li>Consistent & error-free reporting across operations.</li>
            </ul>
          </div>

          <img
            src="https://www.greenfield.energy/wp-content/uploads/2022/04/img7.jpg"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* LONG TERM SUPPORT */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Long-Term Support</h2>

            <ul className="list-disc pl-6 text-[#1B4D3E]/80 space-y-4">
              <li>Frequent software updates based on industry needs.</li>
              <li>Integration support for new technologies & sensors.</li>
              <li>Expert team available for technical & operational guidance.</li>
              <li>Data-driven recommendations for optimized drilling strategies.</li>
            </ul>
          </div>

          <img
            src="https://www.greenfield.energy/wp-content/uploads/2022/04/img6.jpg"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>
          {/* ========================================================= */}
      {/* FAQ SECTION */}
      {/* ========================================================= */}
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">
      Frequently Asked Questions
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        "How does AutoWellz help reduce NPT?",
        "Can the software integrate with rig sensors?",
        "Does AutoWellz support multi-operator workflows?",
        "How does the program generation module work?",
        "Is AutoWellz cloud-based or hybrid?",
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
      {/* BLOG SECTION */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#f7fffb] text-center">
        <h2 className="text-4xl font-bold text-[#1B4D3E] mb-12">
          Explore Insights from Industry Experts
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1400&auto=format",
              title: "How AutoWellz Transforms Oilfield Operations",
              subtitle: "Digitization of workflows for enhanced efficiency",
              author: "Dr. Aditya Sharma",
            },
            {
              img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format",
              title: "Importance of Automated Reporting in Drilling",
              subtitle: "Why companies are adopting workflow automation",
              author: "Priya Nair",
            },
            {
              img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format",
              title: "Reducing NPT with Smart Digital Tools",
              subtitle: "AutoWellz helps reduce downtime significantly",
              author: "Rohit Verma",
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

        <button className="mt-12 px-8 py-3 bg-[#1B4D3E] text-white font-semibold rounded-xl hover:bg-[#163f33] transition">
          Read More Blogs
        </button>
      </section>

  

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#0c2f26] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Empower your teams with a smarter operational workflow platform.
        </h2>

        <button className="mt-8 px-8 py-3 bg-[#20c997] text-white font-semibold rounded-xl shadow-lg hover:bg-[#17a984] transition">
          Connect With Our Team
        </button>
      </section>

    </div>
  );
}
