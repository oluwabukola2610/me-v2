"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  label: string
  isActive?: boolean
  delay?: number
}

export function NavLink({ href, label, isActive = false, delay = 0 }: NavLinkProps) {
  return (
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay }}>
      <Link
        href={href}
        className={cn("relative px-3 py-2 transition-colors hover:text-green-400", isActive && "text-green-400")}
      >
      
        {label}
      </Link>
    </motion.div>
  )
}
