import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function GeometricBackground() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll()

    // Create different transform values for parallax layers
    const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
    const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
    const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

    return (
        <div ref={ref} className="fixed inset-0 overflow-hidden bg-slate-950">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />

            {/* Layer 1 - Back layer with largest movement */}
            <motion.div style={{ y: layer1Y }} className="absolute inset-0" aria-hidden="true">
                {/* Vertical lines */}
                <div className="absolute inset-0 flex justify-between">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-px h-full bg-gradient-to-b from-slate-800/0 via-slate-800/50 to-slate-800/0" />
                    ))}
                </div>

                {/* Horizontal lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-px w-full bg-gradient-to-r from-slate-800/0 via-slate-800/50 to-slate-800/0" />
                    ))}
                </div>
            </motion.div>

            {/* Layer 2 - Middle layer with medium movement */}
            <motion.div style={{ y: layer2Y }} className="absolute inset-0" aria-hidden="true">
                {/* Diagonal structures */}
                {/* <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute h-[200%] w-px origin-top bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0"
                            style={{
                                left: `${(i + 1) * 15}%`,
                                transform: `rotate(${45 + i * 2}deg)`,
                            }}
                        />
                    ))}
                </div> */}

                {/* Horizontal accent lines */}
                <div className="absolute inset-0 flex flex-col justify-evenly">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-px w-full bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0" />
                    ))}
                </div>
            </motion.div>

            {/* Layer 3 - Front layer with subtle movement */}
            <motion.div style={{ y: layer3Y }} className="absolute inset-0" aria-hidden="true">
                {/* Geometric accents */}
                <div className="absolute inset-0">
                    {/* Top right structure */}
                    {/* <div className="absolute top-[10%] right-[10%] w-[20vw] h-[20vw]">
                        <div className="absolute inset-0 border border-purple-500/20 rounded-full" />
                        <div className="absolute inset-[20%] border border-purple-500/15 rounded-full" />
                        <div className="absolute inset-[40%] border border-purple-500/10 rounded-full" />
                    </div> */}

                    {/* Bottom left structure */}
                    {/* <div className="absolute bottom-[15%] left-[5%] w-[15vw] h-[15vw]">
                        <div className="absolute inset-0 border border-cyan-500/20 rotate-45" />
                        <div className="absolute inset-[20%] border border-cyan-500/15 rotate-45" />
                        <div className="absolute inset-[40%] border border-cyan-500/10 rotate-45" />
                    </div> */}
                </div>

                {/* Vertical accent lines */}
                <div className="absolute right-[20%] h-full w-px bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0" />
                <div className="absolute left-[30%] h-full w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-cyan-500/0" />
            </motion.div>

            {/* Overlay gradients for depth */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-950" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />
        </div>
    )
}

