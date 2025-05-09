"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Logo() {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <Link href="/" className="text-xl font-bold">
        M.R
      </Link>
    </motion.div>
  )
}
