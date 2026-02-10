import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence
} from "framer-motion";
import { X, ZoomIn, ZoomOut, Maximize } from "lucide-react"; // Added new icons

import hero from "../assets/hero-banner.jpg";
import g1 from "../assets/gallery-2.jpg";
import g2 from "../assets/gallery-3.jpg";
import g3 from "../assets/gallery-4.jpg";
import g4 from "../assets/gallery-5.jpg";
import g5 from "../assets/gallery-6.jpg";
import g6 from "../assets/gallery-7.jpg";

const images = [hero, g1, g2, g3, g4, g5, g6, hero, g1];

const Column = ({ images, y, className, onImageClick }) => {
  return (
    <motion.div
      style={{ y }}
      className={`flex flex-col gap-8 w-full ${className}`}
    >
      {images.map((src, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10, transition: { duration: 0.4 } }}
          onClick={() => onImageClick(src)}
          className="relative rounded-xl overflow-hidden cursor-pointer group shadow-2xl"
        >
          <div className="overflow-hidden aspect-[16/10] w-full">
            <img
              src={src}
              alt="Architecture"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-[#247994]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </motion.div>
  );
};

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [zoom, setZoom] = useState(1); // Zoom state
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), {
    stiffness: 80,
    damping: 25
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 300]), {
    stiffness: 80,
    damping: 25
  });
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -500]), {
    stiffness: 80,
    damping: 25
  });

  // Zoom Handlers
  const handleZoomIn = (e) => {
    e?.stopPropagation();
    setZoom((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = (e) => {
    e?.stopPropagation();
    setZoom((prev) => Math.max(prev - 0.5, 1));
  };

  const handleReset = (e) => {
    e?.stopPropagation();
    setZoom(1);
  };

  return (
    <section
      ref={container}
      id="gallery"
      className="relative bg-[#D6DDD9] py-20 overflow-hidden h-[180vh] flex flex-col"
    >
      {/* HEADER */}
      <div className="absolute top-16 left-0 w-full z-30 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h3
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-[#247994] text-4xl md:text-5xl font-bold leading-tight tracking-tight"
          >
            OUR <span className="italic font-normal">VISION</span>
          </h3>

          <div className="flex items-center gap-4 mt-2">
            <div className="h-[2px] w-16 bg-[#247994]" />
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-gray-700 text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase"
            >
              Architecture in motion
            </p>
          </div>
        </div>
      </div>

      {/* PARALLAX COLUMNS */}
      <div className="flex flex-row gap-6 md:gap-10 px-6 md:px-20 h-full mt-80 justify-center relative z-20 max-w-[1600px] mx-auto w-full">
        <Column images={[images[0], images[1], images[2]]} y={y1} onImageClick={setSelectedImg} />
        <Column images={[images[3], images[4], images[5]]} y={y2} onImageClick={setSelectedImg} className="mt-[-15%]" />
        <Column images={[images[6], images[0], images[1]]} y={y3} onImageClick={setSelectedImg} className="hidden lg:flex" />
      </div>

      {/* LIGHTBOX WITH ZOOM */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedImg(null);
              setZoom(1); // Reset zoom on close
            }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Control Bar */}
            <div className="absolute top-8 right-8 flex items-center gap-4 z-[110]">
              <div 
                onClick={(e) => e.stopPropagation()} 
                className="flex items-center gap-2 bg-white/10 rounded-full p-1.5 border border-white/20 backdrop-blur-sm"
              >
                <button
                  onClick={handleZoomOut}
                  className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                >
                  <ZoomOut size={24} />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                >
                  <Maximize size={20} />
                </button>
                <button
                  onClick={handleZoomIn}
                  className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                >
                  <ZoomIn size={24} />
                </button>
              </div>

              <button 
                onClick={() => { setSelectedImg(null); setZoom(1); }}
                className="text-white hover:text-amber-400 transition-colors p-2"
              >
                <X size={40} />
              </button>
            </div>

            {/* Image Container */}
            <div 
              className="w-full h-full flex items-center justify-center overflow-auto"
              onWheel={(e) => {
                if (e.deltaY < 0) handleZoomIn();
                else handleZoomOut();
              }}
            >
              <motion.img
                key={selectedImg}
                initial={{ scale: 0.9 }}
                animate={{ 
                  scale: zoom,
                  transition: { type: "spring", stiffness: 300, damping: 30 } 
                }}
                exit={{ scale: 0.9 }}
                src={selectedImg}
                onClick={(e) => e.stopPropagation()}
                className={`max-h-[85vh] w-auto max-w-[90vw] rounded-lg shadow-2xl object-contain ${zoom > 1 ? 'cursor-move' : 'cursor-default'}`}
              />
            </div>

            {/* Zoom Indicator */}
            {zoom > 1 && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-[10px] uppercase tracking-widest bg-black/40 px-4 py-2 rounded-full border border-white/10">
                Zoomed: {Math.round(zoom * 100)}% • Use scroll wheel to zoom
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#D6DDD9] via-transparent to-[#D6DDD9] z-10" />
    </section>
  );
};

export default Gallery;