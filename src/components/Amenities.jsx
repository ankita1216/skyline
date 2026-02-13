"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  Wind, ArrowUpRight, ShoppingBag, Coffee,
  Car, Building2, Zap, Brush, Eye,
  Flame, Droplets
} from "lucide-react";

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
  { title: "100% Power Backup", icon: Zap, desc: "Silent DG backup", img: powerImg },
  { title: "Facility Management", icon: Brush, desc: "In-house housekeeping", img: serviceImg },
  { title: "CCTV Surveillance", icon: Eye, desc: "Advanced monitoring systems", img: cctvImg },
  { title: "Fire Safety Systems", icon: Flame, desc: "Modern fire protection", img: fireImg },
  { title: "Eco Infrastructure", icon: Droplets, desc: "Efficient drainage systems", img: ecoImg },
];

export default function Amenities() {
  const [open, setOpen] = useState(false);
  const [utm, setUtm] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
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

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <section id="amenities" className="bg-[#113225] py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-10"
          >
            <div className="max-w-3xl">
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="uppercase tracking-[0.35em] text-sm text-[#C9F27B] font-semibold mb-4"
              >
                WORLD-CLASS AMENITIES
              </p>
              <h2
                style={{ fontFamily: "Playfair Display, serif" }}
                className="uppercase text-4xl md:text-5xl font-bold leading-[1.15] text-white mb-8"
              >
                DESIGNED FOR <span className="text-[#C9F27B]">MODERN COMMERCE</span>
              </h2>
              <p
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-white text-lg leading-[1.75] max-w-xl"
              >
                Thoughtfully planned infrastructure supporting high-footfall retail,
                operational excellence, and future-ready safety.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="relative overflow-hidden group px-10 py-4 rounded-full font-semibold text-black bg-[#C9F27B] shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Download size={18} />
                Download Brochure
              </span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            </motion.button>
          </motion.div>

          {/* GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {amenities.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 right-4 bg-white p-3 rounded-2xl shadow-xl text-[#113225] group-hover:bg-[#C9F27B] group-hover:text-black transition-colors duration-300">
                    <item.icon size={24} />
                  </div>
                </div>

                <div className="pt-8 pb-8 px-8">
                  <h3
                    style={{ fontFamily: "Playfair Display, serif" }}
                    className="text-xl font-bold text-slate-900 mb-2"
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{ fontFamily: "Inter, sans-serif" }}
                    className="text-sm text-slate-500 leading-relaxed"
                  >
                    {item.desc}
                  </p>
                  <div className="mt-6 w-10 h-1 bg-[#C9F27B] group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* POPUP FORM - INTEGRATED FROM HERO */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-[#062C22]/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <div className="bg-[#062C22] p-8 text-white relative">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-6 right-6 text-white/50 hover:text-[#C9F27B] transition-colors"
                >
                  <X size={24} />
                </button>
                <h2 className="text-3xl font-serif italic font-bold">Request details</h2>
                <p className="text-white/60 mt-2">
                  Leave your details and our team will get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  required 
                  className="md:col-span-2 border-b border-gray-200 py-3 outline-none focus:border-[#062C22] transition-colors" 
                />
                <input 
                  type="tel" 
                  placeholder="Mobile Number *" 
                  required 
                  className="border-b border-gray-200 py-3 outline-none focus:border-[#062C22] transition-colors" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="border-b border-gray-200 py-3 outline-none focus:border-[#062C22] transition-colors" 
                />
                <select className="border-b border-gray-200 py-3 outline-none bg-transparent focus:border-[#062C22] transition-colors cursor-pointer text-gray-600">
                  <option disabled selected>Type of Requirement</option>
                  <option>Retail Shop</option>
                  <option>F&B / Restaurant</option>
                  <option>Showroom</option>
                  <option>Investment</option>
                </select>
                <select className="border-b border-gray-200 py-3 outline-none bg-transparent focus:border-[#062C22] transition-colors cursor-pointer text-gray-600">
                  <option disabled selected>Area Required</option>
                  <option>150–300 Sq.Ft</option>
                  <option>300–600 Sq.Ft</option>
                  <option>600+ Sq.Ft</option>
                </select>
                <select className="border-b border-gray-200 py-3 outline-none bg-transparent focus:border-[#062C22] transition-colors cursor-pointer text-gray-600">
                  <option disabled selected>Budget Range</option>
                  <option>₹25 Lakh to ₹50 Lakh</option>
                  <option>₹50 Lakh to ₹75 Lakh</option>
                  <option>₹75 Lakh to ₹1 Cr</option>
                  <option>₹1 Cr Onwards</option>
                </select>

                {Object.entries(utm).map(([key, value]) => (
                  <input key={key} type="hidden" name={key} value={value} />
                ))}

                <button
                  type="submit"
                  className="md:col-span-2 mt-4 bg-[#062C22] text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-[#0a3d2f] transition-colors shadow-lg shadow-[#062C22]/20"
                >
                  Send Enquiry
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}