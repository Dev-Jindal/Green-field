
// import { ArrowRight } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import eventsData from "../data/eventsData";

// export default function RockMaster() {
//   const navigate = useNavigate();

//   return (
//     <div className="pt-24">

//       {/* HERO */}
//       <section className="w-full bg-gradient-to-r from-[#AFE1AF] to-white py-20">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//           <div>
//             <h3 className="text-[#1B4D3E] font-semibold text-lg mb-2">
//               RockMaster
//             </h3>

//             <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
//               Mechanical Earth Modelling & Sanding Analysis
//             </h1>

//             <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
//               RockMaster provides advanced mechanical earth models (MEM), CDP-based sanding tendency analysis,
//               and field-life sand modelling — enabling informed sand management strategies and reliable long-term planning.
//             </p>

//             <div className="flex gap-4 mt-8">
//               <Link
//                 to="/schedule-demo"
//                 className="px-6 py-3 bg-[#1B4D3E] text-white rounded-xl font-semibold
//                            hover:bg-[#163f33] transition inline-flex items-center gap-2"
//               >
//                 Book a Demo <ArrowRight size={18} />
//               </Link>

//               <a
//                 href="/brochure/Rockmaster Brochure.pdf"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-6 py-3 border-2 border-[#1B4D3E] text-[#1B4D3E] rounded-xl 
//                            font-semibold hover:bg-[#1B4D3E] hover:text-white transition inline-flex items-center gap-2"
//               >
//                 Download Brochure
//               </a>
//             </div>
//           </div>

//           <div className="flex justify-center py-12">
//             <div className="w-full max-w-2xl shadow-lg rounded-2xl overflow-hidden bg-white">
//               <div className="relative pb-[56.25%]">
//                 <video
//                   src="/video/RockMaster_Final.mp4"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   controls
//                   preload="auto"
//                   className="absolute inset-0 w-full h-full object-cover bg-black"
//                 />
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* BRING TOGETHER HEADLINE */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f2730] leading-tight">
//             Bring together MEM, sanding tendency, and field-life sand modelling in a single tool with RockMaster.
//           </h2>
//         </div>
//       </section>

//       {/* THREE FEATURE CARDS */}
//       <section className="py-20 bg-[#f7fffb]">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

//           {[
//             {
//               title: "Mechanical Earth Modelling",
//               items: [
//                 "Preparing MEMs to generate rock mechanical properties.",
//                 "Estimate stresses (max horizontal, min horizontal, overburden).",
//                 "Generate dynamic & static MEM models calibrated to field/lab data.",
//               ],
//             },
//             {
//               title: "Sanding Tendency",
//               items: [
//                 "Generate CDP curves for open & cased-hole wells.",
//                 "Rank wells (high / medium / low sand tendency).",
//                 "Identify catastrophic failure conditions and calibrate with field data.",
//               ],
//             },
//             {
//               title: "Field-Life Sand Modelling",
//               items: [
//                 "Reservoir pressure based sand production modelling.",
//                 "Wellbore stability diagrams & CDP triangles.",
//                 "Assess effects of drawdown, water cut and gas production on sanding.",
//               ],
//             },
//           ].map((card) => (
//             <div
//               key={card.title}
//               className="rounded-3xl border border-[#1B4D3E]/20 p-8 bg-white"
//             >
//               <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">
//                 {card.title}
//               </h3>
//               <ul className="space-y-4 text-[#1B4D3E]/90">
//                 {card.items.map((i) => (
//                   <li key={i}>{i}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">
//             Frequently Asked Questions
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               "How are MEM properties derived from basic log inputs?",
//               "What correlations are used for CDP curve generation?",
//               "Can RockMaster be calibrated with laboratory core data?",
//               "How do we rank wells by sanding tendency?",
//               "What sand control methods does RockMaster support modelling for?",
//             ].map((q) => (
//               <div
//                 key={q}
//                 className="border border-[#1B4D3E] bg-[#AFE1AF] rounded-xl p-4 
//                            text-[#1B4D3E] font-medium shadow-sm"
//               >
//                 {q}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

import { ArrowRight, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import eventsData from "../data/eventsData";

export default function RockMaster() {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How are MEM properties derived from basic log inputs?",
      answer:
        "RockMaster derives Mechanical Earth Model (MEM) properties using standard petrophysical logs combined with empirical and analytical correlations validated against field and laboratory data.",
    },
    {
      question: "What correlations are used for CDP curve generation?",
      answer:
        "RockMaster uses industry-accepted CDP correlations calibrated with in-situ stress conditions, rock strength parameters, and production history where available.",
    },
    {
      question: "Can RockMaster be calibrated with laboratory core data?",
      answer:
        "Yes. Laboratory core data can be directly integrated to calibrate rock strength, elastic properties, and failure envelopes for higher accuracy.",
    },
    {
      question: "How do we rank wells by sanding tendency?",
      answer:
        "Wells are ranked based on calculated sanding onset, drawdown limits, and failure proximity, classifying them as high, medium, or low risk.",
    },
    {
      question: "What sand control methods does RockMaster support modelling for?",
      answer:
        "RockMaster supports modelling for multiple sand control techniques including screens, gravel packs, drawdown management, and selective completion strategies.",
    },
  ];

  return (
    <div className="pt-24">

      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#AFE1AF] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-[#1B4D3E] font-semibold text-lg mb-2">
              RockMaster
            </h3>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Mechanical Earth Modelling & Sanding Analysis
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
              RockMaster provides advanced mechanical earth models (MEM), CDP-based sanding tendency analysis,
              and field-life sand modelling — enabling informed sand management strategies and reliable long-term planning.
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
                href="/brochure/Rockmaster Brochure.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border-2 border-[#1B4D3E] text-[#1B4D3E] rounded-xl 
                           font-semibold hover:bg-[#1B4D3E] hover:text-white transition inline-flex items-center gap-2"
              >
                Download Brochure
              </a>
            </div>
          </div>

          <div className="flex justify-center py-12">
            <div className="w-full max-w-2xl shadow-lg rounded-2xl overflow-hidden bg-white">
              <div className="relative pb-[56.25%]">
                <video
                  src="/video/RockMaster_Final.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover bg-black"
                />
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

          {[
            {
              title: "Mechanical Earth Modelling",
              items: [
                "Preparing MEMs to generate rock mechanical properties.",
                "Estimate stresses (max horizontal, min horizontal, overburden).",
                "Generate dynamic & static MEM models calibrated to field/lab data.",
              ],
            },
            {
              title: "Sanding Tendency",
              items: [
                "Generate CDP curves for open & cased-hole wells.",
                "Rank wells (high / medium / low sand tendency).",
                "Identify catastrophic failure conditions and calibrate with field data.",
              ],
            },
            {
              title: "Field-Life Sand Modelling",
              items: [
                "Reservoir pressure based sand production modelling.",
                "Wellbore stability diagrams & CDP triangles.",
                "Assess effects of drawdown, water cut and gas production on sanding.",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-[#1B4D3E]/20 p-8 bg-white"
            >
              <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">
                {card.title}
              </h3>
              <ul className="space-y-4 text-[#1B4D3E]/90">
                {card.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

      {/* FAQ (UPDATED TO MATCH SANDMASTER) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

/* FAQ ITEM — SAME AS SANDMASTER */
function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#1B4D3E]/30 rounded-xl bg-[#AFE1AF]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left"
      >
        <span className="text-[#1B4D3E] font-semibold">
          {faq.question}
        </span>

        <ChevronDown
          className={`text-[#1B4D3E] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-6 pb-5 text-[#1B4D3E]/80 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

