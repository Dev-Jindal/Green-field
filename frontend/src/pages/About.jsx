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

{/* ================= OUR TEAM ================= */}
<section className="py-20 bg-[#f5faf7]">
  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
        Our Leadership & Team
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        A blend of industry veterans and professionals driving innovation in
        petroleum engineering, technology, and sustainability.
      </p>
    </div>

    {/* Team Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Sivakumar */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
        <img
          src="/images/team/Babu Sir.jpeg"
          alt="Vinnavadi C Babu Sivakumar"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1B4D3E]">
            Vinnavadi C Babu Sivakumar
          </h3>
          <p className="text-sm font-semibold text-gray-600 mb-3">
            CTO – Petroleum Engineering Solutions
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Oil & Gas professional with 40+ years of experience across India,
            Middle East and South East Asia. Expertise in project management,
            well completions, sand control, artificial lift, EOR/IOR, and
            production operations. IIT (ISM) Dhanbad alumnus and published SPE
            author.
          </p>
        </div>
      </div>

      {/* Gaurav */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
        <img
          src="/images/team/Gaurav Sir.png"
          alt="Gaurav Dwivedi"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1B4D3E]">
            Gaurav Dwivedi
          </h3>
          <p className="text-sm font-semibold text-gray-600 mb-3">
            CTO – Technology
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Technology leader with 20+ years of experience in system software,
            GPU architecture, and SDLC leadership. Leads software architecture
            and greenhouse gas emission platforms. IIT Dhanbad alumnus with AI
            certification from IISc Bangalore.
          </p>
        </div>
      </div>

      {/* Abhishek */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
        <img
          src="/images/team/Abhishek Sir.png"
          alt="Abhishek Gupta"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1B4D3E]">
            Abhishek Gupta
          </h3>
          <p className="text-sm font-semibold text-gray-600 mb-3">
            Senior Petroleum Engineer
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Petroleum Engineer with 9+ years of experience in rig and rigless
            operations including completion, workover, coiled tubing, slickline
            and well testing. Expert in turnkey execution and completion design
            with strong HSE compliance.
          </p>
        </div>
      </div>

      {/* Sejal */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
        <img
          src="/images/team/Sejal.jpeg"
          alt="Sejal Jain"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1B4D3E]">
            Sejal Jain
          </h3>
          <p className="text-sm font-semibold text-gray-600 mb-3">
            Business Development Manager & HR Manager
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            MBA in HR & Marketing with 2+ years of experience in business
            development and human resources. Manages client partnerships,
            recruitment, onboarding, and employee engagement with a people-first
            approach.
          </p>
        </div>
      </div>

      {/* Swagat */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
        <img
          src="/images/team/Swagat.png"
          alt="Swagat Pradhan"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1B4D3E]">
            Swagat Pradhan
          </h3>
          <p className="text-sm font-semibold text-gray-600 mb-3">
            Analytics & Optimization Engineer
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Petroleum Engineer with 3+ years of experience in upstream
            operations, reporting workflows, and data coordination. Actively
            contributes to digital tools like AutoWellz and AutoPro, bridging
            domain expertise with analytics.
          </p>
        </div>
      </div>

      {/* Kashish */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
        <img
          src="/images/team/kashish.jpeg"
          alt="Kashish Bhardwaj"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1B4D3E]">
            Kashish Bhardwaj
          </h3>
          <p className="text-sm font-semibold text-gray-600 mb-3">
            Petroleum Engineer
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Petroleum Engineer from Chandigarh University (2019–2023), working
            at Greenfield since October 2023. Involved in digital sand
            management projects using RockMaster™ and SandMaster™ to enhance
            upstream efficiency.
          </p>
        </div>
      </div>

      {/* Firoza */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
        <img
          src="/images/team/Firoza.jpeg"
          alt="Firoza Sheikh"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1B4D3E]">
            Firoza Sheikh
          </h3>
          <p className="text-sm font-semibold text-gray-600 mb-3">
            Petroleum Engineer | Product Champion – GREEN
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Leads R&D for GREEN, focusing on sustainability and carbon
            accounting solutions. Works at the intersection of petroleum
            engineering and ESG, shaping methodologies for credible emission
            inventories and reduction pathways.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ================= OUR PARTNERS ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">

    {/* ================= OUR PARTNERS ================= */}
    <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
      Our Partners
    </h2>

    <div className="grid md:grid-cols-3 gap-12 text-center mb-20">
      {[
        {
          img: "P1.png",
          name: "BG Oilfield Sdn Bhd, Malaysia",
          loc: "KLCC, Kuala Lumpur, Malaysia",
        },
        {
          img: "apta_logo.jpeg",
          name: "Apta Consultancy",
          loc: "Kingwood, TX, 77399, USA",
        },
        {
          img: "bg.png",
          name: "Bee Groups, Iran",
          loc: "UK Reg No.: 09020747",
        },
      ].map((p, i) => (
        <div key={i}>
          <div className="h-28 flex items-center justify-center mb-6">
            <img
              src={`/images/partners/${p.img}`}
              alt={p.name}
              className="max-h-full max-w-[180px] object-contain"
            />
          </div>
          <h3 className="font-bold text-lg">{p.name}</h3>
          <p className="text-gray-700">{p.loc}</p>
        </div>
      ))}
    </div>

    {/* ================= GLOBAL SERVICE PARTNERS ================= */}
    <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
      Global Service Partners
    </h2>

    <div className="grid md:grid-cols-5 gap-10 text-center mb-20">
      {[
        { img: "PTS.png", name: "Production Tool", loc: "Solution, USA" },
        { img: "rara.png", name: "Rara Energy", loc: "Abu Dhabi" },
        { img: "tps.png", name: "Technical Petroleum", loc: "Services, Egypt" },
        { img: "sutera.png", name: "Sutera Energy", loc: "Solutions, Brunei" },
        { img: "pgas.png", name: "Permian Oil and Gas", loc: "Services Limited, Nigeria" },
      ].map((p, i) => (
        <div key={i}>
          <div className="h-24 flex items-center justify-center mb-4">
            <img
              src={`/images/partners/${p.img}`}
              alt={p.name}
              className="max-h-full max-w-[160px] object-contain"
            />
          </div>
          <p className="font-semibold">{p.name}</p>
          <p className="text-gray-700">{p.loc}</p>
        </div>
      ))}
    </div>

    {/* ================= TECHNOLOGY PARTNERS ================= */}
    <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
      Technology Partners
    </h2>

    <div className="grid md:grid-cols-2 gap-16 text-center mb-20">
      {[
        { img: "Original_logo-3.jpg", name: "Turnera Tech" },
        { img: "tdpvista-1.png", name: "TDPVista, India" },
      ].map((p, i) => (
        <div key={i}>
          <div className="h-32 flex items-center justify-center mb-6">
            <img
              src={`/images/partners/${p.img}`}
              alt={p.name}
              className="max-h-full max-w-[220px] object-contain"
            />
          </div>
          <p className="font-bold text-lg">{p.name}</p>
        </div>
      ))}
    </div>

    {/* ================= UNIVERSITY PARTNERS ================= */}
    <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
      University Partners
    </h2>

    <div className="grid md:grid-cols-2 gap-16 text-center">
      {[
        { img: "P3.png", name: "IIT ISM Dhanbad" },
        { img: "rgu.png", name: "Robert Gordon University" },
      ].map((p, i) => (
        <div key={i}>
          <div className="h-28 flex items-center justify-center mb-6">
            <img
              src={`/images/partners/${p.img}`}
              alt={p.name}
              className="max-h-full max-w-[200px] object-contain"
            />
          </div>
          <p className="font-bold text-lg">{p.name}</p>
        </div>
      ))}
    </div>

  </div>
</section>



    </div>
  );
};

export default About;
