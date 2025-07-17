"use client"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
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
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let's Connect
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </motion.p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
          <div className="relative backdrop-blur-xl bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - CTA */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl font-bold mb-4 text-white"
                >
                  Ready to Start?
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-slate-300 mb-6 leading-relaxed"
                >
                  Whether you have a project in mind or just want to chat about technology, I'm always excited to
                  connect with fellow developers and potential collaborators.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("mailto:zakariaibnerafiq14834@gmail.com", "_blank")}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>

              {/* Right side - Quick info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                    <MapPin size={16} />
                  </div>
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                    <Phone size={16} />
                  </div>
                  <span>Available for remote work</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-lg">
                    <Mail size={16} />
                  </div>
                  <span>Usually responds within 24h</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Email Card */}
          <motion.a
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            href="mailto:zakariaibnerafiq14834@gmail.com"
            className="group relative backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} className="text-white" />
                </div>
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 bg-blue-400 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Drop me a line for project discussions or collaborations
              </p>
              <div className="mt-4 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                zakariaibnerafiq14834@gmail.com
              </div>
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/zakariaibnerafiq"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Github size={24} className="text-white" />
                </div>
                <motion.div
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 bg-purple-400 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Check out my latest projects and contributions</p>
              <div className="mt-4 text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                github.com/zakariaibnerafiq
              </div>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px rgba(236, 72, 153, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={24} className="text-white" />
                </div>
                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 bg-pink-400 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Connect with me for professional networking</p>
              <div className="mt-4 text-pink-400 text-sm font-medium group-hover:text-pink-300 transition-colors">
                linkedin.com/in/yourprofile
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.p className="text-slate-400 mb-4">
            Prefer a different platform? Find me on social media or send a direct message.
          </motion.p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-sm text-slate-500"
          >
            ✨ Always excited to discuss new opportunities ✨
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
