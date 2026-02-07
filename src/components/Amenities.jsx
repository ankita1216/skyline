import { useState, cloneElement } from "react";
import {
  Wind, ArrowUpRight, ShoppingBag, Coffee,
  Car, Building2, Zap, Brush, Eye,
  Flame, Droplets, ShieldCheck, Plus, MoveUpRight
} from "lucide-react";

// 🖼️ IMAGES
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
  { title: "Centralized AC", icon: <Wind />, category: "Climate", size: "small", desc: "VRF system with individual zone control.", img: acImg },
  { title: "Vertical Mobility", icon: <ArrowUpRight />, category: "Lifts & Escalators", size: "large", desc: "High-speed elevators & dual-path escalators.", img: elevatorImg },
  { title: "Anchor Shops", icon: <ShoppingBag />, category: "Retail", size: "small", desc: "Premium retail floor space.", img: retailImg },
  { title: "Dining Hub", icon: <Coffee />, category: "Lifestyle", size: "small", desc: "Multi-cuisine restaurants & cafes.", img: diningImg },
  { title: "Ample Parking", icon: <Car />, category: "Logistics", size: "medium", desc: "Dedicated slots for 2W & 4W vehicles.", img: parkingImg },
  { title: "Glass Facade", icon: <Building2 />, category: "Architecture", size: "medium", desc: "Heat-reflective high-performance glass.", img: glassImg },
  { title: "Silent Power", icon: <Zap />, category: "Utility", size: "small", desc: "100% DG backup with silent tech.", img: powerImg },
  { title: "In-house Team", icon: <Brush />, category: "Service", size: "small", desc: "24/7 housekeeping & maintenance.", img: serviceImg },
  { title: "CCTV & Security", icon: <Eye />, category: "Safety", size: "small", desc: "AI surveillance & trained guards.", img: cctvImg },
  { title: "Fire Defense", icon: <Flame />, category: "Safety", size: "small", desc: "Addressable fire & smoke detection.", img: fireImg },
  { title: "Eco-Drainage", icon: <Droplets />, category: "Infrastructure", size: "medium", desc: "Modern sewage & drainage system.", img: ecoImg },
];

const Amenities = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#D6DDD9] py-24 px-6 relative overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div>
            <div
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#247994]/40 bg-[#247994]/10 text-[#247994] text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
            >
              <ShieldCheck size={14} /> Premier Specifications
            </div>

            <h2
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-4xl md:text-5xl font-bold text-[#1f2933] leading-tight"
            >
              STEP INTO THE LAP <br />
              <span className="text-[#247994]">OF LUXURY</span>
            </h2>
          </div>

          <p
            style={{ fontFamily: "Inter, sans-serif" }}
            className="text-[#374151] text-lg max-w-xs border-l border-black/20 pl-6 italic"
          >
            Engineered for high-traffic commercial success and safety.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 auto-rows-[210px]">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative transition-all duration-500
                ${item.size === "large" ? "md:col-span-2 lg:col-span-6 lg:row-span-2" : ""}
                ${item.size === "medium" ? "md:col-span-2 lg:col-span-4" : "lg:col-span-3"}
                ${hovered !== null && hovered !== idx ? "opacity-40 scale-[0.98]" : ""}
              `}
            >
              <div className="h-full w-full p-6 rounded-3xl bg-white/65 backdrop-blur-md border border-black/10 relative overflow-hidden">

                {/* IMAGE LAYER */}
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-500 ${
                    hovered === idx ? "opacity-40" : "opacity-30"
                  }`}
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    clipPath:
                      item.size === "large"
                        ? "polygon(35% 0%, 100% 0%, 100% 100%, 10% 100%)"
                        : "polygon(55% 0%, 100% 0%, 100% 100%, 25% 100%)",
                  }}
                />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
                        hovered === idx
                          ? "bg-[#247994] text-white"
                          : "bg-white text-[#247994]"
                      }`}
                    >
                      {cloneElement(item.icon, { size: 22 })}
                    </div>
                    <Plus
                      size={20}
                      className={hovered === idx ? "text-[#247994] rotate-90" : "text-black/20"}
                    />
                  </div>

                  <div className="mt-auto">
                    <p
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                      className="text-[10px] uppercase tracking-[0.2em] text-[#6b7280] mb-1"
                    >
                      {item.category}
                    </p>

                    <h3
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                      className="text-xl font-bold text-[#1f2933]"
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{ fontFamily: "Inter, sans-serif" }}
                      className={`text-xs text-[#374151] mt-3 border-l border-[#247994]/60 pl-3 transition-all ${
                        hovered === idx ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>

                  {item.size === "large" && (
                    <MoveUpRight
                      size={40}
                      className="absolute bottom-6 right-6 text-black/10"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Amenities;
