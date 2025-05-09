"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Dark Saas Landing Page",
    description: "A modern SaaS landing page with dark theme, animations, and responsive design.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    stats: ["Enhanced user experience by 30%", "Improved site speed by 40%", "Increased mobile traffic by 25%"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Light Saas Landing Page",
    description: "Clean and minimal SaaS landing page with light theme and smooth animations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    stats: [
      "Boosted user engagement by 45%",
      "Expedited customer onboarding by 35%",
      "Increased conversion rates by 20%",
    ],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "AI Startup Landing Page",
    description: "Futuristic landing page for an AI startup with interactive elements and 3D graphics.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Three.js", "Tailwind CSS", "TypeScript"],
    stats: ["Enhanced user experience by 50%", "Improved site speed by 30%", "Increased mobile traffic by 40%"],
    github: "#",
    live: "#",
  },
]

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how I transformed concepts into engaging digital experiences.
          </p>
        </motion.div>

        <div ref={containerRef} className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div ref={cardRef} style={{ y, opacity, scale }} className="relative">
      <Card className="overflow-hidden border-none shadow-lg bg-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 flex flex-col justify-center ${index % 2 === 1 ? "md:order-2" : ""}`}>
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <ul className="space-y-2 mb-6">
              {project.stats.map((stat, i) => (
                <li key={i} className="flex items-center gap-2">
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
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm">{stat}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="gap-2">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Button>
              <Button size="sm" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </Button>
            </div>
          </div>
          <div className={`relative h-64 md:h-auto overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}>
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
