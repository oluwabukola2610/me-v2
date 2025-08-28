"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { SocialLinks } from "@/components/molecules/social-links";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

const profileImages = [
  {
    src: "/profile1.jpeg",
    alt: "Mudashir Roheemoh - Professional portrait showcasing creative vision",
    title: "Creative Vision",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0eH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhEDEQA/AKrAAAAA7Z//2Q==",
  },
  {
    src: "/profile2.jpg", 
    alt: "Mudashir Roheemoh - Developer working with modern technologies",
    title: "Technical Excellence",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0eH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhEDEQA/AKrAAAAA7Z//2Q==",
  },
  {
    src: "/profile3.jpeg",
    alt: "Mudashir Roheemoh - Innovation-focused frontend developer",
    title: "Future Forward", 
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0eH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhEDEQA/AKrAAAAA7Z//2Q==",
  },
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([false, false, false]);

  // Preload all images
  useEffect(() => {
    profileImages.forEach((img, index) => {
      const imageElement = new window.Image();
      imageElement.onload = () => {
        setImageLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      imageElement.src = img.src;
    });
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-20 md:px-12"
    >
      <div className="hidden">
        {profileImages.map((img, index) => (
          <Image
            key={`preload-${index}`}
            src={img.src}
            alt=""
            width={320}
            height={400}
            priority={index === 0}
            sizes="(max-width: 768px) 280px, 320px"
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <Badge className="px-4 py-2 text-sm bg-[hsl(142_76%_45%_/_0.1)] text-[hsl(142_76%_45%)] border-[hsl(142_76%_45%_/_0.3)]">
            <motion.span
              animate={{ rotate: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mr-2"
            >
              👋
            </motion.span>
            Hey! It's me Roheemoh
          </Badge>
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
              <span className="block">that inspire & engage.</span>
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"
              animate={imageLoaded[currentImageIndex] ? {
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative">
              <motion.div
                className="absolute -left-4 -top-4 w-full h-full rounded-2xl border-2 border-primary/30"
                animate={{
                  borderColor: [
                    "hsl(var(--primary) / 0.3)",
                    "hsl(var(--accent) / 0.5)", 
                    "hsl(var(--primary) / 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 elegant-shadow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={profileImages[currentImageIndex].src}
                      alt={profileImages[currentImageIndex].alt}
                      className="w-full h-full object-cover transition-transform duration-500"
                      width={320}
                      height={400}
                      priority={currentImageIndex === 0}
                      quality={85}
                      sizes="(max-width: 768px) 280px, 320px"
                      placeholder="blur"
                      blurDataURL={profileImages[currentImageIndex].blurDataURL}
                      onLoad={() => {
                        setImageLoaded(prev => {
                          const newState = [...prev];
                          newState[currentImageIndex] = true;
                          return newState;
                        });
                      }}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    {/* Title with loading state */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: imageLoaded[currentImageIndex] ? 1 : 0.7, 
                        y: 0 
                      }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <p className="text-white font-medium">
                        {profileImages[currentImageIndex].title}
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Loading indicator */}
                {!imageLoaded[currentImageIndex] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                    <motion.div
                      className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                )}

                {/* Image indicators */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {profileImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-primary"
                          : "bg-muted-foreground/50"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`View ${profileImages[index].title} image`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -right-2 top-8 w-6 h-6 rounded-full bg-primary/40"
                animate={{
                  y: [-5, 5, -5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute -left-2 bottom-12 w-4 h-4 rounded-full bg-accent/60"
                animate={{
                  y: [5, -5, 5],
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}