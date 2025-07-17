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
        <section id="about" className="py-32 px-4 relative overflow-hidden">
          <FloatingGeometry />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto relative z-10"
          >
            {/* Section Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            {/* Flowing Content */}
            <div className="space-y-20">
              {/* Personal Introduction */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="relative max-w-4xl mx-auto"
              >
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl text-slate-300 leading-relaxed text-center relative"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="inline-block"
                  >
                    Aspiring{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent relative inline-block"
                  >
                    Full-Stack Developer
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 origin-left"
                    />
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="inline-block"
                  >
                    {" "}
                    with a keen focus on{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent relative inline-block"
                  >
                    DevOps
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 origin-left"
                    />
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="inline-block"
                  >
                    . Currently pursuing my Bachelor's in{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    className="font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent relative inline-block"
                  >
                    Computer Science
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 2.0 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 origin-left"
                    />
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="inline-block"
                  >
                    {" "}
                    at{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.4 }}
                    className="font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent relative inline-block"
                  >
                    BRAC University
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 2.6 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 origin-left"
                    />
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2.8 }}
                    className="inline-block"
                  >
                    , I'm passionate about building{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 3.0 }}
                    className="font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent relative inline-block"
                  >
                    scalable, efficient applications
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 3.2 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 origin-left"
                    />
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 3.4 }}
                    className="inline-block"
                  >
                    {" "}
                    and continuously improving{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 3.6 }}
                    className="font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent relative inline-block"
                  >
                    development workflows
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 3.8 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-500 origin-left"
                    />
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 4.0 }}
                    className="inline-block"
                  >
                    {" "}
                    through modern tools and practices.
                  </motion.span>
                </motion.p>

                {/* Floating particles around the text */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 left-1/4 w-2 h-2 rounded-full bg-blue-400 blur-sm"
                />
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-purple-400 blur-sm"
                />
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-4 left-1/3 w-1 h-1 rounded-full bg-pink-400 blur-sm"
                />
              </motion.div>

              {/* Skills Constellation */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold mb-12 text-white">Technical Universe</h3>

                {/* Skills arranged in a flowing pattern */}
                <div className="relative max-w-4xl mx-auto">
                  {/* Frontend Skills */}
                  <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
                    <SkillOrb skill="React" category="frontend" index={0} />
                    <SkillOrb skill="Next.js" category="frontend" index={1} />
                    <SkillOrb skill="JavaScript" category="frontend" index={2} />
                    <SkillOrb skill="HTML/CSS" category="frontend" index={3} />
                    <SkillOrb skill="Tailwind" category="frontend" index={4} />
                  </div>

                  {/* Backend Skills */}
                  <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
                    <SkillOrb skill="Node.js" category="backend" index={5} />
                    <SkillOrb skill="Express" category="backend" index={6} />
                    <SkillOrb skill="Python" category="backend" index={7} />
                    <SkillOrb skill="Prisma" category="backend" index={8} />
                  </div>

                  {/* Database Skills */}
                  <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
                    <SkillOrb skill="MySQL" category="database" index={9} />
                    <SkillOrb skill="PostgreSQL" category="database" index={10} />
                    <SkillOrb skill="MongoDB" category="database" index={11} />
                  </div>
                </div>
              </motion.div>

              {/* Education Timeline - Redesigned */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="backdrop-blur-xl bg-gradient-to-l from-purple-500/10 to-pink-500/10 p-8 rounded-3xl border border-white/20 shadow-2xl">
                  <h3 className="text-3xl font-bold mb-8 text-center text-white">Academic Path</h3>

                  <div className="relative">
                    {/* Central timeline line - hidden on mobile */}
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

                    <div className="space-y-12">
                      {/* Current Education */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center relative"
                      >
                        {/* Mobile: single side layout, Desktop: alternating */}
                        <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-8 md:text-right">
                          <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-blue-500/20">
                            <h4 className="text-xl font-semibold text-blue-400">Bachelor of Computer Science</h4>
                            <p className="text-slate-300">BRAC University</p>
                            <p className="text-sm text-slate-400">Expected: August 2025</p>
                          </div>
                        </div>
                        <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-500/20"></div>
                        <div className="hidden md:block md:w-1/2 md:pl-8"></div>
                      </motion.div>

                      {/* A Levels */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center relative"
                      >
                        {/* Mobile: single side, Desktop: right side */}
                        <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-8 md:hidden">
                          <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-purple-500/20">
                            <h4 className="text-xl font-semibold text-purple-400">A Levels (Edexcel)</h4>
                            <p className="text-slate-300">Private Candidate</p>
                            <p className="text-sm text-slate-400">Completed: June 2021</p>
                          </div>
                        </div>
                        <div className="hidden md:block md:w-1/2 md:pr-8"></div>
                        <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-500/20"></div>
                        <div className="hidden md:block md:w-1/2 md:pl-8">
                          <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-purple-500/20">
                            <h4 className="text-xl font-semibold text-purple-400">A Levels (Edexcel)</h4>
                            <p className="text-slate-300">Private Candidate</p>
                            <p className="text-sm text-slate-400">Completed: June 2021</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* O Levels */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center relative"
                      >
                        {/* Mobile: single side layout, Desktop: left side */}
                        <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-8 md:text-right">
                          <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-pink-500/20">
                            <h4 className="text-xl font-semibold text-pink-400">O Levels (Edexcel)</h4>
                            <p className="text-slate-300">Private Candidate</p>
                            <p className="text-sm text-slate-400">Completed: January 2018</p>
                          </div>
                        </div>
                        <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 ring-4 ring-pink-500/20"></div>
                        <div className="hidden md:block md:w-1/2 md:pl-8"></div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Vision Statement */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center relative"
              >
                <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 p-12 rounded-3xl border border-white/10 shadow-2xl">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Future Vision</h3>
                  <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Building tomorrow's digital experiences today. Combining creativity with technical excellence to
                    create solutions that matter.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-4 relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  )
}
