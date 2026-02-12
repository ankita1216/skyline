"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="overview" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* LEFT IMAGE */}
          <div
            className="relative cursor-pointer group"
            style={{ perspective: "1200px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative h-[560px] w-full transition-all duration-200 ease-out"
            >
              <div className="absolute inset-0 rounded-tl-[300px] rounded-br-[300px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] -z-10 group-hover:shadow-[0_60px_100px_-20px_rgba(17,50,37,0.3)] transition-all duration-500" />

              <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] rounded-tl-[300px] rounded-br-[300px] bg-[#C9F27B]/10 -z-20" />

              <div className="absolute inset-0 rounded-tl-[300px] rounded-br-[300px] overflow-hidden border-b-4 border-r-4 border-white/20 shadow-inner">
                <motion.img
                  src={skylineImg}
                  alt="Sky Line Development"
                  className="w-full h-full object-cover"
                  style={{ transform: "translateZ(50px) scale(1.1)" }}
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="uppercase tracking-[0.35em] text-sm text-[#C9F27B] font-semibold mb-4"
            >
              WHY SKYLINE
            </p>

            <h2
              style={{ fontFamily: "Playfair Display, serif" }}
              className="uppercase text-4xl md:text-5xl font-bold leading-[1.15] text-slate-900 mb-8"
            >
              EXPERIENCE A TRUE RETAIL{" "}
              <span className="text-[#C9F27B]">
                PARADISE
              </span>
            </h2>

            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="text-slate-600 text-lg leading-[1.75] max-w-xl mb-12"
            >
              Step into a world perfectly curated to bring you the luxury lifestyle
              of your dreams! Aakash Skyline is ready to transform your living,
              with its luxurious residences, top notch amenities and well
              designed air conditioned shopping arcade. If you seek a
              well-rounded space in Jamshedpur, your search ends with
              Aakash Skyline!
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-12">
              {STATS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-[#113225] rounded-xl flex items-center justify-center shrink-0 shadow-[0_10px_20px_-5px_rgba(17,50,37,0.4)]">
                      <Icon size={20} className="text-[#C9F27B]" />
                    </div>

                    <div>
                      <div
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                        className="text-2xl font-bold text-slate-900 leading-none mb-1"
                      >
                        {item.title}
                      </div>
                      <div
                        style={{ fontFamily: "Inter, sans-serif" }}
                        className="text-sm font-medium text-slate-500"
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
