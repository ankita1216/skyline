import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence
} from "framer-motion";
import { X } from "lucide-react";

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

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.button className="absolute top-8 right-8 text-white hover:scale-110 transition-transform">
              <X size={40} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImg}
              className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#D6DDD9] via-transparent to-[#D6DDD9] z-10" />
    </section>
  );
};

export default Gallery;
