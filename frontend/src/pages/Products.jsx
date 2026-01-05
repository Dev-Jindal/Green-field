import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const navigate = useNavigate();
  const productRef = useRef(null);

  const products = [
    {
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
      link: "/products/sandmaster",
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
      link: "/products/autowellz",
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
      link: "/products/autopro",
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
      link: "/products/rockmaster",
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
      link: "/products/green",
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

  return (
    <div className="pt-20">
      {/* Header Section with Sage Green Background */}
      <section className="bg-[#84A98C] text-[#1B4D3E] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-[#1B4D3E] max-w-3xl mx-auto font-medium">
            Innovative software solutions built for the future of engineering and
            energy.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white" ref={productRef}>
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {products.map((product, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center product-card ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* TEXT COLUMN */}
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                {/* ICON CONTAINER */}
                <div className="bg-[#84A98C] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg overflow-hidden p-1">
                  <img
                    src={product.icon}
                    alt={`${product.name} icon`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <h2 className="text-4xl font-bold text-[#1B4D3E] mb-2">
                  {product.name}
                </h2>

                <p className="text-lg font-semibold text-[#1B4D3E] mb-4">
                  {product.tagline}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#1B4D3E] mb-4">
                    Key Features
                  </h3>

                  <ul className="space-y-3">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="bg-[#1B4D3E] w-2 h-2 rounded-full"></div>
                        <span className="text-gray-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => navigate(product.link)}
                  className="bg-white text-[#1B4D3E] border-2 border-[#1B4D3E] px-8 py-3 rounded-lg font-bold hover:bg-[#1B4D3E] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-xl"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* MEDIA COLUMN (Video/Image) */}
              <div
                className={
                  index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                }
              >
                {/* VIDEO FRAME CONTAINER
                   Restored exact style from your reference: 
                   relative, rounded-2xl, overflow-hidden, shadow-2xl
                   Added 'aspect-video' to maintain perfect ratio for video content.
                */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full group bg-gray-100">
                  
                  {/* Background Blur Effect */}
                  <div className="absolute inset-0 bg-[#1B4D3E] opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20"></div>

                  {product.video ? (
                    product.video.includes("vimeo") ? (
                      <iframe
                        src={product.video}
                        className="w-full h-full relative z-10"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={product.name}
                      ></iframe>
                    ) : (
                      <video
                        src={product.video}
                        className="w-full h-full object-cover relative z-10"
                        autoPlay
                        muted
                        loop
                        playsInline
                      ></video>
                    )
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover relative z-10 hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}