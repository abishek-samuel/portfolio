"use client"

import { motion } from "framer-motion"
import { Database, Cloud, Code2, Lock, Wrench, Zap } from "lucide-react"

export default function TechnicalExpertise() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const expertiseCards = [
    {
      title: "Backend & Architecture",
      icon: Database,
      color: "violet",
      skills: ["Node.js", "Express.js", "Python (Flask)", "Java", "Microservices", "RabbitMQ", "REST APIs", "Websocket"],
    },
    {
      title: "Databases & Caching",
      icon: Zap,
      color: "cyan",
      skills: ["PostgreSQL", "MySQL", "Redis", "pgvector", "MongoDB"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "purple",
      skills: ["AWS (EC2, S3, RDS, Lambda)", "Docker", "Jenkins", "Gitea"],
    },
    {
      title: "Frontend",
      icon: Code2,
      color: "blue",
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "Javascript"],
    },
    {
      title: "Security",
      icon: Lock,
      color: "rose",
      skills: ["Keycloak (SSO, OAuth2)", "OpenID Connect", "Secure Auth"],
    },
    {
      title: "Tools & Quality",
      icon: Wrench,
      color: "amber",
      skills: ["Git", "SonarQube", "WebSockets"],
    },
  ]

  const colorMap: { [key: string]: { bg: string; border: string; text: string; icon: string } } = {
    violet: {
      bg: "from-violet-500/20 to-violet-400/10",
      border: "border-violet-500/30",
      text: "text-violet-200",
      icon: "text-violet-400",
    },
    cyan: {
      bg: "from-cyan-500/20 to-cyan-400/10",
      border: "border-cyan-500/30",
      text: "text-cyan-200",
      icon: "text-cyan-400",
    },
    purple: {
      bg: "from-purple-500/20 to-purple-400/10",
      border: "border-purple-500/30",
      text: "text-purple-200",
      icon: "text-purple-400",
    },
    blue: {
      bg: "from-blue-500/20 to-blue-400/10",
      border: "border-blue-500/30",
      text: "text-blue-200",
      icon: "text-blue-400",
    },
    rose: {
      bg: "from-rose-500/20 to-rose-400/10",
      border: "border-rose-500/30",
      text: "text-rose-200",
      icon: "text-rose-400",
    },
    amber: {
      bg: "from-amber-500/20 to-amber-400/10",
      border: "border-amber-500/30",
      text: "text-amber-200",
      icon: "text-amber-400",
    },
  }

  return (
    <section id="technical expertise" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Expertise</h2>
            <p className="text-white/50 text-lg">Comprehensive skill set across multiple domains</p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {expertiseCards.map((card, index) => {
              const colors = colorMap[card.color]
              const IconComponent = card.icon

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="glass p-6 rounded-2xl border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6"
                >
                  {/* Icon Wrapper - Hidden on mobile if you want to save space, but kept here for consistency */}
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${colors.bg} flex-shrink-0`}>
                    <IconComponent size={24} className={colors.icon} />
                  </div>

                  {/* Category Title */}
                  {/* CHANGE 2: Changed width from fixed w-1/5 to w-full on mobile, back to w-1/5 on desktop */}
                  <div className="w-full md:w-1/5 flex-shrink-0">
                    <h3 className="text-lg font-bold text-white whitespace-normal">{card.title}</h3>
                  </div>

                  {/* Skills Pills */}
                  {/* CHANGE 3: Skills will now naturally wrap under the title on mobile */}
                  <div className="flex flex-wrap gap-2 flex-1 w-full md:w-auto">
                    {card.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-3 py-1.5 bg-gradient-to-r ${colors.bg} border ${colors.border} rounded-full text-xs font-medium ${colors.text} hover:border-white/40 transition-all duration-200`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}