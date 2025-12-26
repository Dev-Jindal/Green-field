


import React, { useEffect, useRef } from "react";
import { GraduationCap, Download, Calendar, Users, ChevronRight } from "lucide-react";

// Brand colors
const PRIMARY_COLOR_CLASS = "text-[#0F4C3A]";
const CTA_COLOR_CLASS = "bg-[#0F4C3A] hover:bg-emerald-700";
const CTA_TEXT_CLASS = "text-white";

/* ===============================
   TRAINING DATA (WITH BROCHURES)
================================ */
const trainingData = [
  {
    id: "sand",
    title: "Sand Management",
    duration: "20 Hours",
    topics: [
      "Rock Mechanics",
      "Sand Control",
      "Erosion & Transport",
      "Surface Sand Management",
    ],
    desc: "The main objective of this course is to cover all aspects of sand management, from subsurface reservoir rock mechanics to surface processing. Develop a comprehensive understanding of how to manage sand effectively and risk-free to optimize hydrocarbon production.",
    prereqs:
      "Intermediate Level Training for Completion, Process and Production Engineers.",
    img: "/images/sandmanagement.png",
    brochure: "/brochures/Sand-management-Training-Brochure.pdf",
  },
  {
    id: "lift",
    title: "Artificial Lift Systems",
    duration: "45 Hours",
    topics: [
      "Nodal Analysis",
      "Sucker Rod Pump",
      "ESP Designing",
      "Progressive Cavity Pump",
      "Gas Lift",
    ],
    desc: "Practical engineering for selecting, designing, and troubleshooting major artificial lift systems including Sucker Rod Pumps, Electric Submersible Pumps (ESP), and Gas Lift methods.",
    prereqs:
      "Basic knowledge of production & completion engineering (Artificial Lift Systems).",
    img: "/images/ArtificialLift.png",
    brochure: "/brochures/Artificial-Lift_-Training-Brochure.pdf",
  },
  {
    id: "comp",
    title: "Completions & Workover Operations",
    duration: "14 Hours",
    topics: [
      "Well Completions",
      "Basic Components",
      "Operations",
      "Sandface Completion",
      "Workover",
    ],
    desc: "Comprehensive overview of Oil and Gas Well completion & workover operations. Learn practical aspects, design principles, and risk mitigation strategies for complex well environments.",
    prereqs:
      "Basic knowledge of Oil & Gas Production & Well Design engineering.",
    img: "/images/Completions.png",
    brochure: "/brochures/Completions-Workover-Training-Brochure.pdf",
  },
];

/* ===============================
   SPLIT COURSE CARD
================================ */
const SplitCourseCard = ({ course, index }) => {
  const reverseLayout = index % 2 !== 0;

  return (
    <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      <div
        className={`grid grid-cols-1 lg:grid-cols-5 ${
          reverseLayout ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* IMAGE */}
        <div
          className={`lg:col-span-2 relative min-h-[260px] ${
            reverseLayout ? "lg:order-first" : "lg:order-last"
          }`}
        >
          <img
            src={course.img}
            alt={course.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.innerHTML =
                '<div class="flex items-center justify-center h-full bg-[#0F4C3A] text-white text-xl font-bold">Image Unavailable</div>';
            }}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* CONTENT */}
        <div className="lg:col-span-3 p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h3
              className={`text-3xl sm:text-4xl font-extrabold ${PRIMARY_COLOR_CLASS} mb-4`}
            >
              {course.title}
            </h3>

            {/* STATS */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-600 font-semibold mb-6 border-b pb-4">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-600" />
                {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-600" />
                Professional Level
              </span>
            </div>

            <p className="text-lg text-slate-700">{course.desc}</p>

            {/* MODULES */}
            <div className="mt-6">
              <h4 className="font-bold text-slate-700 mb-3">
                Key Modules:
              </h4>
              <div className="flex flex-wrap gap-2">
                {course.topics.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* PREREQUISITES */}
            <div className="mt-6 p-4 bg-gray-50 border rounded-xl text-sm text-slate-600">
              <strong>Prerequisites: </strong>
              {course.prereqs}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 pt-4 border-t flex flex-wrap gap-3">
            <button
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold shadow-md transition ${CTA_COLOR_CLASS} ${CTA_TEXT_CLASS}`}
            >
              <GraduationCap className="w-5 h-5" />
              Enroll Now
            </button>

            <a
              href={course.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-600 text-emerald-700 rounded-xl font-semibold hover:bg-emerald-50 transition"
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </a>

            
          </div>
        </div>
      </div>
    </article>
  );
};

/* ===============================
   MAIN PAGE
================================ */
export default function TrainingPage() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    setTimeout(() => {
      el.style.transition = "all 500ms ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 80);
  }, []);

  return (
    <main className="pt-24 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <header
        ref={headerRef}
        className="max-w-7xl mx-auto px-6 md:px-12 py-12"
      >
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Industry-led <span className="text-emerald-600">Training</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl">
          Practical, instructor-led courses focused on production and
          completion engineering excellence.
        </p>
      </header>

      {/* COURSES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 space-y-12">
        {trainingData.map((course, index) => (
          <SplitCourseCard
            key={course.id}
            course={course}
            index={index}
          />
        ))}
      </section>
    </main>
  );
}
