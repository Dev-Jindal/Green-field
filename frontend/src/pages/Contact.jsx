import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@greenfield.energy",
      link: "mailto:info@greenfield.energy",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Global Operations",
      link: null,
    },
  ];

  return (
    <div className="pt-20">

      {/* ============= HERO SECTION ============= */}
      <section className="bg-[#1B4D3E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Have a question or ready to start your next project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ============= CONTACT INFO + FORM ============= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#e8f5e9] p-8 rounded-xl text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#1B4D3E] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1B4D3E] mb-2">
                  {info.title}
                </h3>

                {info.link ? (
                  <a href={info.link} className="text-gray-700 hover:text-[#1B4D3E] transition">
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-700">{info.details}</p>
                )}
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#e8f5e9] rounded-2xl p-10 shadow-xl">

              <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] text-center mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-[#1B4D3E] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-[#1B4D3E] mb-2">Thank You!</h3>
                  <p className="text-gray-700">
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#1B4D3E] font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-[#1B4D3E] font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#1B4D3E] font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-[#1B4D3E] font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-[#1B4D3E] font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#1B4D3E] font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent resize-none"
                      placeholder="Tell us more about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1B4D3E] text-white py-4 rounded-lg font-semibold
                    hover:bg-[#153c30] transition-all duration-300 transform hover:scale-105
                    shadow-lg flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============= GLOBAL PRESENCE ============= */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold text-[#1B4D3E] mb-6">
            Our Global Presence
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            With engineering teams across multiple continents, we serve clients worldwide with excellence and expertise.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-12">
            <MapPin className="w-24 h-24 text-[#1B4D3E] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1B4D3E]">Global Operations</h3>
            <p className="text-gray-700 mt-2">Serving clients around the world</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
