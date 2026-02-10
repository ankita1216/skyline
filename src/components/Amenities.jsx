import {
  Wind, ArrowUpRight, ShoppingBag, Coffee,
  Car, Building2, Zap, Brush, Eye,
  Flame, Droplets, ShieldCheck
} from "lucide-react";

// IMAGES
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

// SOFT BACKGROUND VARIANTS
const contentBgVariants = [
  "bg-white/70",
  "bg-[#E8F1F4]",
  "bg-[#EEF3F0]",
  "bg-[#F2F4EE]",
  "bg-[#E9EEF1]",
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="bg-[#D6DDD9] py-24 px-6 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-[#247994]/10 text-[#247994] text-xs font-semibold mb-5">
            <ShieldCheck size={14} />
            World-Class Amenities
          </div>

          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-4xl md:text-5xl font-bold text-[#1f2933]"
          >
            Designed for <span className="text-[#247994]">Modern Commerce</span>
          </h2>

          <p className="mt-4 text-base text-[#374151] max-w-xl">
            Thoughtfully planned amenities supporting high-footfall retail,
            operational efficiency, and safety.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden
                bg-[#247994]/10 border border-[#247994]/20
                hover:shadow-lg transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="h-36 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover
                    group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div
                className={`p-5 border-t border-black/5
                ${contentBgVariants[idx % contentBgVariants.length]}`}
              >
                <div className="w-10 h-10 rounded-lg bg-white
                  flex items-center justify-center mb-3 text-[#247994]">
                  <item.icon size={18} />
                </div>

                <h3 className="text-[15px] font-semibold text-[#1f2933]">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-[#374151]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
