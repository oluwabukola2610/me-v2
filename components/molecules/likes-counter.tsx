"use client"

import { getLikes, incrementLikes } from "@/actions/like"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useState, useEffect } from "react"

export function LikesCounter() {
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userLiked = localStorage.getItem("hasLiked") === "true"
    setHasLiked(userLiked)
    getLikes().then((count) => {
      setLikes(count)
      setIsLoading(false)
    })
  }, [])

  const handleLike = async () => {
    if (!hasLiked) {
      setLikes(likes + 1)
      setHasLiked(true)
      localStorage.setItem("hasLiked", "true")

      try {
        const newCount = await incrementLikes()
        setLikes(newCount)
      } catch (error) {
        console.error("Failed to update likes:", error)
        setLikes(likes)
        setHasLiked(false)
        localStorage.removeItem("hasLiked")
      }
    }
  }

  return (
    <motion.button
      className={`flex items-center w-fit gap-2 rounded-full border border-green-800 px-4 py-2 transition-colors ${
        hasLiked ? "border-green-400/50 text-green-400 cursor-default" : "text-gray-400 cursor-pointer"
      }`}
      onClick={handleLike}
      whileHover={!hasLiked ? { scale: 1.05 } : {}}
      whileTap={!hasLiked ? { scale: 0.95 } : {}}
      disabled={isLoading}
    >
      <Heart className={`h-4 w-4 ${hasLiked ? "fill-green-400" : ""}`} />
      <span>{isLoading ? "..." : `${likes} Likes`}</span>
    </motion.button>
  )
}
