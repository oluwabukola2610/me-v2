"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const techStack = [
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "React Native", icon: "📱" },
  { name: "Expo", icon: "🔮" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Framer Motion", icon: "🔄" },
];

export function SkillsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollSpeed = 1;
    let animationFrameId: number;

    const scroll = () => {
      if (!slider) return;

      slider.scrollLeft += scrollSpeed;

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0; // reset to start when halfway
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const renderItems = () =>
    techStack.map((tech) => (
      <div
        key={`${tech.name}-${Math.random()}`} 
        className="flex items-center gap-5 rounded-full bg-gray-900 px-6 py-2 text-sm text-gray-400"
      >
        <span>{tech.icon}</span>
        <span>{tech.name}</span>
      </div>
    ));

  return (
    <motion.div
      ref={sliderRef}
      className={cn(
        "overflow-x-auto overflow-y-hidden no-scrollbar py-8",
        "whitespace-nowrap scroll-smooth"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <motion.div
        className="flex gap-5 text-2xl font-light text-white"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {renderItems()}
        {renderItems()}
      </motion.div>
    </motion.div>
  );
}
