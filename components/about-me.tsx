"use client"

import { motion } from "framer-motion"
import { Server, ShieldCheck, Cpu } from "lucide-react"

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Engineering with Purpose</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mx-auto"></div>
          </motion.div>

          {/* Bio: Confident & Architectural */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-balance">
              I am a Software Engineer focused on the unseen parts of software that determine its success: 
              <span className="text-white font-medium"> stability, security, and speed.</span>
              <br /><br />
              With over <span className="text-cyan-400 font-semibold">4 years of experience</span>, I have evolved from building simple features to architecting 
              distributed systems that handle real-world loads. My approach is practical: I choose the right tool for the job, 
              whether that's <span className="text-violet-400 font-medium">RabbitMQ</span> for asynchronous processing or <span className="text-violet-400 font-medium">Keycloak</span> for robust identity management.
              <br /><br />
              I specialize in bridging the gap between complex backend logic and seamless user experiences, ensuring that the systems I build are not just functional, but 
              <span className="text-white font-medium"> maintainable and scalable.</span>
            </p>
          </motion.div>

          {/* "Core Focus" Cards (Replaces the random metrics) */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            
            {/* Focus 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-colors group">
              <div className="w-12 h-12 mx-auto bg-violet-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Server className="text-violet-400" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">System Architecture</h3>
              <p className="text-sm text-slate-400">Designing event-driven microservices that decouple complex logic.</p>
            </div>

            {/* Focus 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-colors group">
              <div className="w-12 h-12 mx-auto bg-cyan-400/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Security & Auth</h3>
              <p className="text-sm text-slate-400">Implementing robust SSO and secure API authentication flows.</p>
            </div>

            {/* Focus 3 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-colors group">
              <div className="w-12 h-12 mx-auto bg-emerald-400/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Performance</h3>
              <p className="text-sm text-slate-400">Optimizing database queries and pipelines for low-latency systems.</p>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}