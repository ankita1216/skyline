import { useState } from "react";
import { X, CheckCircle2, Ruler, Layers, Home, ZoomIn, ZoomOut, Maximize } from "lucide-react";

import planA from "../assets/plan-a.jpg";
import planB from "../assets/plan-b.jpg";
import planC from "../assets/plan-c.jpg";

const plans = [
  {
    id: 1,
    name: "LOWER GROUND – MAIN ANCHOR",
    bhk: "Commercial Anchor Floor",
    // ✅ Changed this line (clean subheading instead of repeating carpet info)
    area: "Premium Large Format Commercial Space",
    floors: "Lower Ground Floor",
    image: planA,
    highlight:
      "Large anchor commercial space with dedicated access, service zones, and efficient circulation",
    features: [
      "Main Anchor Commercial Space",
      "Dedicated Commercial Drop-off",
      "Wide 6m Internal Roads",
      "Service & Utility Areas",
      "Fire Staircases & Lift Cores",
      "Escalator & Vertical Circulation",
      "Parking & Ramp Connectivity",
    ],
  },
  {
    id: 2,
    name: "TYPICAL FLOOR PLAN",
    bhk: "Commercial Floor Layout",
    area: "Multiple Unit Sizes",
    floors: "Typical Commercial Floors",
    image: planB,
    highlight: "Optimized commercial planning with multiple retail units",
    features: [
      "Multiple Commercial Units",
      "3000 mm Wide Corridors",
      "Fire Lobby & Staircase",
      "Lift Connectivity",
      "Efficient Circulation",
    ],
  },
  {
    id: 3,
    name: "1ST FLOOR PLAN",
    bhk: "Commercial Floor Layout",
    area: "Mixed Large & Small Units",
    floors: "1st Floor",
    image: planC,
    highlight: "Anchor and retail units arranged around central circulation",
    features: [
      "Anchor / F&B Units",
      "Wide Internal Corridors",
      "Central Core & Lifts",
      "Fire Safety Provisions",
      "Clear Wayfinding",
    ],
  },
];

const Plan = () => {
  const [active, setActive] = useState(plans[0]);
  const [showImage, setShowImage] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  return (
    <section id="plan" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-[#ffffff]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="uppercase tracking-[0.35em] text-sm text-[#113225] font-semibold"
            >
              ARCHITECTURAL PLANS
            </p>

            <h2
              style={{ fontFamily: "Playfair Display, serif" }}
              className="uppercase text-4xl md:text-5xl font-bold leading-[1.15] text-black mt-6"
            >
              DETAILED{" "}
              <span className="text-[#C9F27B]">
                FLOOR LAYOUTS
              </span>
            </h2>
          </div>

          <p
            style={{ fontFamily: "Inter, sans-serif" }}
            className="text-black max-w-sm text-lg leading-[1.75]"
          >
            Clear planning for residential comfort and commercial efficiency.
          </p>
        </div>

        {/* PLAN SELECTOR */}
        <div className="flex gap-4 mb-10 overflow-x-auto pb-4 scrollbar-hide">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => {
                setActive(plan);
                resetZoom();
              }}
              className={`flex-shrink-0 px-8 py-4 rounded-xl border-2 flex items-center gap-3 transition-all ${
                active.id === plan.id
                  ? "bg-[#C9F27B] border-[#C9F27B] text-black shadow-lg scale-105"
                  : "bg-white/10 border-white/20 text-black hover:bg-white/20"
              }`}
            >
              <Home size={18} />
              <div className="text-left">
                <p
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="text-[10px] uppercase opacity-70 leading-none"
                >
                  LAYOUT
                </p>
                <p
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="text-sm font-medium"
                >
                  {plan.name}
                </p>
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
              className="text-center text-xs text-gray-400 mt-4 uppercase tracking-widest font-semibold"
            >
              CLICK IMAGE TO EXPAND
            </p>
          </div>

          {/* DETAILS */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">

            <div className="mb-8">
              <span
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="bg-[#113225]/10 text-[#113225] px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                PLAN INFORMATION
              </span>

              <h3
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 leading-[1.2]"
              >
                {active.bhk}
              </h3>

              <p
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-lg font-medium text-gray-500 mt-2"
              >
                {active.area}
              </p>

              <p
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-gray-600 mt-6 italic text-sm border-l-2 border-amber-400 pl-4 leading-relaxed"
              >
                "{active.highlight}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4">
                <Layers size={22} className="text-[#113225]" />
                <div>
                  <p
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    className="text-xs text-gray-400 font-semibold uppercase"
                  >
                    FLOOR
                  </p>
                  <p
                    style={{ fontFamily: "Inter, sans-serif" }}
                    className="text-sm font-semibold text-gray-800"
                  >
                    {active.floors}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Ruler size={22} className="text-[#113225]" />
                <div>
                  <p
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    className="text-xs text-gray-400 font-semibold uppercase"
                  >
                    AREA INFO
                  </p>
                  <p
                    style={{ fontFamily: "Inter, sans-serif" }}
                    className="text-sm font-semibold text-gray-800"
                  >
                    {active.area}
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

      {/* MODAL remains unchanged */}
      {showImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-6">
          <div className="absolute top-8 right-8 flex items-center gap-6 z-[110]">
            <div className="flex items-center gap-2 bg-white/10 rounded-full p-2 border border-white/20">
              <button onClick={handleZoomOut} className="p-2 hover:bg-white/20 text-white rounded-full">
                <ZoomOut size={24} />
              </button>
              <button onClick={resetZoom} className="p-2 hover:bg-white/20 text-white rounded-full">
                <Maximize size={20} />
              </button>
              <button onClick={handleZoomIn} className="p-2 hover:bg-white/20 text-white rounded-full">
                <ZoomIn size={24} />
              </button>
            </div>

            <button
              onClick={() => {
                setShowImage(false);
                resetZoom();
              }}
              className="text-white hover:text-amber-400"
            >
              <X size={40} />
            </button>
          </div>

          <div className="w-full h-full overflow-auto flex items-center justify-center">
            <img
              src={active.image}
              alt="Plan"
              style={{
                transform: `scale(${zoom})`,
                transition: "transform 0.2s ease-out",
              }}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          <div
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="absolute bottom-8 text-white/50 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            USE CONTROLS TO INSPECT DETAILS • ZOOM: {Math.round(zoom * 100)}%
          </div>
        </div>
      )}
    </section>
  );
};

export default Plan;
