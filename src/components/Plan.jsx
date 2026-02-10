import { useState } from "react";
import { X, CheckCircle2, Ruler, Layers, Home, ZoomIn, ZoomOut, Maximize } from "lucide-react";

import planA from "../assets/plan-a.jpg"; // LOWER GROUND – MAIN ANCHOR
import planB from "../assets/plan-b.jpg"; // TYPICAL FLOOR (Commercial)
import planC from "../assets/plan-c.jpg"; // 1ST FLOOR (Commercial)

/* =======================
   PLAN DATA (COMMERCIAL)
   ======================= */

const plans = [
  {
    id: 1,
    name: "LOWER GROUND – MAIN ANCHOR",
    bhk: "Commercial Anchor Floor",
    area: "Carpet 13,902 Sq.Ft | BUA 14,369 Sq.Ft | SBUA 19,500 Sq.Ft",
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
  
  // New State for Zoom Level
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  return (
    <section id="plan" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-[#247994]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-400 font-bold tracking-[0.3em] text-xs uppercase">
              Architectural Plans
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
              Detailed <span className="italic">Floor Layouts.</span>
            </h2>
          </div>

          <p className="text-teal-50/80 max-w-sm text-sm md:text-base">
            Clear planning for residential comfort and commercial efficiency.
          </p>
        </div>

        {/* PLAN SELECTOR */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => {
                setActive(plan);
                resetZoom(); // Reset zoom if switching plans while modal is open
              }}
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

            <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest font-bold">
              Click image to expand
            </p>
          </div>

          {/* DETAILS */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <span className="bg-[#247994]/10 text-[#247994] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Plan Information
              </span>

              <h3 className="text-4xl font-black text-gray-900 mt-4">
                {active.bhk}
              </h3>

              <p className="text-xl font-medium text-gray-500 mt-1">
                {active.area}
              </p>

              <p className="text-gray-600 mt-4 italic text-sm border-l-2 border-amber-400 pl-4">
                "{active.highlight}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4">
                <Layers size={22} className="text-[#247994]" />
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">
                    Floor
                  </p>
                  <p className="text-sm font-bold text-gray-800">
                    {active.floors}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Ruler size={22} className="text-[#247994]" />
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">
                    Area Info
                  </p>
                  <p className="text-sm font-bold text-gray-800">
                    {active.area}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 border-t border-gray-100 pt-8">
              {active.features.map((feature, idx) => (
                <div
                  key={idx}
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

      {/* MODAL WITH ZOOM FEATURE */}
      {showImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-6">
          
          {/* Modal Header Controls */}
          <div className="absolute top-8 right-8 flex items-center gap-6 z-[110]">
             <div className="flex items-center gap-2 bg-white/10 rounded-full p-2 border border-white/20">
                <button 
                  onClick={handleZoomOut}
                  className="p-2 hover:bg-white/20 text-white rounded-full transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut size={24} />
                </button>
                <button 
                  onClick={resetZoom}
                  className="p-2 hover:bg-white/20 text-white rounded-full transition-colors"
                  title="Reset"
                >
                  <Maximize size={20} />
                </button>
                <button 
                  onClick={handleZoomIn}
                  className="p-2 hover:bg-white/20 text-white rounded-full transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn size={24} />
                </button>
             </div>

            <button
              onClick={() => {
                setShowImage(false);
                resetZoom();
              }}
              className="text-white hover:text-amber-400 transition-colors"
            >
              <X size={40} />
            </button>
          </div>

          {/* Zoomable Image Container */}
          <div className="w-full h-full overflow-auto flex items-center justify-center cursor-move">
            <img
              src={active.image}
              alt="Plan"
              style={{ 
                transform: `scale(${zoom})`,
                transition: "transform 0.2s ease-out" 
              }}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          <div className="absolute bottom-8 text-white/50 text-xs font-medium uppercase tracking-[0.2em]">
            Use controls to inspect details • Zoom: {Math.round(zoom * 100)}%
          </div>
        </div>
      )}
    </section>
  );
};

export default Plan;