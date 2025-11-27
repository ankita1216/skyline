"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Popup Logic
  const handleSubscribeClick = () => {
    console.log("Open Subscribe Popup");
    alert("Popup Form Triggered!"); 
  };

  // Define Brand Colors
  const colors = {
    purple: "#3f348f",
    pink: "#ff0065",
    yellow: "#ffc500",
    lightPink: "#faeef4",
    lightPurple: "#a5a1c7", // Added for the lighter lines in the hamburger
  };

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const NavLink = ({ children, href = "#", hasDropdown = false }) => (
    <a
      href={href}
      className="group relative flex items-center text-[15px] font-medium transition-colors duration-300"
      style={{ color: colors.purple }}
    >
      <span className="relative z-10 group-hover:text-[#ff0065] transition-colors">
        {children}
      </span>
      <span 
        className="absolute bottom-[-4px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
        style={{ backgroundColor: colors.yellow }}
      ></span>
      {hasDropdown && (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      )}
    </a>
  );

  return (
    <>
      {/* --- TOP ANNOUNCEMENT BAR --- */}
      <div className="relative z-[60] w-full py-1 text-center text-xs font-medium text-white" style={{ backgroundColor: colors.purple }}>
        New Performance Marketing Masterclass! <span className="underline cursor-pointer ml-1 text-yellow-300">Learn More</span>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
            : "bg-white py-5 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center relative z-50">
            
            {/* --- LOGO --- */}
            <div className="flex items-center cursor-pointer">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-md transform hover:rotate-12 transition-transform"
                style={{ backgroundColor: colors.pink }}
              >
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="heading-font text-2xl font-bold leading-none" style={{ color: colors.purple }}>
                  SquashCode
                </h1>
                <p className="text-xs font-semibold tracking-wider uppercase" style={{ color: colors.yellow }}>
                  Academy
                </p>
              </div>
            </div>

            {/* --- DESKTOP NAV --- */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="#">About Us</NavLink>
              <div className="relative group">
                <button className="flex items-center font-medium focus:outline-none" style={{ color: colors.purple }}>
                  <span className="group-hover:text-[#ff0065] transition-colors">Programs</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:text-[#ff0065] transition-transform duration-200 group-hover:rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-48 overflow-hidden">
                    {["Performance Ads", "SEO Mastery", "Data Analytics"].map((item) => (
                      <a key={item} href="#" className="block px-4 py-2 text-sm rounded-lg hover:bg-opacity-50 transition-colors" style={{ color: colors.purple, backgroundColor: 'transparent' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.lightPink} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <NavLink href="#">Pricing</NavLink>
              <NavLink href="#">Mentors</NavLink>
              <NavLink href="#">Blog</NavLink>
            </nav>

            {/* --- DESKTOP ACTIONS --- */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
              </button>
              <button onClick={handleSubscribeClick} className="flex items-center px-6 py-2.5 rounded-full text-white font-semibold text-sm shadow-[0_4px_14px_0_rgba(255,0,101,0.39)] hover:shadow-[0_6px_20px_rgba(255,0,101,0.23)] hover:-translate-y-0.5 transition-all duration-300" style={{ backgroundColor: colors.pink }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>
                <span>Subscribe</span>
              </button>
            </div>

            {/* --- CUSTOM IMAGE-STYLE MOBILE HAMBURGER --- */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative focus:outline-none transition-transform duration-300 active:scale-95"
              >
                {/* THE CUSTOM BUTTON: 
                   1. White background circle (w-12 h-12)
                   2. Shadow-lg to lift it off the page
                   3. Custom SVG inside matching the image provided
                */}
                <div className="w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center border border-gray-50">
                    {isMobileMenuOpen ? (
                       // Close Icon (X)
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6" style={{ color: colors.pink }}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                       </svg>
                    ) : (
                       // Custom "Staggered" Icon matching the upload
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         {/* Top Line: Shorter, lighter color, right-ish aligned */}
                         <path d="M7 8H17" stroke={colors.lightPurple} strokeWidth="2" strokeLinecap="round" />
                         
                         {/* Middle Line: Full width, Dark Purple, Thicker */}
                         <path d="M4 12H20" stroke={colors.purple} strokeWidth="3" strokeLinecap="round" />
                         
                         {/* Bottom Line: Shorter, lighter color, right-ish aligned */}
                         <path d="M7 16H17" stroke={colors.lightPurple} strokeWidth="2" strokeLinecap="round" />
                       </svg>
                    )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE OVERLAY (Same as before) --- */}
        <div 
            className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) md:hidden flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Decorative Background Blob */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 rounded-full opacity-10 pointer-events-none blur-3xl" style={{ backgroundColor: colors.pink }}></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 rounded-full opacity-10 pointer-events-none blur-3xl" style={{ backgroundColor: colors.yellow }}></div>

          <div className="flex flex-col h-full p-8 relative">
            <div className="flex items-center justify-between mb-10 mt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Navigation</span>
            </div>

            <div className="flex flex-col space-y-6">
                {['About Us', 'Programs', 'Pricing', 'Mentors', 'Blog'].map((item) => (
                    <a 
                        key={item} 
                        href="#" 
                        className="text-2xl font-bold transition-colors duration-200 hover:translate-x-2 transform inline-block"
                        style={{ color: colors.purple }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item}
                    </a>
                ))}
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100">
                <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Ready to master marketing?</p>
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            handleSubscribeClick();
                        }}
                        className="w-full flex justify-center items-center px-6 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
                        style={{ backgroundColor: colors.pink }}
                    >
                        Subscribe Now
                    </button>
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}