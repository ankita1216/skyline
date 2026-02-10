import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  ShoppingCart,
  Activity,
  Car,
  ChevronRight,
  Navigation,
  Building2,
} from "lucide-react";

const locationData = [
  {
    title: "School",
    icon: <GraduationCap size={24} />,
    places: [
      "Kerala Public School – 200 m",
      "Sheyn International School – 1 Km",
    ],
    color: "bg-blue-500",
  },
  {
    title: "Market",
    icon: <ShoppingCart size={24} />,
    places: ["Vishal Mega Mart (AC) – 1 Km", "Reliance Fresh – 3.7 Km"],
    color: "bg-emerald-500",
  },
  {
    title: "Connectivity",
    icon: <Car size={24} />,
    places: ["NH 33 – 1 Km", "Payal Cinema – 3.4 Km", "Eylex Cinema – 2.6 Km"],
    color: "bg-orange-500",
  },
  {
    title: "Hospital",
    icon: <Activity size={24} />,
    places: ["Brahmananda Narayana Hospital – 2.8 Km"],
    color: "bg-rose-500",
  },
  {
    title: "Others",
    icon: <Building2 size={24} />,
    places: ["Aakash Heights – 1 Km", "Saha Aakash – 1.2 Km"],
    color: "bg-purple-500",
  },
];

const Location = () => {
  const [activeTab, setActiveTab] = useState(0);

  // ✅ GOOGLE MAP WITH RED PIN (NO API KEY)
  const mapSrc =
    "https://www.google.com/maps?q=Aakash+Skyline,+Near+Chepapul,+Chepapul,+Mango,+Jamshedpur,+Tamlia,+Jharkhand+831020&output=embed";

  return (
    <section
      id="location"
      className="py-20 bg-slate-50 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="relative mb-20 text-center">
          <h2 className="text-6xl md:text-8xl font-black text-slate-200 absolute -top-10 left-1/2 -translate-x-1/2 uppercase tracking-tighter opacity-30 select-none whitespace-nowrap">
            Connectivity
          </h2>

          <div className="relative z-10">
            <span className="bg-[#247994] text-white px-5 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
              Location
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 leading-tight">
              ARRIVE AT YOUR,{" "}
              <span className="text-[#247994] italic">
                PERFECT ADDRESS
              </span>
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT – INTERACTIVE CARDS */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex flex-col gap-5">
              {locationData.map((item, index) => {
                const isActive = activeTab === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className="relative group cursor-pointer"
                  >
                    <motion.div
                      animate={{
                        x: isActive ? 15 : 0,
                        scale: isActive ? 1.02 : 1,
                      }}
                      className={`relative p-5 rounded-3xl flex items-center gap-4 transition-all duration-300 ${
                        isActive
                          ? "bg-white shadow-xl ring-1 ring-slate-100"
                          : "bg-white/50 hover:bg-white/80 shadow-md"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute right-0 bottom-0 w-full h-full border-r-4 border-b-4 border-[#247994] rounded-3xl -z-10 translate-x-1 translate-y-1" />
                      )}

                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                          isActive
                            ? item.color + " text-white shadow-lg"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {item.icon}
                      </div>

                      <div className="flex-1">
                        <h4
                          className={`text-lg font-bold ${
                            isActive
                              ? "text-slate-900"
                              : "text-slate-500"
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 font-medium">
                          Nearby Landmarks
                        </p>
                      </div>

                      <ChevronRight
                        className={`transition-all duration-300 ${
                          isActive
                            ? "rotate-90 text-[#247994] scale-125"
                            : "text-slate-300"
                        }`}
                      />
                    </motion.div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 ml-14 mt-2 border-l-4 border-[#247994] space-y-3">
                            {item.places.map((place, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 text-slate-700"
                              >
                                <Navigation
                                  size={10}
                                  className="text-[#247994] rotate-45"
                                />
                                <span className="text-sm font-medium">
                                  {place}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT – GOOGLE MAP */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
              <div className="relative w-full aspect-square sm:aspect-video lg:aspect-square">
                <iframe
                  title="Aakash Skyline Location"
                  src={mapSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* FLOATING ADDRESS CARD */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#247994] rounded-xl flex items-center justify-center text-white shrink-0">
                  <Navigation size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#247994]">
                    Official Address
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">
                    Aakash Skyline, Near Chepapul, Chepapul, Mango,
                    Jamshedpur, Tamlia, Jharkhand 831020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
