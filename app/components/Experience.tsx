"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { fadeInUp } from "../utils/animations";

const experiences = [
  {
    id: 1,
    company: "Deefrent Media Limited",
    role: "Technical Lead",
    location: "Remote",
    startDate: "Sept. 2023",
    endDate: "Present",
    current: true,
    achievements: [
      "Managed and maintained 15+ WordPress sites, promptly addressing client email inquiries and proactively resolving malware issues.",
      "Achieved a 50% reduction in response time for client website changes, significantly enhancing satisfaction and retention.",
      "Transitioned to Technical Lead, overseeing a team of developers and providing mentorship.",
      "Conducted training sessions for WordPress developers, fostering skill development and collaboration.",
      "Acted as the primary liaison for client communication, adeptly addressing inquiries and providing unparalleled technical support.",
      "Successfully managed multiple projects, prioritizing tasks to meet deadlines and exceed expectations.",
    ],
    tech: ["WordPress", "PHP", "JavaScript", "HTML", "CSS", "Git"],
  },
  {
    id: 2,
    company: "Mafab Communications Limited",
    role: "Analyst",
    location: "Nigeria",
    startDate: "May 2023",
    endDate: "Present",
    current: true,
    achievements: [
      "Led the daily extraction of Live CDRs, converting binary files to CSV and loading them into an Oracle Database using SQL.",
      "Achieved a 30% improvement in report processing time, facilitating timely tax generation and enhancing operational efficiency.",
      "Implemented procedures to analyze, update, and validate records with exceptional accuracy.",
      "Coordinated data migration to a new database, improving the efficiency of presenting project documentation.",
      "Developed revenue assurance practices, monitoring revenue streams and identifying weaknesses for management action.",
      "Conducted root cause analysis on network issues, leading to improved reconciliation and billing accuracy.",
    ],
    tech: [
      "SQL",
      "Oracle",
      "MS Office",
      "QuickBooks",
      "MS Access",
      "Data Analysis",
    ],
  },
  {
    id: 3,
    company: "Flexisaf Edusoft Limited",
    role: "Frontend Developer Intern",
    location: "Nigeria",
    startDate: "Sept. 2023",
    endDate: "May 2024",
    current: false,
    achievements: [
      "Acquired comprehensive skills in version control systems like Git and GitHub, encompassing repository management, branching strategies, and collaborative workflows.",
      "Familiarized with advanced frontend frameworks and libraries such as React JS, gaining expertise in JSX syntax, modular component architecture, and state management paradigms.",
      "Mastered foundational web development languages including HTML, CSS, and JavaScript, demonstrating proficiency in semantic markup, responsive design principles, and dynamic content manipulation.",
    ],
    tech: ["React", "JavaScript", "HTML", "CSS", "Git", "GitHub"],
  },
  {
    id: 4,
    company: "Digikraaft",
    role: "Frontend Developer",
    location: "Nigeria",
    startDate: "Jan. 2023",
    endDate: "Aug. 2023",
    current: false,
    achievements: [
      'Developed and implemented a "Wall of Fame", showcasing the achievements and contributions of current and former developers.',
      "Utilized modern web development technologies such as React, and tailwind, resulting in a visually appealing and user-friendly website.",
      "Collaborated with cross-functional teams, including designers and development team, to gather requirements and ensure alignment with brand guidelines.",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "Git", "Figma"],
  },
  {
    id: 5,
    company: "Cedarview",
    role: "Software Engineer",
    location: "Nigeria",
    startDate: "Dec. 2021",
    endDate: "May 2023",
    current: false,
    achievements: [
      "Wrote supporting code for web applications and websites to enhance functionality and user experience collaborating with cross-functional teams.",
      "Analyzed user requirements to determine technical specifications and recommend new or modified systems to improve performance leading to a 20% cost reduction.",
      "Prepared over ten procedures for hardware and software installation and use to ensure proper maintenance and troubleshooting.",
      "Conceptualized and designed a device STATION MONITOR to reduce operating losses at the station by less than 40%.",
      "Debugged and troubleshoot existing software, and hardware malfunctions and configured new systems gradually increasing system reliability and performance by 20%.",
    ],
    tech: ["JavaScript", "PHP", "MySQL", "Hardware", "System Design"],
  },
  {
    id: 6,
    company: "TIIDELab",
    role: "Fellow",
    location: "Nigeria",
    startDate: "Jun. 2022",
    endDate: "Dec. 2022",
    current: false,
    achievements: [
      "Developed Web Applications: Utilized HTML5, CSS3, JavaScript, Tailwind, Bootstrap, and React to develop functional and engaging web applications.",
      "Continued Education and Professional Development: Stayed current with current web technologies and programming practices through participation in professional conferences and workshops, learning new technologies such as GraphQL.",
      "Engaged in a comprehensive learning environment that provided hands-on experience building web applications using best practices and industry standards.",
    ],
    tech: ["React", "JavaScript", "Tailwind", "Bootstrap", "GraphQL", "Git"],
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title mb-12">
            <span className="section-number">02.</span>
            Where I&apos;ve Worked
            <span className="section-line" />
          </h2>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Company Tabs - Desktop */}
            <div className="lg:col-span-3">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:gap-0">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap lg:whitespace-normal transition-all duration-300 border-l-2 ${
                      activeTab === index
                        ? "border-accent text-accent bg-accent/5"
                        : "border-transparent text-text-secondary hover:text-accent hover:bg-accent/5"
                    }`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Details */}
            <div className="lg:col-span-9">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {/* Header */}
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {experiences[activeTab].role}{" "}
                    <span className="text-accent">
                      @ {experiences[activeTab].company}
                    </span>
                  </h3>

                  <div className="flex flex-wrap gap-4 mt-2 text-text-secondary text-sm">
                    <span className="flex items-center gap-2">
                      <FaBuilding className="w-3 h-3" />
                      {experiences[activeTab].company}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="w-3 h-3" />
                      {experiences[activeTab].location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="w-3 h-3" />
                      {experiences[activeTab].startDate} -{" "}
                      {experiences[activeTab].current
                        ? "Present"
                        : experiences[activeTab].endDate}
                    </span>
                    {experiences[activeTab].current && (
                      <span className="px-2 py-0.5 text-xs font-mono bg-accent/10 text-accent rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Achievements - Using direct animation props instead of variants */}
                <ul className="space-y-2">
                  {experiences[activeTab].achievements.map(
                    (achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        className="text-text-secondary text-sm flex items-start gap-3"
                      >
                        <span className="text-accent mt-1">▹</span>
                        <span>{achievement}</span>
                      </motion.li>
                    )
                  )}
                </ul>

                {/* Tech Stack */}
                <div className="pt-4">
                  <h4 className="text-sm font-semibold text-accent mb-2 font-mono flex items-center gap-2">
                    <FaBriefcase className="w-3 h-3" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeTab].tech.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="px-3 py-1 text-xs font-mono text-accent/80 bg-accent/5 rounded-full border border-accent/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile View - All Experiences */}
          <div className="lg:hidden mt-8 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-200 rounded-lg p-6 space-y-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {exp.role}{" "}
                    <span className="text-accent">@ {exp.company}</span>
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-2 text-text-secondary text-xs">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="w-3 h-3" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </span>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs font-mono bg-accent/10 text-accent rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-text-secondary text-sm flex items-start gap-3"
                    >
                      <span className="text-accent mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <h4 className="text-sm font-semibold text-accent mb-2 font-mono flex items-center gap-2">
                    <FaBriefcase className="w-3 h-3" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-accent/80 bg-accent/5 rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
