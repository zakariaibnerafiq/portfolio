"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useState, useRef } from "react"
import ProjectCard from "@/components/ProjectCard"
import ContactSection from "@/components/ContactSection"
import GeometricBackground from "@/components/AnimatedBackground"
import ParticleField from "@/components/ParticleField"
import TypewriterText from "@/components/TypewriterText"
import FloatingElements from "@/components/FloatingElements"
import FloatingGeometry from "@/components/FloatingGeometry"
import SkillOrb from "@/components/SkillOrb"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectSection"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
      link: "#",
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat interface with AI integration and voice support",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "OpenAI", "WebRTC", "Express"],
      link: "#",
    },
  ]

  const skills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 82 },
    { name: "PostgreSQL", level: 80 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Express", level: 85 },
  ]

  return (
    <main className="min-h-screen text-slate-50 overflow-x-hidden">
      <GeometricBackground />
      <ParticleField />
      <FloatingElements />
      {/* <Navigation activeSection={activeSection} setActiveSection={setActiveSection} /> */}

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          id="home"
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="min-h-screen flex flex-col items-center justify-center px-4 relative"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center relative z-20"
          >
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                <TypewriterText text="Zakaria Ibne Rafiq" />
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-2xl md:text-3xl mb-4 text-slate-200 font-light">Full Stack Developer</p>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Crafting digital experiences with modern technologies and creative solutions
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-8 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-[1px] bg-slate-900 rounded-full"></div>
                <span className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300">
                  Get In Touch
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="cursor-pointer"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                <ArrowDown className="mx-auto" size={32} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  )
}
