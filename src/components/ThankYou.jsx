import { Download, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "../assets/hero-banner.jpg"; // 👈 change name if different

export default function ThankYou() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* Background Image from Assets */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Thank You Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-12 max-w-lg w-full text-center text-white"
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-500/20 p-4 rounded-full">
            <CheckCircle size={50} className="text-green-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">
          Thank You!
        </h1>

        {/* Sub Text */}
        <p className="text-white/80 mb-8 leading-relaxed">
          Our team will contact you shortly.  
          Meanwhile, you can download the brochure below.
        </p>

        {/* Download Button */}
        <a
          href="/Skyline-brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#247994] hover:bg-[#1d5f75] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:scale-105"
        >
          <Download size={18} />
          Download Brochure
        </a>

        <p className="text-white/50 text-sm mt-6">
          We appreciate your interest in Aakash Skyline.
        </p>
      </motion.div>
    </div>
  );
}
