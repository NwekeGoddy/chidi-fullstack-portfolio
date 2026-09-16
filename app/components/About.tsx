"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillsList = [
  "HTML5 & CSS3",
  "TypeScript & JavaScript (ES6+)",
  "Next.js, React & Redux",
  "Angular & RxJS",
  "NestJS & Node.js",
  "Tailwind & Bootstrap",
  "Git & GitHub",
  "PostgreSQL & NeonDB",
];

function ProfilePictureFrame() {
  return (
    <div
      className="relative w-full max-w-87.5 h-[450px] mx-auto rounded-3xl p-[6px] bg-gradient-to-br from-slate-400/40 via-cyan-500/20 to-purple-600/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.2)] group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.9),0_0_40px_rgba(56,189,248,0.35)]"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Outer Metallic 3D Bevel Frame */}
      <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950 border border-white/20 shadow-inner">
        {/* Profile Picture */}
        <img
          src="/images/chidinweke.png"
          alt="Nweke Chidi Godwin"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
        />

        {/* Ambient Dark Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/40 pointer-events-none" />

        {/* Glass Reflection Highlight Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none z-20" />

        {/* Inner 3D Inset Borders */}
        <div className="absolute inset-2 rounded-[18px] border border-white/20 pointer-events-none z-20" />
        <div className="absolute top-4 left-4 right-4 bottom-4 rounded-[14px] border border-cyan-400/20 pointer-events-none z-20" />
      </div>
    </div>
  );
}

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">
            <span className="section-number">01.</span>
            About Me
            <span className="section-line" />
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Hello! I&apos;m{" "}
                <strong className="text-[var(--text-primary)] font-semibold">
                  Nweke Chidi Godwin
                </strong>
                , Full-Stack Developer and Technical Lead at{" "}
                <a
                  href="https://deefrent.ie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline hover:shadow-[0_0_20px_var(--accent-glow-color)] transition-all duration-300 font-medium"
                >
                  Deefrent Media
                </a>
                . My journey is fueled by a passion for building software that
                solves real problems, spanning scalable web applications and
                robust database architectures.
              </p>

              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                I&apos;m a{" "}
                <strong className="text-[var(--text-primary)] font-semibold">
                  Computer Engineering graduate
                </strong>{" "}
                from the University of Ilorin and a member of the NSE. I work
                across the full stack with Next.js, React, Angular, NestJS,
                TypeScript, and Tailwind CSS, with a strong focus on PostgreSQL,
                Oracle DB, and data analytics using Power BI and GraphQL APIs.
              </p>

              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                Outside of code, you&apos;ll find me diving deep into{" "}
                <strong className="text-[var(--text-primary)] font-semibold">
                  AI research
                </strong>
                , exploring VR technologies, optimizing database architectures,
                and analyzing data to uncover insights, all while enjoying music
                and a good game of football.
              </p>

              <p className="text-[var(--text-secondary)] font-mono text-sm mb-4">
                Technologies I work with:
              </p>

              <ul className="grid grid-cols-2 gap-2">
                {skillsList.map((skill) => (
                  <li
                    key={skill}
                    className="text-[var(--text-secondary)] text-sm flex items-center gap-2"
                  >
                    <span className="text-accent">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3D Profile Frame */}
            <div className="relative flex items-center justify-center">
              <ProfilePictureFrame />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
