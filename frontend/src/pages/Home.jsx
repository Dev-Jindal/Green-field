// import { useState, useEffect, useRef } from "react";
// import {
//   ArrowRight,
//   ArrowLeft,
//   Zap,
//   Users,
//   Award,
//   TrendingUp,
//   Code,
//   Briefcase,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const heroImages = [
//     {
//       src: "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800",
//       alt: "Energy infrastructure",
//     },
//     {
//       src: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=800",
//       alt: "Oil and gas refinery",
//     },
//     {
//       src: "https://images.pexels.com/photos/979999/pexels-photo-979999.jpeg?auto=compress&cs=tinysrgb&w=800",
//       alt: "Wind turbines",
//     },
//     {
//       src: "https://images.pexels.com/photos/157827/pexels-photo-157827.jpeg?auto=compress&cs=tinysrgb&w=800",
//       alt: "Industrial plant",
//     },
//   ];

//   // duplicate for smooth infinite loop
//   const loopImages = [...heroImages, ...heroImages];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);
//   const SLIDE_DURATION = 3500;

//   // auto scroll
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => prev + 1);
//     }, SLIDE_DURATION);
//     return () => clearInterval(interval);
//   }, []);

//   // seamless reset when we hit the duplicated midpoint
//   useEffect(() => {
//     if (currentSlide === heroImages.length) {
//       // let the last animated slide finish
//       const disableTransitionTimeout = setTimeout(() => {
//         if (!sliderRef.current) return;
//         sliderRef.current.style.transition = "none";
//         setCurrentSlide(0);
//       }, 600);

//       const enableTransitionTimeout = setTimeout(() => {
//         if (!sliderRef.current) return;
//         sliderRef.current.style.transition = "transform 0.7s ease-out";
//       }, 650);

//       return () => {
//         clearTimeout(disableTransitionTimeout);
//         clearTimeout(enableTransitionTimeout);
//       };
//     }
//   }, [currentSlide, heroImages.length]);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => {
//       if (prev <= 0) return 0;
//       return prev - 1;
//     });
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) =>
//       prev >= heroImages.length ? heroImages.length : prev + 1
//     );
//   };

//   const stats = [
//     { icon: Briefcase, label: "Successful Projects", value: "15+" },
//     { icon: Users, label: "Happy Clients", value: "10+" },
//     { icon: Award, label: "Years Experience", value: "9+" },
//     { icon: TrendingUp, label: "Carbon Reduction", value: "344 MT" },
//   ];

//   const services = [
//     {
//       icon: Code,
//       title: "Software Development",
//       description: "Customized software solutions tailored to industry needs.",
//     },
//     {
//       icon: Briefcase,
//       title: "Engineering Consultancy",
//       description: "Expert consultancy services with global engineering team.",
//     },
//     {
//       icon: Users,
//       title: "Customized Training",
//       description: "Professional training programs for industry professionals.",
//     },
//   ];

//   return (
//     <div className="pt-20">
//       {/* HERO SECTION */}
//       <section className="relative bg-[#6AB165] text-white py-24 overflow-hidden">
//         <div className="absolute inset-0 bg-black/10" />

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* LEFT HERO TEXT */}
//             <div className="space-y-8">
//               <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
//                 Innovative Solutions for
//                 <span className="block md:inline text-black">
//                   {" "}
//                   Energy Excellence
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-100 leading-relaxed">
//                 Providing cutting-edge engineering consultancy and customized
//                 software solutions for the oil and gas industry since 2015.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   to="/services"
//                   className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/30"
//                 >
//                   Our Services
//                   <ArrowRight className="w-5 h-5" />
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300"
//                 >
//                   Get in Touch
//                 </Link>
//               </div>
//             </div>

//             {/* RIGHT HERO SLIDER */}
//             <div className="block w-full">
//               <div className="relative w-full max-w-xl mx-auto">
//                 {/* green glow */}
//                 <div className="absolute inset-0 bg-[#6AB165] rounded-full blur-3xl opacity-30" />

