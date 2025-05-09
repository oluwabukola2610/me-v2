"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const roles = ["Frontend Engineer", "UI/UX Enthusiast", "React Developer", "Web Designer"]

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState(roles[0])
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        // Erase the current role
        setIsTyping(false)
        setTimeout(() => {
          // Move to the next role
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          setDisplayedRole(roles[(currentRoleIndex + 1) % roles.length])
          setIsTyping(true)
        }, 1500)
      }
    }, 3000)

    return () => clearInterval(typingInterval)
  }, [currentRoleIndex, isTyping])

  const starsVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Animated stars background */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={starsVariants}
          animate="animate"
          custom={i}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary">
            <img src="/placeholder.svg?height=96&width=96" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Building Exceptional
          <br />
          User Experiences
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          <p>
            Frontend Engineer focused on clean UI and performant UX
            <br />
            <span
              className={cn(
                "inline-block h-8 overflow-hidden relative after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-1 after:bg-primary",
                isTyping ? "after:animate-blink" : "after:opacity-0",
              )}
            >
              <span className="font-medium text-primary">{displayedRole}</span>
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button className="gap-2">
            <span>Explore My Work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
          <Button variant="outline" className="gap-2">
            <span>Let's Connect</span>
            <Mail className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-12 space-x-4"
        >
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mouse"
          >
            <rect x="6" y="3" width="12" height="18" rx="6" />
            <path d="M12 7v4" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
