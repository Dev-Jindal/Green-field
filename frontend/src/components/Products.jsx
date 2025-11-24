
import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Products({ products }) {
  // intersection observer for reveal (optional duplicate if you already have global)
  useEffect(() => {
    const cards = document.querySelectorAll(".product-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect?.();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-2">Our Products</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Innovative digital solutions built for the future of energy.</p>
        </div>

        {products.map((product, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center product-card opacity-0 translate-y-10 transition-all duration-700 ease-out ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
          >
            <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
              <div className="bg-[#1B4D3E] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <product.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#1B4D3E] mb-2">{product.name}</h3>
              <p className="text-lg font-semibold text-[#1B4D3E] mb-3">{product.tagline}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

              <ul className="space-y-2 mb-6">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-[#1B4D3E] w-2 h-2 rounded-full" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>

              <Link to="/products" className="bg-[#1B4D3E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#153c30] transition inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[#1B4D3E] opacity-10 blur-3xl"></div>
                <img src={product.image} alt={`${product.name} product`} className="relative rounded-2xl w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
