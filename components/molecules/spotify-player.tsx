"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Music2 } from "lucide-react"

export function SpotifyPlayer() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className="w-fit h-full space-y-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex items-center gap-2 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Music2 className="h-4 w-4 text-green-500" />
        <p>While you're here, enjoy some music</p>
      </motion.div>

      <div className="h-[200px] overflow-hidden  shadow-sm">
        <div className="relative h-full w-full">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
            </div>
          )}
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          ></iframe>
        </div>
      </div>
    </motion.div>
  )
}
