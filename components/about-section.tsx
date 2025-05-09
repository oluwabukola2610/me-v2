"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Code, Music } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A glimpse into my world</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a frontend engineer passionate about creating clean, user-friendly interfaces that deliver
                exceptional experiences. With a background in design and development, I bridge the gap between
                aesthetics and functionality.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving to build applications that are
                not only visually appealing but also performant and accessible.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="music">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="music" className="flex items-center gap-2">
                  <Music className="h-4 w-4" />
                  <span className="hidden sm:inline">Music</span>
                </TabsTrigger>
                <TabsTrigger value="books" className="flex items-center gap-2">
                  <Book className="h-4 w-4" />
                  <span className="hidden sm:inline">Books</span>
                </TabsTrigger>
                <TabsTrigger value="tools" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span className="hidden sm:inline">Tools</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="music">
                <Card>
                  <CardContent className="pt-6">
                    <SpotifyPlaylist />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="books">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-32 h-48 bg-muted rounded-md overflow-hidden mb-2">
                          <img
                            src="/placeholder.svg?height=192&width=128"
                            alt="Atomic Habits"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium">Atomic Habits</span>
                        <span className="text-xs text-muted-foreground">James Clear</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-32 h-48 bg-muted rounded-md overflow-hidden mb-2">
                          <img
                            src="/placeholder.svg?height=192&width=128"
                            alt="Deep Work"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium">Deep Work</span>
                        <span className="text-xs text-muted-foreground">Cal Newport</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tools">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                      {["VS Code", "Figma", "GitHub", "React", "Next.js", "TypeScript", "Tailwind", "Framer"].map(
                        (tool) => (
                          <div
                            key={tool}
                            className="flex items-center justify-center bg-muted/50 rounded-md p-3 text-sm"
                          >
                            {tool}
                          </div>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SpotifyPlaylist() {
  return (
    <div className="rounded-md overflow-hidden bg-[#121212] text-white">
      <div className="p-4 bg-gradient-to-b from-green-600 to-[#121212]">
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 bg-[#282828] shadow-lg">
            <img
              src="/placeholder.svg?height=96&width=96"
              alt="Playlist cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs uppercase font-semibold">Playlist</div>
            <h3 className="text-2xl font-bold mt-1">Coding Focus</h3>
            <div className="text-sm opacity-80 mt-1">Created by Me • 32 songs, 2 hr 15 min</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-sm border-b border-white/10 pb-2 mb-2 opacity-60">
          <div className="w-6 text-center">#</div>
          <div className="flex-1">Title</div>
          <div className="w-12 text-right">Time</div>
        </div>
        {[
          { title: "Focus Flow", artist: "Ambient Beats", time: "3:24" },
          { title: "Deep Concentration", artist: "Mind Waves", time: "4:12" },
          { title: "Coding Rhythm", artist: "Dev Sounds", time: "3:45" },
          { title: "Algorithm", artist: "Binary Noise", time: "5:08" },
          { title: "Late Night Commits", artist: "Git Groove", time: "4:32" },
        ].map((track, i) => (
          <div key={i} className="flex items-center justify-between py-2 hover:bg-white/5 rounded-md px-2 text-sm">
            <div className="w-6 text-center text-muted-foreground">{i + 1}</div>
            <div className="flex-1">
              <div>{track.title}</div>
              <div className="text-muted-foreground text-xs">{track.artist}</div>
            </div>
            <div className="w-12 text-right text-muted-foreground">{track.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
