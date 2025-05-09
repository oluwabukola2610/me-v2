"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import { Textarea } from "@/components/atoms/textarea"
import { Send } from "lucide-react"
import { useState } from "react"
import { ThankYouAnimation } from "./thank-you"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true)
          form.reset()
        } else {
          alert("Something went wrong. Try again.")
        }
      })
      .catch(() => {
        alert("Failed to submit. Please try again later.")
      })
  }

  return (
    <div className="min-h-[400px]">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            action="https://getform.io/f/bc8a3574-0432-490a-80a4-8d93d3d8c55e"
            method="POST"
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm">
                Name
              </label>
              <Input name="name" id="name" placeholder="Your name" required />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm">
                Email
              </label>
              <Input type="email" name="email" id="email" placeholder="your.email@example.com" required />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm">
                Message
              </label>
              <Textarea name="message" id="message" rows={5} placeholder="Your message..." required />
            </div>

            <Button className="flex w-full items-center justify-center gap-2">
              <Send size={16} />
              <span>Send Message</span>
            </Button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-[400px]"
          >
            <ThankYouAnimation />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
