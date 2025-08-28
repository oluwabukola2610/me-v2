"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  Code,
  Briefcase,
  Heart,
  ChevronUp,
} from "lucide-react";
import { SpotifyPlayer } from "@/components/molecules/spotify-player";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-800/50 bg-gradient-to-b from-black to-gray-900/90 py-16 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="flex items-center justify-between gap-8 md:flex-row">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="mb-2 text-3xl font-bold">
                Roheemoh<span className="text-green-400">.</span>
              </h2>
              <p className="max-w-md text-gray-400">
                Crafting exceptional digital experiences that blend creativity
                with technical excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-gray-400 transition-all hover:bg-green-400/20 hover:text-white"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-gray-400 transition-all hover:bg-green-400/20 hover:text-white"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="mailto:hello@example.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-gray-400 transition-all hover:bg-green-400/20 hover:text-white"
              >
                <Mail size={18} />
              </Link>
            </motion.div>
          </div>
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="mb-4 text-lg font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "TailwindCSS",
                "Node.js",
                "React Native",
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-gray-800/70 px-3 py-1 text-xs text-gray-300"
                >
                  <Code size={12} className="mr-1 text-green-400" />
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* <SpotifyPlayer /> */}
        </div>
        <div className=" border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Oluwabukola. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
