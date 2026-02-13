import { Download, Home } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "../assets/hero-banner.jpg"; // 👈 Importing your asset

export default function ThankYou() {
  return (
    /* Background changed to #113225 */
    <div className="relative min-h-screen bg-[#113225] flex items-center justify-center px-6 overflow-hidden text-white">
      
      {/* Dynamic Animated Background Shards */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#247994] blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-blue-900 blur-[150px] rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Visual Hook */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:block relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src={bgImage} /* 👈 Using your imported asset here */
              alt="Architecture" 
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Decorative floating element */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-[#247994] p-8 rounded-xl shadow-xl"
          >
            <p className="text-4xl font-black italic">Aakash</p>
            <p className="text-sm tracking-widest uppercase opacity-80">Skyline</p>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full border border-green-500/50 text-white-400 text-xs font-bold uppercase tracking-tighter mb-6"
          >
            Inquiry Received
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl font-light mb-6 leading-none"
          >
            Beyond <br /> 
            <span className="font-bold italic text-[#C9F27B]">Expectations.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-lg mb-10 max-w-sm leading-relaxed"
          >
            We don't just build structures; we craft legacies. Our team will reach out within 24 hours to begin your journey.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.7 }}
             className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/Skyline-brochure.pdf"
              className="group flex items-center justify-between bg-white text-black px-6 py-4 rounded-lg font-bold transition-all hover:bg-[#247994] hover:text-white"
            >
              <span>Download Brochure</span>
              <Download size={20} className="ml-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <button 
              onClick={() => window.location.href = '/'}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-white/20 hover:bg-white/5 transition-colors"
            >
              <Home size={18} />
              <span className="text-sm">Back to Home</span>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center gap-4 text-white/40"
          >
            <div className="h-[1px] w-12 bg-white/20"></div>
            <p className="text-xs uppercase tracking-[0.2em]">The Skyline Experience</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}