//                 <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black/10">
//                   <div
//                     ref={sliderRef}
//                     className="flex transition-transform duration-700 ease-out"
//                     style={{
//                       transform: `translateX(-${currentSlide * 100}%)`,
//                     }}
//                   >
//                     {loopImages.map((image, i) => (
//                       <div key={i} className="w-full flex-shrink-0">
//                         <img
//                           src={image.src}
//                           alt={image.alt}
//                           className="w-full h-[330px] md:h-[360px] object-cover"
//                         />
//                       </div>
//                     ))}
//                   </div>

//                   {/* buttons */}
//                   <button
//                     onClick={handlePrev}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md text-black"
//                   >
//                     <ArrowLeft className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={handleNext}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md text-black"
//                   >
//                     <ArrowRight className="w-5 h-5" />
//                   </button>

//                   {/* dots */}
//                   <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
//                     {heroImages.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setCurrentSlide(index)}
//                         className={`h-2.5 rounded-full transition-all ${
//                           currentSlide % heroImages.length === index
//                             ? "w-6 bg-white"
//                             : "w-2 bg-white/60"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
//           {stats.map((stat, i) => (
//             <div
//               key={i}
//               className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition"
//             >
//               <stat.icon className="w-12 h-12 mx-auto text-black mb-4" />
//               <div className="text-4xl font-bold text-black">{stat.value}</div>
//               <p className="text-gray-700">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
//               Our Core Services
//             </h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//               Comprehensive solutions designed to optimize your operations and
//               drive innovation.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="bg-[#6AB165] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
//                   <service.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-black mb-4">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed mb-6">
//                   {service.description}
//                 </p>
//                 <Link
//                   to="/services"
//                   className="text-black font-semibold hover:text-gray-900 flex items-center gap-2 group"
//                 >
//                   Learn More
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE */}
//       <section className="py-20 bg-[#6AB165] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//                 Why Choose Greenfield Energy?
//               </h2>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <Zap className="w-8 h-8 text-black flex-shrink-0 mt-1" />
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2 text-white">
//                       Innovative Solutions
//                     </h3>
//                     <p className="text-gray-100">
//                       Research-based, cutting-edge technology tailored to your
//                       needs.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <Users className="w-8 h-8 text-black flex-shrink-0 mt-1" />
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2 text-white">
//                       Global Expertise
//                     </h3>
//                     <p className="text-gray-100">
//                       World-class team of engineering consultants and
//                       developers.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <Award className="w-8 h-8 text-black flex-shrink-0 mt-1" />
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2 text-white">
//                       Cost-Effective
//                     </h3>
//                     <p className="text-gray-100">
//                       Time and budget-efficient solutions without compromising
//                       quality.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
//               <h3 className="text-2xl font-bold mb-6 text-white">Our Vision</h3>
//               <p className="text-lg text-gray-100 leading-relaxed mb-6">
//                 To provide world-class oil and gas consultancy along with unique
//                 customized software solutions that drive sustainability and
//                 efficiency in the energy sector.
//               </p>
//               <Link
//                 to="/about"
//                 className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
//               >
//                 Learn More About Us
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
//             Ready to Transform Your Operations?
//           </h2>
//           <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
//             Let's discuss how our innovative solutions can help you achieve your
//             goals.
//           </p>

