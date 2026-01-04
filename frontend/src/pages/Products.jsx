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

import { ArrowRight } from "lucide-react"; // Only ArrowRight is needed now
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const productRef = useRef(null);

  const products = [
    {
      // Replaced Lucide component with image path
      icon: "/images/icons/SandMaster.jpg", 
      name: "SandMaster",
      tagline: "Advanced Sand Management",
      description:
        "Comprehensive software solution for sand management in oil and gas operations. Monitor, predict, and optimize sand control strategies with real-time analytics.",
      features: [
        "Real-time sand production monitoring",
        "Predictive analytics",
        "Automated reporting",
        "Risk assessment tools",
      ],
      video:
        "https://player.vimeo.com/video/637143154?autoplay=1&muted=1&loop=1&background=1",
    },
    {
      icon: "/images/icons/RockMaster.jpg",
      name: "RockMaster",
      tagline: "Rock Mechanical Stability",
      description:
        "Advanced rock mechanics analysis tool for evaluating wellbore stability, formation integrity, and geomechanical risks.",
      features: [
        "Wellbore stability analysis",
        "Geomechanical modeling",
        "Risk prediction",
        "Formation evaluation",
      ],
      video: "/video/RockMaster_Final.mp4",
    },
    {
      icon: "/images/icons/AutoWellz.jpg",
      name: "AutoWellz",
      tagline: "Well Operation Workflow",
      description:
        "Streamline your well operations with automated workflow management. From planning to execution, manage every aspect efficiently.",
      features: [
        "Workflow automation",
        "Real-time collaboration",
        "Document management",
        "Compliance tracking",
      ],
      video:
        "https://player.vimeo.com/video/686737424?autoplay=1&muted=1&loop=1&background=1",
    },
    {
      icon: "/images/icons/AutoPro.jpg",
      name: "AutoPro",
      tagline: "Engineering Process Digitization",
      description:
        "Transform your engineering processes with digital solutions. Automate routine tasks, enhance accuracy, and improve efficiency.",
      features: [
        "Process automation",
        "Digital workflows",
        "Data integration",
        "Performance optimization",
      ],
      video: "/video/autopro.mp4",
    },
    {
      icon: "/images/icons/GREEN.jpg",
      name: "GREEN",
      tagline: "GHG Emissions Calculator",
      description:
        "Calculate, track, and reduce your carbon footprint with our comprehensive emissions calculator.",
      features: [
        "Emissions calculation",
        "Carbon footprint tracking",
        "Sustainability reporting",
        "Reduction strategies",
      ],
      video:
        "https://player.vimeo.com/video/686737424?autoplay=1&muted=1&loop=1&background=1",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".product-card");
      gsap.from(cards, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: productRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, productRef);
    return () => ctx.revert();
  }, []);

  const words = ["Energy Software", "Digital Products", "Engineering Platforms"];
const [typed, setTyped] = useState("");
const [index, setIndex] = useState(0);
const [subIndex, setSubIndex] = useState(0);

useEffect(() => {
  if (subIndex === words[index].length + 1) {
    setTimeout(() => {
      setSubIndex(0);
      setIndex((index + 1) % words.length);
    }, 1200);
    return;
  }

  const timeout = setTimeout(() => {
    setTyped(words[index].substring(0, subIndex));
    setSubIndex(subIndex + 1);
  }, 120);

  return () => clearTimeout(timeout);
}, [subIndex, index]);

  return (
    <section className="py-20 bg-white" ref={productRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 ">
        {/* FULL WIDTH BACKGROUND WRAPPER */}
<div className="w-full bg-[#AFE1AF] py-16 mb-12">

  {/* CONTENT CONTAINER */}
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-3">
      Our Products
    </h2>

    <p className="text-[#0F2F27] max-w-2xl mx-auto leading-relaxed text-lg">
      Innovative digital solutions built for the future of energy.
    </p>

    {/* CARET STYLE */}
    <style>{`
      .caret::after {
        content: "|";
        display: inline-block;
        margin-left: 6px;
        animation: blink 1s steps(2, end) infinite;
        color: #1B4D3E;
      }
      @keyframes blink {
        50% { opacity: 0; }
      }
    `}</style>

    {/* TYPING ANIMATION */}
    <div className="mt-6 text-xl md:text-2xl font-semibold text-[#1B4D3E]">
      Specializing in
      <span className="ml-2 caret text-2xl md:text-3xl font-bold">
        {typed}
      </span>
    </div>

  </div>
</div>



        {products.map((product, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center product-card ${
              index % 2 === 1 ? "md:grid-flow-dense" : ""
            }`}
          >
            {/* TEXT SECTION */}
            <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
              {/* IMAGE ICON CONTAINER - Same dimensions (w-20 h-20) */}
              <div className="w-20 h-20 mb-6 shadow-lg rounded-2xl">
                 <img 
                   src={product.icon} 
                   alt={`${product.name} Icon`} 
                   className="w-full h-full object-cover rounded-2xl" 
                 />
              </div>

              <h3 className="text-3xl font-bold text-[#1B4D3E] mb-2">
                {product.name}
              </h3>

              <p className="text-lg font-semibold text-[#1B4D3E] mb-3">
                {product.tagline}
              </p>

              <p className="text-gray-700 mb-6">
                {product.description}
              </p>

              <ul className="space-y-2 mb-6">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="bg-[#1B4D3E] w-2 h-2 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/products"
                className="bg-[#1B4D3E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#153c30] transition inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* MEDIA SECTION */}
            <div
              className={`${
                index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
              }`}
            >
              <div className="relative w-full h-[300px] md:h-[350px] border-[3px] border-[#1B4D3E] rounded-xl overflow-hidden shadow-xl">
                {product.video ? (
                  product.video.includes("vimeo") ? (
                    <iframe
                      src={product.video}
                      className="w-full h-full object-cover"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={product.name}
                    />
                  ) : (
                    <video
                      src={product.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <img
                    src={product.image} // Note: Your data didn't have a 'product.image' property for the main media, but keeping logic just in case
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}