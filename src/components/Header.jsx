"use client";
import React, { useState, useEffect } from "react";
import { Globe, Menu, X, Building2 } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ UPDATED MENU ORDER + IDS
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 ${
        scrolled ? "mt-0" : "mt-4"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg border-slate-200 shadow-md text-slate-900"
            : "bg-white/10 backdrop-blur-md border-white/20 text-white"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer">
          <Building2 className={scrolled ? "text-[#0b647f]" : "text-[#b8ff66]"} />
          Sky<span className="opacity-80">Line</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-1.5 text-sm font-medium">
            <Globe size={16} /> Eng
          </button>

          <button className="px-6 py-2.5 bg-[#b8ff66] text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-sm">
            Contact Us
          </button>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-6 right-6 bg-white rounded-3xl p-6 shadow-2xl lg:hidden border border-slate-100 animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-900 font-semibold text-lg border-b border-slate-50 pb-2"
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
