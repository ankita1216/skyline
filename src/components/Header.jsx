"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logo.png";

import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", id: "overview" },
    { label: "Amenities", id: "amenities" },
    { label: "Plan", id: "plan" },
    { label: "Gallery", id: "gallery" },
    { label: "Location", id: "location" },
  ];

  return (
    <header
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-6 ${
        scrolled ? "py-2" : "py-4 md:py-6"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-500 h-[70px] md:h-[80px] rounded-2xl md:rounded-full border ${
          scrolled
            ? "bg-[#113225]/95 backdrop-blur-md border-[#113225]/20 shadow-2xl"
            : "bg-[#113225] border-[#113225]/10"
        }`}
      >
        {/* LOGO */}
        <a href="/" className="flex items-center h-full group">
          <img
            src={logo}
            alt="Aakash Skyline"
            className="h-10 md:h-12 object-contain brightness-0 invert"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-5 py-2 rounded-full text-[13px] uppercase tracking-widest font-bold text-white/80 hover:text-[#7BCF9E] transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-[#E3F988] text-[#102A1C] px-6 py-2.5 rounded-full font-bold text-[12px] uppercase tracking-widest hover:bg-white transition-all"
          >
            <Phone size={14} />
            Contact Us
          </a>

          <button
            className="lg:hidden text-[#7BCF9E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[100px] left-4 right-4 bg-[#102A1C] rounded-3xl p-8 shadow-2xl lg:hidden border border-[#7BCF9E]/20">
          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white font-bold text-xl tracking-tight border-b border-white/5 pb-4 hover:text-[#7BCF9E]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#7BCF9E] text-[#102A1C] text-center py-4 rounded-xl font-bold uppercase tracking-widest"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
