import { useState } from "react";
import {
  MapPin,
  GraduationCap,
  ShoppingCart,
  Activity,
  Car,
  Building2,
  ChevronRight,
  Navigation,
} from "lucide-react";

const locationData = [
  { title: "School", icon: <GraduationCap size={24} />, places: ["Kerala Public School – 200 m", "Sheyn International School – 1 Km"], color: "bg-blue-500" },
  { title: "Market", icon: <ShoppingCart size={24} />, places: ["Vishal Mega Mart (AC) – 1 Km", "Reliance Fresh – 3.7 Km"], color: "bg-emerald-500" },
  { title: "Connectivity", icon: <Car size={24} />, places: ["NH 33 – 1 Km", "Payal Cinema – 3.4 Km", "Eylex Cinema – 2.6 Km"], color: "bg-orange-500" },
  { title: "Hospital", icon: <Activity size={24} />, places: ["Brahmananda Narayana Hospital – 2.8 Km"], color: "bg-rose-500" },
  { title: "Others", icon: <Building2 size={24} />, places: ["Aakash Heights – 1 Km", "Saha Aakash – 1.2 Km"], color: "bg-purple-500" },
];

const Location = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="location"
      style={{ fontFamily: "Inter, sans-serif" }}
      className="py-16 md:py-20 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="relative mb-16 text-center">
          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-5xl md:text-7xl font-black text-slate-200 absolute -top-8 left-1/2 -translate-x-1/2 uppercase tracking-tight opacity-40 select-none"
          >
            Location
          </h2>

          <div className="relative z-10">
            <span
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="bg-[#247994] text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full"
            >
              Location
            </span>

            <h3
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight"
            >
              ARRIVE AT YOUR,{" "}
              <span className="text-[#247994] italic">PERFECT ADDRESS</span>
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* LEFT – CARD STACK (STRAIGHT NOW) */}
          <div className="lg:col-span-5 perspective-1000">
            <div className="flex flex-col gap-4 transform">
              {locationData.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`cursor-pointer transition-all duration-500
                      ${isActive
                        ? "translate-x-4 md:translate-x-6 scale-105 z-20"
                        : "opacity-70 hover:opacity-100 hover:translate-x-2"}`}
                  >
                    <div
                      className={`p-5 md:p-6 rounded-3xl flex items-center gap-4 shadow-xl
                        ${isActive ? "bg-white border-b-4 border-r-4 border-[#247994]" : "bg-white/80"}`}
                    >
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-lg
                          ${isActive ? item.color + " text-white" : "bg-slate-100 text-slate-400"}`}
                      >
                        {item.icon}
                      </div>

                      <div className="flex-1">
                        <h4
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                          className={`text-lg md:text-xl font-bold ${isActive ? "text-slate-900" : "text-slate-500"}`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400">
                          Click to view landmarks
                        </p>
                      </div>

                      <ChevronRight
                        className={`transition-transform ${isActive ? "rotate-90 text-[#247994]" : "text-slate-300"}`}
                      />
                    </div>

                    {/* DRAWER */}
                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                      <div className="bg-[#247994]/5 rounded-2xl p-4 ml-12 border-l-2 border-[#247994]">
                        {item.places.map((place, i) => (
                          <div key={i} className="flex items-center gap-3 py-1.5 text-slate-700">
                            <Navigation size={12} className="text-[#247994] rotate-45" />
                            <span className="text-sm">{place}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT – MAP */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/5] sm:aspect-video lg:aspect-square max-h-[520px] md:max-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps?q=Mango,Jamshedpur,Jharkhand&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Location;
