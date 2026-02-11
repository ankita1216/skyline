import React from "react";
import { motion } from "framer-motion";
import {
  Wind, ArrowUpRight, ShoppingBag, Coffee,
  Car, Building2, Zap, Brush, Eye,
  Flame, Droplets, ShieldCheck
} from "lucide-react";

// IMAGES (Keep your imports as they are)
import acImg from "../assets/ac.png";
import elevatorImg from "../assets/elevator.png";
import retailImg from "../assets/retail.png";
import diningImg from "../assets/dining.png";
import parkingImg from "../assets/parking.png";
import glassImg from "../assets/glass.png";
import powerImg from "../assets/power.png";
import serviceImg from "../assets/service.png";
import cctvImg from "../assets/cctv.png";
import fireImg from "../assets/fire.png";
import ecoImg from "../assets/eco.png";

const amenities = [
  { title: "Centralized Air Conditioning", icon: Wind, desc: "VRF system with independent zone control", img: acImg },
  { title: "High-Speed Elevators", icon: ArrowUpRight, desc: "Efficient vertical mobility with escalators", img: elevatorImg },
  { title: "Anchor Retail Spaces", icon: ShoppingBag, desc: "Large-format premium retail zones", img: retailImg },
  { title: "Dining & Cafés", icon: Coffee, desc: "Curated food & beverage destinations", img: diningImg },
  { title: "Ample Parking", icon: Car, desc: "Well-planned parking for 2W & 4W", img: parkingImg },
  { title: "Glass Facade", icon: Building2, desc: "Energy-efficient architectural glazing", img: glassImg },
  { title: "100% Power Backup", icon: Zap, desc: "Silent DG backup for uninterrupted operations", img: powerImg },
  { title: "Facility Management", icon: Brush, desc: "In-house housekeeping & maintenance", img: serviceImg },
  { title: "CCTV Surveillance", icon: Eye, desc: "Advanced security monitoring systems", img: cctvImg },
  { title: "Fire Safety Systems", icon: Flame, desc: "Modern fire detection & suppression", img: fireImg },
  { title: "Eco Infrastructure", icon: Droplets, desc: "Efficient drainage & waste systems", img: ecoImg },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Amenities() {
  return (
    <section id="amenities" className="bg-[#f8fafc] py-24 px-6 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            bg-[#247994]/10 text-[#247994] text-[13px] font-medium mb-6 border border-[#247994]/20">
            <ShieldCheck size={16} />
            <span>World-Class Amenities</span>
          </div>

          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-4xl md:text-6xl font-bold text-[#1a202c] leading-tight"
          >
            Designed for <span className="text-[#247994] italic">Modern Commerce</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Thoughtfully planned infrastructure supporting high-footfall retail,
            operational excellence, and future-ready safety.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {amenities.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* FLOATING ICON */}
              <div className="absolute top-44 left-6 z-10">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#247994] group-hover:bg-[#247994] group-hover:text-white transition-colors duration-300">
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
              </div>

              {/* CONTENT */}
              <div className="pt-10 pb-8 px-8">
                <h3 className="text-xl font-bold text-[#1a202c] mb-2 group-hover:text-[#247994] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
                
                {/* DECORATIVE LINE */}
                <div className="mt-6 w-8 h-1 bg-[#247994]/20 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}