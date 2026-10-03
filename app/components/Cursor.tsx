"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") !== null ||
          target.closest("button") !== null,
      );
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateHover);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateHover);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <div
          className={`w-5 h-5 rounded-full border-2 border-(--accent-border) ${
            isHovering
              ? "bg-[var(--accent-border)]/20"
              : "bg-[var(--accent-border)]"
          }`}
        />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[9998] hidden lg:block"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
      >
        <div className="w-1 h-1 rounded-full bg-[var(--accent-border)]/50" />
      </motion.div>
    </>
  );
}
