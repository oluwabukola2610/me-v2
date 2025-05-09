"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/atoms/button"
import { Badge } from "@/components/atoms/badge"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  index: number
}

export function ProjectCard({ title, description, image, tags, liveUrl, githubUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative mb-12 grid grid-cols-1 gap-8 md:grid-cols-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
        <motion.div
          className="overflow-hidden rounded-lg bg-gray-900"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      </div>
      <div className={`flex flex-col justify-center ${index % 2 === 0 ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8"}`}>
        <h3 className="mb-3 text-2xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-400">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="group flex items-center gap-2">
            <Github size={16} />
            <span>GitHub</span>
          </Button>
          <Button className="flex items-center gap-2">
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
