"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  History,
  TrendingUp,
  ShieldCheck,
  Landmark,
  Handshake,
  Users
} from "lucide-react";

import skylineImg from "../assets/why-skyline.jpg";

const STATS = [
  { icon: History, title: "52+", label: "Years Legacy" },
  { icon: TrendingUp, title: "High", label: "Rental Yield" },
  { icon: ShieldCheck, title: "100%", label: "Ethical Governance" },
  { icon: Landmark, title: "Mixed", label: "Use Expertise" },
  { icon: Handshake, title: "Full", label: "Leasing Support" },
  { icon: Users, title: "500+", label: "Families" }
];

export default function WhySkyline() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — IMAGE */}
          <div className="relative">
            <div className="relative h-[520px] w-full overflow-hidden">
              <div className="absolute inset-0 rounded-tl-[300px] rounded-br-[300px] overflow-hidden">
                <img
                  src={skylineImg}
                  alt="Sky Line Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div>

            {/* SUBHEADING */}
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="uppercase tracking-[0.35em] text-sm text-[#0b647f] font-semibold mb-3"
            >
              WHY SKYLINE
            </p>

            {/* HEADING */}
            <h2
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              EXPERIENCE A TRUE RETAIL{" "}
              <span className="text-[#247994]">
                PARADISE
              </span>
            </h2>

            {/* BODY TEXT */}
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="text-slate-600 text-lg leading-relaxed max-w-xl mb-10"
            >
              Step into a world perfectly curated to bring you the luxury lifestyle
              of your dreams! Aakash Skyline is ready to transform your living,
              with its luxurious residences, top notch amenities and well
              designed air conditioned shopping arcade. If you seek a
              well-rounded space in Jamshedpur, your search ends with
              Aakash Skyline!
            </p>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {STATS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-[#0b647f] rounded-md flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#b8ff66]" />
                    </div>

                    <div>
                      <div
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                        className="text-2xl font-bold text-slate-900 leading-none"
                      >
                        {item.title}
                      </div>
                      <div
                        style={{ fontFamily: "Inter, sans-serif" }}
                        className="text-sm text-slate-600"
                      >
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
