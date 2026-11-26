// src/components/Projects.jsx
import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

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

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.97,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: framerEase,
    },
  },
};

const projects = [
  {
    title: "CloudDesk",
    description:
      "A modern dashboard interface designed to help teams manage tasks, track progress, and collaborate seamlessly in real time.",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "CloudDesk Tablet Interface Mockup",
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Matcha Haven",
    description:
      "A clean, calming website for a matcha brand, designed to showcase products, tell the brand story, and create a smooth, delightful shopping experience.",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Matcha Haven Glass Mockup",
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Veloce Studio",
    description:
      "An editorial portfolio and booking platform crafted for a boutique design studio, featuring fluid page transitions and interactive case studies.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Veloce Studio Print and Web Mockup",
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "PulsePay Mobile",
    description:
      "A sleek fintech web and mobile companion built for instant peer-to-peer transfers, smart spending analytics, and multi-currency tracking.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "PulsePay Mobile App Mockup",
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-[#000000] py-20 md:py-28">
      <div className="mx-auto max-w-[1140px] px-6 md:px-10">
        {/* Centered Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-white/[0.06] bg-[#141414] px-3.5 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#9CA3AF]">
            PROJECTS
          </span>

          <h2 className="mb-3.5 text-[32px] font-light leading-[1.2] tracking-[-0.025em] text-white sm:text-[38px]">
            Projects I&apos;ve Shipped
          </h2>

          <p className="max-w-[390px] text-[14.5px] font-normal leading-[1.6] text-[#9CA3AF] sm:text-[15px]">
            A range of projects demonstrating how I turn ideas into functional
            experiences
          </p>
        </motion.div>

        {/* 2x2 Project Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -4,
                borderColor: "rgba(255, 255, 255, 0.16)",
              }}
              transition={{ duration: 0.35, ease: framerEase }}
              className="group flex flex-col justify-between rounded-[24px] border border-white/[0.06] bg-[#121212] p-5 transition-colors duration-300 sm:p-6"
            >
              <div>
                {/* Rounded Inner Image Frame */}
                <div className="relative mb-6 aspect-[16/10.5] w-full overflow-hidden rounded-[16px] bg-[#1A1A1A]">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                {/* Project Title */}
                <h3 className="mb-2.5 text-[20px] font-normal tracking-[-0.015em] text-white sm:text-[22px]">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="mb-7 text-[14px] font-normal leading-[1.65] text-[#9CA3AF] sm:text-[14.5px]">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <motion.a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: framerEase }}
                  className="inline-flex items-center justify-center rounded-full border border-white/35 bg-transparent px-5 py-2.5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white hover:bg-white/[0.06]"
                >
                  Source Code
                </motion.a>

                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: framerEase }}
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-black transition-colors duration-200 hover:bg-neutral-200"
                >
                  <span>Live Website</span>
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2] transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}