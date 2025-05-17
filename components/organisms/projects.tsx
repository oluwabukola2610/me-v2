"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
  useAnimation,
  MotionValue,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  ArrowRight,
  X,
  Plus,
  Code,
  Maximize2,
} from "lucide-react";
import { SectionHeading } from "../atoms/section-heading";
import projects from "@/data/project.json";

export default function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    // Initialize animation on mount
    controls.start("visible");

    // Cursor position tracking
    const moveCursor = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [controls]);

  // Custom cursor variants
  const cursorVariants = {
    default: {
      width: 40,
      height: 40,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.2)",
      x: cursorPosition.x - 20,
      y: cursorPosition.y - 20,
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderColor: "rgba(255, 255, 255, 0.3)",
      x: cursorPosition.x - 40,
      y: cursorPosition.y - 40,
    },
    button: {
      width: 60,
      height: 60,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderColor: "rgba(255, 255, 255, 0.4)",
      x: cursorPosition.x - 30,
      y: cursorPosition.y - 30,
    },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-black/10 dark:bg-white/5"
    >

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" className="absolute inset-0 opacity-30">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {projects.map((project, i) => (
          <motion.div
            key={`bg-${i}`}
            className="absolute rounded-full blur-3xl opacity-10"
            style={{
              width: 300 + Math.random() * 300,
              height: 300 + Math.random() * 300,
              left: `${20 + i * 25}%`,
              top: `${30 + ((i * 15) % 40)}%`,
              backgroundColor: project.color,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="mb-16"
        >
          <SectionHeading
            title="Projects"
            icon={
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Code size={16} />
              </motion.div>
            }
          />

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, delay: 0.2 },
                },
              }}
            >
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 pb-2">
                Selected Work
              </h2>
              <p className="text-lg text-gray-400 max-w-xl">
                Interactive showcase of my latest designs and development
                projects.
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* Projects 3D grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <AnimatePresence>
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={selectedId === project.id}
                setSelected={() =>
                  setSelectedId(project.id === selectedId ? null : project.id)
                }
                setCursorVariant={setCursorVariant}
                delay={idx * 0.1}
                controls={controls}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Full screen selected project view */}
      <AnimatePresence>
        {selectedId !== null && (
          <ExpandedProject
            project={projects.find((p) => p.id === selectedId)!}
            onClose={() => setSelectedId(null)}
            setCursorVariant={setCursorVariant}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  isSelected,
  setSelected,
  setCursorVariant,
  delay,
  controls,
}: {
  project: (typeof projects)[0];
  isSelected: boolean;
  setSelected: () => void;
  setCursorVariant: (variant: string) => void;
  delay: number;
  controls: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // 3D hover effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
    setCursorVariant("default");
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.2 + delay },
        },
      }}
      style={{
        perspective: 2000,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setHovered(true);
        setCursorVariant("project");
      }}
      onMouseLeave={handleMouseLeave}
      onClick={setSelected}
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: `0 10px 30px -15px ${project.color}80`,
        }}
        variants={{
          hover: { scale: 1.02 },
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain scale-110"
            initial={{ scale: 1.2 }}
            animate={{ scale: hovered ? 1.1 : 1.2 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
          <motion.div
            variants={{
              hover: { y: 0, opacity: 1 },
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="z-10"
          >
            <div className="flex items-center gap-2 mb-2">
              {project.tags.slice(0, 2).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-black/40 backdrop-blur-sm border-white/20 text-white"
                >
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 2 && (
                <span className="text-xs text-white/70">
                  +{project.tags.length - 2}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              {project.title}
            </h3>

            <motion.p
              className="text-white/80 mb-4 text-sm line-clamp-2 max-w-md"
              variants={{
                hover: { height: "auto", opacity: 1 },
              }}
              initial={{ height: 0, opacity: 0 }}
              animate={
                hovered
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex items-center text-white"
              variants={{
                hover: { y: 0, opacity: 1 },
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={hovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.span
                className="flex items-center gap-1 text-sm font-medium"
                whileHover={{ x: 3 }}
              >
                View Project <ArrowRight size={14} />
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        {/* 3D effect corner */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md z-30"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(20px)",
          }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          onMouseEnter={() => setCursorVariant("button")}
          onMouseLeave={() => setCursorVariant("project")}
        >
          <Maximize2 size={16} className="text-white" />
        </motion.div>
      </motion.div>

      {/* Reflection effect */}
      <motion.div
        className="absolute inset-0 top-[98%] -z-10 opacity-20 blur-sm rounded-2xl overflow-hidden"
        style={{
          transformOrigin: "top",
          scaleY: 0.2,
          background: `linear-gradient(to bottom, ${project.color}50, transparent)`,
        }}
        variants={{
          hover: { opacity: 0.3 },
        }}
      />
    </motion.div>
  );
}

function ExpandedProject({
  project,
  onClose,
  setCursorVariant,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
  setCursorVariant: (variant: string) => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Animate in sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute top-4 right-4 md:top-8 md:right-8 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-black/40 backdrop-blur-sm border-white/20 text-white hover:bg-black/60"
          onClick={onClose}
          onMouseEnter={() => setCursorVariant("button")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <X size={20} />
        </Button>
      </motion.div>

      <motion.div
        className="w-full max-w-5xl max-h-full overflow-auto bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 flex flex-col md:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        ref={contentRef}
      >
        {/* Image section */}
        <motion.div
          className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden"
          variants={itemVariants}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: imageLoaded ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-8 h-8 border-4 border-t-transparent border-white/30 rounded-full animate-spin" />
          </motion.div>

          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            onLoad={() => setImageLoaded(true)}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent"
            variants={itemVariants}
          />

          <motion.div
            className="absolute bottom-0 left-0 p-6 z-10 md:hidden"
            variants={itemVariants}
          >
            <h2 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Content section */}
        <motion.div
          className="w-full md:w-1/2 p-6 md:p-12 flex flex-col"
          variants={itemVariants}
        >
          <div className="hidden md:block mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="prose prose-invert max-w-none"
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              {project.description} This expanded view provides more details
              about the project, including the design process,
              implemented, and technologies used.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: project.color }}
              />
              Key Features
            </h3>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <Plus size={16} className="mt-1 text-white/70" />
                <span>Responsive design optimized for all devices</span>
              </li>
              <li className="flex items-start gap-2">
                <Plus size={16} className="mt-1 text-white/70" />
                <span>Interactive animations and micro-interactions</span>
              </li>
              <li className="flex items-start gap-2">
                <Plus size={16} className="mt-1 text-white/70" />
                <span>Optimized performance and accessibility</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="mt-auto pt-8 flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Button
              className="gap-2 px-6 py-5 text-base"
              style={{ backgroundColor: project.color }}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <ExternalLink size={18} />
              <span>Visit Live Site</span>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  repeatDelay: 1,
                }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </Button>

            <Button
              variant="outline"
              className="gap-2 bg-white/5 border-white/20 text-white hover:bg-white/10 px-6 py-5 text-base"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <Github size={18} />
              <span>View Code</span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
