"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "ALTEN",
      period: "Mar 2023 - Present",
      description: "Spearheading backend architecture for AI-driven talent platforms and enterprise data processing systems.",
      highlights: [
        "Built AI platform using Python, Ollama & RAG",
        "Reduced deployment time by 60% via Jenkins",
        "Integrated Keycloak SSO (70% fewer auth failures)",
        "Implemented RabbitMQ for distributed messaging",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Accenture",
      period: "Jun 2021 - Feb 2023",
      description: "Provided technical expertise for Maximo Enterprise Asset Management and database optimization.",
      highlights: [
        "Enterprise Application Support (Maximo)",
        "Oracle DB Management & SQL Optimization",
        "Java Codebase Root Cause Analysis",
        "SLA Management & Client Communication",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Professional Journey</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-6 top-2 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 via-cyan-400/50 to-transparent"></div>

          {experiences.map((exp, i) => (
            <motion.div key={i} variants={itemVariants} className="ml-12 md:ml-20 mb-16 last:mb-0 group relative">
              
              {/* Timeline Dot (Pulsing Effect) */}
              <div className="absolute -left-[3.25rem] md:-left-[3.8rem] top-1">
                 <div className="relative flex items-center justify-center">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full z-10 shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="absolute w-8 h-8 bg-cyan-400/20 rounded-full animate-pulse"></div>
                 </div>
              </div>

              {/* Card Content */}
              <div className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all duration-300 hover:bg-white/5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-cyan-400 mt-1">
                        <Briefcase size={16} />
                        <p className="font-semibold tracking-wide">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-slate-400 text-sm font-mono py-1 px-3 rounded-full border ">{exp.period}</span>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed border-l-2 border-white/10 pl-4 italic">
                  "{exp.description}"
                </p>

                {/* HIGHLIGHTS FIX: Vertical List with Icons */}
                <div className="space-y-3">
                  {exp.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-violet-400 shrink-0 mt-1" />
                      <span className="text-slate-300 text-sm md:text-base leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}