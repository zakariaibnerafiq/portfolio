import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
    return (
        <section className="py-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
                <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-xl">
                    <p className="text-lg text-purple-100 mb-8">
                        I'm always open to new opportunities and collaborations. Feel free to reach out!
                    </p>
                    <div className="flex justify-center gap-6">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="mailto:zakariaibnerafiq14834@gmail.com"
                            className="p-4 backdrop-blur-sm bg-white/5 rounded-full"
                        >
                            <Mail className="size-6" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/zakariaibnerafiq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 backdrop-blur-sm bg-white/5 rounded-full"
                        >
                            <Github className="size-6" />
                        </motion.a>
                        {/* <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 backdrop-blur-sm bg-white/5 rounded-full"
                        >
                            <Linkedin className="size-6" />
                        </motion.a> */}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
