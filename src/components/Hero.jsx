"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, Download, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Keep these for the slider, but we remove heroImg from the main background
import elev1 from "../assets/hero-banner.jpg";
import elev2 from "../assets/gallery-8.jpg";
import elev4 from "../assets/gallery-2.jpg";
import elev3 from "../assets/gallery-9.jpg";

export default function Hero() {
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

  return (
    <>
      {/* SECTION BACKGROUND CHANGED TO ASH/WHITE (bg-[#f8fafc]) */}
      <section className="relative min-h-[100vh] flex items-center bg-[#E8F1EC] overflow-hidden">
        
        {/* Background Image/Gradients Removed - Replaced with subtle texture or kept clean */}
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Optional: Add a very faint grid or pattern here if you want it less 'flat' */}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Changed badge colors to match light theme: using dark green text on light lime bg */}
              <div
  style={{ fontFamily: "Montserrat, sans-serif" }}
  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3F988]/10 border border-[#E3F988]/10 text-[#062C22] text-sm font-semibold tracking-[0.2em] mb-8"
>
  <MapPin size={16} className="animate-pulse" />
  Mango, Jamshedpur
</div>


              {/* Changed text-white to text-slate-900 for visibility on light bg */}
              <h1
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1]"
              >
                Elevate Your <br />
                <span className="text-[#062C22]">
                  Lifestyle & Retail
                </span>
              </h1>

              <p
  style={{ fontFamily: "Inter, sans-serif" }}
  className="mt-8 text-base md:text-lg text-slate-600 max-w-xl leading-[1.75]"
>
  Experience <span className="text-slate-900 font-semibold">Aakash Skyline</span>: 
  A fusion of luxury living and a vibrant shopping arcade.
</p>


              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
  onClick={() => setOpen(true)}
  style={{ fontFamily: "Montserrat, sans-serif" }}
  className="group px-8 py-4 bg-[#062C22] text-white rounded-xl font-semibold tracking-wide hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#062C22]/20"
>
  Enquire Now 
  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
</button>


                <button
  onClick={() => setOpen(true)}
  style={{ fontFamily: "Montserrat, sans-serif" }}
  className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-semibold tracking-wide hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
>
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

      {/* POPUP FORM (Unchanged) */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              <div className="bg-[#062C22] p-6 md:p-8 text-white relative">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 p-2 text-white/50 hover:text-[#C9F27B] transition-colors"
                >
                  <X size={24} />
                </button>
                <h2 style={{ fontFamily: "Playfair Display, serif" }} className="text-3xl font-bold italic">
                  Enquire Now
                </h2>
                <p className="text-white/60 mt-2">
                  Leave your details and our team will get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-8 grid grid-cols-2 gap-x-4 gap-y-5 overflow-y-auto">
                <input type="text" placeholder="Full Name *" required className="col-span-2 border-b border-gray-300 py-3 outline-none focus:border-[#062C22] transition-colors" />
                <input type="tel" placeholder="Mobile Number *" required className="col-span-1 border-b border-gray-300 py-3 outline-none focus:border-[#062C22] transition-colors" />
                <input type="email" placeholder="Email Address" className="col-span-1 border-b border-gray-300 py-3 outline-none focus:border-[#062C22] transition-colors" />
                <select className="col-span-1 border-b border-gray-300 py-3 outline-none bg-transparent focus:border-[#062C22] text-gray-600">
                  <option value="">Type of Requirement</option>
                  <option>Retail Shop</option>
                  <option>F&B / Restaurant</option>
                  <option>Showroom</option>
                  <option>Investment</option>
                </select>
                <select className="col-span-1 border-b border-gray-300 py-3 outline-none bg-transparent focus:border-[#062C22] text-gray-600">
                  <option value="">Area Required</option>
                  <option>150–300 Sq.Ft</option>
                  <option>300–600 Sq.Ft</option>
                  <option>600+ Sq.Ft</option>
                </select>
                <select className="col-span-2 border-b border-gray-300 py-3 outline-none bg-transparent focus:border-[#062C22] text-gray-600">
                  <option value="">Budget Range</option>
                  <option>₹25 Lakh to ₹50 Lakh</option>
                  <option>₹50 Lakh to ₹75 Lakh</option>
                  <option>₹75 Lakh to ₹1 Cr</option>
                  <option>₹1 Cr Onwards</option>
                </select>
                <button
  type="submit"
  style={{ fontFamily: "Montserrat, sans-serif" }}
  className="col-span-2 mt-4 bg-[#E3F988] text-black py-4 rounded-xl font-semibold tracking-wide hover:bg-[#0a3d2f] transition-colors shadow-lg shadow-[#062C22]/20"
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
      <div className="absolute -inset-4 bg-[#062C22]/5 rounded-[2.5rem] transition-opacity duration-1000 group-hover:opacity-100 opacity-0" />
      <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
        <div className="absolute top-6 left-8 z-30 flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#062C22] animate-pulse" />
          <span
  style={{ fontFamily: "Montserrat, sans-serif" }}
  className="text-xs font-semibold text-white tracking-[0.3em]"
>
  External View 0{index + 1}
</span>

        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img src={images[index]} alt="Elevation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
          <div className="flex items-end justify-between gap-4 mb-6 text-white">
            <h3
  style={{ fontFamily: "Playfair Display, serif" }}
  className="text-3xl font-bold"
>
  Aakash Skyline
</h3>

            <div className="font-mono">0{index + 1} / 04</div>
          </div>
          <div className="flex gap-3 h-1.5 w-full">
            {images.map((_, i) => (
              <div key={i} className="flex-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-white"
                  animate={{ width: i === index ? "100%" : i < index ? "100%" : "0%" }}
                  transition={{ duration: i === index ? 4 : 0.4, ease: "linear" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}