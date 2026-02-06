import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Download,
  Building2,
  ShoppingBag,
} from "lucide-react";
import heroImg from "../assets/hero-banner.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-[#D6DDD9] overflow-hidden">

      {/* Background */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImg}
          alt="Akash Skyline Project"
          className="w-full h-full object-cover opacity-55"
        />

        {/* Balanced premium overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-slate-300/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-400/40 to-slate-600/50" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Location Badge */}
            <div
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         bg-[#247994]/10 border border-[#247994]/20
                         backdrop-blur-md text-[#247994] text-sm font-medium mb-8"
            >
              <MapPin size={16} />
              Mango, Jamshedpur
            </div>

            {/* Heading */}
            <h1
              style={{ fontFamily: "Playfair Display, serif" }}
              className="
                text-[42px] md:text-[60px]
                font-bold
                text-[#1f2933]
                leading-[1.15]
                tracking-tight
                max-w-[520px]
              "
            >
              THE EPICCENTER OF LUXURY
              <br />
              <span className="text-[#247994] italic">
                LIFESTYLE
              </span>
            </h1>

            {/* Paragraph */}
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="mt-8 text-lg md:text-xl text-[#374151] max-w-xl leading-relaxed"
            >
              Experience{" "}
              <span className="text-[#1f2933] font-semibold">
                Akash Skyline
              </span>
              : A fusion of luxury living and a vibrant shopping arcade,
              designed for the modern visionary.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="group px-8 py-4 bg-[#247994] text-white rounded-xl
                           font-bold hover:opacity-90 transition-all
                           flex items-center justify-center gap-2
                           shadow-lg shadow-[#247994]/20"
              >
                Enquire Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="px-8 py-4 bg-white/70 border border-black/10
                           text-[#1f2933] rounded-xl font-bold
                           hover:bg-white transition-all
                           flex items-center justify-center gap-2
                           backdrop-blur-sm"
              >
                <Download size={18} />
                Brochure
              </button>
            </div>

            {/* Trust */}
            <div
              style={{ fontFamily: "Inter, sans-serif" }}
              className="mt-12 pt-8 border-t border-black/10 flex gap-8 items-center"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#D6DDD9] bg-white overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#374151]">
                <span className="text-[#1f2933] font-bold">500+</span> Families trust us
              </p>
            </div>
          </motion.div>

          {/* RIGHT FEATURES */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 lg:mt-0"
          >
            {/* ✅ ONLY THIS CARD CHANGED */}
            <FeatureCard
              icon={<ShoppingBag className="text-[#247994]" />}
              title="Urban Commercial"
              desc="Premium retail, cafés & lifestyle brands with high footfall"
            />

            {/* UNCHANGED */}
            <FeatureCard
              icon={<Building2 className="text-[#247994]" />}
              title="The Mall"
              desc="Integrated AC Shopping Arcade"
            />

            <div className="col-span-1 sm:col-span-2 p-6 rounded-2xl
                            bg-white/60 border border-black/10 backdrop-blur-xl">
              <h4
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="text-[#1f2933] font-bold mb-1"
              >
                World-Class Amenities
              </h4>
              <p
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-[#374151] text-sm"
              >
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
    <div className="p-6 rounded-2xl bg-white/60 border border-black/10
                    backdrop-blur-md hover:bg-white transition-colors">
      <div className="w-12 h-12 rounded-lg bg-[#247994]/10
                      flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-[#1f2933] font-bold text-lg"
      >
        {title}
      </h3>
      <p
        style={{ fontFamily: "Inter, sans-serif" }}
        className="text-[#374151] text-sm mt-1"
      >
        {desc}
      </p>
    </div>
  );
}
