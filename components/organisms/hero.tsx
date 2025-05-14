"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SocialLinks } from "@/components/molecules/social-links"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center px-6 pt-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center gap-2"
        >
          <motion.div
            className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400/20"
            animate={{ rotate: [0, 10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <span className="text-sm">👋</span>
          </motion.div>
          <span className="text-sm">Hey! It&apos;s me Roheemoh.</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <motion.h1
              className="mb-8 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="block">Crafting</span>
              <span className="block text-green-400">purpose driven experiences</span>
              <span className="block">that inspire & engage.</span>{" "}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <SocialLinks />
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col lg:items-end justify-center lg:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative mb-6 lg:mb-8">
              <motion.div
                className="absolute -left-3 -top-3 h-full w-full rounded-2xl border-2 border-green-400/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
              <motion.div
                className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-900/50 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Image
                  src="/Profile.JPG"
                  width={320}
                  height={400}
                  alt="Roheemoh - Professional portrait"
                  className="h-auto w-full object-cover"
                  priority
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
              </motion.div>
            </div>
            <p className="max-w-md text-gray-400">
              I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that
              drive results and achieve business goals.
            </p>
          </motion.div>
        </div>
      </div>

  
    </section>
  )
}
