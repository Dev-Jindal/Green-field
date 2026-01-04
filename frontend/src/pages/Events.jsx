import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, FileText } from "lucide-react";

import eventsData from "../data/eventsData";
import EventModal from "./EventModal";

const Events = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Open modal if URL has event ID
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

  return (
    <div className="relative w-full bg-slate-50">
      {/* ================= HERO ================= */}
      {/* Updated Background to Sage Green (#84A98C) and Text to Dark Green (#1B4D3E) */}
      <section className="bg-[#84A98C] text-[#1B4D3E] py-24 mt-20">
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

      {/* ================= EVENTS GRID ================= */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
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

              {/* Bottom Border Accent matches Dark Green Brand Color */}
              <div className="h-1 bg-[#1B4D3E]" />
            </motion.div>
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