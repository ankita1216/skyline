import { useRef, useState } from "react";
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

const images = [hero, g1, g2, g3, g4, g5, g6, g7];

const Column = ({ images, y, className = "", onImageClick }) => {
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
  const [zoom, setZoom] = useState(1);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), {
    stiffness: 80,
    damping: 25,
  });

  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 300]), {
    stiffness: 80,
    damping: 25,
  });

  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -500]), {
    stiffness: 80,
    damping: 25,
  });

  const handleZoomIn = (e) => {
    e?.stopPropagation();
    setZoom((z) => Math.min(z + 0.5, 4));
  };

  const handleZoomOut = (e) => {
    e?.stopPropagation();
    setZoom((z) => Math.max(z - 0.5, 1));
  };

  const handleReset = (e) => {
    e?.stopPropagation();
    setZoom(1);
  };

  return (
    <section
      ref={container}
      id="gallery"
      className="relative bg-[#113225] py-28 overflow-hidden h-[180vh] flex flex-col"
    >
      {/* HEADER */}
      <div className="absolute top-16 left-0 w-full z-30 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">

          {/* SECTION LABEL */}
          <p
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="uppercase tracking-[0.35em] text-sm text-[#C9F27B] font-semibold mb-6"
          >
            GALLERY
          </p>

          {/* MAIN HEADING */}
          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="uppercase text-4xl md:text-5xl font-bold leading-[1.15] text-[#C9F27B]"
          >
            OUR{" "}
            <span className="text-white">
              VISION
            </span>
          </h2>

          {/* SUBTEXT */}
          <p
            style={{ fontFamily: "Inter, sans-serif" }}
            className="text-white text-lg leading-[1.75] mt-6 max-w-xl"
          >
            A curated glimpse into the architectural expression,
            spatial planning, and visual identity of the development.
          </p>

        </div>
      </div>

      {/* PARALLAX GRID */}
      <div className="flex gap-6 md:gap-10 px-6 md:px-20 h-full mt-96 justify-center relative z-20 max-w-[1600px] mx-auto w-full">
        <Column
          images={[images[0], images[1], images[2]]}
          y={y1}
          onImageClick={setSelectedImg}
        />

        <Column
          images={[images[3], images[4], images[5]]}
          y={y2}
          onImageClick={setSelectedImg}
          className="mt-[-15%]"
        />

        <Column
          images={[images[6], images[7]]}
          y={y3}
          onImageClick={setSelectedImg}
          className="hidden lg:flex"
        />
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedImg(null);
              setZoom(1);
            }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="absolute top-8 right-8 flex items-center gap-4 z-[110]">
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-white/10 rounded-full p-1.5 border border-white/20"
              >
                <button onClick={handleZoomOut} className="p-2 text-white">
                  <ZoomOut size={24} />
                </button>
                <button onClick={handleReset} className="p-2 text-white">
                  <Maximize size={20} />
                </button>
                <button onClick={handleZoomIn} className="p-2 text-white">
                  <ZoomIn size={24} />
                </button>
              </div>

              <button
                onClick={() => {
                  setSelectedImg(null);
                  setZoom(1);
                }}
                className="text-white p-2"
              >
                <X size={40} />
              </button>
            </div>

            <div
              className="w-full h-full flex items-center justify-center overflow-auto"
              onWheel={(e) =>
                e.deltaY < 0 ? handleZoomIn() : handleZoomOut()
              }
            >
              <motion.img
                src={selectedImg}
                animate={{ scale: zoom }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
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
