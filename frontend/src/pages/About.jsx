import { Target, Eye, Users, Globe, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering research-based solutions for the energy sector",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with universities and industry leaders",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality services",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International team serving clients worldwide",
    },
  ];

  const achievements = [
    { metric: "2015", label: "Established" },
    { metric: "15+", label: "Projects Completed" },
    { metric: "10+", label: "Satisfied Clients" },
    { metric: "344 MT", label: "Carbon Footprint Reduced" },
  ];

  return (
    <div className="pt-20">

      {/* ================= HERO ================= */}
      <section className="bg-[#1B4D3E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Greenfield Energy
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Leading the future of energy consultancy with innovative solutions
            and unparalleled expertise.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-bold text-[#1B4D3E] mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in 2015, Greenfield Energy has established itself as a
                premier provider of oil and gas consultancy and software
                solutions. Our journey began with a simple vision: to bridge the
                gap between traditional engineering practices and modern digital
                solutions.
              </p>
              <p>
                Over the years, we've grown from a small team of passionate
                engineers to a global organization with expertise spanning
                continents. Our commitment to innovation, quality, and
                sustainability has earned us the trust of leading companies in
                the energy sector.
              </p>
              <p>
                Today, we continue to push boundaries, developing
                cutting-edge software and providing expert consultancy that
                empowers our clients to optimize operations and reduce
                environmental impact.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#1B4D3E] text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold mb-1">9+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= VISION / MISSION & ACHIEVEMENTS ================= */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

          {/* Achievements */}
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition"
                >
                  <div className="text-4xl font-bold text-[#1B4D3E] mb-2">
                    {item.metric}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-12 h-12 text-[#1B4D3E]" />
              <h2 className="text-4xl font-bold text-[#1B4D3E]">Our Vision</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              To provide world-class consultancy and innovative software
              solutions that drive sustainability and operational excellence in
              the energy sector.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <Target className="w-12 h-12 text-[#1B4D3E]" />
              <h2 className="text-4xl font-bold text-[#1B4D3E]">Our Mission</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              To deliver research-driven, customer-focused solutions that help
              our clients optimize workflows, reduce emissions, and innovate
              for a sustainable future.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-[#e8f5e9] hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="bg-[#1B4D3E] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PARTNERSHIPS ================= */}
      <section className="py-20 bg-[#1B4D3E] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-white" />

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partnerships & Collaborations
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            We're proud to collaborate with top universities and institutions like UTAS
            and IIT(ISM) Dhanbad to advance innovation in the energy sector.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-lg">
              <span className="font-semibold text-lg">UTAS</span>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-lg">
              <span className="font-semibold text-lg">IIT(ISM) Dhanbad</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
