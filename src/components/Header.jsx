"use client";
import React, { useState, useEffect } from "react";
import { Globe, Menu, X, Building2 } from "lucide-react";

import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Features", id: "features" },
    { label: "Plan", id: "plan" },
    { label: "Gallery", id: "gallery" },
    { label: "Location", id: "location" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 ${
        scrolled ? "mt-0" : "mt-2 md:mt-4"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg border-slate-200 shadow-md"
            : "bg-transparent border-black/20"
        }`}
      >
        {/* Logo */}
        <div
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer"
        >
          <Building2 className="text-[#247994]" />
          <span className="text-black">
            Sky<span className="opacity-70">Line</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                scrolled
                  ? "text-slate-700 hover:text-[#247994]"
                  : "text-black hover:text-[#247994]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-black"
          >
            <Globe size={16} /> Eng
          </button>

          <button
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className={`px-6 py-2.5 rounded-full font-bold transition-all text-sm ${
              scrolled
                ? "bg-[#247994] text-white hover:opacity-90"
                : "bg-transparent text-black border border-black/30"
            }`}
          >
            Contact Us
          </button>

          <button
            className="lg:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="absolute top-20 left-6 right-6 bg-white rounded-3xl p-6 shadow-2xl lg:hidden border border-slate-200 animate-in fade-in zoom-in duration-300"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-black font-semibold text-xl border-b border-slate-100 pb-3"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
