// src/components/Footer.jsx
import { motion } from "motion/react";

const framerEase = [0.16, 1, 0.3, 1];

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Taranveer178",
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
            <a href="#top" className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#181818] text-[11px] font-semibold">
                TS
              </div>
              <span className="text-[15px] font-medium tracking-[-0.01em] text-white">
                Taranveer Singh
              </span>
            </a>

            <p className="mb-6 max-w-[275px] text-[13.5px] font-normal leading-[1.65] text-[#9CA3AF]">
              Building practical digital products with clean code and modern UI/UX.
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