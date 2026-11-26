// src/components/Skills.jsx
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
            Technical Skills
          </h2>

          {/* Subtitle */}
          <p className="max-w-[360px] text-[14.5px] font-normal leading-[1.6] text-[#9CA3AF] sm:text-[15px]">
            Technologies I use to build web applications and practical digital products.
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {[
            ["Frontend Development", ["HTML5", "CSS3", "JavaScript", "React.js", "Vite"]],
            ["Backend & Database", ["Firebase", "Firestore", "SQL"]],
            ["App Development", ["Capacitor", "Android App Development"]],
            ["Programming Languages", ["Java", "JavaScript"]],
            ["Tools & Platforms", ["Git", "GitHub", "VS Code", "Cloudflare"]],
          ].map(([category, items]) => (
            <motion.div
              key={category}
              variants={pillVariants}
              whileHover={{ y: -3, borderColor: "rgba(255, 255, 255, 0.16)" }}
              className="rounded-[20px] border border-white/[0.06] bg-[#121212] p-5"
            >
              <h3 className="mb-4 text-[14px] font-medium text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full border border-white/[0.07] bg-[#171717] px-3 py-1.5 text-[12.5px] text-[#C7C9CE]">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}