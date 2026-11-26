// src/components/Header.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

const framerEase = [0.16, 1, 0.3, 1];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: framerEase }}
      className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1220px] items-center justify-between px-6 py-5 md:px-10">
        {/* Left: Avatar + Name */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="h-9 w-9 overflow-hidden rounded-full border border-white/15 bg-[#181818]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
              alt="Snilloc Hemingson"
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="text-[15px] font-medium tracking-[-0.01em] text-white">
            Snilloc Hemingson
          </span>
        </a>

        {/* Right: Desktop Nav + Contact Pill */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-normal text-[#E5E7EB] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: framerEase }}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13.5px] font-semibold text-black transition-colors duration-200 hover:bg-neutral-200"
          >
            <span>Contact Me</span>
            <ArrowRight className="h-4 w-4 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="rounded-lg border border-white/15 p-2 text-white md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: framerEase }}
            className="overflow-hidden border-t border-white/10 bg-black px-6 md:hidden"
          >
            <nav className="flex flex-col gap-4 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15px] font-normal text-[#E5E7EB] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13.5px] font-semibold text-black"
              >
                <span>Contact Me</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}