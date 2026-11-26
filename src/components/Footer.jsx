// src/components/Footer.jsx
import React from "react";
import { motion } from "motion/react";

const framerEase = [0.16, 1, 0.3, 1];

const footerLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] pt-6 pb-12 md:pt-10 md:pb-14">
      <div className="mx-auto max-w-[1140px] px-6 md:px-10">
        {/* Top Two-Column Row */}
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: framerEase }}
          className="flex flex-col justify-between gap-10 pb-12 sm:flex-row sm:items-start"
        >
          {/* Left: Brand, Tagline, Social Icons */}
          <div className="flex flex-col items-start">
            <a href="#" className="mb-4 flex items-center gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-full border border-white/15 bg-[#181818]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
                  alt="Snilloc Hemingson"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <span className="text-[15px] font-medium tracking-[-0.01em] text-white">
                Snilloc Hemingson
              </span>
            </a>

            <p className="mb-6 max-w-[275px] text-[13.5px] font-normal leading-[1.65] text-[#9CA3AF]">
              I build fast, polished, and user-friendly products that deliver
              real value
            </p>

            {/* Circular White Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 420, damping: 24 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-colors duration-200 hover:bg-neutral-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Vertical Nav Links */}
          <nav className="flex flex-col items-start gap-3.5 sm:items-end">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-normal text-[#E5E7EB] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Divider & Centered Copyright */}
        <div className="border-t border-white/[0.08] pt-8 text-center">
          <p className="text-[13.5px] font-normal tracking-[-0.01em] text-[#9CA3AF]">
            © 2026 — Copyright. All Rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}