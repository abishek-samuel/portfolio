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
      tags: ["React", "Node.js", "Express", "Postgres", "LLM", "VectorDB", "Semantic Search"],
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
      title: "IoT Predictive Maintenance System",
      description: "End-to-end anomaly detection pipeline integrating Big Data with Machine Learning",
      tags: ["Node.js", "Python", "Hadoop", "React", "Microservices"],
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      subtitle: "ML Integration & Data Pipeline",
      images: [
        "/images/iot-architecture.png", 
        "/images/anomaly-dashboard.png",    
      ],
      challenges: (
        <>
          The client needed to detect equipment failures before they happened. The challenge was bridging the gap between massive, static datasets in <strong className="text-white">Hadoop</strong> and real-time <strong className="text-white">ML Anomaly Detection</strong>.
        </>
      ),
      solution: (
        <>
          Architected a <strong>Node.js Interface Service</strong> that fetches raw sensor data from Hadoop and streams it to a <strong className="text-cyan-400">Python Microservice</strong> for pattern analysis. 
          Detected anomalies are stored and pushed to a <strong className="text-violet-400">React Dashboard</strong> for real-time monitoring, enabling proactive maintenance.
        </>
      ),
    },
    {
      title: "EazyTime – Enterprise Timesheet System",
      description: "Scalable workforce management platform with hierarchical analytics and role-based security",
      tags: ["Node.js", "React", "MySQL", "Keycloak", "Redis"],
      image: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20", // Update with real image path later
      subtitle: "Performance Optimization & RBAC",
      images: [
        "/images/eazytime-dashboard.png", 
        "/images/rbac-architecture.png",    
      ],
      challenges: (
        <>
          Generating real-time analytics for <strong className="text-white">high-volume timesheet data</strong> caused latency issues. Additionally, managing granular permissions across 4 distinct roles (Admin, Manager, Supervisor, Member) required complex security logic.
        </>
      ),
      solution: (
        <>
          Architected a high-performance backend using <strong className="text-cyan-400">Node.js Clustering</strong> to maximize multi-core utilization and implemented a <strong className="text-violet-400">Caching Layer</strong> for instant dashboard loading. 
          Secured the system with <strong className="text-cyan-400">Keycloak SSO</strong>, enforcing strict Role-Based Access Control (RBAC) for data isolation.
        </>
      ),
    },
    {
      title: "CI Automation Suite",
      description: "Streamlined Continuous Integration pipeline ensuring code quality and rapid feedback",
      tags: ["Jenkins", "Docker", "Gitea", "SonarQube", "Jest"],
      image: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      subtitle: "Build Automation & Quality Gates",
      images: [
        "/images/ci-architecture.png", 
        "/images/jenkins-workflow.png",    
      ],
      challenges: (
        <>
          Development velocity was slow by <strong>manual testing workflows</strong> and lack of centralized code quality enforcement, leading to <span className="text-white">slow feedback loops</span>.
        </>
      ),
      solution: (
        <>
          Architected an event-driven CI pipeline using <strong className="text-cyan-400">Jenkins</strong> and <strong className="text-cyan-400">Gitea</strong>. 
          The workflow automates the entire build lifecycle—executing <strong className="text-violet-400">Jest</strong> unit tests, enforcing <strong className="text-violet-400">SonarQube</strong> quality gates, 
          and containerizing artifacts with <strong className="text-cyan-400">Docker</strong>—reducing integration time by <span className="text-white font-bold">60%</span> while triggering automated email alerts.
        </>
      ),
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
