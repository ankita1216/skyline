import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { X, ZoomIn, ZoomOut, Maximize } from "lucide-react";

/* 🖼️ IMAGES */
import hero from "../assets/hero-banner.jpg";
import g1 from "../assets/gallery-2.jpg";
import g2 from "../assets/gallery-3.jpg";
import g3 from "../assets/gallery-4.jpg";
import g4 from "../assets/gallery-5.jpg";
import g5 from "../assets/gallery-6.jpg";
import g6 from "../assets/gallery-7.jpg";
import g7 from "../assets/gallery-8.jpg";
import g8 from "../assets/gallery-9.jpg";

const images = [hero, g1, g2, g3, g4, g5, g6, g7, g8];

const Column = ({ images, y, className = "", onImageClick }) => {
  return (
    <motion.div
      style={{ y }}
      className={`flex flex-col gap-6 md:gap-8 w-full ${className}`}
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
              loading="lazy"
              decoding="async"
              style={{
                imageRendering: "auto",
                backfaceVisibility: "hidden",
              }}
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
  const [zoom, setZoom] = useState(1);
  const container = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = hero;
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Smooth springs for desktop parallax
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), { stiffness: 80, damping: 25 });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 300]), { stiffness: 80, damping: 25 });
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -500]), { stiffness: 80, damping: 25 });

  const handleZoomIn = (e) => { e?.stopPropagation(); setZoom((z) => Math.min(z + 0.5, 4)); };
  const handleZoomOut = (e) => { e?.stopPropagation(); setZoom((z) => Math.max(z - 0.5, 1)); };
  const handleReset = (e) => { e?.stopPropagation(); setZoom(1); };

  return (
    <section
      ref={container}
      id="gallery"
      className="relative bg-[#113225] py-20 md:py-28 overflow-hidden h-auto min-h-screen flex flex-col"
    >
      {/* HEADER */}
      <div className="relative md:absolute top-0 md:top-16 left-0 w-full z-30 px-6 md:px-20 mb-12 md:mb-0">
        <div className="max-w-7xl mx-auto">
          <p
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="uppercase tracking-[0.35em] text-xs md:text-sm text-[#C9F27B] font-semibold mb-4 md:mb-6"
          >
            GALLERY
          </p>
          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="uppercase text-3xl md:text-5xl font-bold leading-[1.15] text-[#C9F27B]"
          >
            OUR <span className="text-white">VISION</span>
          </h2>
          <p
            style={{ fontFamily: "Inter, sans-serif" }}
            className="text-white text-base md:text-lg leading-[1.75] mt-6 max-w-xl"
          >
            A curated glimpse into the architectural expression, spatial planning, and visual identity of the development.
          </p>
        </div>
      </div>

      {/* 📱 MOBILE VIEW: Full-Width Stack (Shows all 9 images clearly) */}
      <div className="flex md:hidden flex-col gap-6 px-6 relative z-20 mt-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImg(src)}
            className="rounded-xl overflow-hidden shadow-xl active:scale-[0.98] transition-transform"
          >
            <img src={src} className="w-full aspect-[16/10] object-cover" alt="Architecture" />
          </motion.div>
        ))}
      </div>

      {/* 💻 DESKTOP VIEW: 3-Column Parallax Grid */}
      <div
        className="
          hidden md:flex gap-10
          px-20
          h-full
          mt-96
          justify-center
          relative z-20
          max-w-[1600px] mx-auto w-full
        "
      >
        <Column images={[images[0], images[1], images[2]]} y={y1} onImageClick={setSelectedImg} />
        <Column images={[images[3], images[4], images[5]]} y={y2} onImageClick={setSelectedImg} className="mt-[-15%]" />
        <Column images={[images[6], images[7], images[8]]} y={y3} onImageClick={setSelectedImg} />
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setSelectedImg(null); setZoom(1); }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-4 z-[110]">
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-white/10 rounded-full p-1 md:p-1.5 border border-white/20"
              >
                <button onClick={handleZoomOut} className="p-2 text-white"><ZoomOut size={20} /></button>
                <button onClick={handleReset} className="p-2 text-white"><Maximize size={18} /></button>
                <button onClick={handleZoomIn} className="p-2 text-white"><ZoomIn size={20} /></button>
              </div>
              <button onClick={() => { setSelectedImg(null); setZoom(1); }} className="text-white p-2">
                <X size={32} />
              </button>
            </div>

            <div className="w-full h-full flex items-center justify-center overflow-auto"
                 onWheel={(e) => e.deltaY < 0 ? handleZoomIn() : handleZoomOut()}>
              <motion.img
                src={selectedImg}
                animate={{ scale: zoom }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[80vh] md:max-h-[85vh] max-w-[95vw] md:max-w-[90vw] rounded-lg object-contain shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#113225] via-transparent to-[#113225]" />
    </section>
  );
};

export default Gallery;