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

import skylineImg from "../assets/why-skyline.jpg"; // your uploaded image

const STATS = [
  {
    icon: History,
    title: "52+",
    label: "Years Legacy"
  },
  {
    icon: TrendingUp,
    title: "High",
    label: "Rental Yield"
  },
  {
    icon: ShieldCheck,
    title: "100%",
    label: "Ethical Governance"
  },
  {
    icon: Landmark,
    title: "Mixed",
    label: "Use Expertise"
  },
  {
    icon: Handshake,
    title: "Full",
    label: "Leasing Support"
  },
  {
    icon: Users,
    title: "500+",
    label: "Families"
  }
];

export default function WhySkyline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — IMAGE (CURVED STYLE) */}
          <div className="relative">
            <div className="relative h-[520px] w-full overflow-hidden">
              {/* curved mask */}
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
            {/* Header */}
            <p className="uppercase tracking-[0.35em] text-sm text-[#0b647f] font-semibold mb-3">
              WHY SKY LINE
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Built to Endure.
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mb-10">
              SKY LINE is a disciplined real estate group dedicated to building
              long-term urban assets. Every project is guided by ethics,
              commercial intelligence, and enduring value.
            </p>

            {/* COMPACT STAT GRID */}
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
                      <div className="text-2xl font-bold text-slate-900 leading-none">
                        {item.title}
                      </div>
                      <div className="text-sm text-slate-600">
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
