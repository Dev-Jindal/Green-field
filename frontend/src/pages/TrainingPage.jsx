import React, { useEffect, useRef } from "react";
import { GraduationCap, Download, Calendar, Users, ChevronRight } from "lucide-react";

// Define custom brand colors for consistency and modern feel
const PRIMARY_COLOR_CLASS = 'text-[#0F4C3A]'; // Dark Teal/Green
const CTA_COLOR_CLASS = 'bg-[#0F4C3A] hover:bg-emerald-700';
const CTA_TEXT_CLASS = 'text-white';

/**
 * Modern Training page - UPDATED to use a universal split layout (text left, image right)
 * for ALL courses and removes the right-side vertical sidebar for a full-width focus.
 * - Tailwind CSS required
 */

const trainingData = [
  {
    id: "sand",
    title: "Sand Management",
    duration: "20 Hours",
    topics: ["Rock Mechanics", "Sand Control", "Erosion & Transport", "Surface Sand Management"],
    desc: "The main objective of this course is to cover all aspects of sand management, from subsurface reservoir rock mechanics to surface processing. Develop a comprehensive understanding of how to manage sand effectively and risk-free to optimize hydrocarbon production.",
    prereqs: "Intermediate Level Training for Completion, Process and Production Engineers.",
    img: "/images/sandmanagement.png",
  },
  {
    id: "lift",
    title: "Artificial Lift Systems",
    duration: "45 Hours",
    topics: ["Nodal Analysis", "Sucker Rod Pump", "ESP Designing", "Progressive Cavity Pump", "Gas Lift"],
    desc: "Practical engineering for selecting, designing, and troubleshooting major artificial lift systems including Sucker Rod Pumps, Electric Submersible Pumps (ESP), and Gas Lift methods.",
    prereqs: "Basic knowledge of production & completion engineering (Artificial Lift Systems).",
    img: "/images/ArtificialLift.png",
  },
  {
    id: "comp",
    title: "Completions & Workover Operations",
    duration: "14 Hours",
    topics: ["Well Completions", "Basic Components", "Operations", "Sandface Completion", "Workover"],
    desc: "Comprehensive overview of Oil and Gas Well completion & workover operations. Learn practical aspects, design principles, and risk mitigation strategies for complex well environments.",
    prereqs: "Basic knowledge of Oil & Gas Production & Well Design engineering.",
    img: "/images/Completions.png",
  },
];

