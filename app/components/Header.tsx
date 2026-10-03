"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { LogoCN } from "./LogoCN";

const navLinks = [
  { href: "/#about", label: "About", number: "01." },
  { href: "/#experience", label: "Experience", number: "02." },
  { href: "/#projects", label: "Projects", number: "03." },
  { href: "/#contact", label: "Contact", number: "04." },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "glass-effect shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className=" z-50 cursor-pointer">
              <LogoCN size={48} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-(--text-primary) hover:text-(--accent-primary) transition-all duration-300 font-mono text-sm group relative cursor-pointer"
                >
                  <span className="text-(--accent-primary)">{link.number}</span>
                  <span className="ml-1">{link.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-primary)] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_var(--accent-glow-color)]" />
                </Link>
              ))}
              <Link
                href="/cv/resume.pdf"
                target="_blank"
                className="px-5 py-2.5 border-2 border-[var(--accent-primary)] text-(--accent-primary) rounded-lg hover:bg-[var(--accent-bg)] transition-all duration-300 font-mono text-sm hover:shadow-[0_0_30px_var(--accent-glow-color)] cursor-pointer"
              >
                Resume
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 text-(--text-primary) cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 glass-effect" />
            <div className="relative flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg sm:text-2xl text-(--text-primary) hover:text-(--accent-primary) transition-colors font-mono flex flex-col items-center cursor-pointer"
                  >
                    <span className="text-(--accent-primary) text-sm">
                      {link.number}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/cv/resume.pdf"
                  target="_blank"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[var(--accent-primary)] text-(--accent-primary) rounded-lg hover:bg-[var(--accent-bg)] transition-all duration-300 font-mono cursor-pointer"
                >
                  Resume
                </Link>
              </motion.div>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
