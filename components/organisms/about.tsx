"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/atoms/section-heading";
import ScrollReveal from "../molecules/about-text";

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="About Me"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              <path d="M5 3v4" />
              <path d="M19 17v4" />
              <path d="M3 5h4" />
              <path d="M17 19h4" />
            </svg>
          }
        />

        <ScrollReveal
          baseOpacity={2}
          enableBlur={true}
          baseRotation={-3}
          blurStrength={12}
        >
          I'm Roheemoh, a frontend engineer with 3+ years of experience crafting
          high-quality, impactful digital experiences. From real-time apps to
          seamless UI, I blend design and development to build solutions that
          drive results.
        </ScrollReveal>
      </div>
    </section>
  );
}
