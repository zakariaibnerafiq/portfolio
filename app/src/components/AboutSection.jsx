import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

    // Create transforms at the top level
    const decorElement1Y = useTransform(scrollYProgress, [0, 1], [0, -100])
    const decorElement2Y = useTransform(scrollYProgress, [0, 1], [0, 100])

    return (
        <section ref={ref} className="py-20 px-4 relative">
            <motion.div style={{ scale, opacity }} className="max-w-4xl mx-auto">
                <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-lg text-purple-100 leading-relaxed">
                        I'm a passionate developer with expertise in fullstack development with modern web technologies. I love creating
                        beautiful and functional web applications that provide great user experiences.
                    </p>
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["React", "Next.js", "TypeScript", "Tailwind", "Postgres", "Express", "Mysql", "Python" ].map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="backdrop-blur-sm bg-white/5 p-3 rounded text-center"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Decorative floating elements */}
            <motion.div
                style={{ y: decorElement1Y }}
                className="absolute -z-10 left-[10%] top-[20%] h-24 w-24 rounded-full bg-purple-400/20 blur-xl"
            />
            <motion.div
                style={{ y: decorElement2Y }}
                className="absolute -z-10 right-[10%] bottom-[20%] h-32 w-32 rounded-full bg-fuchsia-400/20 blur-xl"
            />
        </section>
    )
}
