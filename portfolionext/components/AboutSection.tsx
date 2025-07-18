"use client"

import { motion } from "framer-motion"
import SkillOrb from "./SkillOrb"

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background decorative elements - matching contact section style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-pink-500/3 blur-3xl"></div>
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 right-16 w-6 h-6 bg-gradient-to-r from-pink-400 to-blue-500 rounded-full opacity-15"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Main About Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
          <div className="relative backdrop-blur-xl bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Personal intro */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl font-bold mb-4 text-white"
                >
                  Hello, I'm Zakaria
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-slate-300 mb-6 leading-relaxed text-lg"
                >
                  Aspiring{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                    Full-Stack Developer
                  </span>{" "}
                  with a keen focus on{" "}
                  <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    DevOps
                  </span>
                  . Currently pursuing my Bachelor's in Computer Science at BRAC University.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-slate-300 leading-relaxed"
                >
                  I'm passionate about building scalable, efficient applications and continuously improving development
                  workflows through modern tools and practices.
                </motion.p>
              </div>

              {/* Right side - Quick stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  </div>
                  <span>Computer Science Student</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                    <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  </div>
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-lg">
                    <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                  </div>
                  <span>DevOps Enthusiast</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
            <div className="relative backdrop-blur-xl bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Technical Universe
              </motion.h3>

              {/* Skills arranged in constellation pattern */}
              <div className="relative max-w-4xl mx-auto">
                {/* Frontend Skills */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <h4 className="text-lg font-semibold text-blue-400 mb-4 text-center">Frontend</h4>
                  <div className="flex justify-center items-center gap-6 flex-wrap">
                    <SkillOrb skill="React" category="frontend" index={0} />
                    <SkillOrb skill="Next.js" category="frontend" index={1} />
                    <SkillOrb skill="JavaScript" category="frontend" index={2} />
                    <SkillOrb skill="HTML/CSS" category="frontend" index={3} />
                    <SkillOrb skill="Tailwind" category="frontend" index={4} />
                  </div>
                </motion.div>

                {/* Backend Skills */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8"
                >
                  <h4 className="text-lg font-semibold text-purple-400 mb-4 text-center">Backend</h4>
                  <div className="flex justify-center items-center gap-6 flex-wrap">
                    <SkillOrb skill="Node.js" category="backend" index={5} />
                    <SkillOrb skill="Express" category="backend" index={6} />
                    <SkillOrb skill="Socket-io" category="backend" index={6} />
                    <SkillOrb skill="Python" category="backend" index={7} />
                    <SkillOrb skill="Prisma" category="backend" index={8} />
                    <SkillOrb skill="Go" category="backend" index={9} />
                  </div>
                </motion.div>

                {/* Database Skills */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-8"
                >
                  <h4 className="text-lg font-semibold text-green-400 mb-4 text-center">Database</h4>
                  <div className="flex justify-center items-center gap-6 flex-wrap">
                    <SkillOrb skill="MySQL" category="database" index={10} />
                    <SkillOrb skill="PostgreSQL" category="database" index={11} />
                    <SkillOrb skill="MongoDB" category="database" index={12} />
                  </div>
                </motion.div>

                {/* Tools */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h4 className="text-lg font-semibold text-orange-400 mb-4 text-center">Tools & DevOps</h4>
                  <div className="flex justify-center items-center gap-6 flex-wrap">
                    <SkillOrb skill="Git" category="tools" index={13} />
                    <SkillOrb skill="Docker" category="tools" index={14} />
                    <SkillOrb skill="Linux" category="tools" index={15} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
            <div className="relative backdrop-blur-xl bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Academic Journey
              </motion.h3>

              <div className="relative max-w-3xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

                <div className="space-y-12">
                  {/* Current Education */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center relative"
                  >
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-8 md:text-right">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                      >
                        <h4 className="text-xl font-semibold text-blue-400 mb-2">Bachelor of Computer Science</h4>
                        <p className="text-slate-300 font-medium">BRAC University</p>
                        <p className="text-sm text-slate-400 mt-1">Expected: August 2025</p>
                        <div className="mt-3 flex flex-wrap gap-2 justify-end md:justify-start">
                          <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full">Current</span>
                        </div>
                      </motion.div>
                    </div>
                    <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-500/20 shadow-lg"></div>
                    <div className="hidden md:block md:w-1/2 md:pl-8"></div>
                  </motion.div>

                  {/* A Levels */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center relative"
                  >
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-8 md:hidden">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                      >
                        <h4 className="text-xl font-semibold text-purple-400 mb-2">A Levels (Edexcel)</h4>
                        <p className="text-slate-300 font-medium">Private Candidate</p>
                        <p className="text-sm text-slate-400 mt-1">Completed: June 2021</p>
                      </motion.div>
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pr-8"></div>
                    <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-500/20 shadow-lg"></div>
                    <div className="hidden md:block md:w-1/2 md:pl-8">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                      >
                        <h4 className="text-xl font-semibold text-purple-400 mb-2">A Levels (Edexcel)</h4>
                        <p className="text-slate-300 font-medium">Private Candidate</p>
                        <p className="text-sm text-slate-400 mt-1">Completed: June 2021</p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* O Levels */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center relative"
                  >
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-8 md:text-right">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
                      >
                        <h4 className="text-xl font-semibold text-pink-400 mb-2">O Levels (Edexcel)</h4>
                        <p className="text-slate-300 font-medium">Private Candidate</p>
                        <p className="text-sm text-slate-400 mt-1">Completed: January 2018</p>
                      </motion.div>
                    </div>
                    <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 ring-4 ring-pink-500/20 shadow-lg"></div>
                    <div className="hidden md:block md:w-1/2 md:pl-8"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
            <div className="relative backdrop-blur-xl bg-white/5 p-12 rounded-3xl border border-white/10 shadow-2xl">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 flex items-center justify-center shadow-lg"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
              </motion.div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Future Vision
              </h3>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Building tomorrow's digital experiences today. Combining creativity with technical excellence to create
                solutions that matter and make a positive impact on the world.
              </p>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="mt-6 text-sm text-slate-400"
              >
                ✨ Always learning, always growing ✨
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
