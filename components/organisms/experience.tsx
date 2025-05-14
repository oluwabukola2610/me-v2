"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react";
import { SectionHeading } from "../atoms/section-heading";

type Experience = {
  id: string;
  company: string;
  position: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  url?: string;
};

const experiences: Experience[] = [
  {
    id: "company1",
    company: "Consonas",
    position: "Lead Frontend Developer",
    location: "London, England (Remote)",
    description:
      "Developed responsive web applications and interactive experiences for clients across various industries.",

    responsibilities: [
      "Architected and implemented a component library used across multiple products, reducing development time by 40%",
      "Led the migration from a legacy codebase to Next.js, improving page load times by 65%",
      ,
      "Collaborated with design and product teams to create intuitive user experiences",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "React-native",
      "Jest",
    ],
    url: "https://cosonas.com/",
  },
  {
    id: "company2",
    company: "Loger Limited",
    position: "Frontend Developer",
    location: "Lagos Nigeria, (Remote)",
    description:
      "Leading frontend development for enterprise SaaS applications, focusing on performance optimization and accessibility.",
    responsibilities: [
      "Built and maintained client websites and web applications using modern JavaScript frameworks",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Optimized applications for maximum speed and scalability",
      "Collaborated with back-end developers and designers to improve usability",
    ],
    technologies: ["React", "JavaScript", "Next", "Figma"],
    url: "https://loger.africa/",
  },
  {
    id: "company3",
    company: "Swiftvia Tech",
    position: "Frontend Web Developer",
    location: "Lagos Nigeria, (Remote)",
    description:
      "Developed and maintained user-friendly web applications, focusing on performance and user experience.",
    responsibilities: [
      "Assisted in the implementation of responsive design principles",
      "Collaborated with the design team to create visually appealing interfaces",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "React"],
    url: "https://swiftvia.com/",
  },
];

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("company1");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" ref={sectionRef} className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Experience"
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
          className="mb-12 text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Here is a quick summary of my most recent experiences{" "}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-green-400/50 via-gray-700/30 to-transparent md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-green-400 bg-gray-900 md:block" />

                <div
                  className={`relative ml-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 md:ml-16 ${
                    expandedId === exp.id ? "shadow-lg shadow-green-400/5" : ""
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 h-full w-1 bg-green-400 ${
                      expandedId === exp.id ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div
                    className="flex cursor-pointer flex-col p-6 md:flex-row md:items-center"
                    onClick={() => toggleExpand(exp.id)}
                  >
             
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {exp.position}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <div className="flex items-center text-green-400">
                              <Briefcase size={14} className="mr-1" />
                              <span>{exp.company}</span>
                            </div>
                           
                            <div className="flex items-center text-sm text-gray-400">
                              <MapPin size={14} className="mr-1" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <button
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                          aria-label={
                            expandedId === exp.id
                              ? "Collapse details"
                              : "Expand details"
                          }
                        >
                          {expandedId === exp.id ? (
                            <ChevronUp size={18} />
                          ) : (
                            <ChevronDown size={18} />
                          )}
                        </button>
                      </div>
                      <p className="mt-2 text-gray-400">{exp.description}</p>
                    </div>
                  </div>

                  {/* Expanded content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedId === exp.id
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-gray-800 px-6 py-6">
                      <div className="mb-6">
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                          Responsibilities & Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {exp.url && (
                        <div className="mt-6 text-right">
                          <Link
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-green-400 transition-colors hover:text-green-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Visit Company
                            <ExternalLink size={14} className="ml-1" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
