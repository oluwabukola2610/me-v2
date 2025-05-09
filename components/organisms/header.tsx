"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/atoms/logo"
import { NavLinks } from "@/components/molecules/nav-links"
import { Menu, X } from "lucide-react"
import { NavLink } from "@/components/atoms/nav-link"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <motion.header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 px-6 py-4 transition-all duration-300 md:px-12",
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />

        <div className="flex items-center gap-4">
          <NavLinks />

          <button className="block md:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute left-0 right-0 top-full bg-black/95 backdrop-blur-md md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-6">
              <NavLink href="#home" label="Home" />
              <NavLink href="#about" label="About" />
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#contact" label="Contact" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
