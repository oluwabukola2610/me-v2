"use server"

import fs from "fs/promises"
import path from "path"

const LIKES_FILE = path.join(process.cwd(), "data", "likes.json")

async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data")
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

export async function getLikes(): Promise<number> {
  await ensureDataDir()

  try {
    const data = await fs.readFile(LIKES_FILE, "utf-8")
    const { likes } = JSON.parse(data)
    return likes
  } catch (error) {
    await fs.writeFile(LIKES_FILE, JSON.stringify({ likes: 100 }), "utf-8")
    return 100
  }
}

export async function incrementLikes(): Promise<number> {
  await ensureDataDir()

  try {
    const currentLikes = await getLikes()

    const newLikes = currentLikes + 1
    await fs.writeFile(LIKES_FILE, JSON.stringify({ likes: newLikes }), "utf-8")

    return newLikes
  } catch (error) {
    console.error("Error incrementing likes:", error)
    throw new Error("Failed to increment likes")
  }
}
