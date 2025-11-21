import { Box, Workflow, Cpu, Mountain, Leaf, ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Box,
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
      image:
        "https://images.pexels.com/photos/5475755/pexels-photo-5475755.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Workflow,
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
      image:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Cpu,
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
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Mountain,
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
      image:
        "https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Leaf,
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
      image:
        "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="pt-20">

      {/* ============= HERO ============= */}
      <section className="bg-[#1B4D3E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Innovative software solutions built for the future of engineering and energy.
          </p>
        </div>
      </section>

      {/* ============= PRODUCT LIST ============= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-24">

          {products.map((product, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* TEXT */}
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="bg-[#1B4D3E] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <product.icon className="w-10 h-10 text-white" />
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

                {/* FEATURES */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#1B4D3E] mb-4">
                    Key Features
                  </h3>

                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="bg-[#1B4D3E] w-2 h-2 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="bg-[#1B4D3E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#153c30] transition-all duration-300 flex items-center gap-2 shadow-lg">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* IMAGE */}
              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#1B4D3E] rounded-2xl opacity-20 blur-3xl"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ============= WHY CHOOSE US ============= */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
            Why Choose Our Products?
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-16">
            Industry-leading tools backed by innovation, research, and reliable performance.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-5xl font-bold text-[#1B4D3E] mb-4">15+</div>
              <h3 className="text-xl font-bold mb-2">Successful Deployments</h3>
              <p className="text-gray-700">Proven across global projects.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-5xl font-bold text-[#1B4D3E] mb-4">24/7</div>
              <h3 className="text-xl font-bold mb-2">Technical Support</h3>
              <p className="text-gray-700">Reliable assistance anytime.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-5xl font-bold text-[#1B4D3E] mb-4">100%</div>
              <h3 className="text-xl font-bold mb-2">Customizable</h3>
              <p className="text-gray-700">Tailored to your exact needs.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ============= CTA ============= */}
      <section className="py-20 bg-[#1B4D3E] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>

          <p className="text-xl text-gray-200 leading-relaxed mb-10">
            Request a demo or speak with our team to learn how our tools can enhance your operations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="bg-white text-[#1B4D3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Request a Demo
            </a>

            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1B4D3E] transition-all duration-300"
            >
              Contact Sales
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Products;
