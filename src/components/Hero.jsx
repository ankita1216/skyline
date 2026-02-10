import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Download } from "lucide-react";
import heroImg from "../assets/hero-banner.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F8F9F8] overflow-hidden flex items-center pt-24 lg:pt-0">

      {/* DIAGONAL BACKGROUND */}
      <div
        className="absolute inset-0 z-0"
        style={{
          clipPath: "polygon(0 0, 65% 0, 45% 100%, 0% 100%)",
          backgroundColor: "#D6DDD9",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-10 h-[1px] bg-[#1f2933]" />
                <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#1f2933]">
                  Project Skyline / 2026
                </span>
              </div>

              {/* HEADING */}
              <h1 className="font-serif">
                <span className="block text-[52px] md:text-[90px] font-bold text-[#1f2933] leading-none tracking-tight">
                  AKASH
                </span>
                <span
                  className="block text-[60px] md:text-[110px] font-normal leading-none tracking-tight"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px #1f2933",
                  }}
                >
                  SKYLINE
                </span>
              </h1>

              <div className="mt-10 flex items-start gap-8">
                <div className="hidden md:block h-24 w-[1px] bg-[#1f2933]/20 mt-2" />

                <div>
                  <p className="text-base md:text-lg text-[#374151] max-w-md leading-relaxed font-light">
                    Redefining the Jamshedpur horizon through{" "}
                    <span className="font-bold">brutalist elegance</span> and
                    curated commercial spaces.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 items-center">
                    <button className="group flex items-center gap-3 bg-[#1f2933] text-white px-8 py-4 rounded-full hover:pr-10 transition-all duration-300">
                      <span className="font-bold text-sm tracking-widest uppercase">
                        Enquire
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="group-hover:rotate-45 transition-transform"
                      />
                    </button>

                    <button className="flex items-center gap-2 text-[#1f2933] font-bold text-sm tracking-widest uppercase hover:underline decoration-2 underline-offset-8">
                      <Download size={18} />
                      Brochure
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
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

              <InfoSlab
                number="02"
                title="Smart Living"
                desc="Future-ready homes"
                pos="hidden lg:block bottom-24 -left-12"
              />

              <div className="absolute -bottom-8 right-6 bg-white py-6 px-10 rounded-xl shadow-xl flex items-center gap-4 border border-slate-100">
                <div className="p-3 bg-[#D6DDD9] rounded-full">
                  <MapPin size={22} className="text-[#1f2933]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="text-lg font-black text-[#1f2933]">
                    Mango, Jamshedpur
                  </p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function InfoSlab({ number, title, desc, pos }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`absolute ${pos} z-20 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg border-l-4 border-[#1f2933] min-w-[200px]`}
    >
      <span className="text-[10px] font-black text-[#D6DDD9] block mb-1 tracking-tighter">
        {number}
      </span>
      <h4 className="text-sm font-bold text-[#1f2933] uppercase">
        {title}
      </h4>
      <p className="text-[11px] text-slate-500 font-medium">
        {desc}
      </p>
    </motion.div>
  );
}
