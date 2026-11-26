// src/components/Skills.jsx
import React from "react";
import { motion } from "motion/react";

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
      staggerChildren: 0.045,
      delayChildren: 0.15,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.94, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: framerEase },
  },
};

const skillRows = [
  [
    {
      name: "HTML5",
      glow: "rgba(227, 79, 38, 0.18)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
          <path d="M4 3l1.45 16.2L12 21l6.55-1.8L20 3H4z" fill="#E34F26" />
          <path d="M12 4.3v15.3l5.3-1.47L18.55 4.3H12z" fill="#EF652A" />
          <path
            d="M12 10.2H9.3l-.2-2.1H12V6.1H7l.55 6.1H12v-2zm0 5.3l-2.3-.62-.15-1.68H7.5l.28 3.22L12 17.6v-2.1z"
            fill="#EBEBEB"
          />
          <path
            d="M12 10.2v2h2.45l-.23 2.68-2.22.6v2.1l4.15-1.15.55-6.23H12zm0-4.1v2h4.88l.18-2H12z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "CSS3",
      glow: "rgba(21, 114, 182, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
          <path d="M4 3l1.45 16.2L12 21l6.55-1.8L20 3H4z" fill="#1572B6" />
          <path d="M12 4.3v15.3l5.3-1.47L18.55 4.3H12z" fill="#33A9DC" />
          <path
            d="M12 10.2H9.1l.18 2H12v-2zm0-4.1H7.2l.18 2H12v-2zm0 9.4l-2.25-.6-.15-1.7H7.6l.28 3.22L12 17.6v-2.1z"
            fill="#EBEBEB"
          />
          <path
            d="M12 10.2v2h2.4l-.23 2.68-2.17.6v2.1l4.15-1.15.55-6.23H12zm0-4.1v2h4.85l.18-2H12z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      glow: "rgba(247, 223, 30, 0.16)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
          <rect x="3" y="3" width="18" height="18" rx="2.5" fill="#F7DF1E" />
          <path
            d="M10.5 15.2c0 1.3-.8 2-2.1 2-1 0-1.7-.5-2.1-1.2l1.2-.7c.2.4.5.6.9.6.4 0 .7-.2.7-.8v-4h1.4v4.1zm4.1 2c-1.3 0-2.2-.6-2.6-1.4l1.2-.7c.3.5.7.9 1.4.9.6 0 .9-.3.9-.7 0-.4-.3-.6-1.1-.9l-.4-.2c-1.1-.4-1.8-1-1.8-2.2 0-1.1.9-1.9 2.2-1.9.9 0 1.6.4 2.1 1.2l-1.2.7c-.2-.4-.5-.6-.9-.6-.4 0-.7.3-.7.6 0 .4.3.6.9.9l.4.2c1.3.5 2 1.1 2 2.3 0 1.3-1 2-2.4 2z"
            fill="#000000"
          />
        </svg>
      ),
    },
    {
      name: "React",
      glow: "rgba(97, 218, 251, 0.18)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            stroke="#61DAFB"
            strokeWidth="1.3"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(60 12 12)"
            stroke="#61DAFB"
            strokeWidth="1.3"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(120 12 12)"
            stroke="#61DAFB"
            strokeWidth="1.3"
          />
        </svg>
      ),
    },
    {
      name: "Nextjs",
      glow: "rgba(255, 255, 255, 0.14)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
          <circle cx="12" cy="12" r="9.5" fill="#FFFFFF" />
          <path
            d="M8.8 15.8V8.2l7.6 9.3M15.4 8.2v5.4"
            stroke="#000000"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ],
  [
    {
      name: "Redux",
      glow: "rgba(118, 74, 188, 0.22)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
          <path
            d="M14.8 8.7c1.1-.1 2.1.6 2.3 1.7.1 1.1-.6 2.1-1.7 2.3-.8.1-1.6-.3-2-.9-1.3 1.3-3.3 1.9-5.2 1.5-.4.8-1.4 1.2-2.3.8-.9-.4-1.3-1.4-.9-2.3.4-.9 1.4-1.3 2.3-.9.3.1.6.4.7.6 1.4.3 2.9-.1 3.9-1-.2-.4-.3-.8-.1-1.3.2-.9 1.1-1.5 2-1.5z"
            stroke="#8B5CF6"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M9.2 15.6c-1-1.3-1-3.1-.2-4.5M15.2 12.7c.4 1.6-.2 3.3-1.5 4.3-1.3 1-3 1-4.3.1"
            stroke="#8B5CF6"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="12.1" cy="7.4" r="1.2" fill="#8B5CF6" />
          <circle cx="7.4" cy="14.6" r="1.2" fill="#8B5CF6" />
          <circle cx="16.1" cy="14.6" r="1.2" fill="#8B5CF6" />
        </svg>
      ),
    },
    {
      name: "TailwindCSS",
      glow: "rgba(56, 189, 248, 0.18)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
          <path
            d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"
            fill="#38BDF8"
          />
        </svg>
      ),
    },
    {
      name: "Sass",
      glow: "rgba(204, 102, 153, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
          <circle cx="12" cy="12" r="9.5" fill="#CC6699" />
          <path
            d="M15.4 8.6c-.4-1.1-2-1.5-3.8-.9-2 .7-3.6 2.2-3.3 3.4.2.9 1.4 1.4 2.5 1.9-.9.5-2.1 1.3-2.3 2.3-.2.9.6 1.6 1.6 1.5 1.2-.1 2.3-1.1 2.5-2.3.1-.5 0-1-.2-1.4.8-.2 1.7-.4 2.3-.9.8-.7 1-1.7.7-2.6z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "GSAP",
      glow: "rgba(136, 206, 2, 0.18)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
          <circle cx="12" cy="12" r="9.5" fill="#88CE02" fillOpacity="0.18" />
          <path
            d="M15.2 9.4c-.6-1-1.6-1.5-3-1.5-2.2 0-3.8 1.7-3.8 4.2s1.5 4.2 3.7 4.2c1.9 0 3.3-1.1 3.5-3h-3.3v-1.7h5.3v1.1c0 3.3-2.2 5.4-5.5 5.4-3.4 0-5.7-2.4-5.7-6.1s2.4-6.1 5.8-6.1c2.2 0 4 1 4.8 2.6l-1.8.9z"
            fill="#88CE02"
          />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      glow: "rgba(49, 120, 198, 0.22)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
          <rect x="3" y="3" width="18" height="18" rx="2.5" fill="#3178C6" />
          <path
            d="M7 10.5h5.2v1.3h-1.9v5.4H8.8v-5.4H7v-1.3zm8.6 6.8c-1.1 0-2-.4-2.5-1l.9-1c.4.5 1 .8 1.6.8.6 0 1-.2 1-.6 0-.4-.3-.6-1.1-.8l-.4-.1c-1.1-.3-1.8-.9-1.8-2 0-1.1.9-1.9 2.2-1.9.9 0 1.7.3 2.2.9l-.9.9c-.4-.4-.8-.6-1.3-.6-.5 0-.8.2-.8.6 0 .4.3.5 1 .8l.4.1c1.2.3 1.9.9 1.9 2 0 1.2-1 1.9-2.4 1.9z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
  ],
  [
    {
      name: "Netlify",
      glow: "rgba(0, 199, 183, 0.18)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
          <path
            d="M12 2.5L21.5 12 12 21.5 2.5 12 12 2.5z"
            fill="#00C7B7"
            fillOpacity="0.16"
          />
          <path
            d="M12 4.5v4.2M12 15.3v4.2M4.5 12h4.2M15.3 12h4.2M7.2 7.2l2.6 2.6M14.2 14.2l2.6 2.6M16.8 7.2l-2.6 2.6M9.8 14.2l-2.6 2.6"
            stroke="#00C7B7"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="2" fill="#00C7B7" />
        </svg>
      ),
    },
    {
      name: "Git",
      glow: "rgba(240, 80, 50, 0.2)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
          <path
            d="M20.6 11.2l-7.8-7.8a1.15 1.15 0 00-1.6 0L9.5 5.1l2.1 2.1a1.38 1.38 0 011.7 1.7l2 2a1.38 1.38 0 11-.8.8l-1.9-1.9v5a1.38 1.38 0 11-1.1-.1V9.6a1.38 1.38 0 01-.8-1.8L8.6 5.7 3.4 10.9a1.15 1.15 0 000 1.6l7.8 7.8a1.15 1.15 0 001.6 0l7.8-7.8a1.15 1.15 0 000-1.3z"
            fill="#F05032"
          />
        </svg>
      ),
    },
  ],
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-[#000000] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1020px] px-6 md:px-10">
        {/* Centered Header Block */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          {/* Eyebrow Pill */}
          <span className="mb-4 inline-flex items-center rounded-full border border-white/[0.06] bg-[#141414] px-3.5 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#9CA3AF]">
            TECH STACK
          </span>

          {/* Section Title */}
          <h2 className="mb-3.5 text-[32px] font-light leading-[1.2] tracking-[-0.025em] text-white sm:text-[38px]">
            Tools I Build With
          </h2>

          {/* Subtitle */}
          <p className="max-w-[360px] text-[14.5px] font-normal leading-[1.6] text-[#9CA3AF] sm:text-[15px]">
            A curated set of technologies I rely on to build modern web
            experiences
          </p>
        </motion.div>

        {/* 3-Row Centered Tech Pills */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col items-center gap-3.5 sm:gap-4"
        >
          {skillRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              {row.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={pillVariants}
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                    backgroundColor: "#1B1B1B",
                    borderColor: "rgba(255, 255, 255, 0.22)",
                    boxShadow: `0 10px 24px -6px ${skill.glow}`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 26,
                  }}
                  className="group inline-flex cursor-default select-none items-center gap-3 rounded-full border border-white/[0.06] bg-[#141414] px-5 py-3 text-[14.5px] font-normal tracking-[-0.01em] text-[#E5E7EB] transition-colors duration-200 hover:text-white sm:px-6 sm:py-3.5 sm:text-[15px]"
                >
                  <span className="transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6">
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}