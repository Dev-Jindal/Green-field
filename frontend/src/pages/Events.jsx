import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Calendar, 
  ArrowRight, 
  Linkedin, 
  FileText, 
  Download 
} from "lucide-react";

// --- DATA SOURCE ---
const eventsData = [
  {
    id: 1,
    date: "12 Dec, 2025",
    title: "Greenfield Measures Carbon Footprint for National Symposium",
    preview: "8,188.63 kg CO₂e. That’s the footprint of the National Symposium at IIT (ISM) Dhanbad, measured by our product 'GREEN'.",
    fullContent: `🚨 One-day conference. 8,188.63 kg CO₂e.
    That’s the footprint of the National Symposium at Indian Institute of Technology (Indian School of Mines), Dhanbad, measured by Greenfield Oil and Trading Services Pvt. Ltd. using their product "GREEN".

    📊 Breakdown of emissions:
    - 58.3% from travel & accommodation ✈️🏨
    - Catering, logistics, and event operations added significant weight 🍴📦
    - Scope 1: Direct on-site emissions
    - Scope 2: Energy & utilities
    - Scope 3: Indirect supply chain emissions

    🌱 To put it in perspective: this equals the annual carbon absorption of nearly 400 mature trees.
    But here’s the real story: IIT ISM didn’t just measure — they’ve started discussions to cut emissions in future conferences. That’s leadership in action.

    ✨ Sustainability begins with awareness. Awareness begins with measurement. With "GREEN", what once was complex becomes simple, insightful, and actionable. From conferences to daily operations, our platform empowers organizations to track, understand, and reduce emissions — one task at a time.

    The revolution to measure and manage carbon footprints has begun.
    Be part of it. Be part of "GREEN".`,
    tags: ["#CarbonFootprint", "#Sustainability", "#ClimateAction", "#EventSustainability", "#GOTS", "#GREENsoftware", "#IITISM", "#GHGAccounting"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7404909877367648256",
    pdf: "/pdfs/event1.pdf" // HAS PDF
  },
  {
    id: 2,
    date: "11 Dec, 2025",
    title: "CTO Mr. V.C Babu Sivakumar Keynotes at IIT (ISM) Dhanbad",
    preview: "Super thrilled to share this proud moment! Our CTO took the spotlight delivering insights on AI, ML, and Data Analytics in Sand Management.",
    fullContent: `Super thrilled to share this proud moment for G.O.T.S.! 🎉💚
    Our amazing CTO, Mr. V.C Babu Sivakumar, is taking the spotlight as the Keynote Speaker at IIT (ISM) Dhanbad! 🚀

    He’ll be delivering powerful insights on AI, ML, Data Analytics & IoT in Sand Management — shaping the future of innovation and sustainability!
    So excited and proud to see him represent us on such a prestigious platform! 🔥🌍`,
    tags: ["#ProudMoment", "#GOTS", "#InnovationInAction", "#Leadership", "#IITISM", "#TechForGood", "#AI", "#ML", "#IoT"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7403709282371960832",
    pdf: "/pdfs/event2.pdf" // HAS PDF
  },
  {
    id: 3,
    date: "29 Nov, 2025",
    title: "Milestone: Handover of SandMaster™ & RockMaster™ to Oil India",
    preview: "A milestone worth celebrating! We wrapped up a phase that sets the stage for a next-level sand management revolution with Oil India.",
    fullContent: `A milestone worth celebrating! 🚀
    This week marked a powerful stride in our journey with Oil India.
    The week included an impactful project update meeting and immersive SandMaster™ & RockMaster™ training — we wrapped up a phase that sets the stage for a next-level sand management revolution.

    Proud to officially hand over both software licenses to the Oil India team, empowering them with a holistic, data-driven approach toward safer, smarter, and more efficient operations.
    Here’s to building risk-free facilities, optimizing production, and unlocking the full potential of intelligent sand management.

    The momentum is real — and the impact will be too. ✨`,
    tags: ["#OilIndia", "#SandMaster", "#RockMaster", "#SandManagement", "#SoftwareLaunch", "#GOTS"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7398642868266950656",
    // NO PDF
  },
  {
    id: 4,
    date: "19 Nov, 2025",
    title: "RockMaster™ Training Completed at Oil India Duliajan Facility",
    preview: "Successfully completed RockMaster™ training — GOTS’ proprietary software for sand production tendency assessment.",
    fullContent: `Thrilled to share that we have successfully completed RockMaster™ training — GOTS’ proprietary software for sand production tendency assessment and advanced sand management by preparation of MEM, CDP and ESPI models — with Oil India Limited at their Duliajan OIL facility.

    A great step forward in enabling smarter, data-driven sand management decisions in upstream operations. Proud of the collaboration and the value RockMaster™ continues to deliver in the field.`,
    tags: ["#RockMaster", "#GOTS", "#OilIndia", "#SandManagement", "#Upstream", "#EnergyTech", "#RockMechanics"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7398322827528962048",
    // NO PDF
  },
  {
    id: 5,
    date: "01 Nov, 2025",
    title: "Team GOTS Showcases 'GREEN' at REI 2025",
    preview: "We’re thrilled to share glimpses from our visit to the Renewable Energy India (REI) Conference 2025.",
    fullContent: `🎉 Team GOTS at REI 2025! ⚡
    We’re thrilled to share glimpses from our visit to the Renewable Energy India (REI) Conference 2025 — a vibrant gathering of innovators, clean-tech leaders, and sustainability enthusiasts driving the future of green energy. 🌞

    Representing Greenfield Oil & Trading Services (GOTS) were Firoza Sheikh (Product Champion – GREEN) and Sejal Jain (Business Development Manager), who explored the latest in renewable technologies, digital solutions, and industry collaborations. 

    Our flagship sustainability platform GREEN—designed to help organizations monitor, analyze, and optimize their environmental performance—resonated strongly with the event’s vision of a cleaner, data-driven future. 🌿

    It was truly inspiring to engage with so many brilliant minds and see how technology continues to accelerate the global energy transition. Here’s to innovation, collaboration, and a greener tomorrow! 🌍`,
    tags: ["#REI2025", "#RenewableEnergy", "#Sustainability", "#GreenTech", "#GOTS", "#EnergyTransition"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7391017460960804865",
    // NO PDF
  },
  {
    id: 6,
    date: "22 Sep, 2025",
    title: "Holistic Sand Management (HSM) Training Delivered",
    preview: "We at GOTS are thrilled to have successfully delivered the Holistic Sand Management (HSM) Training for OIL India.",
    fullContent: `Cheers to a successful milestone! 🎊
    We at GOTS are thrilled to have successfully delivered the Holistic Sand Management (HSM) Training for OIL India. This program was all about knowledge-sharing, practical insights, and impactful discussions aimed at tackling sand management challenges with smarter and safer solutions.

    Kudos to the enthusiastic participants, the expert trainers, and the Oil India Limited / ऑयलइंडिया लिमिटेड team for making this initiative such a success 🙌. Moments like these reflect the power of collaboration, learning, and innovation in driving operational excellence.

    Here’s to more such journeys of growth, excellence, and teamwork! 🚀`,
    tags: ["#OILIndia", "#GOTS", "#HSM", "#Training", "#Teamwork", "#OperationalExcellence"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7375826124666253313",
    // NO PDF
  },
  {
    id: 7,
    date: "25 Aug, 2025",
    title: "Exciting Collaboration with SPOC & Ministry of Petroleum Sudan",
    preview: "Grateful to SPOC, OVL & Ministry of Petroleum (MoP) Sudan for entrusting us with the sand management study.",
    fullContent: `Exciting Collaboration! 🙌 
    We're grateful to SPOC (Sudd Petroleum Operating Company Limited), OVL (ONGC Videsh Ltd) & Ministry of Petroleum (MoP) Sudan for entrusting us with the sand management study for one of South Sudan's fields. 

    Special thanks to Mr. Dheeraj Kumar, Mr. Acuil Deng Acuil - Director E&D MoP, Mr. Richard Lado Santo - Director DM MoP, Mr. Ochan Stephen, and Miss Swati for participating in the kick-off meeting. 

    Kudos to our young engineer Kashish Bhardwaj for representing us with great enthusiasm! 🙏 
    Appreciate the support from our UAE partners Rara Energy! 🙏`,
    tags: ["#Collaboration", "#SouthSudan", "#SandManagement", "#GlobalProjects", "#GOTS", "#EnergySector"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7367481322992230400",
    // NO PDF
  },
  {
    id: 8,
    date: "15 Aug, 2025",
    title: "Training Session: Carbon Accounting in Oil & Gas",
    preview: "Delivered a training session on Carbon Accounting and Management as part of the CCUS Pro course.",
    fullContent: `Last Sunday, I had the wonderful opportunity to deliver a training session on "Carbon Accounting and Management in Oil & Gas Industry" as part of the CCUS Pro course organized by Rara Energy Consulting.

    A big thank you to Rara Energy Consulting and Swati Gupta for inviting me. It was a truly rewarding experience to engage with industry professionals, share insights, and have an interactive discussion on this critical topic.

    Greenfield Oil and Trading Services Pvt. Ltd.`,
    tags: ["#CarbonAccounting", "#OilAndGas", "#CCUS", "#Sustainability", "#CarbonManagement", "#EnergyTransition"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7366327048493068291",
    // NO PDF
  },
  {
    id: 9,
    date: "05 Mar, 2025",
    title: "SandMaster Officially Part of IIT (ISM) Dhanbad Curriculum",
    preview: "A Major Milestone: SandMaster is now officially part of the IIT (ISM) Dhanbad curriculum!",
    fullContent: `We are thrilled to announce that SandMaster is now officially part of the Indian Institute of Technology (Indian School of Mines), Dhanbad curriculum! 🎓💡 

    🚀 A Major Milestone for Greenfield Oil and Trading Services Pvt. Ltd. 🚀 
    A huge shoutout to IIT - ISM Dhanbad for recognizing the value of SandMaster in advancing Sand Management and Multiphase Flow education. This collaboration will provide students with hands-on experience and practical industry insights! 🔍🛠️ 

    👏 Special Thanks to Dr. Raj Kiran for making this possible. Your dedication and support are truly appreciated! 🙌 
    To all the students embarking on this journey, we can’t wait to see how you leverage SandMaster to tackle real-world challenges! 🌎💡

    Let’s shape the future of Oil & Gas education together! 💪🔬`,
    tags: ["#GreenfieldOilAndTrading", "#SandMaster", "#IITISM", "#EducationInitiative", "#IndustryCollaboration", "#StudentEmpowerment"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7304015664371875840",
    // NO PDF
  },
  {
    id: 10,
    date: "14 Feb, 2025",
    title: "GOTS at India Energy Week 2025",
    preview: "The GOTS team had an incredible time at the India Energy Week — bringing together the best minds in the sector.",
    fullContent: `Greenfield Oil and Trading Services Pvt. Ltd. at India Energy Week 2025: A Remarkable Experience!

    The GOTS team had an incredible time at the India Energy Week —an event that truly brought together the best minds in the energy sector!
    From engaging discussions to strategic collaborations, our time at the conference was nothing short of inspiring. 

    We had the opportunity to connect with industry leaders, clients, and partners, exchanging insights on the future of energy, sustainability, and innovation. The conference reinforced the importance of collaboration and technology in shaping the industry's next phase. 

    A big thank you to the organizers and everyone we met—it was a pleasure sharing perspectives and exploring new opportunities. Looking forward to leveraging these connections and driving impactful solutions in the industry!`,
    tags: ["#IEW2025", "#GOTS", "#EnergyInnovation", "#Collaboration", "#Sustainability"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7296449158285074432",
    // NO PDF
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (selectedEvent) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }
  }, [selectedEvent]);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      {/* HERO SECTION */}
      <section className="relative bg-[#1B4D3E] text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            News & <span className="text-[#81c784]">Events</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            Tracking our journey in sustainability, innovation, and industry leadership across the energy sector.
          </motion.p>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <EventCard 
              key={event.id} 
              event={event} 
              index={index} 
              onReadMore={() => setSelectedEvent(event)} 
            />
          ))}
        </div>
      </section>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal 
            event={selectedEvent} 
            onClose={() => setSelectedEvent(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// --- COMPONENT: EVENT CARD ---
const EventCard = ({ event, index, onReadMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 overflow-hidden flex flex-col h-full transition-all duration-300"
    >
      <div className="p-7 flex-1 flex flex-col">
        {/* Date Badge */}
        <div className="flex items-center gap-2 text-[#1B4D3E] text-xs font-bold uppercase tracking-wider mb-4">
          <Calendar size={14} />
          <span>{event.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
          {event.title}
        </h3>

        {/* Preview Text */}
        <p className="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3">
          {event.preview}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
            {/* Read More */}
            <button 
                onClick={onReadMore}
                className="group flex items-center text-[#1B4D3E] font-bold text-sm hover:text-[#2e7d32] transition-colors"
            >
                READ UPDATE 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* CONDITIONAL RENDER: Only show Brief if PDF exists */}
            {event.pdf && (
              <button 
                  onClick={(e) => {
                      e.stopPropagation();
                      window.open(event.pdf, "_blank");
                  }}
                  className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-red-50"
                  title="Download Brief"
              >
                  <FileText size={16} />
                  <span className="hidden sm:inline">Brief</span>
              </button>
            )}
        </div>
      </div>
      <div className="h-1 bg-[#1B4D3E]"></div>
    </motion.div>
  );
};

// --- COMPONENT: EVENT MODAL ---
const EventModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Sticky Header */}
        <div className="bg-[#1B4D3E] p-6 md:p-8 flex justify-between items-start shrink-0 text-white">
            <div className="pr-12">
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-3">
                    <Calendar size={16} />
                    {event.date}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                    {event.title}
                </h2>
            </div>
            
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
                <X size={20} />
            </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
            <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
                {event.fullContent}
            </div>

            {/* Hashtags */}
            <div className="mt-8 flex flex-wrap gap-2">
                {event.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Fixed Footer */}
        {/* Adjusted justify to 'end' so LinkedIn stays right-aligned if PDF is missing */}
        <div className="bg-gray-50 border-t border-gray-100 p-6 flex flex-wrap gap-4 justify-end items-center shrink-0">
            {/* CONDITIONAL RENDER: Only show Download button if PDF exists */}
            {event.pdf && (
              <button 
                  onClick={() => window.open(event.pdf, "_blank")}
                  className="mr-auto flex items-center gap-2 text-gray-700 hover:text-[#1B4D3E] font-medium transition-colors"
              >
                  <Download size={18} />
                  Download Event Brief (PDF)
              </button>
            )}

            <a 
               href={event.link} 
               target="_blank" 
               rel="noreferrer"
               className="flex items-center gap-2 bg-[#0077b5] text-white px-6 py-2.5 rounded-lg hover:bg-[#005e93] transition-colors font-semibold shadow-lg shadow-blue-900/10"
             >
               <Linkedin size={18} />
               View Post
            </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Events;