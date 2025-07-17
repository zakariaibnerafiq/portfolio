"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface SkillOrbProps {
  skill: string
  category: "frontend" | "backend" | "database" | "tools"
  index: number
}

const categoryColors = {
  frontend: "from-blue-400 to-cyan-500",
  backend: "from-purple-400 to-pink-500",
  database: "from-green-400 to-emerald-500",
  tools: "from-orange-400 to-red-500",
}

const categoryGlow = {
  frontend: "shadow-blue-500/25",
  backend: "shadow-purple-500/25",
  database: "shadow-green-500/25",
  tools: "shadow-orange-500/25",
}

export default function SkillOrb({ skill, category, index }: SkillOrbProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative group cursor-pointer`}
    >
      <div
        className={`
        w-24 h-24 rounded-full bg-gradient-to-br ${categoryColors[category]}
        flex items-center justify-center text-white font-semibold text-sm
        shadow-lg ${categoryGlow[category]} hover:shadow-xl
        backdrop-blur-sm border border-white/20
        transition-all duration-300
      `}
      >
        <span className="text-center leading-tight">{skill}</span>

        {/* Animated ring */}
        <motion.div
          className={`absolute inset-0 rounded-full border-2 border-gradient-to-r ${categoryColors[category]} opacity-0`}
          animate={
            isHovered
              ? {
                  opacity: [0, 1, 0],
                  scale: [1, 1.2, 1.4],
                  rotate: [0, 180, 360],
                }
              : {}
          }
          transition={{ duration: 1, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
        />

        {/* Pulse effect */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${categoryColors[category]} opacity-20`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  )
}
