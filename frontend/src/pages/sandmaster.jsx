import { ArrowRight } from "lucide-react";

export default function SandMaster() {
  return (
    <div className="pt-24">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-[#e8f5e9] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h3 className="text-[#1B4D3E] font-semibold text-lg mb-2">SandMaster</h3>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1B4D3E]">
              4 Hours of Work,
              <br /> 4 Days of Results.
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg">
              SandMaster is the first-of-its-kind sand management and evaluation software
              designed specifically for Oil & Gas operations. Built on patented workflow
              and advanced correlations, it enables complete sand risk prediction,
              monitoring, and optimization across your entire facility—from wellbore to
              surface.
            </p>

            <button className="mt-8 px-6 py-3 bg-[#1B4D3E] text-white font-semibold rounded-xl
                               hover:bg-[#153c30] transition-all inline-flex items-center gap-2">
              Book a Demo <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT – VIDEO */}
          <div className="flex justify-center">
            <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl overflow-hidden">
              <video
                src="VIDEO_URL_HERE"
                controls
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* BIG COMBOWIDE HEADLINE (new) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f2730] leading-tight">
            Bring together forecasting, type curves, and economics in a single tool with ComboCore.
          </h2>
        </div>
      </section>

      {/* ---------------------------------------------------
         THREE FEATURE BOXES (ComboCurve Layout)
      ----------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div className="rounded-3xl border border-[#1B4D3E]/20 p-8">
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-4">Monitoring</h2>

            <ul className="space-y-6 text-[#1B4D3E]">
              <li>
                <p className="font-semibold">Real-Time Sand Tracking</p>
                <p className="text-sm text-[#1B4D3E]/70">
                  Continuous surveillance of sand production levels across all equipment.
                </p>
              </li>

              <li>
                <p className="font-semibold">Weak-Link Detection</p>
                <p className="text-sm text-[#1B4D3E]/70">
                  Identify components most susceptible to erosion, deposition or failure.
                </p>
              </li>

              <li>
                <p className="font-semibold">Smart Alerts</p>
                <p className="text-sm text-[#1B4D3E]/70">
                  System-generated alerts before high-risk sand events occur.
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#1B4D3E]/20 p-8">
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-4">Optimization</h2>

            <ul className="space-y-6 text-[#1B4D3E]">
              <li>
                <p className="font-semibold">Facility-Level Simulation</p>
                <p className="text-sm text-[#1B4D3E]/70">
                  Model and optimize entire systems from wellbore to topside.
                </p>
              </li>

              <li>
                <p className="font-semibold">Predictive Modeling</p>
                <p className="text-sm text-[#1B4D3E]/70">
                  Predict erosional velocity, deposition patterns, and failure points.
                </p>
              </li>

              <li>
                <p className="font-semibold">Component Life Estimation</p>
                <p className="text-sm text-[#1B4D3E]/70">
                  Compute MAWT, wall loss, and equipment lifespan using advanced algorithms.
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#1B4D3E]/20 p-8">
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-4">Reporting</h2>

            <ul className="space-y-6 text-[#1B4D3E]">
              <li>
                <p className="font-semibold">Automated Sand Reports</p>
                <p className="text-sm text-[#1B4D3E]/70">
                  Generate daily/weekly risk, erosion & deposition summaries.
                </p>
              </li>

              <li>
                <p className="font-semibold">Compliance-Ready Outputs</p>
                <p className="text-sm text-[#1B4D3E]/70">
                  Standardized reports suitable for audits and engineering documentation.
                </p>
              </li>

              <li>
                <p className="font-semibold">Detailed Export</p>
                <p className="text-sm text-[#1B4D3E]/70">
                  Export in XLS, CSV, and API integration formats.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------
         BIG CONTENT SECTIONS (Your content plugged in)
      ----------------------------------------------------- */}

      {/* WHAT IS SANDMASTER */}
      <section className="py-20 bg-[#f7fffa]">
        <div className="max-w-7xl mx-auto px-6 md:grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-4xl font-bold text-[#1B4D3E] mb-6">What is SandMaster?</h2>

            <ul className="space-y-4 text-[#1B4D3E]/80">
              <li>• First software of its type focusing mainly on sand management in Oil & Gas.</li>
              <li>• Built on a patented workflow with advanced correlations & algorithms.</li>
              <li>• End-to-end system for evaluation of erosion, deposition & handling risk.</li>
              <li>• Identifies weak links and risk envelopes across the entire facility.</li>
            </ul>

            <h3 className="mt-10 text-3xl font-bold text-[#1B4D3E]">
              Unlock Current Challenges in Sand Management
            </h3>

            <ul className="space-y-4 mt-4 text-[#1B4D3E]/80">
              <li>• Decision making for sand management during FDP & facility design.</li>
              <li>• Estimating component life based on erosion rate & risk history.</li>
              <li>• Determining optimum sand production limit without HSE risk.</li>
            </ul>
          </div>

          <div className="flex justify-center mt-10 md:mt-0">
            <img
              src="https://via.placeholder.com/600x350"
              alt="Facility Model"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* HIGHLIGHTS / FEATURES DETAILED (use provided content) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Highlights of the Main Features</h2>
          <h3 className="text-2xl font-semibold text-[#1B4D3E] mb-8">Modelling entire facility from wellbore to surface</h3>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-5 text-[#1B4D3E]/90 leading-relaxed">
              <li>
                <b>Development of entire facility :</b> The software can develop an entire facility
                from sub-surface well-bore to topside facilities & pipelines in a single model.
              </li>

              <li>
                <b>Sand Mapping :</b> As the facility is modelled and flow parameters are included,
                sand mapping (concentration, mass rate, velocity, deposition) is available for each component.
              </li>

              <li>
                <b>Handling Gas injection and separation :</b> Simulate multiphase flows with gas inclusion/exclusion
                logic for separators, injection and top-side systems.
              </li>

              <li>
                <b>Particle Size Distribution profile :</b> Provide complete PSD profiles after separation at each component.
              </li>
            </ul>

            <img src="https://via.placeholder.com/600x320?text=PSD+Profile+Graph" className="rounded-xl shadow" />
          </div>
        </div>
      </section>

      {/* SOLIDS RELATED RISKS */}
      <section className="py-20 bg-[#f8fdf9]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Simulation of Solids related risks</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-5 text-[#1B4D3E]/90 leading-relaxed">
              <li><b>Deposition Risk :</b> Simulate solid deposition in annulus, casing, production tubing, pipelines & separators.</li>
              <li><b>Corrosion – Erosion :</b> Combined analysis to detect erosion-dominated or corrosion-dominated behaviors.</li>
              <li><b>Sand Handling Risk :</b> Time-based scheduling for cleanouts, flushing, and handling strategies.</li>
              <li><b>Erosion risk :</b> Predict wall loss and identify erosional hotspots (bends, chokes, pumps).</li>
            </ul>

            <img src="https://via.placeholder.com/600x320?text=Erosion+Curve" className="rounded-xl shadow" />
          </div>
        </div>
      </section>

      {/* ALGORITHMS & CALCULATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">A unique blend of Algorithms & Calculations</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-5 text-[#1B4D3E]/90 leading-relaxed">
              <li><b>Scatter point Calibration for Erosion :</b> Calibrate and history-match erosion outputs across flow conditions.</li>
              <li><b>Critical Transport velocity :</b> Calculate velocities needed to transport each particle size.</li>
              <li><b>Operating Envelope :</b> Diagnose risks & build interactive operating envelopes for the facility.</li>
              <li><b>Calibration of models :</b> Tune models against true values to improve predictive power.</li>
            </ul>

            <img src="https://via.placeholder.com/600x320?text=Transport+Velocity+Graph" className="rounded-xl shadow" />
          </div>
        </div>
      </section>

      {/* CRITICAL COMPONENT DESIGN */}
      <section className="py-20 bg-[#f7fffa]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Critical component design & facility Integrity</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-5 text-[#1B4D3E]/90 leading-relaxed">
              <li><b>Component Life and MAWT :</b> Calculate minimum wall thickness and component life.</li>
              <li><b>Data Analytics :</b> Build backend analytics for metal loss, erosion rates and uplift opportunities.</li>
              <li><b>Choke Management Plan :</b> Predict choke erosion and create robust choke strategies.</li>
              <li><b>Hydro-cyclone design :</b> Simulate hydro-cyclone geometries to evaluate cut diameter and separation efficiency.</li>
            </ul>

            <img src="https://via.placeholder.com/600x320?text=Facility+Integrity+Graphs" className="rounded-xl shadow" />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------
         FAQ
      ----------------------------------------------------- */}
      <section className="py-20 bg-gradient-to-r from-[#1B4D3E] to-[#0f3027] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              "How does SandMaster compute erosion and deposition risks?",
              "Does SandMaster support entire facility modelling?",
              "Is it compatible with real-time field sensor data?",
              "Can I simulate choke performance and hydro-cyclone efficiency?",
              "Does it estimate component life and MAWT?",
              "Can SandMaster be customized for different operating environments?"
            ].map((q, i) => (
              <div key={i} className="border-b border-white/20 pb-3">
                <p className="text-lg">{q}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------
         BLOG / ARTICLES (new section)
      ----------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0f2730] mb-6 text-center">Discover More: Handpicked Articles from Our Blog</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Card 1 */}
            <article className="bg-white border rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-[#1B4D3E] font-semibold mb-3">ComboCurve</div>
                <h3 className="text-xl font-bold mb-3">How SandMaster improves asset reliability</h3>
                <p className="text-sm text-[#1B4D3E]/80 mb-4">
                  Case study: reduce downtime by early detection of erosional hotspots.
                </p>
                <a className="inline-flex items-center gap-2 text-[#1B4D3E] font-semibold" href="#">
                  Read more <ArrowRight size={14} />
                </a>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-white border rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-[#1B4D3E] font-semibold mb-3">Engineering</div>
                <h3 className="text-xl font-bold mb-3">Designing for sand: best practices</h3>
                <p className="text-sm text-[#1B4D3E]/80 mb-4">
                  Technical guidance for choke and separator selection to manage solids.
                </p>
                <a className="inline-flex items-center gap-2 text-[#1B4D3E] font-semibold" href="#">
                  Read more <ArrowRight size={14} />
                </a>
              </div>
            </article>

            {/* Card 3 */}
            <article className="bg-white border rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-[#1B4D3E] font-semibold mb-3">Operations</div>
                <h3 className="text-xl font-bold mb-3">Scheduling cleanouts the right way</h3>
                <p className="text-sm text-[#1B4D3E]/80 mb-4">
                  How time-based flushing reduces risk and extends component life.
                </p>
                <a className="inline-flex items-center gap-2 text-[#1B4D3E] font-semibold" href="#">
                  Read more <ArrowRight size={14} />
                </a>
              </div>
            </article>
          </div>

          <div className="text-center">
            <button className="px-8 py-3 bg-[#20c997] text-white font-semibold rounded-xl shadow-lg hover:bg-[#17a984] transition">
              Read Our Blog
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------
         CTA
      ----------------------------------------------------- */}
      <section className="py-20 bg-[#0c2f26] text-center">
        <h2 className="text-4xl font-bold text-white">
          Partner with a team that brings deep sand expertise.
        </h2>

        <button className="mt-8 px-8 py-3 bg-[#20c997] text-white text-lg font-semibold rounded-xl 
                           hover:bg-[#17a984] transition shadow-lg">
          Connect With Our Team
        </button>
      </section>

    </div>
  );
}
