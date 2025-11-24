import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Hero with typewriter effect. Keeps local state and caret style.
 * Now includes the fix for transitioning from typing to deleting.
 */
export default function Hero() {
  const phrases = [
    "Energy Excellence",
    "Sustainable Solutions",
    "Production Optimization",
  ];
  const [typed, setTyped] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    const current = phrases[phraseIndex];
    const typingSpeed = deleting ? 30 : 70; // Faster deletion
    const completePause = 800; // Pause at the end of a word

    if (!deleting) {
      // --- FIX: Check if the word is already complete before typing the next character ---
      if (charIndex === current.length) {
        // Word is complete. Set the pause, then start deleting.
        timeoutId = setTimeout(() => setDeleting(true), completePause);
      } else {
        // Word is still being typed (Forward motion: Left-to-Right)
        timeoutId = setTimeout(() => {
          setTyped(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, typingSpeed);
      }
    } else {
      // Deleting phase (Backward motion: Right-to-Left roll back)
      timeoutId = setTimeout(() => {
        setTyped(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);

        if (charIndex - 1 === 0) {
          // Deletion complete. Switch back to typing the next phrase.
          setDeleting(false);
          setPhraseIndex((p) => (p + 1) % phrases.length);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section className="relative bg-[#1B4D3E] text-white py-20 overflow-hidden">
      {/* small inline css for caret and blink animation */}
      <style>{`
        .caret::after {
          content: "|";
          display: inline-block;
          margin-left: 6px;
          animation: blink 1s steps(2,end) infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="block">Innovative Solutions for</span>
              <span className="block md:inline text-[#e8f5e9] text-4xl md:text-5xl caret">
                {typed}
              </span>
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl">
              Providing cutting-edge engineering consultancy and customized
              software solutions for the oil and gas industry since 2015.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/schedule-demo"
                className="bg-white text-[#1B4D3E] px-6 py-3 rounded-lg font-semibold shadow transition transform hover:-translate-y-1"
              >
                Book a Demo
              </Link>

              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1B4D3E] px-6 py-3 rounded-lg font-semibold transition"
              >
                Our Services
              </Link>

              
            </div>
          </div>

          {/* right visual */}
          <div className="relative w-full max-w-xl mx-auto z-10">
            <div className="absolute inset-0 rounded-full bg-[#1B4D3E] opacity-20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-black/5">
              <video
                src="/video/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[320px] md:h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}