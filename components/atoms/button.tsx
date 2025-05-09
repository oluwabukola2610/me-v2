"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "outline"
}

export function Button({ children, onClick, className, variant = "default" }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "rounded-full px-6 py-3 text-sm font-medium transition-colors",
        variant === "default" && "bg-white text-black hover:bg-white/90",
        variant === "outline" && "border border-gray-800 hover:bg-white/5",
        className,
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
