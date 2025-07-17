"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function GeometricBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()

  // Create different transform values for parallax layers
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const layer1Rotate = useTransform(scrollYProgress, [0, 1], [0, 45])
  const layer2Rotate = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #1e293b 0%, #0f172a 50%, #020617 100%)",
            "radial-gradient(circle at 80% 20%, #1e293b 0%, #0f172a 50%, #020617 100%)",
            "radial-gradient(circle at 40% 80%, #1e293b 0%, #0f172a 50%, #020617 100%)",
            "radial-gradient(circle at 20% 50%, #1e293b 0%, #0f172a 50%, #020617 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Layer 1 - Back layer with largest movement */}
      <motion.div
        style={{ y: layer1Y, rotate: layer1Rotate }}
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
      >
        {/* Grid pattern */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgb(59 130 246 / 0.1)" strokeWidth="1" />
              </pattern>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(59 130 246 / 0.2)" />
                <stop offset="50%" stopColor="rgb(147 51 234 / 0.1)" />
                <stop offset="100%" stopColor="rgb(236 72 153 / 0.2)" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </motion.div>

      {/* Layer 2 - Middle layer with medium movement */}
      <motion.div
        style={{ y: layer2Y, rotate: layer2Rotate }}
        className="absolute inset-0 opacity-20"
        aria-hidden="true"
      >
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <div
                className={`w-16 h-16 ${i % 2 === 0 ? "rounded-full" : "rotate-45"} bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Layer 3 - Front layer with subtle movement */}
      <motion.div style={{ y: layer3Y }} className="absolute inset-0 opacity-40" aria-hidden="true">
        {/* Accent lines and shapes */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          />

          {/* Vertical accent lines */}
          <motion.div
            className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
          />
        </div>
      </motion.div>

      {/* Overlay gradients for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-950/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
    </div>
  )
}
