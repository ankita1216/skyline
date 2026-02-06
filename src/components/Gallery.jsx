import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero from "../assets/hero-banner.jpg";
import g1 from "../assets/gallery-2.jpg";
import g2 from "../assets/gallery-3.jpg";
import g3 from "../assets/gallery-4.jpg";
import g4 from "../assets/gallery-5.jpg";
import g5 from "../assets/gallery-6.jpg";
import g6 from "../assets/gallery-7.jpg";

const images = [
  { src: hero, label: "Aakash Skyline" },
  { src: g1, label: "Aerial View" },
  { src: g2, label: "Retail View" },
  { src: g3, label: "Retail Corridor" },
  { src: g4, label: "Retail Space" },
  { src: g5, label: "Road View" },
  { src: g6, label: "Semi Aerial" },
];

const Gallery = () => {
  const [active, setActive] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const moveBy = clientWidth * 0.8;

    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - moveBy : scrollLeft + moveBy,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="gallery"
      style={{ fontFamily: "Inter, sans-serif" }}
      className="py-24 bg-[#D6DDD9] relative overflow-hidden"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end relative z-10">
        <div>
          <h3
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-4xl md:text-5xl font-bold text-[#247994] tracking-tight leading-tight"
          >
            OUR <span className="italic">VISION</span>
          </h3>
          <p
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-gray-700 mt-2 uppercase tracking-[0.3em] text-xs"
          >
            Architecture in motion
          </p>
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-[40]
                   w-14 h-14 rounded-full bg-white shadow-xl
                   items-center justify-center hover:bg-black hover:text-white transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-[40]
                   w-14 h-14 rounded-full bg-white shadow-xl
                   items-center justify-center hover:bg-black hover:text-white transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* SLIDER CONTAINER */}
      <div
        ref={scrollRef}
        className="flex flex-nowrap px-6 md:px-[10vw]
                   overflow-x-auto no-scrollbar snap-x snap-mandatory"
        style={{ 
            perspective: "2000px",
            perspectiveOrigin: "center"
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActive(img)}
            className="relative min-w-[85vw] md:min-w-[450px] h-[450px] md:h-[600px]
                       transition-all duration-700 ease-out
                       md:rotate-y-[-25deg] md:hover:rotate-y-0 md:hover:scale-105 md:hover:z-50
                       group snap-center cursor-pointer
                       /* This creates the uniform gap between every single image */
                       mx-3 md:mx-6" 
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl bg-white">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover scale-110
                           group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="text-white text-2xl font-bold uppercase tracking-wide"
                >
                  {img.label}
                </h4>
                <div className="h-[2px] w-12 bg-white mt-2" />
              </div>
            </div>
          </div>
        ))}
        {/* End Spacer */}
        <div className="min-w-[10vw] hidden md:block shrink-0" />
      </div>

      {/* LIGHTBOX */}
      {active && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <img
            src={active.src}
            alt={active.label}
            className="max-h-[85vh] max-w-full object-contain rounded-lg"
          />
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        
        .rotate-y-\\[-25deg\\] {
          transform: rotateY(-25deg);
        }
        .hover\\:rotate-y-0:hover {
          transform: rotateY(0deg);
        }
      `}} />
    </section>
  );
};

export default Gallery;