"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
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
      "Utilized modern web development technologies such as React and Tailwind CSS, resulting in a visually appealing and user-friendly website.",
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
  const currentExperience = experiences[activeTab];
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Auto-scroll the active tab into view on mobile
  useEffect(() => {
    const activeBtn = tabsRef.current[activeTab];
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeTab]);

  return (
    <section
      id="experience"
      className="section-padding overflow-hidden"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title mb-8 lg:mb-12">
            <span className="section-number">02.</span>
            Where I&apos;ve Worked
            <span className="section-line" />
          </h2>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 min-w-0">
            {/* Mobile Scrollable Pill Strip (< lg) */}
            <div className="block lg:hidden w-full overflow-x-auto pb-2 scrollbar-none">
              <div className="flex gap-2 w-max px-1">
                {experiences.map((exp, index) => {
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={exp.id}
                      ref={(el) => {
                        tabsRef.current[index] = el;
                      }}
                      onClick={() => setActiveTab(index)}
                      className={`relative px-4 py-2 rounded-full font-mono text-xs transition-all duration-300 shrink-0 ${
                        isActive
                          ? "text-(--accent-primary) bg-[var(--accent-border)]/10 border border-(--accent-border)/30 font-medium"
                          : "text-(--text-secondary) bg-[var(--accent-border)]/5 border border-transparent hover:text-(--accent-primary)"
                      }`}
                    >
                      {exp.company}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop Side Tabs (>= lg) */}
            <div className="hidden lg:block lg:col-span-3">
              <div
                role="tablist"
                aria-label="Job experience tabs"
                className="flex flex-col border-l-2 border-(--accent-border)/10"
              >
                {experiences.map((exp, index) => {
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={exp.id}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${exp.id}`}
                      id={`tab-${exp.id}`}
                      onClick={() => setActiveTab(index)}
                      className={`px-4 py-3 text-left font-mono text-sm transition-all duration-300 border-l-2 -ml-[2px] ${
                        isActive
                          ? "border-[var(--accent-primary)] text-(--accent-primary) bg-[var(--accent-border)]/5"
                          : "border-transparent text-(--text-secondary) hover:text-(--accent-primary) hover:bg-[var(--accent-border)]/5"
                      }`}
                    >
                      {exp.company}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Experience Content Card */}
            <div className="lg:col-span-9 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentExperience.id}
                  id={`panel-${currentExperience.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${currentExperience.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {/* Title & Metadata */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-(--text-secondary) leading-tight">
                      {currentExperience.role}{" "}
                      <span className="text-(--accent-primary) block sm:inline">
                        @ {currentExperience.company}
                      </span>
                    </h3>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-(--text-secondary)  text-xs sm:text-sm">
                      <span className="flex items-center gap-1.5">
                        <FaBuilding className="w-3 h-3 text-(--accent-primary) shrink-0" />
                        {currentExperience.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="w-3 h-3 text-(--accent-primary) shrink-0" />
                        {currentExperience.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="w-3 h-3 text-(--accent-primary) shrink-0" />
                        {currentExperience.startDate} -{" "}
                        {currentExperience.current
                          ? "Present"
                          : currentExperience.endDate}
                      </span>
                      {currentExperience.current && (
                        <span className="px-2 py-0.5 text-[10px] sm:text-xs font-mono bg-[var(--accent-border)]/10 text-(--accent-primary) rounded-full border border-(--accent-border)/20">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2.5 pt-2">
                    {currentExperience.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: idx * 0.04 }}
                        className="text-(--text-secondary)  text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="text-(--accent-primary) mt-0.5 select-none shrink-0">
                          ▹
                        </span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="pt-3">
                    <h4 className="text-xs sm:text-sm font-semibold text-(--accent-primary) mb-2.5 font-mono flex items-center gap-2">
                      <FaBriefcase className="w-3 h-3" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {currentExperience.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] sm:text-xs font-mono text-(--accent-primary) bg-[var(--accent-bg)] rounded-full border border-(--accent-border)"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
