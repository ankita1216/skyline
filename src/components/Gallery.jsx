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
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const moveBy =
        window.innerWidth < 768 ? clientWidth * 0.8 : clientWidth / 1.5;

      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - moveBy : scrollLeft + moveBy,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#B2BEB5] overflow-hidden min-h-[700px] flex flex-col justify-center relative">

      {/* BACKGROUND TEXT */}
      <div className="absolute top-10 left-4 md:left-10 opacity-[0.08] select-none pointer-events-none">
        <h1 className="text-[25vw] md:text-[20vw] font-black text-black leading-none">
          GALLERY
        </h1>
      </div>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 flex justify-between items-end relative z-10 w-full">
        <div className="max-w-[60%] md:max-w-none">
          <h3 className="text-3xl md:text-6xl font-bold text-[#1f2933] tracking-tighter">
            OUR <span className="text-[#6b7280] italic">VISION</span>
          </h3>
          <p className="text-gray-700 mt-1 font-mono uppercase tracking-widest text-[10px] md:text-sm">
            Architecture in motion
          </p>
        </div>

        {/* CONTROLS */}
        <div className="flex gap-2 md:gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-white transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-white transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={scrollRef}
        className="flex flex-nowrap gap-4 md:gap-0 px-6 md:px-[10vw] overflow-x-auto pb-12 md:pb-20 no-scrollbar snap-x snap-mandatory"
        style={{ perspective: "1500px" }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActive(img)}
            className="relative min-w-[85vw] md:min-w-[500px] h-[450px] md:h-[600px]
                       transition-all duration-700 ease-out
                       md:rotate-y-[-35deg] md:hover:rotate-y-0 md:hover:scale-110 md:hover:z-50 md:hover:mx-16
                       group snap-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl border border-black/10 bg-white">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <h4 className="text-white text-2xl md:text-3xl font-black uppercase italic">
                  {img.label}
                </h4>
                <div className="h-[2px] w-12 group-hover:w-full bg-black transition-all duration-700 mt-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
        >
          <button className="absolute top-6 right-6 text-white/80 hover:text-white text-sm font-mono tracking-widest border border-white/20 px-4 py-2 rounded-full">
            CLOSE [X]
          </button>
          <img
            src={active.src}
            alt={active.label}
            className="w-full h-auto max-h-[85vh] object-contain rounded"
          />
        </div>
      )}

      {/* SCROLLBAR + 3D */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
        @media (min-width: 768px) {
          .rotate-y-[-35deg] { transform: rotateY(-35deg); }
          .rotate-y-0 { transform: rotateY(0deg) !important; }
        }
      `}} />
    </section>
  );
};

export default Gallery;