//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/30"
//           >
//             Contact Us Today
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Zap,
  Users,
  Award,
  TrendingUp,
  Code,
  Briefcase,
  Newspaper,
  Calendar,
  Globe2,
  Link2,
  Factory,
  Building2,
  BadgeCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const heroImages = [
    {
      src: "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Energy infrastructure",
    },
    {
      src: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Oil and gas refinery",
    },
    {
      src: "https://images.pexels.com/photos/979999/pexels-photo-979999.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Wind turbines",
    },
    {
      src: "https://images.pexels.com/photos/157827/pexels-photo-157827.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Industrial plant",
    },
  ];

  // duplicate for smooth infinite loop
  const loopImages = [...heroImages, ...heroImages];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const SLIDE_DURATION = 3500;

  // auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  // seamless reset when we hit the duplicated midpoint
  useEffect(() => {
    if (currentSlide === heroImages.length) {
      const disableTransitionTimeout = setTimeout(() => {
        if (!sliderRef.current) return;
        sliderRef.current.style.transition = "none";
        setCurrentSlide(0);
      }, 600);

      const enableTransitionTimeout = setTimeout(() => {
        if (!sliderRef.current) return;
        sliderRef.current.style.transition = "transform 0.7s ease-out";
      }, 650);

      return () => {
        clearTimeout(disableTransitionTimeout);
        clearTimeout(enableTransitionTimeout);
      };
    }
  }, [currentSlide, heroImages.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => {
      if (prev <= 0) return 0;
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev >= heroImages.length ? heroImages.length : prev + 1
    );
  };

  const stats = [
    { icon: Briefcase, label: "Successful Projects", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "10+" },
    { icon: Award, label: "Years Experience", value: "9+" },
    { icon: TrendingUp, label: "Carbon Reduction", value: "344 MT" },
  ];

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Customized software solutions tailored to industry needs.",
    },
    {
      icon: Briefcase,
      title: "Engineering Consultancy",
      description: "Expert consultancy services with global engineering team.",
    },
    {
      icon: Users,
      title: "Customized Training",
      description: "Professional training programs for industry professionals.",
    },
  ];

  const products = [
    {
      icon: TrendingUp,
      title: "Production Optimization Suite",
      description:
        "Advanced analytics platform to optimize well performance and production KPIs.",
      tag: "Software Product",
    },
    {
      icon: Zap,
      title: "Energy Efficiency Dashboard",
      description:
        "Real-time monitoring for energy consumption, emissions, and cost savings.",
      tag: "Digital Twin",
    },
    {
      icon: Code,
      title: "Field Simulation Toolkit",
      description:
        "Custom simulation tools for reservoir modeling and scenario planning.",
      tag: "Engineering Tool",
    },
  ];

  const partners = [
    {
      icon: Factory,
      name: "Global Oil & Gas Corp",
      description: "Strategic collaboration on digital transformation projects.",
    },
    {
      icon: Building2,
      name: "Energy Solutions Group",
      description: "Joint initiatives for sustainable production optimization.",
    },
    {
      icon: BadgeCheck,
      name: "Tech Innovate Labs",
      description: "R&D partnership for cutting-edge energy software.",
    },
  ];

  const newsEvents = [
    {
      title: "Greenfield Energy at SPE Conference 2025",
      date: "March 15, 2025",
      location: "Abu Dhabi",
      description:
        "Presented our latest research on production optimization and carbon reduction strategies.",
    },
    {
      title: "New Training Program for Reservoir Engineers",
      date: "January 28, 2025",
      location: "Online",
      description:
        "Launched a comprehensive training series for young professionals in the oil and gas industry.",
    },
    {
      title: "Partnership for Sustainable Energy",
      date: "December 10, 2024",
      location: "Global",
      description:
        "Announced a strategic partnership to deliver integrated sustainability solutions.",
    },
  ];

  const blogPosts = [
    {
      title: "5 Ways Digital Tools Are Transforming the Energy Sector",
      readTime: "7 min read",
      category: "Digital Transformation",
      description:
        "Explore how data-driven solutions are improving efficiency, safety, and sustainability.",
    },
    {
      title: "Optimizing Production in Brownfields",
      readTime: "6 min read",
      category: "Engineering Insights",
      description:
        "Key strategies and techniques for maximizing recovery in mature fields.",
    },
    {
      title: "Designing Software for Subsurface Engineers",
      readTime: "8 min read",
      category: "Product Design",
      description:
        "Best practices for building tools that subsurface teams actually love to use.",
    },
  ];

  return (
    <div className="pt-20">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#6AB165] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT HERO TEXT */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                Innovative Solutions for
                <span className="block md:inline text-black">
                  {" "}
                  Energy Excellence
                </span>
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Providing cutting-edge engineering consultancy and customized
                software solutions for the oil and gas industry since 2015.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/30"
                >
                  Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* RIGHT HERO SLIDER */}
            <div className="block w-full">
              <div className="relative w-full max-w-xl mx-auto">
                {/* green glow */}
                <div className="absolute inset-0 bg-[#6AB165] rounded-full blur-3xl opacity-30" />

                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black/10">
                  <div
                    ref={sliderRef}
                    className="flex transition-transform duration-700 ease-out"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                  >
                    {loopImages.map((image, i) => (
                      <div key={i} className="w-full flex-shrink-0">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[330px] md:h-[360px] object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* buttons */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md text-black"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md text-black"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* dots */}
                  <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          currentSlide % heroImages.length === index
                            ? "w-6 bg-white"
                            : "w-2 bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES (2nd) ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions designed to optimize your operations and
              drive innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-black font-semibold hover:text-gray-900 flex items-center gap-2 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS (3rd) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Our Products
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl">
                Purpose-built digital products that combine engineering
                expertise with robust software architecture.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#6AB165] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#589754] transition-colors"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl p-8 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-black/90 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <span className="inline-flex text-xs font-semibold uppercase tracking-wide bg-[#E7F5E5] text-[#295530] px-3 py-1 rounded-full mb-3">
                  {product.tag}
                </span>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {product.description}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-black group">
                  Explore Product
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLIENT STATS (4th) ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-white hover:shadow-lg transition"
            >
              <stat.icon className="w-12 h-12 mx-auto text-black mb-4" />
              <div className="text-4xl font-bold text-black mb-1">
                {stat.value}
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR PARTNERS (5th) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Collaborating with leading organizations to deliver sustainable,
              future-ready energy solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl p-8 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="mb-5">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E7F5E5] mb-4">
                    <partner.icon className="w-7 h-7 text-[#295530]" />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {partner.name}
                  </h3>
                </div>
                <p className="text-gray-700 flex-1">{partner.description}</p>
              </div>
            ))}
          </div>

          {/* Simple logo strip (placeholder) */}
          <div className="mt-10 border-t border-gray-100 pt-8">
            <p className="text-center text-sm text-gray-500 mb-4">
              Trusted by professionals across the energy value chain
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70 text-xs uppercase tracking-widest">
              <span>Upstream</span>
              <span>Midstream</span>
              <span>Downstream</span>
              <span>Consultancies</span>
              <span>Software Firms</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEWS & EVENTS (6th) ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 flex items-center gap-3">
                <Newspaper className="w-9 h-9 text-[#6AB165]" />
                News &amp; Events
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl">
                Stay up to date with our latest conferences, product launches,
                and industry contributions.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-black border border-gray-300 px-4 py-2 rounded-lg hover:bg-white">
              View All Updates
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsEvents.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center justify-between text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
                  {item.description}
                </p>
                <button className="inline-flex items-center gap-1 text-sm font-semibold text-black group">
                  Read More
                  <Link2 className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOG (7th) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Insights &amp; Blog
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Deep dives, case studies, and practical guides from our consulting
              and product teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="border border-gray-100 rounded-2xl p-7 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#E7F5E5] text-[#295530]">
                    {post.category}
                  </span>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
                  {post.description}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-black group">
                  Continue Reading
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE (kept after blog) ================= */}
      <section className="py-20 bg-[#6AB165] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why Choose Greenfield Energy?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Innovative Solutions
                    </h3>
                    <p className="text-gray-100">
                      Research-based, cutting-edge technology tailored to your
                      needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Global Expertise
                    </h3>
                    <p className="text-gray-100">
                      World-class team of engineering consultants and
                      developers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Cost-Effective
                    </h3>
                    <p className="text-gray-100">
                      Time and budget-efficient solutions without compromising
                      quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <h3 className="text-2xl font-bold mb-6 text-white">Our Vision</h3>
              <p className="text-lg text-gray-100 leading-relaxed mb-6">
                To provide world-class oil and gas consultancy along with unique
                customized software solutions that drive sustainability and
                efficiency in the energy sector.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA (final) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative solutions can help you achieve your
            goals.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/30"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
