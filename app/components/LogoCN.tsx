"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function LogoCN({
  className = "",
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const accentColor = isDark ? "#64FFDA" : "#0D6B6B";
  const accentLight = isDark ? "#4ADE80" : "#14B8A6";
  const shadowColor = isDark ? "rgba(100,255,218,0.3)" : "rgba(13,107,107,0.2)";

  const fontSize = size * 0.4;

  return (
    <motion.div
      className={`flex items-center gap-1 font-mono ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Terminal dot */}
      <span
        style={{
          width: size * 0.08,
          height: size * 0.08,
          borderRadius: "50%",
          background: accentColor,
          display: "inline-block",
          marginRight: size * 0.05,
          boxShadow: `0 0 20px ${shadowColor}`,
        }}
      />

      {/* < */}
      <span
        className="font-bold"
        style={{
          fontSize: fontSize,
          color: accentColor,
          textShadow: `0 0 20px ${shadowColor}`,
        }}
      >
        &lt;
      </span>

      {/* C - Using regular color with gradient via CSS */}
      <span
        className="font-bold"
        style={{
          fontSize: fontSize * 1.4,
          color: accentColor,
          textShadow: `0 0 30px ${shadowColor}`,
        }}
      >
        C
      </span>

      {/* N - Using regular color with gradient via CSS */}
      <span
        className="font-bold"
        style={{
          fontSize: fontSize * 1.4,
          color: accentLight,
          textShadow: `0 0 30px ${shadowColor}`,
        }}
      >
        N
      </span>

      {/* / */}
      <span
        className="font-bold"
        style={{
          fontSize: fontSize * 0.7,
          color: accentColor,
          opacity: 0.6,
        }}
      >
        /
      </span>

      {/* > */}
      <span
        className="font-bold"
        style={{
          fontSize: fontSize,
          color: accentColor,
          textShadow: `0 0 20px ${shadowColor}`,
        }}
      >
        &gt;
      </span>

      {/* Cursor */}
      <span
        style={{
          fontSize: fontSize,
          color: accentColor,
          animation: "blink 1s step-end infinite",
        }}
      >
        _
      </span>

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );
}
