import { useState } from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import buildingImg from "../assets/hero-banner.jpg";

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
      style={{ fontFamily: "Inter, sans-serif" }}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col mb-20">
          <div
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 w-fit mb-6 bg-[#247994]"
          >
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            <span className="text-white text-[10px] font-bold uppercase tracking-widest">
              Available for Consultations
            </span>
          </div>

          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-4xl md:text-5xl font-black text-black leading-tight tracking-tight"
          >
            Let’s Build Your{" "}
            <span className="italic text-[#247994]">Dreamscape.</span>
          </h2>
        </div>

        <div className="relative">

          {/* IMAGE */}
          <div className="relative w-full h-[500px] md:h-[700px] rounded-[3rem] overflow-hidden border border-white/30">
            <img
              src={buildingImg}
              alt="Project Building"
              className="w-full h-full object-cover"
            />

            {/* ✨ IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-transparent" />
          </div>

          {/* FORM */}
          <div className="absolute top-10 md:top-1/2 left-0 md:-translate-y-1/2 w-full md:w-[450px] lg:w-[500px]">
            <div
              className="
                bg-[#247994]/50
                backdrop-blur-xl
                p-8 md:p-12
                rounded-[2.5rem]
                border border-white/25
                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
              "
            >
              <div className="mb-8">
                <h3
                  style={{ fontFamily: "Playfair Display, serif" }}
                  className="text-3xl font-bold text-white mb-2 italic"
                >
                  Connect.
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  Experience the skyline first-hand. Request a private tour of the site.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/50 py-4 text-white placeholder:text-white/70 focus:outline-none focus:border-white"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/50 py-4 text-white placeholder:text-white/70 focus:outline-none focus:border-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/50 py-4 text-white placeholder:text-white/70 focus:outline-none focus:border-white"
                  />
                </div>

                <textarea
                  name="message"
                  rows="3"
                  placeholder="Message"
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/50 py-4 text-white placeholder:text-white/70 focus:outline-none focus:border-white resize-none"
                />

                <button
                  type="submit"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="w-full mt-6 bg-white text-[#247994] font-black py-5 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3"
                >
                  SEND INQUIRY <ArrowUpRight size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* CONTACT PILLS */}
          <div className="hidden lg:flex flex-col gap-4 absolute top-1/2 right-0 -translate-y-1/2">
            {[
              { icon: <Phone />, label: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: <Mail />, label: "sales@aakash.com", href: "mailto:sales@aakash.com" },
              { icon: <MapPin />, label: "Site Location", href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="flex items-center gap-4 bg-[#247994]/90 backdrop-blur-md border border-white/30 p-4 rounded-2xl text-white transition-all hover:-translate-x-2"
              >
                <span>{item.icon}</span>
                <span className="text-sm font-medium pr-4">{item.label}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
