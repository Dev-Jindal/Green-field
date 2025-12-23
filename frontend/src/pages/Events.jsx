const Events = () => {
  const events = [
    {
      id: 1,
      date: "14 Nov, 2024",
      title:
        "Greenfield Oil and Trading Services Pvt. Ltd. Shortlisted for OWI Awards 2024",
      pdf: "/pdfs/event1.pdf",
    },
    {
      id: 2,
      date: "06 Nov, 2024",
      title:
        "GOTS Drives Innovation at ADIPEC 2024 with Data Integration Breakthroughs",
      pdf: "/pdfs/event2.pdf",
    },
    {
      id: 3,
      date: "06 Nov, 2024",
      title:
        "Leading the Way: A Novel Approach to Sand Management by Greenfield",
      pdf: "/pdfs/event3.pdf",
    },
    {
      id: 4,
      date: "01 Sep, 2024",
      title: "Delivering the Custom AutoPro Module for Kiri Energy",
      pdf: "/pdfs/event4.pdf",
    },
    {
      id: 5,
      date: "05 Aug, 2024",
      title: "Autowellz Software Adds New Rig Module Features",
      pdf: "/pdfs/event5.pdf",
    },
    {
      id: 6,
      date: "01 Jul, 2024",
      title:
        "Develop RockMaster™ Software – Sand Production Prediction & Analysis",
      pdf: "/pdfs/event6.pdf",
    },
    {
      id: 7,
      date: "15 May, 2024",
      title: "New Features Added to Sandmaster Software",
      pdf: "/pdfs/event7.pdf",
    },
    {
      id: 8,
      date: "01 Mar, 2024",
      title: "Highlighting Innovation: Our Presentation at OTC Asia 2024",
      pdf: "/pdfs/event8.pdf",
    },
    {
      id: 9,
      date: "07 Feb, 2024",
      title:
        "Novel Digitalized Sand Management Strategy Unveiled at IEW 2024",
      pdf: "/pdfs/event9.pdf",
    },
    {
      id: 10,
      date: "07 Feb, 2024",
      title:
        "GOTS Shines at India Energy Week 2024 Conference with Remarkable Exhibition",
      pdf: "/pdfs/event10.pdf",
    },
  ];

  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="bg-[#1B4D3E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Events & News
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover our key conferences, achievements, and industry engagements
          </p>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="border rounded-xl p-8 hover:shadow-lg transition cursor-pointer"
              onClick={() => window.open(event.pdf, "_blank")}
            >
              <p className="text-sm text-[#2e7d32] font-semibold">
                {event.date}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-2">
                {event.title}
              </h3>

              <p className="mt-4 text-sm font-semibold text-gray-700 border-b-2 inline-block">
                READ MORE →
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
