"use client"

import { useState, useEffect } from "react"
import { NavLink } from "@/components/atoms/nav-link"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function NavLinks() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="hidden items-center space-x-1 md:flex">
      {navItems.map((item, index) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          isActive={activeSection === item.href.substring(1)}
          delay={0.1 * index}
        />
      ))}
    </nav>
  )
}
