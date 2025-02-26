import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import ProjectCard from "./components/ProjectCard"
import ContactSection from "./components/ContactSection"
import GeometricBackground from "./components/AnimatedBackground"

export default function App() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <main className="min-h-screen text-slate-50 overflow-x-hidden">
            <GeometricBackground />

            {/* Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="min-h-screen flex flex-col items-center justify-center px-4">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
                        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
                            Hello, I'm{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Zakaria Ibne Rafiq
                            </span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-8 text-slate-200">
                            Full Stack Developer
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <ArrowDown className="animate-bounce mx-auto mt-12" size={32} />
                        </motion.div>
                    </motion.div>
                </section>

                {/* About Section */}
                <section className="py-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="backdrop-blur-xl bg-white/10 p-6 md:p-8 rounded-2xl shadow-xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                                I'm a passionate developer with expertise in full stack development with modern web technologies. I love
                                creating beautiful and functional web applications that provide great user experiences.
                            </p>
                            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {["React", "Next.js","Express","TypeScript","Python","Tailwind","SCSS","Mysql","Postgres"].map((skill) => (
                                    <div
                                        key={skill}
                                        className="backdrop-blur-sm bg-white/5 p-3 rounded-xl text-center text-sm md:text-base"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Projects Section */}
                <section className="py-20 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-12"
                    >
                        My Projects
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                title: "Project 1",
                                description: "A brief description of project 1",
                                image: "/placeholder.svg?height=200&width=300",
                            },
                            {
                                title: "Project 2",
                                description: "A brief description of project 2",
                                image: "/placeholder.svg?height=200&width=300",
                            },
                            {
                                title: "Project 3",
                                description: "A brief description of project 3",
                                image: "/placeholder.svg?height=200&width=300",
                            },
                        ].map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ProjectCard title={project.title} description={project.description} image={project.image} />
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