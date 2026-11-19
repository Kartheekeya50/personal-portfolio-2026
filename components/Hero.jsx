
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Download,
  Code2,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const floatingItems = [
  { icon: Code2, label: "Development", className: "top-[12%] left-[-5%]" },
  { icon: BrainCircuit, label: "AI", className: "top-[42%] right-[-8%]" },
  { icon: ChartNoAxesColumnIncreasing, label: "Analytics", className: "bottom-[17%] left-[-7%]" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-32 pb-20"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[8%] h-[450px] w-[450px] rounded-full bg-accent/10 blur-[150px]" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[350px] w-[500px] rounded-full bg-accent/[0.04] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm font-semibold tracking-[0.2em] text-accent">
              HELLO, I'M KARTHEEK
            </span>
            <span className="h-px w-16 bg-gradient-to-r from-accent to-transparent" />
          </div>

          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl xl:text-6xl">
            Exploring
            <br />
            Technology.
            <br />
            Understanding
            <br />
            Business.
            <br />
            <span className="text-accent">
              Building with AI.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">
            A Computer Science graduate pursuing an MBA
            in Data Science & Artificial Intelligence,
            interested in connecting technology, data
            and business.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_35px_rgba(217,255,102,0.25)]"
            >
              Explore My Work
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <Download size={19} />
              Download Resume
            </a>

          </div>

          {/* PROFESSIONAL CATEGORIES */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted">

            <div className="flex items-center gap-2">
              <Code2 size={18} className="text-accent" />
              Development
            </div>

            <div className="flex items-center gap-2">
              <ChartNoAxesColumnIncreasing size={18} className="text-accent" />
              Data & AI
            </div>

            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={18} className="text-accent" />
              Business
            </div>

          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto flex w-full max-w-[490px] items-center justify-center py-12"
        >

          {/* Ambient glow */}
          <div className="absolute h-[80%] w-[80%] rounded-full bg-accent/15 blur-[100px]" />

          {/* Orbit rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[90%] w-[90%] rounded-[35%] border border-accent/30"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[105%] w-[105%] rounded-[40%] border border-dashed border-accent/15"
          />

          {/* Portrait frame */}
          <div className="relative z-10 aspect-[4/5] w-[78%] overflow-hidden rounded-[45%_45%_25%_25%] border border-accent/40 bg-surface shadow-[0_0_65px_rgba(217,255,102,0.12)]">

            <Image
              src="/images/profile.png"
              alt="Kartheek - Professional portrait"
              fill
              priority
              sizes="(max-width: 768px) 75vw, 380px"
              className="object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

          </div>

          {/* Floating cards */}
          {floatingItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute z-20 ${item.className} flex items-center gap-2 rounded-2xl border border-accent/30 bg-surface/90 p-3 shadow-xl backdrop-blur-xl`}
              >
                <Icon size={22} className="text-accent" />
                <span className="text-xs font-medium text-foreground">
                  {item.label}
                </span>
              </motion.div>
            );
          })}

        </motion.div>
      </div>
    </section>
  );
}
