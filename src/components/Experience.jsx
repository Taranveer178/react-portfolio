// src/components/Experience.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

const framerEase = [0.16, 1, 0.3, 1];

const headerVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: framerEase },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: framerEase },
  },
};

const experiences = [
  {
    role: "Frontend Engineer — Paystack",
    period: "2023 — Present",
    highlights: [
      "Built and maintained responsive user interfaces using modern JavaScript frameworks",
      "Collaborated with designers to deliver clean, user-focused experiences",
      "Optimized performance and improved page load times across key products",
    ],
  },
  {
    role: "Frontend Engineer — Hubtel",
    period: "2022 — 2023",
    highlights: [
      "Architected reusable React and TypeScript component libraries for merchant checkout flows",
      "Integrated real-time payment status updates and accessible form validation across web apps",
      "Reduced bundle sizes and improved Core Web Vitals on high-traffic customer portals",
    ],
  },
  {
    role: "UI Engineer — Meta",
    period: "2021 — 2022",
    highlights: [
      "Developed interactive design system primitives with strict keyboard and screen-reader support",
      "Partnered with product designers to prototype fluid micro-interactions and layout transitions",
      "Streamlined frontend build pipelines and automated visual regression testing",
    ],
  },
  {
    role: "Frontend Lead — Google",
    period: "2020 — 2021",
    highlights: [
      "Led a cross-functional frontend team shipping internal analytics and developer tooling dashboards",
      "Established code quality standards, performance budgets, and modular state architecture",
      "Mentored junior engineers through architecture reviews and hands-on pair programming",
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="experience" className="w-full bg-[#000000] py-20 md:py-28">
      <div className="mx-auto max-w-[780px] px-6 md:px-10">
        {/* Centered Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-white/[0.06] bg-[#141414] px-3.5 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#9CA3AF]">
            EXPERIENCE
          </span>

          <h2 className="mb-3.5 text-[32px] font-light leading-[1.2] tracking-[-0.025em] text-white sm:text-[38px]">
            Where I&apos;ve Worked
          </h2>

          <p className="max-w-[360px] text-[14.5px] font-normal leading-[1.6] text-[#9CA3AF] sm:text-[15px]">
            A summary of my professional journey and the impact I&apos;ve made
          </p>
        </motion.div>

        {/* Accordion Experience Stack */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-3.5"
        >
          {experiences.map((exp, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={exp.role}
                variants={itemVariants}
                onClick={() => toggleItem(idx)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleItem(idx);
                  }
                }}
                whileHover={{
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  backgroundColor: "#151515",
                }}
                transition={{ duration: 0.25, ease: framerEase }}
                className="group cursor-pointer select-none rounded-[20px] border border-white/[0.06] bg-[#121212] px-6 py-5 transition-colors duration-200 sm:px-7 sm:py-6"
              >
                {/* Top Row: Role & Date */}
                <div className="flex flex-col justify-between gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                  <h3 className="text-[17px] font-normal tracking-[-0.015em] text-white sm:text-[18.5px]">
                    {exp.role}
                  </h3>
                  <span className="text-[13.5px] font-normal tracking-[-0.01em] text-[#9CA3AF] sm:text-[14px]">
                    {exp.period}
                  </span>
                </div>

                {/* Collapsible Bullet Points */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: framerEase }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-5 space-y-2.5 pl-4 text-[14px] font-normal leading-[1.6] text-[#9CA3AF] sm:text-[14.5px]">
                        {exp.highlights.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="list-disc marker:text-[#6B7280]"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom-Left Circular Arrow Toggle */}
                <div className="mt-4 flex items-center">
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.32, ease: framerEase }}
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/60 text-white transition-colors duration-200 group-hover:border-white"
                  >
                    <ArrowDown className="h-3.5 w-3.5 stroke-[1.8]" />
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Centered Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: framerEase }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: framerEase }}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13.5px] font-semibold text-black transition-colors duration-200 hover:bg-neutral-200"
          >
            <span>Download My CV</span>
            <ArrowRight className="h-4 w-4 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}