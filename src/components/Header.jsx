"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

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
    { label: "Overview", id: "overview" },
    { label: "Amenities", id: "amenities" },
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
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 rounded-full border transition-all duration-500 h-[80px] ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg border-slate-200 shadow-md"
            : "bg-transparent border-black/20"
        }`}
      >
        {/* LOGO (Clickable) */}
        <a
          href="https://skylinecommercial.netlify.app/"
          className="flex items-center h-full"
        >
          <img
            src={logo}
            alt="Aakash Skyline"
            className="h-16 md:h-18 object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-slate-700 hover:text-[#247994]"
                  : "text-black hover:text-[#247994]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-full font-semibold transition-all text-sm ${
              scrolled
                ? "bg-[#247994] text-white hover:opacity-90"
                : "bg-transparent text-black border border-black/30"
            }`}
          >
            Contact Us
          </a>

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
        <div className="absolute top-[90px] left-6 right-6 bg-white rounded-3xl p-6 shadow-2xl lg:hidden border border-slate-200">
          <div className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-black font-semibold text-lg border-b border-slate-100 pb-3"
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
