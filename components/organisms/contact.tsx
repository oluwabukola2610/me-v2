"use client"

import { SectionHeading } from "@/components/atoms/section-heading"
import { ContactForm } from "@/components/molecules/contact-form"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Contact"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          }
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Let&apos;s talk</h2>
            <p className="mb-8 text-gray-400">
              Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m always open to discussing
              new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-400">roheemohmudashir@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-gray-400">Lagos, Nigeria</p>
              </div>
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
