import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

export default function ProjectsSection() {
  const projectsData = [
    {
      id: 1,
      title: "Online Car Showroom",
      description:
        "This is a React-based web application for an online car showroom, where users can explore and browse different car models available for sale.",
      image: "/onlinecarshowroom.png?height=300&width=400",
      tech: ["React", "Node.js", "MySQL", "Express"],
      links: {
        github: "https://github.com/zakariaibnerafiq/Online-Car-Showroom",
        demo: null, // Set to null if no demo available
        live: null, // Set to null if no live site available
      },
      featured: true,
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Nest Navigator",
      description:
        "A real estate management application streamlines the process of managing properties, offering a user-friendly interface for both property owners and tenants.",
      image: "/nestnavigator.png?height=300&width=400",
      tech: ["React", "SCSS", "MySQL", "Go"],
      links: {
        github: "https://github.com/zakariaibnerafiq/RealEstateManagementProject",
        demo: null,
        live: null,
      },
      featured: true,
      category: "Full Stack",
    },
    {
      id: 3,
      title: "ThesisX",
      description:
        "Thesis X is a collaborative platform designed for university students and faculty to streamline the process of managing along with selecting thesis supervisors and co-supervisors for thesis.",
      image: "/thesisx.png?height=300&width=400",
      tech: ["React", "TailwindCSS", "Socket-io","PostgreSQL", "Prisma ORM", "Express", "LLama"],
      links: {
        github: "https://github.com/Fahmid-Chowdhury/ThesisX",
        demo: null,
        live: null,
      },
      featured: true,
      category: "Full Stack",
    },
    
  ]

  // Filter only featured projects
  const projects = projectsData.filter((project) => project.featured)

  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-500/3 blur-3xl"></div>
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-32 right-16 w-7 h-7 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-15"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
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
            A showcase of my latest work, featuring modern technologies and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        
      </motion.div>
    </section>
  )
}
