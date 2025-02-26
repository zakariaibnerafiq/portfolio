import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20"
        >
            <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <img
                    src={image || "/placeholder.svg"}  // Use standard image source
                    alt={title}
                    className="object-cover transition-transform group-hover:scale-110 w-full h-full"  // Ensure the image covers the container properly
                />
            </div>
            <div className="relative p-6">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-md -z-10" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-blue-100">{description}</p>
            </div>
        </motion.div>
    );
}
