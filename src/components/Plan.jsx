import { useState } from "react";
import { Maximize2, X, CheckCircle2, Ruler, Layers, Home } from "lucide-react";

import planA from "../assets/plan-a.jpg";
import planB from "../assets/plan-b.jpg";
import planC from "../assets/plan-c.jpg";

const plans = [
  {
    id: 1,
    name: "UNIT PLAN",
    bhk: "3 BHK / 2T",
    area: "SBUA 1370 Sq.Ft",
    floors: "3rd – 11th Floor",
    image: planA,
    highlight: "Perfect for growing families",
    features: ["Master Bedroom", "Spacious Living", "2 Bathrooms", "Vaastu Compliant"],
  },
  {
    id: 2,
    name: "UPPER GROUND PLAN",
    bhk: "3 BHK / 3T",
    area: "SBUA 1480 Sq.Ft",
    floors: "5th – 14th Floor",
    image: planB,
    highlight: "Most popular premium choice",
    features: ["Premium Interiors", "Balcony View", "3 Bathrooms", "Cross Ventilation"],
  },
  {
    id: 3,
    name: "1ST FLOOR PLAN",
    bhk: "4 BHK / 3T",
    area: "SBUA 1680 Sq.Ft",
    floors: "7th – 18th Floor",
    image: planC,
    highlight: "Luxury living redefined",
    features: ["Penthouse Style", "Panoramic Views", "Utility Area", "Grand Foyer"],
  },
];

const Plan = () => {
  const [active, setActive] = useState(plans[0]);
  const [showImage, setShowImage] = useState(false);

  return (
    <section id="plan" className="py-24 bg-white relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-[400px] bg-[#247994]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-amber-400 font-bold tracking-[0.3em] text-xs uppercase"
            >
              Architectural Excellence
            </span>

            <h2
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tight leading-[1.1]"
            >
              Thoughtful <span className="italic">Floor Plans.</span>
            </h2>
          </div>

          <p
            style={{ fontFamily: "Inter, sans-serif" }}
            className="text-teal-50/80 max-w-sm text-sm md:text-base"
          >
            Every square inch is engineered for maximum light, air ventilation,
            and modern furniture layouts.
          </p>
        </div>

        {/* PLAN SELECTOR */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActive(plan)}
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className={`flex-shrink-0 px-8 py-4 rounded-xl font-bold transition-all border-2 flex items-center gap-3 ${
                active.id === plan.id
                  ? "bg-amber-400 border-amber-400 text-black shadow-lg scale-105"
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
              }`}
            >
              <Home size={18} />
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-70 leading-none">
                  Layout
                </p>
                <p className="text-sm">{plan.name}</p>
              </div>
            </button>
          ))}
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row min-h-[500px]">

          {/* IMAGE */}
          <div className="lg:w-1/2 p-6 md:p-10 bg-gray-50 flex flex-col justify-center">
            <div
              className="relative cursor-zoom-in overflow-hidden rounded-2xl bg-white border border-gray-200 p-4"
              onClick={() => setShowImage(true)}
            >
              <img
                src={active.image}
                alt={active.name}
                className="w-full h-[300px] md:h-[450px] object-contain"
              />
            </div>

            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest font-bold"
            >
              Click image to expand technical view
            </p>
          </div>

          {/* DETAILS */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <span
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="bg-[#247994]/10 text-[#247994] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Unit Specifications
              </span>

              <h3
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-4xl font-black text-gray-900 mt-4 leading-[1.15]"
              >
                {active.bhk}
              </h3>

              <p
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-xl font-medium text-gray-500 mt-1"
              >
                {active.area}
              </p>

              <p
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-gray-600 mt-4 italic text-sm border-l-2 border-amber-400 pl-4"
              >
                "{active.highlight}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#247994]">
                  <Layers size={22} />
                </div>
                <div>
                  <p
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    className="text-xs text-gray-400 font-bold uppercase"
                  >
                    Placement
                  </p>
                  <p
                    style={{ fontFamily: "Inter, sans-serif" }}
                    className="text-sm font-bold text-gray-800"
                  >
                    {active.floors}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#247994]">
                  <Ruler size={22} />
                </div>
                <div>
                  <p
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    className="text-xs text-gray-400 font-bold uppercase"
                  >
                    Total Area
                  </p>
                  <p
                    style={{ fontFamily: "Inter, sans-serif" }}
                    className="text-sm font-bold text-gray-800"
                  >
                    {active.area.split(" ")[1]} Sq.Ft
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 border-t border-gray-100 pt-8">
              {active.features.map((feature, idx) => (
                <div
                  key={idx}
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="flex items-center gap-3 text-gray-700 text-sm font-medium"
                >
                  <CheckCircle2 size={18} className="text-amber-500" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6">
          <button
            onClick={() => setShowImage(false)}
            className="absolute top-8 right-8 text-white hover:text-amber-400"
          >
            <X size={40} />
          </button>
          <img
            src={active.image}
            alt="Floor Plan"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Plan;
