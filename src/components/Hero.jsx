import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Download,
  Building2,
  ShoppingBag
} from "lucide-react";
import heroImg from "../assets/hero-banner.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-[#020617] overflow-hidden">

      {/* Dynamic Background with Parallax Effect */}
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
        {/* Advanced Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md text-cyan-400 text-sm font-medium mb-8">
              <MapPin size={16} className="animate-pulse" />
              Mango, Jamshedpur
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Lifestyle & Retail
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              Experience <span className="text-white font-semibold">Akash Skyline</span>:
              A fusion of luxury living and a vibrant shopping arcade, designed for the modern visionary.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-900/20">
                Enquire Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                <Download size={18} />
                Brochure
              </button>
            </div>

            {/* Floating Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10 flex gap-8 items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-white font-bold">500+</span> Families trust us
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual Features (NOW MOBILE VISIBLE) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 lg:mt-0"
          >
            <FeatureCard
              icon={<Building2 className="text-cyan-400" />}
              title="Residential"
              desc="Premium 3 & 4 BHK Apartments"
            />
            <FeatureCard
              icon={<ShoppingBag className="text-emerald-400" />}
              title="The Mall"
              desc="Integrated AC Shopping Arcade"
            />

            <div className="col-span-1 sm:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-xl">
              <h4 className="text-white font-bold mb-1">World-Class Amenities</h4>
              <p className="text-slate-400 text-sm">
                Gym, Infinity Pool, Club House & 24/7 Security
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-white font-bold text-lg">{title}</h3>
      <p className="text-slate-400 text-sm mt-1">{desc}</p>
    </div>
  );
}