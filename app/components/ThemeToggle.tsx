"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 rounded-full bg-[var(--accent-bg)] hover:bg-[var(--accent-bg-hover)] border border-[var(--accent-border)] transition-all duration-300 relative cursor-pointer flex items-center justify-center shadow-[0_0_15px_var(--shadow-glow)]"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-[var(--accent-primary)] transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-[var(--accent-primary)] transition-transform duration-300 hover:-rotate-12" />
      )}
    </motion.button>
  );
}
