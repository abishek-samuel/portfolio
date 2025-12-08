"use client"

import { motion } from "framer-motion"
import { Database, Cloud, Container, Code2, Zap, Network, GitBranch, Cpu } from "lucide-react"

export default function TechStack() {
  const techs = [
    { icon: Code2, label: "Node.js", color: "text-green-400" },
    { icon: Cloud, label: "AWS", color: "text-orange-400" },
    { icon: Container, label: "Docker", color: "text-blue-400" },
    { icon: Database, label: "PostgreSQL", color: "text-sky-400" },
    { icon: Zap, label: "React", color: "text-cyan-400" },
    { icon: GitBranch, label: "Git", color: "text-red-400" },
    { icon: Cpu, label: "Microservices", color: "text-purple-400" },
    { icon: Network, label: "REST APIs", color: "text-indigo-400" },
  ]

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-white/50">Tools and technologies I work with</p>
        </motion.div>

        {/* Auto-scrolling marquee */}
        <div className="relative flex overflow-hidden bg-white/[0.02] rounded-2xl border border-white/10 py-8">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...techs, ...techs].map((tech, i) => {
              const Icon = tech.icon
              return (
                <div key={i} className="flex items-center gap-3 px-6 py-3 glass rounded-lg min-w-fit">
                  <Icon size={20} className={tech.color} />
                  <span className="text-sm font-medium text-white/80">{tech.label}</span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
