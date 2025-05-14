"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function SpotifyPlayer() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className="h-[200px] overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-full w-full">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-400 border-t-transparent"></div>
          </div>
        )}
        <iframe
src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        ></iframe>
      </div>
    </motion.div>
  )
}
