import React from "react";
import { ArrowRight, Star, Users, BookOpen, Trophy } from "lucide-react"; // Added Trophy icon
// Ensure these paths match your actual folder structure
import heroBoy from "../assets/hero_section_boy.jpg";
import heroGirl from "../assets/hero_section_girl.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FAEEF4] px-4 py-20">
      
      {/* --- BACKGROUND VECTORS --- */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#EADDFF] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FFE4E6] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#3F348F 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      {/* --- DECORATIVE ELEMENTS --- */}
      <svg className="absolute top-10 left-10 w-24 h-24 text-[#FFC500] animate-bounce-slow hidden md:block" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45.7,18.3C28.3,31.7,11.5,46.5,9.4,70.9c-2.4,27.8,17.4,56.7,43.2,64.2c28.6,8.3,58.3-11.6,71.2-39.1 c10.6-22.6,3.6-50.5-12.2-68.8C95.2,9.1,65.3,3.3,45.7,18.3z" fill="currentColor" opacity="0.6"/>
      </svg>
      <svg className="absolute top-20 right-10 w-20 h-20 text-[#FF0065] animate-pulse hidden md:block opacity-80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      <div className="absolute bottom-1/4 left-10 text-[#3F348F] text-4xl animate-spin-slow hidden lg:block">✻</div>


      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* --- LEFT IMAGE --- */}
        <div className="hidden lg:block lg:col-span-3 relative">
          <div className="relative transform rotate-[-6deg] hover:rotate-0 transition-all duration-500 ease-in-out">
            <div className="absolute inset-0 bg-[#FF8C4B] rounded-[2rem] translate-x-3 translate-y-3"></div>
            <img 
              src={heroGirl} 
              alt="Happy Kid playing" 
              className="relative w-full h-80 object-cover rounded-[2rem] border-4 border-white shadow-xl"
            />
            <div className="absolute -top-6 -left-6 bg-white p-3 rounded-full shadow-lg">
               <Star className="w-8 h-8 text-[#FFC500] fill-current" />
            </div>
          </div>
        </div>

        {/* --- CENTER TEXT CONTENT --- */}
        <div className="col-span-1 lg:col-span-6 text-center space-y-8">
          
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm text-[#3F348F] font-bold text-sm tracking-wide uppercase">
            🚀 100% Activity Based Learning
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#3F348F] leading-[1.1] tracking-tight">
            Better Future <br/>
            <span className="relative inline-block">
              For Your <span className="text-[#FF0065]">Kids</span>
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#FFC500]" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
            Let the child be the director and the actor in their own play. 
            Real-life experiments, workshops, and field experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="group relative px-8 py-4 bg-[#3F348F] text-white font-bold rounded-full shadow-[0_10px_20px_rgba(63,52,143,0.3)] hover:shadow-[0_15px_25px_rgba(63,52,143,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-lg">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent text-[#3F348F] font-bold rounded-full hover:bg-purple-50 transition-colors flex items-center gap-2">
               View Programs
            </button>
          </div>

          {/* ======================================================= */}
          {/* UPDATED STATS SECTION STARTS HERE */}
          {/* ======================================================= */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            
            {/* 1. Avatars & Review (Social Proof) */}
            <div className="bg-white/80 backdrop-blur-sm border border-white p-4 rounded-2xl shadow-lg flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer">
                {/* Avatar Stack */}
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden`}>
                             <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-[#FFC500] flex items-center justify-center text-xs font-bold text-[#3F348F]">
                        +2k
                    </div>
                </div>
                <div className="text-left">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-bold text-[#3F348F]">4.9</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Happy Parents</p>
                </div>
            </div>

            {/* 2. Key Metrics (The Numbers) */}
            <div className="grid grid-cols-2 gap-4">
                {/* Metric A */}
                <div className="bg-[#EADDFF]/60 p-4 rounded-2xl flex items-center gap-3 border border-white shadow-sm">
                   <div className="bg-white p-2 rounded-full text-[#3F348F]">
                     <BookOpen className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <h4 className="text-xl font-bold text-[#3F348F]">50+</h4>
                     <p className="text-[10px] text-gray-600 font-bold uppercase tracking-wider">Programs</p>
                   </div>
                </div>

                {/* Metric B */}
                <div className="bg-[#FFE4E6]/60 p-4 rounded-2xl flex items-center gap-3 border border-white shadow-sm">
                   <div className="bg-white p-2 rounded-full text-[#FF0065]">
                     <Trophy className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <h4 className="text-xl font-bold text-[#FF0065]">15+</h4>
                     <p className="text-[10px] text-gray-600 font-bold uppercase tracking-wider">Awards</p>
                   </div>
                </div>
            </div>

          </div>
          {/* ======================================================= */}
          {/* UPDATED STATS SECTION ENDS HERE */}
          {/* ======================================================= */}

        </div>

        {/* --- RIGHT IMAGE --- */}
        <div className="hidden lg:block lg:col-span-3 relative mt-12 lg:mt-0">
           <div className="relative transform rotate-[6deg] hover:rotate-0 transition-all duration-500 ease-in-out">
            <div className="absolute inset-0 bg-[#FFC500] rounded-[2rem] translate-x-3 translate-y-3"></div>
            <img 
              src={heroBoy} 
              alt="Kid doing experiment" 
              className="relative w-full h-80 object-cover rounded-[2rem] border-4 border-white shadow-xl"
            />
             <svg className="absolute -bottom-8 -right-8 w-20 h-20 text-[#3F348F]" viewBox="0 0 100 100" fill="currentColor">
               <path d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z" />
             </svg>
          </div>
        </div>

      </div>
    </section>
  );
}