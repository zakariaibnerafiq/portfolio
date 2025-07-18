import { motion } from "framer-motion"
import { Github, Eye, Globe, Play } from "lucide-react"
import Image from "next/image"

interface ProjectLink {
  github?: string | null
  demo?: string | null
  live?: string | null
}

interface ProjectCardProps {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  links: ProjectLink
  category: string
  index?: number
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  tech,
  links,
  category,
  index = 0,
}: ProjectCardProps) {
  const getActionButtons = () => {
    const buttons = []

    if (links.github) {
      buttons.push({
        icon: Github,
        label: "View Code",
        url: links.github,
        gradient: "from-slate-600 to-slate-800",
        hoverGradient: "from-slate-700 to-slate-900",
        shadowColor: "rgba(100, 116, 139, 0.3)",
      })
    }

    if (links.demo) {
      buttons.push({
        icon: Play,
        label: "Live Demo",
        url: links.demo,
        gradient: "from-blue-500 to-purple-600",
        hoverGradient: "from-blue-600 to-purple-700",
        shadowColor: "rgba(59, 130, 246, 0.3)",
      })
    }

    if (links.live) {
      buttons.push({
        icon: Globe,
        label: "Visit Site",
        url: links.live,
        gradient: "from-emerald-500 to-teal-600",
        hoverGradient: "from-emerald-600 to-teal-700",
        shadowColor: "rgba(16, 185, 129, 0.3)",
      })
    }

    return buttons
  }

  const actionButtons = getActionButtons()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full flex flex-col"
    >
      {/* Glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>

      <motion.div
        whileHover={{
          y: -12,
          scale: 1.02,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] flex flex-col h-full"
      >
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/80 to-purple-600/80 backdrop-blur-sm rounded-full text-white border border-white/20"
          >
            {category}
          </motion.span>
        </div>

        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} className="absolute inset-0">
            <Image src={image || "/placeholder.svg?height=300&width=400"} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </motion.div>

          {/* Hover overlay with action buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-3"
          >
            {actionButtons.map((button, buttonIndex) => {
              const IconComponent = button.icon
              return (
                <motion.a
                  key={buttonIndex}
                  href={button.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 10px 30px ${button.shadowColor}`,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: buttonIndex * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className={`group/btn relative p-4 bg-gradient-to-r ${button.gradient} rounded-full shadow-lg overflow-hidden border border-white/20`}
                  title={button.label}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${button.hoverGradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <IconComponent size={20} className="relative z-10 text-white" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-8 pb-0 flex flex-col">
          {/* Title */}
          <motion.h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p className="text-slate-300 mb-6 leading-relaxed text-base line-clamp-4">
            {description}
          </motion.p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {tech.map((item, techIndex) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
                  }}
                  transition={{
                    delay: techIndex * 0.05,
                    duration: 0.3,
                  }}
                  className="px-3 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-200 backdrop-blur-sm cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

        </div>
        {/* Action Buttons - Pushed to bottom */}
        <div className="mt-auto p-8 pt-0"> {/* Added mt-auto and pt-4 for spacing */}
          <div className="flex gap-3">
            {actionButtons.length > 0 ? (
              actionButtons.map((button, buttonIndex) => {
                const IconComponent = button.icon
                return (
                  <motion.a
                    key={buttonIndex}
                    href={button.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: `0 8px 25px ${button.shadowColor}`,
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`group/cta relative flex-1 py-3 px-4 bg-gradient-to-r ${button.gradient} rounded-2xl font-semibold text-white shadow-lg overflow-hidden transition-all duration-300 border border-white/10 min-w-0`} // Added min-w-0
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${button.hoverGradient} opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm truncate"> {/* Added truncate */}
                      <IconComponent size={16} />
                      {button.label}
                    </span>
                  </motion.a>
                )
              })
            ) : (
              <motion.div className="w-full py-3 px-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl font-semibold text-slate-300 text-center border border-slate-500/20">
                <span className="flex items-center justify-center gap-2 text-sm">
                  <Eye size={16} />
                  Coming Soon
                </span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-sm"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-pink-400 to-blue-500 rounded-full opacity-15 blur-sm"
        />

        {/* Inner glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  )
}