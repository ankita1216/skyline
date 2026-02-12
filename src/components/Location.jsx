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

  const mapSrc =
    "https://www.google.com/maps?q=Aakash+Skyline,+Near+Chepapul,+Chepapul,+Mango,+Jamshedpur,+Tamlia,+Jharkhand+831020&output=embed";

  return (
    <section id="location" className="py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20 text-center">

          {/* SECTION LABEL */}
          <p
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="uppercase tracking-[0.35em] text-sm text-[#C9F27B] font-semibold mb-4"
          >
            LOCATION ADVANTAGE
          </p>

          {/* MAIN HEADING */}
          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="uppercase text-4xl md:text-5xl font-bold leading-[1.15] text-slate-900"
          >
            ARRIVE AT YOUR{" "}
            <span className="text-[#C9F27B]">
              PERFECT ADDRESS
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* LEFT */}
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
                          style={{ fontFamily: "Playfair Display, serif" }}
                          className={`text-lg font-bold ${
                            isActive
                              ? "text-slate-900"
                              : "text-slate-500"
                          }`}
                        >
                          {item.title}
                        </h4>

                        <p
                          style={{ fontFamily: "Inter, sans-serif" }}
                          className="text-sm text-slate-400 font-medium"
                        >
                          Nearby Landmarks
                        </p>
                      </div>

                      <ChevronRight
                        className={`transition-all duration-300 ${
                          isActive
                            ? "rotate-90 text-[#113225] scale-125"
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
                                  className="text-[#C9F27B] rotate-45"
                                />
                                <span
                                  style={{ fontFamily: "Inter, sans-serif" }}
                                  className="text-sm font-medium"
                                >
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

          {/* RIGHT MAP */}
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

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#113225] rounded-xl flex items-center justify-center text-white shrink-0">
                  <Navigation size={20} />
                </div>
                <div>
                  <p
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    className="text-[10px] uppercase tracking-widest font-bold text-[#C9F27B]"
                  >
                    OFFICIAL ADDRESS
                  </p>
                  <p
                    style={{ fontFamily: "Inter, sans-serif" }}
                    className="text-xs sm:text-sm font-bold text-slate-800"
                  >
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
