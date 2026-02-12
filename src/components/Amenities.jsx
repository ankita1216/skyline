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

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
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
                DESIGNED FOR{" "}
                <span className="text-[#C9F27B]">
                  MODERN COMMERCE
                </span>
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
              <span className="absolute inset-0 bg-gradient-to-r from-[#C9F27B] via-[#C9F27B] to-[#C9F27B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
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
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
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

                  <div className="mt-6 w-10 h-1 bg-[#C9F27B]/20 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* POPUP FORM */}
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
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 md:p-8 relative"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X size={22} />
              </button>

              <h2
                style={{ fontFamily: "Playfair Display, serif" }}
                className="uppercase text-2xl md:text-3xl font-bold mb-6 text-[#113225]"
              >
                DOWNLOAD BROCHURE
              </h2>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input type="text" placeholder="Full Name *" required className="md:col-span-2 border p-3 rounded-lg focus:ring-2 focus:ring-[#C9F27B]" />

                <input type="tel" placeholder="Mobile Number *" required className="border p-3 rounded-lg focus:ring-2 focus:ring-[#C9F27B]" />

                <input type="email" placeholder="Email Address" className="border p-3 rounded-lg focus:ring-2 focus:ring-[#C9F27B]" />

                <select className="border p-3 rounded-lg focus:ring-2 focus:ring-[#C9F27B]">
                  <option>Type of Requirement</option>
                  <option>Retail Shop</option>
                  <option>F&B / Restaurant</option>
                  <option>Showroom</option>
                  <option>Investment</option>
                </select>

                <select className="border p-3 rounded-lg focus:ring-2 focus:ring-[#C9F27B]">
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
                  className="md:col-span-2 bg-[#113225] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"

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
