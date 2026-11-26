// src/components/Experience.jsx
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

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
    role: "Developer Approach",
    period: "Taranveer Singh",
    highlights: [
      "I’m a developer who enjoys creating practical digital solutions through code.",
      "I believe technology is most valuable when it solves real problems, and I enjoy taking ideas from concept to reality.",
      "I work across modern frontend technologies and backend services, continuously learning and improving.",
      "My focus is on clean code, intuitive interfaces, and applications that are useful, reliable, and scalable.",
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="about" className="w-full bg-[#000000] py-20 md:py-28">
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
            ABOUT
          </span>

          <h2 className="mb-3.5 text-[32px] font-light leading-[1.2] tracking-[-0.025em] text-white sm:text-[38px]">
            About Me
          </h2>

          <p className="max-w-[360px] text-[14.5px] font-normal leading-[1.6] text-[#9CA3AF] sm:text-[15px]">
            Building useful solutions through code, curiosity, and continuous
            improvement.
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
      </div>
    </section>
  );
}