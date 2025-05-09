"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  icon?: React.ReactNode
}

export function SectionHeading({ title, icon }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-12 flex items-center gap-2 text-sm uppercase tracking-wider text-green-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {icon && <span>{icon}</span>}
      <span>{title}</span>
    </motion.div>
  )
}
