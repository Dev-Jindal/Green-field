import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, FileText } from "lucide-react";

import eventsData from "../data/eventsData";
import EventModal from "./EventModal";

const Events = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeYear, setActiveYear] = useState("All");

  // ---------------- OPEN MODAL FROM URL ----------------
  useEffect(() => {
    if (id) {
      const event = eventsData.find((e) => e.id === Number(id));
      if (event) {
        setSelectedEvent(event);
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "unset";
    }
  }, [id]);

  const openEvent = (event) => {
    navigate(`/events/${event.id}`);
  };

  const closeEvent = () => {
    setSelectedEvent(null);
    navigate("/events");
    document.body.style.overflow = "unset";
  };

  // ---------------- EXTRACT YEAR FROM DATE ----------------
  const getYear = (date) => {
    const match = date.match(/\d{4}/);
    return match ? match[0] : "Unknown";
  };

  // ---------------- UNIQUE YEARS ----------------
  const years = useMemo(() => {
    const uniqueYears = [...new Set(eventsData.map((e) => getYear(e.date)))];
    return uniqueYears.sort((a, b) => b - a); // latest first
  }, []);

  // ---------------- GROUP EVENTS BY YEAR ----------------
  const groupedEvents = useMemo(() => {
    const groups = {};
    eventsData.forEach((event) => {
      const year = getYear(event.date);
      if (!groups[year]) groups[year] = [];
      groups[year].push(event);
    });
    return groups;
  }, []);

  return (
    <div className="relative w-full bg-slate-50">

      {/* ================= HERO ================= */}
      <section className="bg-[#AFE1AF] text-[#1B4D3E] py-24 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            News & <span className="text-white">Events</span>
          </motion.h1>

          <p className="text-lg text-[#1B4D3E] max-w-2xl mx-auto font-medium">
            Tracking our journey in sustainability, innovation, and industry leadership.
          </p>
        </div>
      </section>

      {/* ================= YEAR FILTER ================= */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveYear("All")}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
              activeYear === "All"
                ? "bg-[#1B4D3E] text-white"
                : "bg-white text-[#1B4D3E] border hover:bg-[#AFE1AF]"
            }`}
          >
            All
          </button>

          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
                activeYear === year
                  ? "bg-[#1B4D3E] text-white"
                  : "bg-white text-[#1B4D3E] border hover:bg-[#AFE1AF]"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </section>

      {/* ================= EVENTS BY YEAR ================= */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto space-y-20">

          {(activeYear === "All" ? years : [activeYear]).map((year) => (
            <div key={year}>
              {/* YEAR HEADING */}
              <h2 className="text-3xl font-extrabold text-[#1B4D3E] mb-10">
                {year}
              </h2>

              {/* EVENTS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedEvents[year]?.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 flex flex-col overflow-hidden group"
                  >
                    <div className="p-7 flex flex-col flex-1">

                      {/* Date */}
                      <div className="flex items-center gap-2 text-[#1B4D3E] text-xs font-bold uppercase mb-4">
                        <Calendar size={14} />
                        {event.date}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1B4D3E] transition-colors">
                        {event.title}
                      </h3>

                      {/* Preview */}
                      <p className="text-gray-600 text-sm mb-8 line-clamp-3">
                        {event.preview}
                      </p>

                      {/* Actions */}
                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                        <button
                          onClick={() => openEvent(event)}
                          className="group/btn flex items-center text-[#1B4D3E] font-bold text-sm hover:text-[#2e7d32]"
                        >
                          READ UPDATE
                          <ArrowRight
                            size={16}
                            className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                          />
                        </button>

                        {event.pdf && (
                          <span className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                            <FileText size={16} />
                            Brief
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Border Accent */}
                    <div className="h-1 bg-[#1B4D3E]" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={closeEvent} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
