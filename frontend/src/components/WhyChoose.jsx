import React from "react";
import { Zap, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyChoose() {
  return (
    <section className="py-20 bg-[#1B4D3E] text-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why G.O.T.S?
          </h2>

          <div className="space-y-8">
            {/* 1 */}
            <div className="flex items-start gap-4">
              <Zap className="w-10 h-10 text-white" />
              <div>
                <h3 className="text-xl font-semibold">Innovative Solutions</h3>
                <p className="text-gray-200">
                  Research-based, cutting-edge technology tailored to your needs.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-start gap-4">
              <Users className="w-10 h-10 text-white" />
              <div>
                <h3 className="text-xl font-semibold">Global Expertise</h3>
                <p className="text-gray-200">
                  World-class team of engineering consultants and developers.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-start gap-4">
              <Award className="w-10 h-10 text-white" />
              <div>
                <h3 className="text-xl font-semibold">Cost-Effective</h3>
                <p className="text-gray-200">
                  Efficient solutions without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white/10 p-10 rounded-2xl backdrop-blur border border-white/30">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-100 mb-6 leading-relaxed">
            To provide world-class oil and gas consultancy along with innovative
            customized software solutions that drive sustainability and
            efficiency in the energy sector.
          </p>

          <Link
            to="/about"
            className="bg-white text-[#1B4D3E] px-6 py-3 rounded-lg inline-flex items-center gap-2 font-semibold"
          >
            Learn More <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
