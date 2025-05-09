"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/atoms/button";
import { SocialLinks } from "@/components/molecules/social-links";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-20 md:px-12"
    >
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
              <span className="block text-green-400">
                purpose driven experiences
              </span>
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
            <p className="max-w-md text-gray-400">
              I work with brands globally to build pixel-perfect, engaging, and
              accessible digital experiences that drive results and achieve
              business goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
