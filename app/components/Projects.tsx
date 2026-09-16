"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "5thFactor Academy",
    description:
      "Online learning platform with interactive courses and progress tracking.",
    image: "/images/5thfactor-academy.JPG",
    tech: ["React", "TypeScript", "Tailwind", "Next.js"],
    github: "https://github.com/NwekeGoddy",
    live: "https://www.5thfactor.academy/",
  },
  {
    title: "Sixteensands",
    description:
      "E-commerce platform with seamless payment integration and user management.",
    image: "/images/sixteensands.png",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/NwekeGoddy/sixteensands",
    live: "https://sixteensands.com/",
  },
  {
    title: "Food Fusion",
    description:
      "Recipe discovery app with AI-powered recommendations and meal planning.",
    image: "/images/food-fusion.JPG",
    tech: ["React", "TypeScript", "Tailwind", "Firebase"],
    github: "https://github.com/NwekeGoddy/foodfusion",
    live: "https://food-fusion.netlify.app/",
  },
  {
    title: "MyShup",
    description:
      "Social shopping platform connecting local businesses with customers.",
    image: "/images/myshup.JPG",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    github: "https://github.com/NwekeGoddy/totalitycorp-frontend-challenge",
    live: "https://myshup.netlify.app/",
  },
  {
    title: "Wall of Fame",
    description:
      "Celebrating developer achievements and contributions in tech.",
    image: "/images/wof.PNG",
    tech: ["React", "TypeScript", "Tailwind", "API"],
    github: "https://github.com/NwekeGoddy",
    live: "https://wof.digikraaft.com/",
  },
  {
    title: "Estate Manage",
    description: "Property management system for real estate professionals.",
    image: "/images/estatemanage.PNG",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/NwekeGoddy/Shortly",
    live: "https://estatemanage.netlify.app/",
  },
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // ✅ CORRECT: No transition inside item variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // ✅ CORRECT: No transition inside variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-custom">
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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                // ✅ transition applied here
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="group bg-dark-200 rounded-lg overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark-100/60 group-hover:bg-dark-100/30 transition-colors" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono text-accent/80 bg-accent/5 rounded border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors text-xl"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors text-xl"
                    >
                      <HiExternalLink />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 border border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 font-mono text-sm"
            >
              View All Projects
              <HiExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
