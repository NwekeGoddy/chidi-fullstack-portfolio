"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const socials = [
  { icon: FaGithub, href: "https://github.com/NwekeGoddy", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nweke-chidi/",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/NwekeChidi_G",
    label: "Twitter",
  },
];

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center section-padding relative overflow-hidden"
      id="home"
    >
      {/* Background Decorators */}
      <div className="hero-grid-lines pointer-events-none">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="horizontal-line" />
        <div className="horizontal-line" />
        <div className="horizontal-line" />
      </div>

      <div className="particle pointer-events-none" />
      <div className="particle pointer-events-none" />
      <div className="particle pointer-events-none" />
      <div className="particle pointer-events-none" />

      <div className="glow-ring pointer-events-none" />
      <div className="glow-ring pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-(--accent-primary) text-sm md:text-base mt-8 md:mt-0 mb-4 tracking-wider"
          >
            <span className="inline-block animate-pulse-slow">✦</span> Hi, my
            name is
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-(--text-primary) mb-4 leading-tight"
          >
            Chidi Nweke.
            <span className="text-(--accent-primary) animate-glow inline-block">
              _
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-(--text-secondary) mb-4 sm:mb-6"
          >
            I solve{" "}
            <span className="text-(--accent-primary) glow-text">
              real-world
            </span>{" "}
            problems.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-(--text-secondary)  text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8"
          >
            I&apos;m Full-Stack Developer specializing in{" "}
            <span className="text-(--accent-primary) font-semibold">
              Next.js
            </span>
            ,{" "}
            <span className="text-(--accent-primary) font-semibold">
              Angular
            </span>
            , and{" "}
            <span className="text-(--accent-primary) font-semibold">
              NestJS
            </span>
            , crafting scalable, production-ready applications that deliver
            exceptional user experiences and drive business growth.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center sm:justify-normal items-center"
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--accent-primary)] text-white rounded-lg transition-all duration-300 font-mono text-sm font-semibold overflow-hidden shadow-[0_0_30px_var(--accent-glow-color)] cursor-pointer"
            >
              <span className="relative z-10">Get in Touch</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>

            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--accent-primary)] text-(--accent-primary) rounded-lg hover:bg-[var(--accent-bg)] transition-all duration-300 font-mono text-sm cursor-pointer"
            >
              <span className="relative z-10">View Projects</span>
            </Link>

            <div className="flex gap-3 ml-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-(--text-secondary) hover:text-(--accent-primary) transition-all duration-300 text-2xl cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mt-8"
          >
            {[
              "Next.js",
              "React",
              "Angular",
              "NestJS",
              "TypeScript",
              "Tailwind",
              "PostgreSQL",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-mono text-(--accent-primary) bg-[var(--accent-bg)] rounded-full border border-(--accent-border) transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