// Universal component for the split layout (Text Left, Image Right)
const SplitCourseCard = ({ course, index }) => {
    // Alternate image/text position for visual variety, keeping image on the right (odd index)
    const reverseLayout = index % 2 !== 0; 
    
    return (
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden mb-10 border border-gray-100">
            <div 
                className={`grid grid-cols-1 lg:grid-cols-5 h-full ${reverseLayout ? 'lg:grid-flow-col-dense' : ''}`}
            >
                
                {/* Right Side: Big Image (2/5 width) */}
                <div className={`lg:col-span-2 relative min-h-[250px] lg:min-h-full ${reverseLayout ? 'lg:order-first' : 'lg:order-last'}`}>
                    <img
                        src={course.img}
                        alt={course.title}
                        className="w-full h-full object-cover"
                        // Custom rounded corners based on layout position
                        style={{
                            borderRadius: reverseLayout ? '1.5rem 0 0 1.5rem' : '0 1.5rem 1.5rem 0',
                            borderTopLeftRadius: '1.5rem', // Always rounded on top-left for mobile
                            borderBottomRightRadius: '1.5rem', // Always rounded on bottom-right for mobile
                            ...(reverseLayout ? { 
                                borderTopLeftRadius: '1.5rem', 
                                borderBottomLeftRadius: '1.5rem', 
                                borderTopRightRadius: '0', 
                                borderBottomRightRadius: '0' 
                            } : { 
                                borderTopLeftRadius: '0', 
                                borderBottomLeftRadius: '0', 
                                borderTopRightRadius: '1.5rem', 
                                borderBottomRightRadius: '1.5rem' 
                            }),
                            
                            // Adjust for mobile screens to ensure nice corners
                            '@media (max-width: 1024px)': {
                                borderRadius: '1.5rem 1.5rem 0 0',
                            }
                        }}
                        onError={(e) => { 
                            e.currentTarget.style.display = "none"; 
                            e.currentTarget.parentElement.style.backgroundColor = "#0F4C3A";
                            e.currentTarget.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-white text-xl font-bold p-4">Image Unavailable</div>';
                        }}
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
                
                {/* Left Side: Text and Details (3/5 width) */}
                <div className="lg:col-span-3 p-6 md:p-10 flex flex-col justify-between">
                    <div>
                        <h3 className={`text-3xl sm:text-4xl font-extrabold ${PRIMARY_COLOR_CLASS} leading-snug mb-3`}>{course.title}</h3>
                        
                        {/* Course Stats */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 font-semibold mb-6 pb-4 border-b border-gray-100">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-emerald-600" /> {course.duration}
                            </span>
                            <span className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-emerald-600" /> Professional Level
                            </span>
                        </div>
                        
                        <p className="mt-2 text-lg text-slate-700">{course.desc}</p>

                        {/* Topics */}
                        <div className="mt-6">
                            <h4 className="font-bold text-slate-700 mb-3">Key Modules:</h4>
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

                        {/* Prerequisites */}
                        <div className="mt-6 p-4 border border-gray-200 bg-gray-50 rounded-xl text-sm text-slate-600">
                            <strong className="font-semibold">Prerequisites: </strong>{course.prereqs}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
                        <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold shadow-md transition duration-300 ${CTA_COLOR_CLASS} ${CTA_TEXT_CLASS} transform hover:scale-[1.01]`}>
                            <GraduationCap className="w-5 h-5" /> Enroll Now
                        </button>
                        <a
                            href="/details"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 bg-white text-slate-800 rounded-xl font-semibold hover:bg-gray-100 transition duration-200"
                        >
                            <ChevronRight className="w-5 h-5" /> View Full Syllabus
                        </a>
                    </div>
                </div>
                
            </div>
        </article>
    );
};


export default function TrainingPage() {
  const NAV_TOP_PADDING = "pt-24";
  const headerRef = useRef(null);

  useEffect(() => {
    // Simple fade-in animation for the header
    const el = headerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(6px)";
    setTimeout(() => {
      el.style.transition = "opacity 480ms ease, transform 480ms ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 60);
  }, []);

  return (
    <main className={`${NAV_TOP_PADDING} bg-gray-50 text-slate-800 min-h-screen`}>
      {/* HEADER */}
      <header ref={headerRef} className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-4xl">
            <div className={`inline-flex items-center gap-3 bg-emerald-50 ${PRIMARY_COLOR_CLASS} px-4 py-2 rounded-full text-sm font-bold mb-4`}>
              <GraduationCap className="w-4 h-4" />
              Technical Training Academy
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight" style={{ color: PRIMARY_COLOR_CLASS.substring(5, 12) }}>
              Industry-led <span className="text-emerald-600">Training</span> Portfolio
            </h1>

            <p className="mt-4 text-xl text-slate-600 max-w-3xl">
              Practical, instructor-led courses focusing on high-impact production and completion engineering skills.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/assets/training-brochure.pdf"
                className={`inline-flex items-center gap-2 ${CTA_COLOR_CLASS} ${CTA_TEXT_CLASS} px-6 py-3 rounded-xl font-bold shadow-lg transition duration-300 transform hover:scale-[1.02]`}
              >
                <Download className="w-5 h-5" /> Download Brochure
              </a>

              <a
                href="#courses"
                className="inline-flex items-center gap-2 border border-slate-300 bg-white text-slate-800 px-6 py-3 rounded-xl font-semibold hover:shadow-md transition duration-200"
              >
                Explore All Courses
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Simplified Stats Block (Moved from sidebar) */}
          <div className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 flex-shrink-0">
            <div className="text-center">
              <div className={`text-4xl font-extrabold ${PRIMARY_COLOR_CLASS}`}>20+</div>
              <div className="text-sm text-slate-600 font-medium">Successful Courses</div>
            </div>
            <div className="text-center">
              <div className={`text-4xl font-extrabold ${PRIMARY_COLOR_CLASS}`}>100%</div>
              <div className="text-sm text-slate-600 font-medium">Industry Satisfaction</div>
            </div>
          </div>
        </div>
      </header>

      {/* COURSES SECTION (Full Width) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 pt-10">
        <section className="space-y-12">
            <h2 id="courses" className={`text-3xl md:text-4xl font-extrabold ${PRIMARY_COLOR_CLASS} border-b-2 border-emerald-200 pb-3`}>
                Complete Course Catalogue
            </h2>
            
            {/* All Courses using the Split Layout */}
            {trainingData.map((course, index) => (
                <SplitCourseCard key={course.id} course={course} index={index} />
            ))}

            {/* Corporate Training CTA (full width) */}
            <div className="bg-emerald-50 rounded-2xl p-10 shadow-xl border border-emerald-200 mt-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-3xl">
                  <h3 className={`text-3xl font-extrabold ${PRIMARY_COLOR_CLASS}`}>Custom Corporate Training</h3>
                  <p className="mt-2 text-lg text-slate-700">
                    Need a tailored solution? We design on-site or remote batches specific to your team's needs and assets.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 flex-shrink-0">
                  <a href="/contact" className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold ${CTA_COLOR_CLASS} ${CTA_TEXT_CLASS} shadow-lg transition duration-200 hover:scale-[1.02]`}>
                    <Users className="w-5 h-5" /> Enquire for Team Pricing
                  </a>
                </div>
              </div>
            </div>
        </section>
      </div>

      <div className="h-28" />

      <style>{`
        /* Custom styles to ensure responsive and modern spacing */
        .rounded-2xl { border-radius: 1rem; }
        .rounded-3xl { border-radius: 1.5rem; }
        
        /* Ensure the course cards have consistent object-fit on images */
        .object-cover { object-fit: cover; }
        
        /* General cleanup */
        main { font-family: 'Inter', sans-serif; }
      `}</style>
    </main>
  );
}