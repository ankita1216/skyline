import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Download, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero-banner.jpg";




export default function Hero() {
  const [open, setOpen] = useState(false);
  const [utm, setUtm] = useState({});
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate("/thank-you");
  };

  return (
    <>
      <section className="relative min-h-screen bg-[#F8F9F8] overflow-hidden flex items-center pt-24 lg:pt-0">

        <div
          className="absolute inset-0 z-0"
          style={{
            clipPath: "polygon(0 0, 65% 0, 45% 100%, 0% 100%)",
            backgroundColor: "#D6DDD9",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-14 items-center">

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
              >
                <div className="inline-flex items-center gap-3 mb-8">
                  <span className="w-10 h-[1px] bg-[#247994]" />
                  <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#247994]">
                    Project Skyline / 2026
                  </span>
                </div>

                <h1 className="font-serif">
                  <span className="block text-[52px] md:text-[90px] font-bold text-[#247994] leading-none tracking-tight">
                    AKASH
                  </span>
                  <span
                    className="block text-[60px] md:text-[110px] font-normal leading-none tracking-tight"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1.5px #247994",
                    }}
                  >
                    SKYLINE
                  </span>
                </h1>

                <div className="mt-10 flex items-start gap-8">
                  <div className="hidden md:block h-24 w-[1px] bg-[#247994]/20 mt-2" />

                  <div>
                    <p className="text-base md:text-lg text-[#374151] max-w-md leading-relaxed font-light">
                      Redefining the Jamshedpur horizon through{" "}
                      <span className="font-bold text-[#247994]">brutalist elegance</span> and
                      curated commercial spaces.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-6 items-center">

                      <button
                        onClick={() => setOpen(true)}
                        className="group flex items-center gap-3 bg-[#247994] text-white px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300"
                      >
                        <span className="font-bold text-sm tracking-widest uppercase">
                          Enquire
                        </span>
                        <ArrowUpRight
                          size={20}
                          className="group-hover:rotate-45 transition-transform"
                        />
                      </button>

                      {/* Brochure now opens same form */}
                      <button
                        onClick={() => setOpen(true)}
                        className="flex items-center gap-2 text-[#247994] font-bold text-sm tracking-widest uppercase hover:underline decoration-2 underline-offset-8"
                      >
                        <Download size={18} />
                        Brochure
                      </button>

                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border-[12px] border-white">
                  <img
                    src={heroImg}
                    alt="Akash Skyline"
                    className="w-full h-full object-cover scale-110"
                  />
                  <div className="absolute inset-0 bg-[#247994]/10 mix-blend-multiply" />
                </div>

                <div className="absolute -bottom-8 right-6 bg-white py-6 px-10 rounded-xl shadow-xl flex items-center gap-4 border border-slate-100">
                  <div className="p-3 bg-[#D6DDD9] rounded-full">
                    <MapPin size={22} className="text-[#247994]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-lg font-black text-[#247994]">
                      Mango, Jamshedpur
                    </p>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* POPUP */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 md:p-8 relative"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X size={22} />
              </button>

              <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#247994]">
                Commercial Enquiry
              </h2>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input type="text" placeholder="Full Name *" required className="md:col-span-2 border p-3 rounded-lg focus:ring-2 focus:ring-[#247994]" />
                <input type="tel" placeholder="Mobile Number *" required className="border p-3 rounded-lg focus:ring-2 focus:ring-[#247994]" />
                <input type="email" placeholder="Email Address" className="border p-3 rounded-lg focus:ring-2 focus:ring-[#247994]" />

                <select className="border p-3 rounded-lg focus:ring-2 focus:ring-[#247994]">
                  <option>Type of Requirement</option>
                  <option>Retail Shop</option>
                  <option>F&B / Restaurant</option>
                  <option>Showroom</option>
                  <option>Investment</option>
                </select>

                <select className="border p-3 rounded-lg focus:ring-2 focus:ring-[#247994]">
                  <option>Area Required</option>
                  <option>150–300 Sq.Ft</option>
                  <option>300–600 Sq.Ft</option>
                  <option>600+ Sq.Ft</option>
                </select>

                {Object.entries(utm).map(([key, value]) => (
                  <input key={key} type="hidden" name={key} value={value} />
                ))}

                <button
                  type="submit"
                  className="md:col-span-2 bg-[#247994] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Get Price & Availability
                </button>

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
