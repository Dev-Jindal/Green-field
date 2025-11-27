import { ArrowRight } from "lucide-react";

export default function RockMaster() {
  // Vimeo embed id from provided URL: 637143154 -> embed link below
  

  return (
    <div className="pt-24">

      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#e8f5e9] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-[#1B4D3E] font-semibold text-lg mb-2">RockMaster</h3>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Mechanical Earth Modelling & Sanding Analysis
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
              RockMaster provides advanced mechanical earth models (MEM), CDP-based sanding tendency analysis,
              and field-life sand modelling — enabling informed sand management strategies and reliable long-term planning.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-6 py-3 bg-[#1B4D3E] text-white rounded-xl font-semibold hover:bg-[#163f33] transition inline-flex items-center gap-2">
                Book a Demo <ArrowRight size={18} />
              </button>

              <a
                href="BROCHURE_LINK_HERE"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border-2 border-[#1B4D3E] text-[#1B4D3E] rounded-xl font-semibold hover:bg-[#1B4D3E] hover:text-white transition inline-flex items-center gap-2"
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* Vimeo Embed */}
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

      {/* BRING TOGETHER HEADLINE */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f2730] leading-tight">
            Bring together MEM, sanding tendency, and field-life sand modelling in a single tool with RockMaster.
          </h2>
        </div>
      </section>

      {/* THREE FEATURE CARDS */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div className="rounded-3xl border border-[#1B4D3E]/20 p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Mechanical Earth Modelling</h3>
            <ul className="space-y-4 text-[#1B4D3E]/90">
              <li>Preparing MEMs to generate rock mechanical properties.</li>
              <li>Estimate stresses (max horizontal, min horizontal, overburden).</li>
              <li>Generate dynamic & static MEM models calibrated to field/lab data.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#1B4D3E]/20 p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Sanding Tendency</h3>
            <ul className="space-y-4 text-[#1B4D3E]/90">
              <li>Generate CDP curves for open & cased-hole wells.</li>
              <li>Rank wells (high / medium / low sand tendency).</li>
              <li>Identify catastrophic failure conditions and calibrate with field data.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#1B4D3E]/20 p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Field-Life Sand Modelling</h3>
            <ul className="space-y-4 text-[#1B4D3E]/90">
              <li>Reservoir pressure based sand production modelling.</li>
              <li>Wellbore stability diagrams & CDP triangles.</li>
              <li>Assess effects of drawdown, water cut and gas production on sanding.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* DETAILED CONTENT SECTIONS (using provided content) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Mechanical Earth Modelling</h2>

            <ul className="list-disc pl-6 space-y-4 text-[#1B4D3E]/80">
              <li>
                Preparing mechanical earth models generating rock characteristics. Calculation of several rock mechanical properties specifically from basic input log data using several correlations to evaluate Young’s and Bulk Modulus, Poisson’s Ratio, Friction Angle and UCS.
              </li>
              <li>
                Estimating stresses (maximum horizontal, minimum horizontal and overburden).
              </li>
              <li>
                Generating dynamic and static MEM models and plotting mechanical properties vs depth.
              </li>
              <li>
                Calibrating calculated values with real field and lab data — shifting points for better match where required.
              </li>
              <li>
                Understanding complete rock physics by observing variations along depth and running multiple sensitivities.
              </li>
            </ul>
          </div>

          <div>
            <img
              src="https://www.greenfield.energy/wp-content/uploads/2023/03/Mechanical-Earth-Modeling-1.png"
              alt="Mechanical Earth Modelling"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SANDING TENDENCY */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Sanding Tendency</h2>

            <div className="text-[#1B4D3E]/80 space-y-4">
              <p>
                1. Generating CDP curves — various correlations for CDP generation for open and cased hole wells.
              </p>

              <p>
                2. Evaluating sand production tendency of wells — CDP curves facilitate evaluation and ranking of wells as high, medium or low sanding events. Special algorithms help establish sand production index for consistent ranking.
              </p>

              <p>
                3. Conditions for approximate catastrophic failures of formation — catastrophic failure conditions can be evaluated to prevent unplanned well loss.
              </p>

              <p className="mt-4">
                During field life, real field CDP values can be entered and calibrated against the model to improve predictions for future validation.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://www.greenfield.energy/wp-content/uploads/2023/03/Mechanical-Earth-Modeling-2.png"
              alt="Sanding Tendency"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FIELD LIFE SAND MODELLING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Field Life Sand Modelling</h2>

            <ul className="list-decimal pl-6 space-y-4 text-[#1B4D3E]/80">
              <li>
                Reservoir pressure-based sand production — sensitivity analysis of CDP calculated by varying parameters involved in CDP.
              </li>
              <li>
                Wellbore stability diagrams and CDP triangles — generate stability triangle at every depth to identify sand free and risk zones.
              </li>
              <li>
                Effect of sanding due to water cut, higher drawdown, gas production and other parameters.
              </li>
            </ul>

            <p className="mt-4 text-[#1B4D3E]/80">
              As drawdown exceeds critical values designated by CDP models, sanding may occur — RockMaster helps to quantify and plan mitigation strategies.
            </p>
          </div>

          <div>
            <img
              src="https://www.greenfield.energy/wp-content/uploads/2023/03/Field-life-sand-modeling-3.png"
              alt="Field Life Modelling"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SAND MANAGEMENT STRATEGY */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Sand Management Strategy</h2>

          <div className="prose max-w-none text-[#1B4D3E]/80">
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                Defining sand management strategy for long-term field development.
                <ul className="list-disc pl-6">
                  <li>Provide possible strategies depending on well sanding condition and rank.</li>
                  <li>Long-term support and selective perforation & perforation selection strategies.</li>
                </ul>
              </li>

              <li>
                Ensuring wellbore stability and orientation for stable and non-sand production with hydrocarbons.
              </li>

              <li>
                Defining sand control options based on best economics — evaluate methods (tubulars, fluids, consolidation).
              </li>

              <li>
                Modelling sand consolidation activities to pack sand and avoid further production which reduces cost & risk.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* LONG TERM SUPPORT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Long Term Support</h2>

            <ul className="list-decimal pl-6 space-y-4 text-[#1B4D3E]/80">
              <li>
                Development of model in RockMaster and regular updates — models saved for re-work with new field values.
              </li>
              <li>
                Delivering RockMaster as license with regular updates and validation.
              </li>
              <li>
                GOTS sand management experts available to advise best sand management strategy.
              </li>
            </ul>
          </div>

          <div>
            <img
              src="https://www.greenfield.energy/wp-content/uploads/2023/03/Field-life-sand-modeling-1.png"
              alt="Long Term Support"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SAND MASS PRODUCTION */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Sand Mass Production</h2>

          <p className="text-[#1B4D3E]/80 leading-relaxed">
            1. Full field modelling of MEM and sand production for optimized sand management strategy — green and brown fields.
            <br />
            2. Efficient connectivity with SandMaster to provide full-field holistic solutions. Identification of highest and least sand producing wells is possible using volumetric sand production and incremental drawdown analyses.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "How are MEM properties derived from basic log inputs?",
              "What correlations are used for CDP curve generation?",
              "Can RockMaster be calibrated with laboratory core data?",
              "How do we rank wells by sanding tendency?",
              "What sand control methods does RockMaster support modelling for?"
            ].map((q) => (
              <div key={q} className="border rounded-xl p-4 text-[#1B4D3E]/90">
                {q}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG / ARTICLES */}
      <section className="py-24 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1B4D3E] mb-10 text-center">Insights & Case Studies</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=b5c6b8a3d3a3b7f7adf7e3a3b8c8d9e0"
                alt="Case Study 1"
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B4D3E]">Mechanical Earth Modelling: Case Study</h3>
                <p className="text-sm text-[#1B4D3E]/80 mt-2">How MEM improved prediction accuracy for a mature field.</p>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1bcd3f9f9b5a2b7c8d9e0f1a2b3c4d5e"
                alt="Case Study 2"
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B4D3E]">Sanding Tendency Analysis</h3>
                <p className="text-sm text-[#1B4D3E]/80 mt-2">Ranking wells and planning sand control interventions.</p>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8c1c2b9b8e3f6f3c305d2f9d3b9c1d0f"
                alt="Case Study 3"
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B4D3E]">Field Life Sand Modelling</h3>
                <p className="text-sm text-[#1B4D3E]/80 mt-2">Predictive modelling to reduce unplanned downtime.</p>
              </div>
            </article>
          </div>

          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-[#1B4D3E] text-white font-semibold rounded-xl hover:bg-[#163f33] transition">
              Read Our Blog
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#0c2f26] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to secure your wells with RockMaster?</h2>
        <button className="mt-8 px-8 py-3 bg-[#20c997] text-white font-semibold rounded-xl shadow-lg hover:bg-[#17a984] transition">
          Connect With Our Team
        </button>
      </section>

    </div>
  );
}
