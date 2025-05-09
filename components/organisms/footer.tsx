"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { LikesCounter } from "@/components/molecules/likes-counter";
import { SpotifyPlayer } from "@/components/molecules/spotify-player";

export function Footer() {
  return (
    <footer className="  py-4  px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 items-start">
          <div className="flex flex-col  gap-6">
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-gray-400 transition-colors hover:text-white"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:hello@example.com"
                className="rounded-full p-2 text-gray-400 transition-colors hover:text-white"
              >
                <Mail size={20} />
              </Link>
            </div>
            <LikesCounter />
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <span className="flex items-center gap-1">
                <svg
                  viewBox="0 0 1280 1280"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M815.8 355.9c-2.7 0-5.3.3-7.9.9-12.6 2.8-22.2 12.5-25.2 25.2-1.3 5.5-1.5 11.2-.6 16.7 2.5 15.8 15.1 28.5 30.9 31 4.6.7 9.4.5 14-.6 12.6-2.9 22.2-12.5 25.2-25.2 1.3-5.5 1.5-11.2.6-16.7-2.5-15.8-15.1-28.5-30.9-31-2-.3-4.1-.5-6.1-.5zm-138.5 3.3c-2.7 0-5.3.3-7.9.9-12.6 2.8-22.2 12.5-25.2 25.2-1.3 5.5-1.5 11.2-.6 16.7 2.5 15.8 15.1 28.5 30.9 31 4.6.7 9.4.5 14-.6 12.6-2.9 22.2-12.5 25.2-25.2 1.3-5.5 1.5-11.2.6-16.7-2.5-15.8-15.1-28.5-30.9-31-2-.3-4.1-.5-6.1-.5zm-24.9 107.5c-64.3 3.3-120.3 34.7-156.8 82.2-5.3 6.9-10.1 14.1-14.4 21.6-2.8 5-5.4 10.2-7.8 15.5-2.1 4.6-4 9.3-5.7 14.1-1.7 4.7-3.2 9.6-4.5 14.5-1.3 4.9-2.4 9.8-3.3 14.8-.9 5-1.6 10.1-2.1 15.2-.5 5.1-.7 10.3-.7 15.4 0 5.2.2 10.3.7 15.4.5 5.1 1.2 10.2 2.1 15.2.9 5 2 10 3.3 14.8 1.3 4.9 2.8 9.7 4.5 14.5 1.7 4.8 3.6 9.5 5.7 14.1 2.4 5.3 5 10.4 7.8 15.5 4.3 7.5 9.1 14.7 14.4 21.6 36.5 47.5 92.5 78.9 156.8 82.2 3.9.2 7.9.3 11.8.3 3.9 0 7.9-.1 11.8-.3 64.3-3.3 120.3-34.7 156.8-82.2 5.3-6.9 10.1-14.1 14.4-21.6 2.8-5 5.4-10.2 7.8-15.5 2.1-4.6 4-9.3 5.7-14.1 1.7-4.7 3.2-9.6 4.5-14.5 1.3-4.9 2.4-9.8 3.3-14.8.9-5 1.6-10.1 2.1-15.2.5-5.1.7-10.3.7-15.4 0-5.2-.2-10.3-.7-15.4-.5-5.1-1.2-10.2-2.1-15.2-.9-5-2-10-3.3-14.8-1.3-4.9-2.8-9.7-4.5-14.5-1.7-4.8-3.6-9.5-5.7-14.1-2.4-5.3-5-10.4-7.8-15.5-4.3-7.5-9.1-14.7-14.4-21.6-36.5-47.5-92.5-78.9-156.8-82.2-3.9-.2-7.9-.3-11.8-.3-3.9 0-7.9.1-11.8.3zm11.8 65.5c44.3 0 80.2 35.9 80.2 80.2s-35.9 80.2-80.2 80.2-80.2-35.9-80.2-80.2 35.9-80.2 80.2-80.2z" />
                </svg>
                <span>Nextjs</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>Styled with</span>
              <span className="flex items-center gap-1">
                <svg
                  viewBox="0 0 32 32"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" />
                </svg>
                <span>TailwindCSS</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>Deployed on</span>
              <span className="flex items-center gap-1">
                <svg
                  viewBox="0 0 512 512"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M255.7 48l-.1 456.2c-20.2-.1-35.9-.8-47.1-2.3-51.4-6.9-87.3-30.5-104.9-69.1-10-21.9-12.7-45.3-8.1-69.7 5.1-26.9 18.7-48.1 40.8-63.4 12.6-8.7 27.5-15.2 44.7-19.4 10.7-2.6 28.8-5.1 53.4-7.4v-71.7c-31.5.9-55.3 5.9-71.4 15-19.3 11-33.3 26.6-41.9 46.9-7.4 17.4-9.7 36.7-7 57.8 2.4 18.9 9.6 35.5 21.5 49.8 20.2 24.5 52.1 39.7 95.9 45.4 10.7 1.4 25.8 2.2 45.2 2.4v35.5H236V48h19.7z" />
                </svg>
                <span>Vercel</span>
              </span>
            </div>
          </div>

          <SpotifyPlayer />
        </div>

        <div className=" border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Oluwabukola. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
