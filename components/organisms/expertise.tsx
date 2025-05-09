"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/atoms/section-heading";
import { ChevronDown, Code, Smartphone, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import LetterGlitch from "../molecules/LetterGlisth";

interface ExpertiseItemProps {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function ExpertiseItem({ title, icon, isOpen, onClick }: ExpertiseItemProps) {
  return (
    <motion.div
      className="mb-4 overflow-hidden rounded-lg bg-gray-900/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-800/50"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-400/10 text-green-400">
            {icon}
          </div>
          <span className="text-lg font-medium">{title}</span>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-gray-400">
          <p className="mb-3">
            {title === "Frontend Development"
              ? "Building responsive, accessible, and performant web applications using modern JavaScript frameworks and libraries."
              : title === "Mobile Development"
              ? "Creating cross-platform mobile applications with React Native and Expo for iOS and Android devices."
              : "Producing high-quality technical content including tutorials, articles, and videos about web and mobile development."}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {title === "Frontend Development" ? (
              <>
                <div className="rounded-md bg-gray-800/50 p-2 text-sm">
                  React
                </div>
                <div className="rounded-md bg-gray-800/50 p-2 text-sm">
                  Next.js
                </div>
                <div className="rounded-md bg-gray-800/50 p-2 text-sm">
                  TypeScript
                </div>
                <div className="rounded-md bg-gray-800/50 p-2 text-sm">
                  Tailwind CSS
                </div>
              </>
            ) : title === "Mobile Development" ? (
              <>
                <div className="rounded-md bg-gray-800/50 p-2 text-sm">
                  React Native
                </div>
                <div className="rounded-md bg-gray-800/50 p-2 text-sm">
                  Expo
                </div>
                <div className="rounded-md bg-gray-800/50 p-2 text-sm">
                  Native APIs
                </div>
                <div className="rounded-md bg-gray-800/50 p-2 text-sm">
                  App Store Publishing
                </div>
              </>
            ) : (
              <>
                <div className="rounded-md bg-gray-800/50 p-2 text-sm">
                  Technical Writing
                </div>
                <div className="rounded-md bg-gray-800/50 p-2 text-sm">
                  Video Tutorials
                </div>
                <div className="rounded-md bg-gray-800/50 p-2 text-sm">
                  Documentation
                </div>
                <div className="rounded-md bg-gray-800/50 p-2 text-sm">
                  Community Building
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function Expertise() {
  const [openItem, setOpenItem] = useState<string | null>(
    "Frontend Development"
  );

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <section className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Speciality"
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

        <motion.h2
          className="mb-12 text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Areas of Expertise
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <ExpertiseItem
              title="Frontend Development"
              icon={<Code size={18} />}
              isOpen={openItem === "Frontend Development"}
              onClick={() => toggleItem("Frontend Development")}
            />
            <ExpertiseItem
              title="Mobile Development"
              icon={<Smartphone size={18} />}
              isOpen={openItem === "Mobile Development"}
              onClick={() => toggleItem("Mobile Development")}
            />
            <ExpertiseItem
              title="Content Creator"
              icon={<Video size={18} />}
              isOpen={openItem === "Content Creator"}
              onClick={() => toggleItem("Content Creator")}
            />
          </div>
          <div className="hidden md:block">
            <motion.div
              className="overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <LetterGlitch />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
