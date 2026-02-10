import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const exploreLinks = [
    "Home",
    "About",
    "Amenities",
    " Plan",
    "Gallery",
    "Location",
    "Contact ",
  ];

  return (
    <footer className="relative bg-[#21718b] text-white overflow-hidden pt-20 pb-10">
      {/* Architectural Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Brand Identity Section */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-serif font-bold tracking-tight">
                Aakash <span className="text-blue-200 uppercase text-sm block font-sans tracking-[0.3em] mt-2">India Projects & Builders</span>
              </h3>
            </motion.div>
            
            <p className="text-white/70 max-w-sm leading-relaxed font-light italic">
              "Building dreams and creating landmarks with trust and excellence since inception. Jamshedpur's signature of luxury."
            </p>

            <div className="pt-4">
              <div className="inline-block bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/10 group hover:bg-white/20 transition-all">
                <p className="text-[10px] uppercase tracking-widest text-blue-200 mb-1">Corporate Office</p>
                <p className="text-sm font-medium">Payal Cinema Complex, Mango, Jamshedpur</p>
              </div>
            </div>
          </div>

          {/* Navigation & Contact Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* EXPLORE SECTION (Updated with all links) */}
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-blue-200">Explore</h4>
              <ul className="grid grid-cols-1 gap-y-3">
                {exploreLinks.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, '')}`} 
                      className="text-sm text-white/80 hover:text-white transition-all flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-blue-200 group-hover:w-4 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-blue-200">Connect</h4>
              <div className="space-y-5">
                <a href="mailto:sales@aakashindia.in" className="flex items-start gap-3 group text-sm text-white/80 hover:text-white transition-colors">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-400/20 transition-colors shrink-0">
                    <Mail size={16} />
                  </div>
                  <span className="break-all">sales@aakashindia.in</span>
                </a>
                <div className="flex items-start gap-3 group text-sm text-white/80 hover:text-white transition-colors">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-400/20 transition-colors shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+917079829999" className="hover:text-blue-200 transition-colors">+91 70798 29999</a>
                    <a href="tel:+919570000202" className="hover:text-blue-200 transition-colors">+91 95700 00202</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Highlight Card */}
            <div className="relative">
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden group h-full flex flex-col justify-between">
                <MapPin className="absolute -right-4 -top-4 text-white/5 group-hover:text-blue-200/20 transition-all" size={120} />
                <div>
                  <h4 className="text-sm font-bold mb-2">Aakash Skyline</h4>
                  <p className="text-xs text-white/60 mb-6 leading-relaxed">
                    Near Chepapul, Mango,<br />
                    Jamshedpur – 831020
                  </p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/YourActualMapLink" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-200 hover:text-white transition-colors group/link"
                >
                  GET DIRECTIONS 
                  <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Divider with Center Logo Element */}
        <div className="relative mt-24 mb-12">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="bg-[#21718b] px-4 py-4 rounded-full border border-white/10 hover:border-blue-200 transition-all group shadow-2xl"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/40 font-medium">
          <p>© {new Date().getFullYear()} Aakash India Projects & Builders Pvt. Ltd.</p>
          <div className="flex items-center gap-8">
            <p className="flex items-center gap-1">
              Handcrafted with <span className="text-red-400">❤</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;