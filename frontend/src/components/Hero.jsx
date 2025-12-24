



// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ThreeJSBackground from "./ThreeJSBackground"; // Import the 3D component

export default function Hero() {
  // Existing typewriter logic (copied for completeness, assuming it's the working one)
  const phrases = ["Energy Excellence", "Sustainable Solutions", "Production Optimization"];
  const [typed, setTyped] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    const current = phrases[phraseIndex];
    const typingSpeed = deleting ? 30 : 70;
    const completePause = 800;

    if (!deleting) {
      if (charIndex === current.length) {
        timeoutId = setTimeout(() => setDeleting(true), completePause);
      } else {
        timeoutId = setTimeout(() => {
          setTyped(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, typingSpeed);
      }
    } else {
      timeoutId = setTimeout(() => {
        setTyped(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((p) => (p + 1) % phrases.length);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, deleting, phraseIndex]);
  // End of typewriter logic

  return (
    <section className="relative bg-[#1B4D3E] text-white py-24 overflow-hidden">
      {/* 3D Background Integration */}
      <ThreeJSBackground /> 

      {/* Static Color Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" /> 
      
      {/* Caret Style */}
      <style>{`
        .caret::after {
          content: "|";
          display: inline-block;
          margin-left: 6px;
          animation: blink 1s steps(2,end) infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Innovative Solutions for
              <span className="block md:inline text-[#e8f5e9] caret">
                {" "}{typed}
              </span>
            </h1>
            {/* ... rest of the content (omitted for brevity) ... */}
            <p className="text-xl text-gray-200 leading-relaxed">
               Providing cutting-edge engineering consultancy and customized
               software solutions for the oil and gas industry since 2015.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to="/schedule-demo" className="bg-white text-[#1B4D3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 shadow-lg transition">
                 Book a Demo
               </Link>
               <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-[#1B4D3E] px-8 py-4 rounded-lg font-semibold transition">
                  Our Services
               </Link>
            </div>
          </div>
          {/* RIGHT VIDEO (omitted for brevity) */}
          <div className="relative w-full max-w-xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black/10">
              <video
                src="/video/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[330px] md:h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}