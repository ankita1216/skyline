import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, Download } from "lucide-react";
import heroImg from "../assets/hero-banner.jpg";

// ➕ elevation images
import elev1 from "../assets/hero-banner.jpg";
import elev2 from "../assets/gallery-5.jpg";
import elev3 from "../assets/gallery-6.jpg";
import elev4 from "../assets/gallery-2.jpg";


export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-[#020617] overflow-hidden">
      
      {/* Background SAME */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImg}
          alt="Akash Skyline Project"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#113225] via-[#113225]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#113225]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT SAME */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9F27B]/10 border border-[#C9F27B]/20 text-[#C9F27B] text-sm font-medium mb-8">
              <MapPin size={16} className="animate-pulse" />
              Mango, Jamshedpur
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9F27B] to-[#C9F27B]">
                Lifestyle & Retail
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              Experience <span className="text-white font-semibold">Akash Skyline</span>: 
              A fusion of luxury living and a vibrant shopping arcade.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-[#C9F27B] text-black rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C9F27B]/20">
                Enquire Now 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Download size={18} />
                Brochure
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE ELEVATION */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block relative z-20"

          >
            <ElevationSlider />
          </motion.div>

        </div>
      </div>
    </section>
  );
}


/* 🔥 ELEVATION SLIDER */
function ElevationSlider() {
  const images = [elev1, elev2, elev3, elev4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] lg:w-[110%] lg:-ml-[10%] group">

      
      {/* Dynamic Background Glow */}
      <div className="absolute -inset-4 bg-[#C9F27B]/15 rounded-[2.5rem] blur-3xl transition-opacity duration-1000 group-hover:opacity-100 opacity-60" />
      
      <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/20 bg-black/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] backdrop-blur-md">
        
        {/* Top Info Badge */}
        <div className="absolute top-6 left-8 z-30 flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#C9F27B] animate-pulse shadow-[0_0_10px_#C9F27B]" />
          <span className="text-xs font-bold text-white uppercase tracking-[0.3em]">External View 0{index + 1}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.15,  }}
            animate={{ opacity: 1, scale: 1.05, }}
            exit={{ opacity: 0, scale: 1,  }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0"
          >
            <img
              src={images[index]}
              alt="Elevation"
              className="w-full h-full object-cover"
            />
            {/* Multi-layered Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#113225] via-[#113225]/10 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-[#113225]/20 mix-blend-overlay" />
          </motion.div>
        </AnimatePresence>

        {/* Bottom Content Area */}
        <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-extrabold text-white tracking-tight">Project Elevation</h3>
              <p className="text-[#C9F27B] text-sm font-bold uppercase tracking-widest opacity-90">Premium Architecture</p>
            </div>
            
            <div className="text-white/40 font-mono text-sm mb-1">
              <span className="text-white text-lg font-bold">0{index + 1}</span> / 0{images.length}
            </div>
          </div>

          {/* Segmented Progress Bar */}
          <div className="flex gap-3 h-1.5 w-full relative">
            {images.map((_, i) => (
              <div key={i} className="flex-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#C9F27B]"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: i === index ? "100%" : i < index ? "100%" : "0%" 
                  }}
                  transition={{ 
                    duration: i === index ? 4 : 0.4, 
                    ease: i === index ? "linear" : "easeOut" 
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Diagonal Gloss Shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40 pointer-events-none" />
      </div>

      {/* Aesthetic Floating Badge */}
      <div className="absolute -bottom-6 -right-6 h-20 w-20 bg-[#C9F27B] rounded-3xl flex items-center justify-center rotate-12 shadow-2xl group-hover:rotate-0 transition-all duration-700 z-30">
        <div className="h-10 w-10 rounded-full border-[3px] border-black/10 flex items-center justify-center">
            <div className="h-2.5 w-2.5 rounded-full bg-black animate-ping" />
        </div>
      </div>

    </div>
  );
}
