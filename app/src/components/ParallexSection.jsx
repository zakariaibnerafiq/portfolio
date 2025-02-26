import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function ParallaxSection({ children, offset = 50 }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

    return (
        <motion.div ref={ref} style={{ y }} className="relative">
            {children}
        </motion.div>
    )
}
