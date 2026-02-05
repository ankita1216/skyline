import { useState } from "react";
import { Send, Phone, Mail, MessageSquare, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#B2BEB5] relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-white/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-white/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#247994] font-bold tracking-[0.3em] text-xs uppercase">
              Get in touch
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mt-4 tracking-tighter">
              Let’s start your <br />
              <span className="italic text-[#247994]">new chapter.</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <a
              href="tel:+919876543210"
              className="p-4 rounded-full bg-white/70 border border-black/20 text-slate-700 hover:bg-[#247994] hover:text-white transition-all shadow-sm"
            >
              <Phone size={20} />
            </a>
            <a
              href="mailto:info@example.com"
              className="p-4 rounded-full bg-white/70 border border-black/20 text-slate-700 hover:bg-[#247994] hover:text-white transition-all shadow-sm"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-0 rounded-[2rem] overflow-hidden shadow-2xl border border-black/20 bg-white/70 backdrop-blur-lg">

          {/* Left – Form */}
          <div className="lg:col-span-5 bg-white p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Request a Call Back
            </h3>
            <p className="text-slate-500 mb-8 text-sm">
              Fill out the form and our expert consultant will reach out within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 border-b-2 border-gray-300 py-4 px-2 focus:outline-none focus:border-[#247994]"
              />

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border-b-2 border-gray-300 py-4 px-2 focus:outline-none focus:border-[#247994]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border-b-2 border-gray-300 py-4 px-2 focus:outline-none focus:border-[#247994]"
                />
              </div>

              <textarea
                name="message"
                rows="4"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-50 border-b-2 border-gray-300 py-4 px-2 focus:outline-none focus:border-[#247994] resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#247994] text-white font-bold py-5 rounded-xl hover:bg-[#1a5b70] transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                Submit Inquiry
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Right – Map */}
          <div className="lg:col-span-7 relative min-h-[400px]">
            <iframe
              title="Aakash Skyline Location"
              src="https://www.google.com/maps?q=Aakash+Skyline+Mango+Jamshedpur&output=embed"
              className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating Info */}
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-80 bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-black/20 text-slate-800 shadow-xl">
              <h4 className="flex items-center gap-2 font-bold text-[#247994] mb-4 tracking-wider uppercase text-xs">
                <MapPin size={14} /> Site Address
              </h4>

              <p className="text-sm leading-relaxed text-slate-600">
                Aakash Skyline, Near NH-33,<br />
                Mango, Jamshedpur, Jharkhand 831012
              </p>

              <div className="mt-6 pt-6 border-t border-black/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">
                    Sales Desk
                  </p>
                  <p className="text-lg font-bold text-slate-800">
                    +91 98765 43210
                  </p>
                </div>
                <div className="w-10 h-10 bg-[#247994] text-white rounded-full flex items-center justify-center animate-pulse">
                  <MessageSquare size={18} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
