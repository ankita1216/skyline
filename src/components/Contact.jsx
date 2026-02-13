import { useState, useEffect } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import buildingImg from "../assets/hero-banner.jpg";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    area: "",
    budget: "", // Added budget field
  });

  const [utm, setUtm] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];

    const collected = {};
    utmParams.forEach((param) => {
      const value = params.get(param);
      if (value) collected[param] = value;
    });

    setUtm(collected);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { ...formData, ...utm });
    navigate("/thank-you");
  };

  return (
    <section
      id="contact"
      className="py-28 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col mb-20">
          <div
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 w-fit mb-6 bg-[#113225]/90 backdrop-blur-md"
          >
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            <span className="text-white text-[10px] font-semibold uppercase tracking-[0.35em]">
              AVAILABLE FOR CONSULTATIONS
            </span>
          </div>

          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="uppercase text-4xl md:text-5xl font-bold text-black leading-[1.15]"
          >
            LET’S BUILD YOUR{" "}
            <span className="text-[#C9F27B]">
              DREAMSCAPE
            </span>
          </h2>
        </div>

        <div className="relative">

          {/* IMAGE */}
          <div className="relative w-full h-[600px] md:h-[750px] rounded-[3rem] overflow-hidden border border-white/30">
            <img
              src={buildingImg}
              alt="Project Building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
          </div>

          {/* FORM */}
          <div className="absolute top-10 md:top-1/2 left-0 md:-translate-y-1/2 w-full md:w-[450px] lg:w-[500px]">
            <div className="bg-[#113225]/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/25 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

              <div className="mb-8">
                <h3
                  style={{ fontFamily: "Playfair Display, serif" }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  CONNECT.
                </h3>

                <p
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="text-white/85 text-sm leading-[1.75]"
                >
                  Experience the skyline first-hand. Request a private tour of the site.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                style={{ fontFamily: "Inter, sans-serif" }}
                className="space-y-5"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/40 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-[#C9F27B] transition-colors"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/40 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-[#C9F27B] transition-colors"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/40 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-[#C9F27B] transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/40 py-3 text-white focus:outline-none focus:border-[#C9F27B] cursor-pointer"
                  >
                    <option value="" className="text-black">Requirement Type</option>
                    <option className="text-black">Retail Shop</option>
                    <option className="text-black">F&B / Restaurant</option>
                    <option className="text-black">Showroom</option>
                    <option className="text-black">Investment</option>
                  </select>

                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/40 py-3 text-white focus:outline-none focus:border-[#C9F27B] cursor-pointer"
                  >
                    <option value="" className="text-black">Area Required</option>
                    <option className="text-black">150–300 Sq.Ft</option>
                    <option className="text-black">300–600 Sq.Ft</option>
                    <option className="text-black">600+ Sq.Ft</option>
                  </select>
                </div>

                {/* NEW BUDGET FIELD */}
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/40 py-3 text-white focus:outline-none focus:border-[#C9F27B] cursor-pointer"
                >
                  <option value="" className="text-black">Budget Range</option>
                  <option className="text-black">₹25 Lakh to ₹50 Lakh</option>
                  <option className="text-black">₹50 Lakh to ₹75 Lakh</option>
                  <option className="text-black">₹75 Lakh to ₹1 Cr</option>
                  <option className="text-black">₹1 Cr Onwards</option>
                </select>

                {Object.entries(utm).map(([key, value]) => (
                  <input key={key} type="hidden" name={key} value={value} />
                ))}

                <button
                  type="submit"
                  className="w-full mt-8 bg-[#C9F27B] text-[#113225] font-bold py-5 rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  SEND INQUIRY <ArrowUpRight size={20} />
                </button>

              </form>
            </div>
          </div>

          {/* CONTACT PILL */}
          <div className="hidden lg:flex flex-col gap-4 absolute top-1/2 right-0 -translate-y-1/2">
            <a
              href="#"
              className="flex items-center gap-4 bg-[#113225]/90 backdrop-blur-md border border-white/30 p-4 rounded-2xl text-white transition-all hover:-translate-x-2"
            >
              <MapPin className="text-[#C9F27B]" />
              <span
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-sm font-medium pr-4"
              >
                Site Location
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;