// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     subject: '',
//     message: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         company: '',
//         subject: '',
//         message: '',
//       });
//     }, 3000);
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email',
//       details: 'info@greenfield.energy',
//       link: 'mailto:info@greenfield.energy',
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       details: '+1 (555) 123-4567',
//       link: 'tel:+15551234567',
//     },
//     {
//       icon: MapPin,
//       title: 'Location',
//       details: 'Global Operations',
//       link: null,
//     },
//   ];

//   return (
//     <div className="pt-20">
//       <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
//             <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
//               Have a question or ready to start your next project? We'd love to hear
//               from you
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {contactInfo.map((info, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
//               >
//                 <div className="bg-gradient-to-br from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <info.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
//                 {info.link ? (
//                   <a
//                     href={info.link}
//                     className="text-gray-600 hover:text-green-600 transition-colors"
//                   >
//                     {info.details}
//                   </a>
//                 ) : (
//                   <p className="text-gray-600">{info.details}</p>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-lg">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
//                 Send Us a Message
//               </h2>

//               {submitted ? (
//                 <div className="text-center py-12">
//                   <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
//                   <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                     Thank You!
//                   </h3>
//                   <p className="text-gray-600">
//                     We've received your message and will get back to you shortly.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label
//                         htmlFor="name"
//                         className="block text-gray-700 font-medium mb-2"
//                       >
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
//                         placeholder="John Doe"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="block text-gray-700 font-medium mb-2"
//                       >
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
//                         placeholder="john@example.com"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label
//                         htmlFor="phone"
//                         className="block text-gray-700 font-medium mb-2"
//                       >
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
//                         placeholder="+1 (555) 123-4567"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="company"
//                         className="block text-gray-700 font-medium mb-2"
//                       >
//                         Company
//                       </label>
//                       <input
//                         type="text"
//                         id="company"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
//                         placeholder="Your Company"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="subject"
//                       className="block text-gray-700 font-medium mb-2"
//                     >
//                       Subject *
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
//                       placeholder="How can we help you?"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-gray-700 font-medium mb-2"
//                     >
//                       Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows="6"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
//                       placeholder="Tell us more about your project or inquiry..."
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
//                   >
//                     Send Message
//                     <Send className="w-5 h-5" />
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-gray-800 mb-8">
//               Our Global Presence
//             </h2>
//             <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
//               With a team of engineering consultants and developers spanning across
//               multiple continents, we're equipped to serve clients worldwide with
//               excellence and efficiency.
//             </p>
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//               <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
//                 <div className="text-center">
//                   <MapPin className="w-24 h-24 text-green-600 mx-auto mb-4" />
//                   <p className="text-2xl font-bold text-gray-800">
//                     Global Operations
//                   </p>
//                   <p className="text-gray-600 mt-2">Serving clients worldwide</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

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
      {/* HERO */}
      <section className="bg-[#6AB165] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Have a question or ready to start your next project? We'd love to
              hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS + FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#6AB165] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-700">{info.details}</p>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-[#6AB165] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-700">
                    We've received your message and will get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-800 font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6AB165] focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-800 font-medium mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6AB165] focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-800 font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6AB165] focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-gray-800 font-medium mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6AB165] focus:border-transparent transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-800 font-medium mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6AB165] focus:border-transparent transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-800 font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6AB165] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
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

      {/* GLOBAL PRESENCE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black mb-8">
              Our Global Presence
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              With a team of engineering consultants and developers spanning
              across multiple continents, we're equipped to serve clients
              worldwide with excellence and efficiency.
            </p>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-24 h-24 text-[#6AB165] mx-auto mb-4" />
                  <p className="text-2xl font-bold text-black">
                    Global Operations
                  </p>
                  <p className="text-gray-700 mt-2">Serving clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
