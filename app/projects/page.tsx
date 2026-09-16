"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { HiArrowLeft, HiExternalLink } from "react-icons/hi";

const allProjects = [
  {
    title: "5thFactor Academy",
    description:
      "An innovative online learning platform offering interactive courses with real-time progress tracking and personalized learning paths.",
    image: "/images/5thfactor-academy.JPG",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Firebase",
      "Stripe",
    ],
    github: "https://github.com/NwekeGoddy",
    live: "https://www.5thfactor.academy/",
    features: [
      "User authentication and profiles",
      "Course management system",
      "Progress tracking",
      "Payment integration",
      "Interactive quizzes",
    ],
  },
  {
    title: "Sixteensands",
    description:
      "A modern e-commerce platform with seamless payment processing, advanced search, and comprehensive user management.",
    image: "/images/sixteensands.png",
    tech: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Elasticsearch",
      "Docker",
    ],
    github: "https://github.com/NwekeGoddy/sixteensands",
    live: "https://sixteensands.com/",
    features: [
      "Product catalog management",
      "Shopping cart",
      "Payment processing",
      "Order tracking",
      "Admin dashboard",
    ],
  },
  // Add more projects...
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-dark-100 pt-20">
      <div className="container-custom py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8 font-mono"
        >
          <HiArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
        >
          All Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-text-secondary text-lg mb-12 max-w-2xl"
        >
          A collection of my work showcasing my skills in full-stack
          development, from frontend to backend solutions.
        </motion.p>

        <div className="space-y-12">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-200 rounded-xl overflow-hidden border border-accent/10 card-hover"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-accent mb-2 font-mono">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-text-secondary text-sm flex items-center gap-2"
                        >
                          <span className="text-accent">▹</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
