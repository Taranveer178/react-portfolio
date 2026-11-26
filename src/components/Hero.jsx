// src/components/Hero.jsx
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const framerEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const fadeUpBlurVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: framerEase },
  },
};

const portraitVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, delay: 0.22, ease: framerEase },
  },
};

const techNames = ["React", "Vite", "JavaScript", "Firebase", "Git"];

export default function Hero() {
  return (
    <section id="top" className="w-full bg-[#000000] pt-10 pb-20 md:pt-16 md:pb-28">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-start lg:col-span-7">
          <motion.div variants={fadeUpBlurVariants} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-[#141414] px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
            </span>
            <span className="text-[13.5px] text-[#D1D5DB]">Available to connect</span>
          </motion.div>

          <motion.p variants={fadeUpBlurVariants} className="mb-4 text-[14px] font-medium uppercase tracking-[0.16em] text-[#9CA3AF]">Hi, I'm Taranveer Singh</motion.p>

          <motion.h1 variants={fadeUpBlurVariants} className="mb-6 max-w-[760px] text-[44px] font-light leading-[1.12] tracking-[-0.03em] text-white sm:text-[54px] xl:text-[68px]">
            Building Digital Experiences That Make an Impact.
          </motion.h1>

          <motion.p variants={fadeUpBlurVariants} className="mb-9 max-w-[590px] text-[15.5px] leading-[1.68] text-[#9CA3AF] sm:text-[16px]">
            I'm a developer passionate about building modern web applications, solving real-world problems, and turning ideas into functional digital products. I enjoy working across frontend and backend technologies to create seamless user experiences.
          </motion.p>

          <motion.div variants={fadeUpBlurVariants} className="mb-14 flex flex-wrap items-center gap-4">
            <motion.a href="#projects" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: framerEase }} className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-[13.5px] font-medium text-white transition-colors duration-200 hover:border-white hover:bg-white/[0.06]">
              View My Work
            </motion.a>
            <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: framerEase }} className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13.5px] font-semibold text-black transition-colors duration-200 hover:bg-neutral-200">
              <span>Let's Connect</span><ArrowRight className="h-4 w-4 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUpBlurVariants} className="relative w-full max-w-[560px] overflow-hidden py-1" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
            <div className="animate-tech-marquee flex items-center gap-3">
              {[...techNames, ...techNames].map((name, idx) => (
                <div key={`${name}-${idx}`} className="flex h-[58px] shrink-0 items-center rounded-[14px] border border-white/[0.06] bg-[#141414] px-5 text-[13px] text-[#D1D5DB]">{name}</div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <motion.div variants={portraitVariants} initial="hidden" animate="visible" className="relative aspect-[4/4.2] w-full max-w-[530px] overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#161616]">
            <div className="pointer-events-none absolute inset-0 z-10" style={{ background: "linear-gradient(180deg, rgba(22,22,22,0.15) 0%, rgba(22,22,22,0) 65%, rgba(16,16,16,0.65) 100%)" }} />
            <motion.div initial={{ scale: 1.07 }} animate={{ scale: 1 }} transition={{ duration: 1.1, delay: 0.22, ease: framerEase }} className="flex h-full w-full items-end justify-center bg-[radial-gradient(circle_at_top,#252525_0%,#121212_58%,#0a0a0a_100%)]">
              <div className="mb-12 text-center">
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-4xl font-light text-white">TS</div>
                <p className="text-[15px] tracking-[0.12em] text-[#C5C7CC]">TARANVEER SINGH</p>
                <p className="mt-2 text-[13px] text-[#777D87]">Full Stack Developer · India</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}