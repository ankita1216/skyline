import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Phone, ArrowUp } from "lucide-react";
import logo from "../assets/logo.png"; 

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const exploreLinks = [
    "Home",
    "Overview",
    "Amenities",
    "Plan",
    "Gallery",
    "Location",
    "Contact",
  ];

  return (
    <footer className="relative bg-[#21718b] text-white overflow-hidden pt-20 pb-10">

      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* ✅ LOGO REPLACED HERE */}
              <img
                src={logo}
                alt="Aakash Skyline"
                className="h-20 object-contain"
              />
            </motion.div>
            
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="text-white/70 max-w-sm leading-[1.75]"
            >
              Building dreams and creating landmarks with trust and excellence
              since inception. Jamshedpur's signature of luxury.
            </p>

            <div className="pt-4">
              <div className="inline-block bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/10 group hover:bg-white/20 transition-all">
                <p
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="text-[10px] uppercase tracking-[0.35em] text-blue-200 mb-2 font-semibold"
                >
                  CORPORATE OFFICE
                </p>
                <p
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="text-sm font-medium"
                >
                  Payal Cinema Complex, Mango, Jamshedpur
                </p>
              </div>
            </div>
          </div>

          {/* Navigation + Contact */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Explore */}
            <div className="space-y-6">
              <h4
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="text-xs uppercase tracking-[0.35em] font-semibold text-blue-200"
              >
                EXPLORE
              </h4>

              <ul className="grid gap-y-3">
                {exploreLinks.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, '')}`} 
                      style={{ fontFamily: "Inter, sans-serif" }}
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

            {/* Connect */}
            <div className="space-y-6">
              <h4
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="text-xs uppercase tracking-[0.35em] font-semibold text-blue-200"
              >
                CONNECT
              </h4>

              <div className="space-y-5">
                <a
                  href="mailto:sales@aakashindia.in"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <div className="p-2 bg-white/5 rounded-lg shrink-0">
                    <Mail size={16} />
                  </div>
                  <span className="break-all">sales@aakashindia.in</span>
                </a>

                <div
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <div className="p-2 bg-white/5 rounded-lg shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+917079829999">+91 70798 29999</a>
                    <a href="tel:+919570000202">+91 95700 00202</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div className="relative">
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden h-full flex flex-col justify-between">
                <MapPin className="absolute -right-4 -top-4 text-white/5" size={120} />

                <div>
                  <h4
                    style={{ fontFamily: "Playfair Display, serif" }}
                    className="text-lg font-bold mb-2"
                  >
                    Aakash Skyline
                  </h4>

                  <p
                    style={{ fontFamily: "Inter, sans-serif" }}
                    className="text-sm text-white/60 leading-relaxed"
                  >
                    Near Chepapul, Mango,<br />
                    Jamshedpur – 831020
                  </p>
                </div>

                <a 
                  href="#"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 hover:text-white transition-colors"
                >
                  GET DIRECTIONS 
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="relative mt-24 mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <button 
              onClick={scrollToTop}
              className="bg-[#21718b] px-4 py-4 rounded-full border border-white/10 hover:border-blue-200 transition-all shadow-2xl"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.35em] text-white/40 font-medium"
        >
          <p>© {new Date().getFullYear()} Aakash India Projects & Builders Pvt. Ltd.</p>
          <p>HANDCRAFTED WITH ❤</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
