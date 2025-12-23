import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  TrendingUp,
  Leaf,
  MapPin,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const jobOpenings = [
  {
    title: "Software Engineer – Full Stack",
    location: "Remote / India",
    experience: "1–3 Years",
    skills: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Data Engineer",
    location: "India",
    experience: "2–4 Years",
    skills: ["Python", "SQL", "ETL"],
  },
  {
    title: "Petroleum Engineer (Consulting)",
    location: "Hybrid",
    experience: "3+ Years",
    skills: ["Production", "Reservoir", "Forecasting"],
  },
  {
    title: "Intern – Software / Data",
    location: "Remote",
    experience: "Students / Freshers",
    skills: ["Programming", "Problem Solving"],
  },
];

const Careers = () => {
  return (
    <div className="bg-white font-sans overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#143d2c] text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#1f6f4a,_transparent_60%)]" />

        <motion.div
          className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <h1 className="text-5xl font-bold leading-tight">
              Build the Future of <br /> Energy & Engineering
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-xl">
              Work on real oil & gas challenges using engineering excellence,
              data intelligence, and sustainable innovation.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#open-positions"
                className="bg-white text-[#143d2c] px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                View Open Positions
              </a>
              <a
                href="#life-at-gots"
                className="border border-white/60 px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#143d2c] transition"
              >
                Life at GOTS
              </a>
            </div>
          </motion.div>

          {/* Glass Card */}
          <motion.div
            variants={fadeUp}
            className="hidden md:block backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl"
          >
            <p className="text-2xl font-semibold">
              Engineers. Analysts. Thinkers.
            </p>
            <p className="mt-4 text-gray-200">
              We value clarity, logic, and long-term impact.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section className="py-24 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-gray-900"
          >
            Why Work With Us
          </motion.h2>

          <div className="mt-14 grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Impactful Work",
                text: "Solve real oil & gas field problems.",
              },
              {
                icon: Users,
                title: "Engineering Culture",
                text: "Flat hierarchy & strong ownership.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                text: "Efficiency-driven solutions.",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                text: "Mentorship & learning.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <item.icon className="w-12 h-12 text-green-700 mx-auto" />
                <h3 className="mt-5 font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= LIFE AT GOTS ================= */}
      <section id="life-at-gots" className="py-24 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl font-bold text-gray-900">
              Life at GOTS
            </h2>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Collaborative engineering culture</li>
              <li>• Ownership from day one</li>
              <li>• Direct client & field exposure</li>
              <li>• Balanced work-life approach</li>
              <li>• Continuous learning mindset</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-gray-100 rounded-3xl p-10 shadow-inner"
          >
            <p className="text-2xl font-semibold text-gray-800">
              “We don’t hire roles. We hire problem-solvers.”
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section id="open-positions" className="py-24 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-center text-gray-900"
          >
            Open Positions
          </motion.h2>

          <div className="mt-14 space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {job.location} • {job.experience}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="border border-green-700 text-green-700 px-5 py-2 rounded-xl font-semibold hover:bg-green-50 transition">
                    View Details
                  </button>
                  <button className="bg-green-700 text-white px-5 py-2 rounded-xl font-semibold hover:bg-green-800 transition">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#143d2c] py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">
            Ready to Build Something Meaningful?
          </h2>
          <p className="mt-4 text-gray-200">
            Send your profile and let’s explore your future with us.
          </p>
          <a
            href="mailto:careers@greenfieldots.com"
            className="inline-block mt-6 bg-white text-[#143d2c] px-10 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            careers@greenfieldots.com
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Careers;
