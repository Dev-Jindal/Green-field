// import { Box, Workflow, Cpu, Mountain, Leaf, ArrowRight } from 'lucide-react';

// const Products = () => {
//   const products = [
//     {
//       icon: Box,
//       name: 'SandMaster',
//       tagline: 'Advanced Sand Management',
//       description:
//         'Comprehensive software solution for sand management in oil and gas operations. Monitor, predict, and optimize sand control strategies with real-time analytics.',
//       features: [
//         'Real-time sand production monitoring',
//         'Predictive analytics',
//         'Automated reporting',
//         'Risk assessment tools',
//       ],
//       color: 'from-amber-500 to-orange-600',
//       image: 'https://images.pexels.com/photos/5475755/pexels-photo-5475755.jpeg?auto=compress&cs=tinysrgb&w=800',
//     },
//     {
//       icon: Workflow,
//       name: 'AutoWellz',
//       tagline: 'Well Operation Workflow',
//       description:
//         'Streamline your well operations with automated workflow management. From planning to execution, manage every aspect of your well operations efficiently.',
//       features: [
//         'Workflow automation',
//         'Real-time collaboration',
//         'Document management',
//         'Compliance tracking',
//       ],
//       color: 'from-blue-500 to-cyan-600',
//       image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
//     },
//     {
//       icon: Cpu,
//       name: 'AutoPro',
//       tagline: 'Engineering Process Digitization',
//       description:
//         'Transform your engineering processes with digital solutions. Automate routine tasks, enhance accuracy, and improve efficiency across all engineering operations.',
//       features: [
//         'Process automation',
//         'Digital workflows',
//         'Data integration',
//         'Performance optimization',
//       ],
//       color: 'from-purple-500 to-pink-600',
//       image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
//     },
//     {
//       icon: Mountain,
//       name: 'RockMaster',
//       tagline: 'Rock Mechanical Stability',
//       description:
//         'Advanced rock mechanics analysis tool for evaluating wellbore stability, formation integrity, and geomechanical risks in drilling operations.',
//       features: [
//         'Wellbore stability analysis',
//         'Geomechanical modeling',
//         'Risk prediction',
//         'Formation evaluation',
//       ],
//       color: 'from-slate-500 to-gray-700',
//       image: 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&w=800',
//     },
//     {
//       icon: Leaf,
//       name: 'GREEN',
//       tagline: 'GHG Emissions Calculator',
//       description:
//         'Calculate, track, and reduce your carbon footprint with our comprehensive greenhouse gas emissions calculator. Support your sustainability goals with accurate data.',
//       features: [
//         'Emissions calculation',
//         'Carbon footprint tracking',
//         'Sustainability reporting',
//         'Reduction strategies',
//       ],
//       color: 'from-green-500 to-emerald-600',
//       image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
//     },
//   ];

//   return (
//     <div className="pt-20">
//       <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
//             <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
//               Innovative software solutions designed to revolutionize your oil and gas
//               operations
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-24">
//             {products.map((product, index) => (
//               <div
//                 key={index}
//                 className={`grid md:grid-cols-2 gap-12 items-center ${
//                   index % 2 === 1 ? 'md:grid-flow-dense' : ''
//                 }`}
//               >
//                 <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
//                   <div
//                     className={`bg-gradient-to-br ${product.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
//                   >
//                     <product.icon className="w-10 h-10 text-white" />
//                   </div>
//                   <h2 className="text-4xl font-bold text-gray-800 mb-2">
//                     {product.name}
//                   </h2>
//                   <p className={`text-lg font-semibold bg-gradient-to-r ${product.color} bg-clip-text text-transparent mb-4`}>
//                     {product.tagline}
//                   </p>
//                   <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                     {product.description}
//                   </p>

//                   <div className="mb-8">
//                     <h3 className="text-xl font-bold text-gray-800 mb-4">
//                       Key Features
//                     </h3>
//                     <ul className="space-y-3">
//                       {product.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-center gap-3">
//                           <div
//                             className={`bg-gradient-to-br ${product.color} w-2 h-2 rounded-full`}
//                           ></div>
//                           <span className="text-gray-700">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <button
//                     className={`bg-gradient-to-r ${product.color} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2`}
//                   >
//                     Learn More
//                     <ArrowRight className="w-5 h-5" />
//                   </button>
//                 </div>

//                 <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
//                   <div className="relative">
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl opacity-20 blur-3xl`}
//                     ></div>
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//               Why Choose Our Products?
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Industry-leading solutions backed by innovation and expertise
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-md">
//               <div className="text-5xl font-bold text-green-600 mb-4">15+</div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">
//                 Successful Implementations
//               </h3>
//               <p className="text-gray-600">
//                 Proven track record across diverse projects
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-xl shadow-md">
//               <div className="text-5xl font-bold text-blue-600 mb-4">24/7</div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">
//                 Technical Support
//               </h3>
//               <p className="text-gray-600">
//                 Round-the-clock assistance for all our products
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-xl shadow-md">
//               <div className="text-5xl font-bold text-purple-600 mb-4">100%</div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">
//                 Customizable
//               </h3>
//               <p className="text-gray-600">
//                 Tailored solutions for your specific needs
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready to Transform Your Operations?
//           </h2>
//           <p className="text-xl text-gray-100 leading-relaxed mb-8">
//             Request a demo or contact us to learn how our products can help you achieve
//             your operational goals
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <a
//               href="/contact"
//               className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Request a Demo
//             </a>
//             <a
//               href="/contact"
//               className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300"
//             >
//               Contact Sales
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Products;



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
        "Calculate, track, and reduce your carbon footprint with our comprehensive emissions calculator. Support sustainability goals with accurate data.",
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
      {/* HERO */}
      <section className="bg-[#6AB165] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Innovative software solutions designed to enhance and optimize energy & engineering operations.
          </p>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {products.map((product, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Text */}
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="bg-[#6AB165] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <product.icon className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-4xl font-bold text-black mb-2">
                  {product.name}
                </h2>

                <p className="text-lg font-semibold text-black mb-4">
                  {product.tagline}
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-black mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="bg-[#6AB165] w-2 h-2 rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#6AB165] rounded-2xl opacity-20 blur-3xl"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose Our Products?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-16">
            Industry-leading tools backed by innovation, research, and real-world results.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-[#6AB165] mb-4">15+</div>
              <h3 className="text-xl font-bold text-black mb-2">
                Successful Implementations
              </h3>
              <p className="text-gray-700">Proven track record across global projects.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-black mb-4">24/7</div>
              <h3 className="text-xl font-bold text-black mb-2">Technical Support</h3>
              <p className="text-gray-700">
                Dedicated round-the-clock assistance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-black mb-4">100%</div>
              <h3 className="text-xl font-bold text-black mb-2">Customizable</h3>
              <p className="text-gray-700">
                Fully adaptable to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#6AB165] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-100 leading-relaxed mb-8">
            Request a demo or contact us to learn how our products can drive efficiency.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request a Demo
            </a>

            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
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
