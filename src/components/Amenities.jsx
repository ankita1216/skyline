import { useState } from "react";
import { 
  Wind, ArrowUpRight, ShoppingBag, Coffee, 
  Car, Building2, Zap, Brush, Eye, 
  Flame, Droplets, LayoutGrid, ShieldCheck
} from "lucide-react";

const amenities = [
  { title: "Centralized AC", icon: <Wind />, category: "Climate", size: "small", desc: "Vrf system with individual zone control." },
  { title: "Vertical Mobility", icon: <ArrowUpRight />, category: "Lifts & Escalators", size: "large", desc: "High-speed elevators & dual-path escalators." },
  { title: "Anchor Shops", icon: <ShoppingBag />, category: "Retail", size: "small", desc: "Premium retail floor space." },
  { title: "Dining Hub", icon: <Coffee />, category: "Lifestyle", size: "small", desc: "Multi-cuisine restaurants & cafes." },
  { title: "Ample Parking", icon: <Car />, category: "Logistics", size: "medium", desc: "Dedicated slots for 2W & 4W vehicles." },
  { title: "Glass Facade", icon: <Building2 />, category: "Architecture", size: "medium", desc: "High-performance heat-reflective glass." },
  { title: "Silent Power", icon: <Zap />, category: "Utility", size: "small", desc: "100% DG backup with silent technology." },
  { title: "In-house Team", icon: <Brush />, category: "Service", size: "small", desc: "24/7 housekeeping & maintenance." },
  { title: "CCTV & Security", icon: <Eye />, category: "Safety", size: "small", desc: "Advanced AI surveillance & guards." },
  { title: "Fire Defense", icon: <Flame />, category: "Safety", size: "small", desc: "Addressable fire & smoke detection." },
  { title: "Eco-Drainage", icon: <Droplets />, category: "Infrastructure", size: "medium", desc: "Modern sewage & drainage management." },
];

const Amenities = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#B2BEB5] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-teal-700 font-bold tracking-[0.2em] text-sm mb-4 uppercase">
              <ShieldCheck size={20} />
              Premier Specifications
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-[#1f2933] tracking-tighter">
              A MASTERCLASS IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                INFRASTRUCTURE.
              </span>
            </h2>
          </div>
          <p className="text-gray-700 text-lg max-w-xs border-l border-gray-400 pl-6">
            Engineered for high-traffic commercial success and safety.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[160px]">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative rounded-[2rem] p-6 transition-all duration-500 cursor-help border flex flex-col justify-between overflow-hidden
                ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${item.size === "medium" ? "md:col-span-2" : ""}
                ${hovered === idx 
                  ? "bg-[#c3ccc6] border-teal-600/50 shadow-[0_0_30px_-5px_rgba(13,148,136,0.35)]" 
                  : "bg-[#d1d8d3] border-black/5"}
              `}
            >
              {/* Background Glow */}
              <div className={`absolute -right-4 -top-4 w-24 h-24 bg-teal-500/20 blur-3xl transition-opacity duration-500 ${hovered === idx ? "opacity-100" : "opacity-0"}`} />

              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                hovered === idx 
                  ? "bg-teal-600 text-white scale-110 shadow-lg" 
                  : "bg-white/60 text-teal-700"
              }`}>
                {item.icon}
              </div>

              <div>
                <p className="text-[10px] font-bold text-teal-700 uppercase tracking-widest mb-1">
                  {item.category}
                </p>
                <h3 className="text-[#1f2933] font-bold text-lg leading-tight">
                  {item.title}
                </h3>
                <p className={`text-gray-600 text-xs mt-2 transition-opacity duration-300 ${hovered === idx ? "opacity-100" : "opacity-0 md:hidden"}`}>
                  {item.desc}
                </p>
              </div>

              {/* Corner Icon */}
              <div className="absolute top-6 right-6">
                <LayoutGrid
                  size={14}
                  className={`transition-all duration-500 ${
                    hovered === idx ? "text-teal-600 rotate-90" : "text-black/20"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
