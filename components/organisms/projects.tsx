"use client";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/atoms/section-heading";
import { ProjectCard } from "@/components/molecules/project-card";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A modern e-commerce platform with seamless checkout experience and responsive design.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Portfolio for Photographer",
    description:
      "Minimalist portfolio website showcasing photography work with smooth animations and transitions.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "GSAP", "Styled Components"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description:
      "Comprehensive dashboard for a SaaS product with data visualization and user management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="My works"
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
          Selected Projects
        </motion.h2>

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
