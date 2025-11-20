// import { Code, Briefcase, GraduationCap, Wrench, LineChart, Shield } from 'lucide-react';

// const Services = () => {
//   const mainServices = [
//     {
//       icon: Briefcase,
//       title: 'Engineering Consultancy',
//       description: 'Comprehensive engineering solutions tailored to your specific needs',
//       features: [
//         'Reservoir Engineering',
//         'Production Optimization',
//         'Well Design & Planning',
//         'Risk Assessment',
//         'Field Development Studies',
//       ],
//       color: 'from-blue-500 to-blue-700',
//     },
//     {
//       icon: Code,
//       title: 'Software Development',
//       description: 'Custom software solutions designed for the energy industry',
//       features: [
//         'Workflow Automation',
//         'Data Management Systems',
//         'Real-time Monitoring',
//         'Cloud-based Solutions',
//         'Mobile Applications',
//       ],
//       color: 'from-green-500 to-green-700',
//     },
//     {
//       icon: GraduationCap,
//       title: 'Customized Training',
//       description: 'Professional development programs for industry professionals',
//       features: [
//         'Technical Workshops',
//         'Software Training',
//         'Best Practices',
//         'Industry Standards',
//         'Certification Programs',
//       ],
//       color: 'from-purple-500 to-purple-700',
//     },
//   ];

//   const additionalServices = [
//     {
//       icon: Wrench,
//       title: 'Technical Support',
//       description: 'Round-the-clock technical assistance for all our products and services',
//     },
//     {
//       icon: LineChart,
//       title: 'Performance Analysis',
//       description: 'Detailed analytics and reporting to optimize your operations',
//     },
//     {
//       icon: Shield,
//       title: 'Quality Assurance',
//       description: 'Rigorous testing and quality control for all deliverables',
//     },
//   ];

//   return (
//     <div className="pt-20">
//       <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
//             <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
//               Comprehensive solutions designed to optimize your operations and drive
//               innovation in the energy sector
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-16">
//             {mainServices.map((service, index) => (
//               <div
//                 key={index}
//                 className={`grid md:grid-cols-2 gap-12 items-center ${
//                   index % 2 === 1 ? 'md:flex-row-reverse' : ''
//                 }`}
//               >
//                 <div className={index % 2 === 1 ? 'md:order-2' : ''}>
//                   <div
//                     className={`bg-gradient-to-br ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}
//                   >
//                     <service.icon className="w-10 h-10 text-white" />
//                   </div>
//                   <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                     {service.title}
//                   </h2>
//                   <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                     {service.description}
//                   </p>
//                   <ul className="space-y-3">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-3">
//                         <div className={`bg-gradient-to-br ${service.color} w-2 h-2 rounded-full`}></div>
//                         <span className="text-gray-700 font-medium">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className={index % 2 === 1 ? 'md:order-1' : ''}>
//                   <div className="relative">
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-20 blur-2xl`}
//                     ></div>
//                     <img
//                       src={
//                         index === 0
//                           ? 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
//                           : index === 1
//                           ? 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800'
//                           : 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800'
//                       }
//                       alt={service.title}
//                       className="relative rounded-2xl shadow-2xl"
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
//               Additional Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Supporting your success every step of the way
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {additionalServices.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="bg-gradient-to-br from-green-500 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
//                   <service.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-4xl mx-auto">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Why Choose Our Services?
//             </h2>
//             <div className="grid md:grid-cols-3 gap-8 mt-12">
//               <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
//                 <div className="text-4xl font-bold mb-2">15+</div>
//                 <div className="text-gray-100">Successful Projects</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
//                 <div className="text-4xl font-bold mb-2">10+</div>
//                 <div className="text-gray-100">Satisfied Clients</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
//                 <div className="text-4xl font-bold mb-2">100%</div>
//                 <div className="text-gray-100">Quality Guaranteed</div>
//               </div>
//             </div>
//             <p className="text-xl text-gray-100 leading-relaxed mt-12">
//               Our services are backed by years of experience, cutting-edge technology,
//               and a commitment to excellence. We work closely with each client to
//               understand their unique needs and deliver solutions that exceed expectations.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//             Ready to Get Started?
//           </h2>
//           <p className="text-xl text-gray-600 mb-8">
//             Let's discuss how our services can help transform your operations
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Contact Us Today
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;


import { Code, Briefcase, GraduationCap, Wrench, LineChart, Shield } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Briefcase,
      title: 'Engineering Consultancy',
      description: 'Comprehensive engineering solutions tailored to your specific needs',
      features: [
        'Reservoir Engineering',
        'Production Optimization',
        'Well Design & Planning',
        'Risk Assessment',
        'Field Development Studies',
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions designed for the energy industry',
      features: [
        'Workflow Automation',
        'Data Management Systems',
        'Real-time Monitoring',
        'Cloud-based Solutions',
        'Mobile Applications',
      ],
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: GraduationCap,
      title: 'Customized Training',
      description: 'Professional development programs for industry professionals',
      features: [
        'Technical Workshops',
        'Software Training',
        'Best Practices',
        'Industry Standards',
        'Certification Programs',
      ],
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const additionalServices = [
    {
      icon: Wrench,
      title: 'Technical Support',
      description: 'Round-the-clock technical assistance for all our products and services',
    },
    {
      icon: LineChart,
      title: 'Performance Analysis',
      description: 'Detailed analytics and reporting to optimize your operations',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control for all deliverables',
    },
  ];

  return (
    <div className="pt-20">

      {/* HERO SECTION */}
      <section className="bg-[#6AB165] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to optimize your operations and drive innovation in the energy sector.
          </p>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* TEXT CONTENT */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="bg-[#6AB165] w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-4xl font-bold text-black mb-4">
                  {service.title}
                </h2>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="bg-[#6AB165] w-2 h-2 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#6AB165] rounded-2xl opacity-20 blur-3xl"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Supporting your success every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-[#6AB165] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#6AB165] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white text-black p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-700">Successful Projects</div>
            </div>

            <div className="bg-white text-black p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-700">Satisfied Clients</div>
            </div>

            <div className="bg-white text-black p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-700">Quality Guaranteed</div>
            </div>
          </div>

          <p className="text-xl text-gray-100 leading-relaxed mt-12 max-w-3xl mx-auto">
            Backed by industry experience and innovation, we deliver tailored solutions that drive measurable results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how our services can help transform your operations.
          </p>

          <a
            href="/contact"
            className="inline-block bg-black text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
