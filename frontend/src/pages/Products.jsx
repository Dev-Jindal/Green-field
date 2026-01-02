import { Box, Workflow, Cpu, Mountain, Leaf, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      icon: Box,
      name: "SandMaster",
      tagline: "Advanced Sand Management",
      description:
        "Comprehensive software solution for sand management...",
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
      icon: Workflow,
      name: "AutoWellz",
      tagline: "Well Operation Workflow",
      description:
        "Streamline your well operations with automated workflow...",
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
      icon: Cpu,
      name: "AutoPro",
      tagline: "Engineering Process Digitization",
      description:
        "Transform your engineering processes with digital solutions...",
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
      icon: Mountain,
      name: "RockMaster",
      tagline: "Rock Mechanical Stability",
      description:
        "Advanced rock mechanics analysis tool...",
      features: [
        "Wellbore stability analysis",
        "Geomechanical modeling",
        "Risk prediction",
        "Formation evaluation",
      ],
      video:
        "/video/RockMaster_Final.mp4",
      link: "/products/rockmaster",
    },
    {
      icon: Leaf,
      name: "GREEN",
      tagline: "GHG Emissions Calculator",
      description:
        "Calculate and track your carbon footprint...",
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

  return (
    <div className="pt-20">
      <section className="bg-[#AFE1AF] text-[#1B4D3E] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Innovative software solutions built for the future of engineering and energy.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {products.map((product, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="bg-[#AFE1AF] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">

                  <product.icon className="w-10 h-10 text-[#1B4D3E]" />
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

                {/* UPDATED BUTTON WITH NAVIGATION */}
                <button
                  onClick={() => navigate(product.link)}
                  className="bg-[#1B4D3E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#153c30] transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[#1B4D3E] opacity-20 blur-3xl"></div>

                  {product.video ? (
                    <iframe
                      src={product.video}
                      className="relative w-full h-[350px] md:h-[420px] rounded-2xl"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
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
};

export default Products;
