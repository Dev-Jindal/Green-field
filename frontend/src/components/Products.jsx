
// import React, { useEffect } from "react";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Products({ products }) {
//   // intersection observer for reveal (optional duplicate if you already have global)
//   useEffect(() => {
//     const cards = document.querySelectorAll(".product-card");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("opacity-100", "translate-y-0");
//             entry.target.classList.remove("opacity-0", "translate-y-10");
//           }
//         });
//       },
//       { threshold: 0.12 }
//     );
//     cards.forEach((c) => observer.observe(c));
//     return () => observer.disconnect?.();
//   }, []);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-2">Our Products</h2>
//           <p className="text-gray-700 max-w-2xl mx-auto">Innovative digital solutions built for the future of energy.</p>
//         </div>

//         {products.map((product, index) => (
//           <div
//             key={index}
//             className={`grid md:grid-cols-2 gap-10 items-center product-card opacity-0 translate-y-10 transition-all duration-700 ease-out ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
//           >
//             <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
//               <div className="bg-[#1B4D3E] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
//                 <product.icon className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-3xl font-bold text-[#1B4D3E] mb-2">{product.name}</h3>
//               <p className="text-lg font-semibold text-[#1B4D3E] mb-3">{product.tagline}</p>
//               <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

//               <ul className="space-y-2 mb-6">
//                 {product.features.map((f, i) => (
//                   <li key={i} className="flex items-center gap-3">
//                     <div className="bg-[#1B4D3E] w-2 h-2 rounded-full" />
//                     <span className="text-gray-700">{f}</span>
//                   </li>
//                 ))}
//               </ul>

//               <Link to="/products" className="bg-[#1B4D3E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#153c30] transition inline-flex items-center gap-2">
//                 Learn More <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>

//             <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//                 <div className="absolute inset-0 bg-[#1B4D3E] opacity-10 blur-3xl"></div>
//                 <img src={product.image} alt={`${product.name} product`} className="relative rounded-2xl w-full object-cover hover:scale-105 transition-transform duration-500" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




// // src/components/Products.jsx
// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import gsap from 'gsap';

// export default function Products({ products }) {
//   const productRef = useRef(null);

//   useEffect(() => {
//     // GSAP Context ensures animations are clean and scope-specific
//     const ctx = gsap.context(() => {
//       // Find all elements with the class '.product-card' inside the main ref
//       const cards = gsap.utils.toArray(productRef.current.querySelectorAll('.product-card'));
      
//       cards.forEach((card) => {
//         // Staggered animation: start transparent and shifted down, then fade in and move up
//         gsap.from(card, {
//           opacity: 0,
//           y: 80, // Start 80px below its final position
//           duration: 1.0,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%", // Start animation when the top of the card hits 85% of the viewport height
//             toggleActions: "play none none none", // Only play on scroll down
//           }
//         });
//       });
//     }, productRef);

//     return () => ctx.revert();
//   }, [products]);

//   return (
//     <section className="py-20 bg-white" ref={productRef}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
//             Our Products
//           </h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//             Innovative digital solutions built for the future of energy.
//           </p>
//         </div>

//         {products.map((product, index) => (
//           <div
//             key={index}
//             // Add the GSAP class and initial styles (will be overridden by GSAP, but good fallback)
//             className={`grid md:grid-cols-2 gap-12 items-center product-card opacity-0 ${ 
//               index % 2 === 1 ? "md:grid-flow-dense" : ""
//             }`}
//           >
//             {/* ... (rest of the product card HTML structure) ... */}
//             <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
//                 <div className="bg-[#1B4D3E] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
//                     <product.icon className="w-10 h-10 text-white" />
//                 </div>
//                 <h2 className="text-4xl font-bold text-[#1B4D3E] mb-2">{product.name}</h2>
//                 <p className="text-lg font-semibold text-[#1B4D3E] mb-4">{product.tagline}</p>
//                 <p className="text-lg text-gray-700 mb-6 leading-relaxed">{product.description}</p>
//                 <div className="mb-8">
//                     <h3 className="text-xl font-bold text-[#1B4D3E] mb-4">Key Features</h3>
//                     <ul className="space-y-3">
//                         {product.features.map((feature, idx) => (
//                             <li key={idx} className="flex items-center gap-3">
//                                 <div className="bg-[#1B4D3E] w-2 h-2 rounded-full" />
//                                 <span className="text-gray-700">{feature}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <Link to="/products" className="bg-[#1B4D3E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#153c30] transition">
//                     Learn More
//                 </Link>
//             </div>

//             <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
//                 <div className="relative">
//                     <div className="absolute inset-0 bg-[#1B4D3E] rounded-2xl opacity-20 blur-3xl"></div>
//                     <img
//                         src={product.image}
//                         alt={product.name}
//                         className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
//                     />
//                 </div>
//             </div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// src/components/Products.jsx (MINIMAL CHANGE)
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from 'gsap'; // 1. Import GSAP

export default function Products({ products }) {
  const productRef = useRef(null); // 2. Create a ref for the section container

  useEffect(() => {
    // 3. Set up GSAP context for safe animations and cleanup
    const ctx = gsap.context(() => {
      
      // Select all product cards using the class selector
      const cards = gsap.utils.toArray('.product-card');
      
      // --- GSAP ScrollTrigger Staggered Reveal ---
      gsap.from(cards, {
        opacity: 0,
        y: 80, // Start 80px below their final position
        duration: 1.0,
        ease: "power3.out", // Use a more dramatic ease for a nice effect
        stagger: 0.15, // Sequential delay of 0.15s between each card animation
        scrollTrigger: {
          trigger: productRef.current, // Use the main section ref as the trigger
          start: "top 85%", // Start the animation when the top of the section is 85% down the viewport
          toggleActions: "play none none none", // Only play the animation once
        }
      });
      
    }, productRef); // Scope the context to the product section

    // 4. Cleanup function to revert the GSAP context
    return () => ctx.revert();
  }, [products]);

  return (
    // 5. Attach the ref to the section element
    <section className="py-20 bg-white" ref={productRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-2">Our Products</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Innovative digital solutions built for the future of energy.</p>
        </div>

        {products.map((product, index) => (
          <div
            key={index}
            // 6. Use 'product-card' class for GSAP targeting and remove the old transition classes
            className={`grid md:grid-cols-2 gap-10 items-center product-card ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
          >
            {/* ... Product Details (no change) ... */}
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

            {/* ... Product Image (no change) ... */}
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