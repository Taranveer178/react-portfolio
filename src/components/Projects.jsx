// src/components/Projects.jsx
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
    title: "RoomSplit",
    category: "Expense Management Application",
    description:
      "RoomSplit simplifies shared expense management for people living together. It helps groups track balances, split bills, communicate, and stay updated in real time.",
    tags: ["React", "Vite", "Capacitor", "Firebase", "Firestore"],
    liveUrl: "https://roomsplit.taranveer.in/",
  },
  {
    title: "Glam By Anmi",
    category: "Business Website / Web Development",
    description:
      "A modern website for a beauty and nail studio that showcases services, displays work, and helps customers connect and make booking inquiries.",
    tags: ["React", "Vite", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://glambyanmi.in/",
  },
  {
    title: "ShareBills",
    category: "Collaborative Web Application",
    description:
      "A collaborative project developed with Sushant Monga to make software that helps people manage and share bills more effectively.",
    tags: ["Web Application"],
    liveUrl: "https://sharebills.in/",
  },
  {
    title: "Portfolio Website",
    category: "Personal Branding / Web Development",
    description:
      "My personal developer portfolio, showcasing selected projects, technical interests, skills, and a clear approach to building real-world applications.",
    tags: ["React", "Vite", "Motion", "Tailwind CSS"],
    liveUrl: "https://taranveer.in",
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
            Featured Projects
          </h2>

          <p className="max-w-[390px] text-[14.5px] font-normal leading-[1.6] text-[#9CA3AF] sm:text-[15px]">
            Real applications and websites built around practical ideas and useful experiences.
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
                <div className="relative mb-6 aspect-[16/10.5] w-full overflow-hidden rounded-[16px] border border-white/[0.05] bg-[radial-gradient(circle_at_top_right,#252525_0%,#171717_48%,#101010_100%)]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[28px] font-light tracking-[-0.04em] text-white/90 sm:text-[34px]">{project.title}</span>
                  </div>
                </div>

                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#777D87]">{project.category}</p>
                <h3 className="mb-2.5 text-[20px] font-normal tracking-[-0.015em] text-white sm:text-[22px]">
                  {project.title}
                </h3>

                <p className="mb-5 text-[14px] font-normal leading-[1.65] text-[#9CA3AF] sm:text-[14.5px]">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-[11.5px] text-[#C7C9CE]">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
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