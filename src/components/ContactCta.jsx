// src/components/ContactCta.jsx
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const framerEase = [0.16, 1, 0.3, 1];

const bannerVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: framerEase,
    },
  },
};

const bannerContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.18,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: framerEase },
  },
};

export default function ContactCta() {
  return (
    <section id="contact" className="w-full bg-[#000000] py-16 md:py-24">
      <div className="mx-auto max-w-[1140px] px-6 md:px-10">
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative flex min-h-[360px] w-full flex-col items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.08] px-6 py-16 text-center sm:min-h-[410px]"
        >
          {/* Background Studio Collaboration Image */}
          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: framerEase }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_30%),#111111]"
          />

          {/* Warm Dark Atmospheric Overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(18, 14, 10, 0.62) 0%, rgba(10, 10, 10, 0.86) 100%)",
            }}
          />

          {/* Centered CTA Content */}
          <motion.div
            variants={bannerContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 flex max-w-[520px] flex-col items-center"
          >
            <motion.h2
              variants={fadeUpVariants}
              className="mb-3.5 text-[30px] font-light leading-[1.2] tracking-[-0.025em] text-white sm:text-[38px]"
            >
              Have an Idea? Let&apos;s Build Something Together.
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="mb-8 max-w-[420px] text-[14.5px] font-normal leading-[1.6] text-[#D1D5DB] sm:text-[15.5px]"
            >
              I&apos;m always interested in connecting with people, discussing
              innovative ideas, and exploring opportunities to build something
              meaningful.
            </motion.p>

            <motion.div variants={fadeUpVariants}>
              <motion.a
                href="mailto:staranveer178@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: framerEase }}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13.5px] font-semibold text-black transition-colors duration-200 hover:bg-neutral-200"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-4 w-4 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}