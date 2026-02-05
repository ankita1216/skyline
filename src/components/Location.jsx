import { useState } from "react";
import { MapPin, GraduationCap, ShoppingCart, Activity, Car, Building2, ChevronRight } from "lucide-react";

const locationData = [
  {
    title: "School",
    icon: <GraduationCap size={20} />,
    places: ["Kerala Public School – 200 m", "Sheyn International School – 1 Km"],
  },
  {
    title: "Market",
    icon: <ShoppingCart size={20} />,
    places: ["Vishal Mega Mart (AC) – 1 Km", "Reliance Fresh – 3.7 Km"],
  },
  {
    title: "Connectivity",
    icon: <Car size={20} />,
    places: ["NH 33 – 1 Km", "Payal Cinema – 3.4 Km", "Eylex Cinema – 2.6 Km"],
  },
  {
    title: "Hospital",
    icon: <Activity size={20} />,
    places: ["Brahmananda Narayana Hospital – 2.8 Km"],
  },
  {
    title: "Others",
    icon: <Building2 size={20} />,
    places: ["Aakash Heights – 1 Km", "Saha Aakash – 1.2 Km"],
  },
];

const Location = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="location" className="py-16 md:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative Watermark - Hidden on small screens to reduce clutter */}
      <div className="hidden lg:block absolute top-10 right-[-5%] text-[15vw] font-black text-gray-100 select-none pointer-events-none uppercase">
        Proximity
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Heading Section */}
        <div className="mb-10 md:mb-16">
          <span className="text-[#247994] font-bold tracking-widest text-xs uppercase border-b-2 border-[#247994] pb-1">
            The Neighborhood
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Perfectly <span className="text-[#247994]">Connected.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* CATEGORY SELECTOR */}
          <div className="lg:w-1/3 order-2 lg:order-1">
            {/* Mobile: Horizontal Chips | Desktop: Vertical Cards */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide snap-x">
              {locationData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 snap-start cursor-pointer p-4 rounded-2xl transition-all duration-300 border-2 lg:border-l-4 lg:border-t-0 lg:border-r-0 lg:border-b-0 ${
                    activeTab === index 
                      ? "bg-white shadow-md border-[#247994] ring-1 ring-[#247994]/10 lg:translate-x-2" 
                      : "bg-gray-50 border-transparent opacity-70"
                  } w-[200px] lg:w-full`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      activeTab === index ? "bg-[#247994] text-white" : "bg-white text-gray-400"
                    }`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-sm md:text-base ${activeTab === index ? "text-gray-900" : "text-gray-500"}`}>
                        {item.title}
                      </h4>
                    </div>
                    <ChevronRight size={16} className={`hidden lg:block transition-transform ${activeTab === index ? "rotate-90 lg:rotate-0 text-[#247994]" : "text-gray-300"}`} />
                  </div>

                  {/* Desktop expanded view / Mobile hidden view to keep chips clean */}
                  <div className={`overflow-hidden transition-all duration-300 ${activeTab === index ? "max-h-40 mt-3" : "max-h-0"}`}>
                    <ul className="space-y-2 border-t border-gray-100 pt-3">
                      {item.places.map((p, i) => (
                        <li key={i} className="text-xs md:text-sm text-gray-500 flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MAP INTERFACE */}
          <div className="lg:w-2/3 order-1 lg:order-2">
            <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl border-4 md:border-8 border-white group">
              
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14705.578641496333!2d86.20864385!3d22.861895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3057e6274e1%3A0xc09f9846c4f93496!2sMango%2C%20Jamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              ></iframe>

              {/* Floating CTAs - Redesigned for mobile touch targets */}
              <div className="absolute bottom-4 md:bottom-8 left-0 right-0 px-4">
                <div className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3 bg-white/95 backdrop-blur-sm p-2 rounded-2xl md:rounded-full shadow-2xl border border-white">
                   <a
                      href="https://maps.app.goo.gl/YourMapLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#247994] text-white rounded-xl md:rounded-full text-sm font-bold hover:bg-[#1a5b70] transition-all active:scale-95"
                    >
                      <MapPin size={16} /> Get Directions
                   </a>
                   <button className="w-full sm:w-auto px-6 py-3 text-gray-700 text-sm font-bold hover:text-[#247994] transition-colors active:scale-95">
                      View Full Area Map
                   </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Location;