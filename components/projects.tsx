"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import ProjectModal from "./project-modal"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "AI-Powered Talent Platform",
      description: "Intelligent recruitment system using RAG and LLMs to automate candidate processing",
      tags: ["Python", "Ollama", "pgvector", "RAG"],
      image: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
      subtitle: "AI & Retrieval-Augmented Generation",
      images: [
        "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
        "bg-gradient-to-br from-violet-600/20 to-purple-600/20",
      ],
      challenges:
        "Processing large volumes of candidate data with high accuracy while maintaining low latency for semantic searches.",
      solution:
        "Integrated Python microservices with Ollama and pgvector to implement a RAG pipeline, enabling context-aware candidate matching.",
      // github: "#", // Confidential Enterprise Project
      // demo: "#",
    },
    {
      title: "Enterprise Big Data Interface",
      description: "Distributed system bridging legacy Hadoop clusters with modern web applications",
      tags: ["Java", "Node.js", "RabbitMQ", "Hadoop"],
      image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      subtitle: "Distributed Systems & Messaging",
      images: [
        "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
        "bg-gradient-to-br from-cyan-600/20 to-blue-600/20",
      ],
      challenges:
        "Decoupling data retrieval from user requests to prevent bottlenecks when querying massive Impala datasets.",
      solution:
        "Implemented RabbitMQ for asynchronous message queuing, allowing the Node.js frontend to offload heavy queries to Java consumers.",
      // github: "#",
      // demo: "#",
    },
    {
      title: "Workforce Analytics Engine",
      description: "High-performance backend processing thousands of weekly headcount records",
      tags: ["Node.js", "PostgreSQL", "K6", "Redis"],
      image: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
      subtitle: "Scalable Data Processing",
      images: [
        "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
        "bg-gradient-to-br from-pink-600/20 to-rose-600/20",
      ],
      challenges:
        "Handling concurrent write operations and generating complex analytical reports without impacting read performance.",
      solution:
        "Optimized PostgreSQL queries for aggregation and implemented concurrent caching strategies to reduce database load.",
      // github: "#",
      // demo: "#",
    },
    {
      title: "Secure Identity & DevOps Suite",
      description: "Centralized authentication infrastructure and automated CI/CD pipelines",
      tags: ["Keycloak", "Docker", "Jenkins", "Security"],
      image: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      subtitle: "Infrastructure & Security",
      images: [
        "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
        "bg-gradient-to-br from-emerald-600/20 to-teal-600/20",
      ],
      challenges:
        "Eliminating security silos across multiple applications and reducing manual deployment errors.",
      solution:
        "Deployed Keycloak for unified SSO (reducing auth failures by 70%) and built containerized Jenkins pipelines for automated delivery.",
      // github: "#",
      // demo: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-white/50">Recent work and case studies</p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onClick={() => setSelectedProject(i)}
              className="group glass rounded-3xl overflow-hidden hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors gap-2 group">
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Added modal with AnimatePresence for smooth animations */}
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal project={projects[selectedProject]} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
