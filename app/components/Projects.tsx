"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";

import { allProjects } from "../data/projects";

export function Projects() {
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">
            <span className="section-number">03.</span>
            Some Things I&apos;ve Built
            <span className="section-line" />
          </h2>

          {/* PROJECT GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {allProjects.slice(0, 6).map((project, index) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="group overflow-hidden rounded-xl bg-(--bg-input) border border-(--accent-border)/10 hover:border-(--accent-border)/30 transition-all duration-300"
              >
                {/* PROJECT IMAGE */}
                <div className="relative aspect-[16/9] overflow-hidden bg-(--bg-primary)">
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Subtle gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                  {/* Project number */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center justify-center rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] font-mono text-white/70 backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-(--accent-primary)/0 group-hover:bg-(--accent-primary)/5 transition-colors duration-300 pointer-events-none" />
                </div>

                {/* PROJECT CONTENT */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-(--accent-primary)">
                      {project.category}
                    </p>

                    <span className="text-xs font-mono text-(--text-secondary)">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-(--text-primary) mb-2 group-hover:text-(--accent-primary) transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-(--text-secondary) text-sm leading-relaxed mb-5 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono text-(--accent-primary)/80 bg-[var(--accent-border)]/5 rounded border border-(--accent-border)/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* PROJECT LINK */}
                  {project.live && (
                    <div className="mt-6 pt-5 border-t border-(--accent-border)/10">
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-mono text-(--text-secondary) hover:text-(--accent-primary) transition-colors"
                      >
                        View Project
                        <HiExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* VIEW ALL PROJECTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 border border-(--accent-border) text-(--accent-primary) rounded hover:bg-[var(--accent-border)]/10 transition-all duration-300 font-mono text-sm"
            >
              View All Projects
              <HiExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
