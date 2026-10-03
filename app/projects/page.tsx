"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft, HiArrowRight, HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { allProjects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[var(--bg-primary)] pt-8 md:pt-16">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-(--accent-primary)/5 blur-[140px] rounded-full pointer-events-none" />

          <div className="container-custom py-16 md:py-24">
            {/* BACK */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm text-(--text-secondary) hover:text-(--accent-primary) transition-colors mb-10 font-mono"
            >
              <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            {/* HERO TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="text-(--accent-primary) font-mono text-sm mb-4">
                03 / PROJECTS
              </p>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-(--text-primary) leading-[1.05]">
                Things I&apos;ve{" "}
                <span className="text-(--accent-primary)">
                  built &amp; shipped.
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-(--text-secondary) max-w-2xl leading-relaxed">
                A collection of websites, platforms, interfaces, and digital
                products I&apos;ve designed and developed across different
                industries and use cases.
              </p>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl"
            >
              <Stat value={`${allProjects.length}+`} label="Projects" />

              <Stat value="10+" label="Industries" />

              <Stat value="3+" label="Years Building" />

              <Stat value="Global" label="Clients & Products" />
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}
        <section className="container-custom pb-24">
          {/* SECTION HEADER */}
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-sm text-(--text-secondary) font-mono">
                SELECTED WORK
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-(--text-primary) mt-2">
                A closer look at my work
              </h2>
            </div>

            <div className="hidden md:block text-sm text-(--text-secondary) font-mono">
              {allProjects.length} projects
            </div>
          </div>

          {/* PROJECT LIST */}
          <div className="space-y-16 md:space-y-24">
            {allProjects.map((project, index) => (
              <MajorProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="container-custom pb-24">
          <div className="relative overflow-hidden rounded-2xl border border-(--accent-border)/20 bg-(--bg-input) p-8 md:p-12">
            {/* Glow */}
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-(--accent-primary)/5 blur-3xl" />

            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-(--accent-primary)/5 blur-3xl" />

            <div className="relative max-w-2xl">
              <p className="font-mono text-sm text-(--accent-primary) mb-3">
                HAVE A PROJECT IN MIND?
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary)">
                Let&apos;s build something useful.
              </h2>

              <p className="mt-4 text-(--text-secondary) leading-relaxed">
                Whether you&apos;re building a startup, launching a business, or
                improving an existing product, I&apos;d love to hear what
                you&apos;re working on.
              </p>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-lg bg-(--accent-primary) text-white font-medium hover:opacity-90 transition-opacity"
              >
                Start a conversation
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* =============================================================
   MAJOR PROJECT CARD
============================================================= */

function MajorProjectCard({
  project,
  index,
}: {
  project: (typeof allProjects)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="group"
    >
      {/* =====================================================
          PROJECT PREVIEW
      ===================================================== */}

      <div className="relative">
        {/* Outer frame */}
        <div className="relative overflow-hidden rounded-2xl border border-(--accent-border)/15 bg-(--bg-input) transition-all duration-500 group-hover:border-(--accent-border)/35 group-hover:shadow-[0_20px_80px_var(--accent-glow-color)]">
          {/* Browser-style top bar */}
          <div className="relative z-10 flex items-center justify-between h-10 px-4 border-b border-(--accent-border)/10 bg-(--bg-input)">
            {/* Window controls */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-(--accent-border)/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-(--accent-border)/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-(--accent-border)/20" />
            </div>

            {/* URL-style label */}
            <div className="hidden sm:flex items-center max-w-[50%]">
              <span className="truncate text-[10px] font-mono text-(--text-secondary)/50">
                {project.title.toLowerCase().replace(/\s+/g, "-")}
              </span>
            </div>

            {/* Project number */}
            <span className="text-[10px] font-mono text-(--accent-primary)/70">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Landscape image */}
          <div className="relative aspect-[16/9] overflow-hidden bg-(--bg-primary)">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-contain p-2 sm:p-3 md:p-4 transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />

            {/* Very subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] sm:text-xs font-mono text-white/90 backdrop-blur-md">
                {project.category}
              </span>
            </div>

            {/* Hover frame */}
            <div className="absolute inset-0 border border-(--accent-primary)/0 group-hover:border-(--accent-primary)/15 rounded-b-none transition-colors duration-500 pointer-events-none" />
          </div>
        </div>

        {/* Floating number */}
        <div className="hidden md:flex absolute -left-5 top-14 items-center justify-center w-10 h-10 rounded-full border border-(--accent-border)/20 bg-(--bg-primary) text-(--accent-primary) font-mono text-xs z-20">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* =====================================================
          PROJECT INFORMATION
      ===================================================== */}

      <div
        className={`grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 mt-8 md:mt-10 ${
          !isEven ? "lg:grid-cols-[1.4fr_1fr]" : ""
        }`}
      >
        {/* LEFT / TITLE */}
        <div className={`${!isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div className="sticky top-28">
            <p className="text-(--accent-primary) text-xs font-mono uppercase tracking-[0.18em] mb-3">
              {project.category}
            </p>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-(--text-primary) leading-tight">
              {project.title}
            </h3>

            <div className="mt-5 h-px w-16 bg-(--accent-primary)/60" />

            {/* Action links */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-(--accent-primary) px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-all duration-300"
                >
                  View Project
                  <HiExternalLink className="w-4 h-4" />
                </Link>
              )}

              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-(--accent-border)/20 px-4 py-2.5 text-sm text-(--text-secondary) hover:text-(--text-primary) hover:border-(--accent-border)/40 transition-all duration-300"
                >
                  <FaGithub className="w-4 h-4" />
                  Source
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT / DETAILS */}
        <div className={`${!isEven ? "lg:order-1" : "lg:order-2"}`}>
          {/* Description */}
          <p className="text-(--text-secondary) leading-relaxed text-base md:text-lg">
            {project.description}
          </p>

          {/* Features */}
          <div className="mt-8">
            <h4 className="text-xs uppercase tracking-[0.15em] font-mono text-(--text-primary) mb-4">
              What I worked on
            </h4>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm text-(--text-secondary)"
                >
                  <span className="mt-0.5 text-(--accent-primary) text-xs">
                    ✦
                  </span>

                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-8">
            <h4 className="text-xs uppercase tracking-[0.15em] font-mono text-(--text-primary) mb-4">
              Built with
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-(--accent-border)/20 bg-(--accent-border)/5 px-3 py-1.5 text-xs font-mono text-(--accent-primary)/90 hover:border-(--accent-border)/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      {index !== allProjects.length - 1 && (
        <div className="mt-16 md:mt-24 h-px bg-gradient-to-r from-transparent via-(--accent-border)/20 to-transparent" />
      )}
    </motion.article>
  );
}

/* =============================================================
   STAT
============================================================= */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-(--accent-border)/10 bg-(--bg-input)/60 p-4">
      <p className="text-xl md:text-2xl font-bold text-(--text-primary)">
        {value}
      </p>

      <p className="text-xs md:text-sm text-(--text-secondary) mt-1">{label}</p>
    </div>
  );
}
