// src/components/Hero.jsx
import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const framerEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const fadeUpBlurVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: framerEase,
    },
  },
};

const portraitVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      delay: 0.22,
      ease: framerEase,
    },
  },
};

const techIcons = [
  {
    name: "GSAP",
    svg: (
      <svg viewBox="0 0 36 36" className="h-8 w-8">
        <circle cx="18" cy="18" r="14" fill="#88CE02" fillOpacity="0.16" />
        <path
          d="M22.5 14.2c-.8-1.4-2.3-2.2-4.2-2.2-3.1 0-5.3 2.4-5.3 6s2.1 6 5.2 6c2.7 0 4.6-1.6 4.9-4.2h-4.7v-2.4h7.5v1.5c0 4.6-3.1 7.6-7.7 7.6-4.7 0-8-3.4-8-8.5s3.4-8.5 8.1-8.5c3.1 0 5.6 1.4 6.8 3.7l-2.6 1z"
          fill="#88CE02"
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 36 36" className="h-8 w-8">
        <circle cx="18" cy="18" r="13" fill="#FFFFFF" />
        <path
          d="M13.5 23V13l10.2 12.6M22.5 13v7.2"
          stroke="#000000"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    svg: (
      <svg viewBox="0 0 36 36" className="h-8 w-8">
        <rect x="5" y="5" width="26" height="26" rx="3" fill="#F7DF1E" />
        <path
          d="M15.8 21.8c0 1.8-1.1 2.8-2.9 2.8-1.4 0-2.4-.7-2.9-1.7l1.7-1c.3.5.7.9 1.2.9.6 0 1-.3 1-1.1v-5.5h1.9v5.6zm5.7 2.8c-1.8 0-3-.8-3.6-2l1.7-1c.4.7 1 1.2 1.9 1.2.8 0 1.3-.4 1.3-.9 0-.6-.5-.9-1.5-1.3l-.5-.2c-1.5-.6-2.5-1.4-2.5-3.1 0-1.5 1.2-2.7 3-2.7 1.3 0 2.3.5 2.9 1.7l-1.6 1c-.3-.6-.7-.9-1.3-.9-.6 0-1 .4-1 .9 0 .6.4.8 1.3 1.2l.5.2c1.8.8 2.8 1.5 2.8 3.2 0 1.8-1.4 2.7-3.4 2.7z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 36 36" className="h-8 w-8" fill="none">
        <circle cx="18" cy="18" r="2.4" fill="#61DAFB" />
        <ellipse
          cx="18"
          cy="18"
          rx="12"
          ry="4.6"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
        <ellipse
          cx="18"
          cy="18"
          rx="12"
          ry="4.6"
          transform="rotate(60 18 18)"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
        <ellipse
          cx="18"
          cy="18"
          rx="12"
          ry="4.6"
          transform="rotate(120 18 18)"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "Redux",
    svg: (
      <svg viewBox="0 0 36 36" className="h-8 w-8" fill="none">
        <path
          d="M21.8 13.4c1.5-.2 2.9.8 3.1 2.3.2 1.5-.8 2.9-2.3 3.1-1.1.1-2.1-.4-2.7-1.2-1.8 1.8-4.5 2.6-7.1 2-.6 1.1-1.9 1.6-3.1 1.1-1.2-.5-1.8-1.9-1.3-3.1.5-1.2 1.9-1.8 3.1-1.3.4.2.8.5 1 .8 1.9.4 3.9-.1 5.3-1.4-.3-.5-.4-1.1-.2-1.7.3-1.3 1.5-2.1 2.8-1.9z"
          stroke="#764ABC"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14.2 22.8c-1.3-1.8-1.4-4.2-.3-6.1M22.4 18.8c.5 2.2-.3 4.5-2.1 5.9-1.7 1.3-4.1 1.4-5.9.2"
          stroke="#764ABC"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="18.2" cy="11.5" r="1.6" fill="#764ABC" />
        <circle cx="11.7" cy="21.4" r="1.6" fill="#764ABC" />
        <circle cx="23.5" cy="21.4" r="1.6" fill="#764ABC" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#000000] pt-10 pb-20 md:pt-16 md:pb-28">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
        {/* Left Column — Staggered Framer Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start lg:col-span-6"
        >
          {/* 1. Availability Pill */}
          <motion.div
            variants={fadeUpBlurVariants}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-[#141414] px-4 py-2"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
            </span>
            <span className="text-[13.5px] font-normal tracking-[-0.01em] text-[#D1D5DB]">
              Available for work
            </span>
          </motion.div>

          {/* 2. Main Display Heading */}
          <motion.h1
            variants={fadeUpBlurVariants}
            className="mb-6 text-[44px] font-light leading-[1.12] tracking-[-0.03em] text-white sm:text-[54px] xl:text-[60px]"
          >
            Frontend Engineer.
          </motion.h1>

          {/* 3. Subtitle Description */}
          <motion.p
            variants={fadeUpBlurVariants}
            className="mb-9 max-w-[465px] text-[15.5px] font-normal leading-[1.68] tracking-[-0.005em] text-[#9CA3AF] sm:text-[16px]"
          >
            Hi, I&apos;m Snilloc Hemingson, a frontend engineer in the United
            States building fast, accessible web experiences. I focus on modern
            JavaScript frameworks and clean, scalable interfaces.
          </motion.p>

          {/* 4. CTA Buttons Row */}
          <motion.div
            variants={fadeUpBlurVariants}
            className="mb-14 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: framerEase }}
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-transparent px-6 py-3 text-[13.5px] font-medium text-white transition-colors duration-200 hover:border-white hover:bg-white/[0.06]"
            >
              See my works
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: framerEase }}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13.5px] font-semibold text-black transition-colors duration-200 hover:bg-neutral-200"
            >
              <span>Contact Me</span>
              <ArrowRight className="h-4 w-4 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.a>
          </motion.div>

          {/* 5. Tech Stack Icon Strip */}
          <motion.div
            variants={fadeUpBlurVariants}
            className="relative w-full max-w-[460px] overflow-hidden py-1"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
          >
            <div className="animate-tech-marquee flex items-center gap-4">
              {[...techIcons, ...techIcons].map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  title={item.name}
                  className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[16px] border border-white/[0.05] bg-[#141414] transition-colors duration-200 hover:border-white/20 hover:bg-[#1B1B1B]"
                >
                  {item.svg}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Portrait Card with Smooth Scale + Blur Reveal */}
        <div className="flex justify-center lg:col-span-6 lg:justify-end">
          <motion.div
            variants={portraitVariants}
            initial="hidden"
            animate="visible"
            className="relative aspect-[4/4.2] w-full max-w-[530px] overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#161616]"
          >
            <div
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(180deg, rgba(22,22,22,0.15) 0%, rgba(22,22,22,0) 65%, rgba(16,16,16,0.65) 100%)",
              }}
            />
            <motion.img
              initial={{ scale: 1.07 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.1, delay: 0.22, ease: framerEase }}
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85"
              alt="Snilloc Hemingson Portrait"
              className="h-full w-full object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}