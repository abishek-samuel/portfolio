"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

export default function Footer() {
  // 1. Define your Direct Gmail URL
  // view=cm -> Compose Mode
  // fs=1 -> Full Screen (New Window)
  // to=... -> Your email
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=samuelabi123@gmail.com"

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/abishek-samuel",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "http://www.linkedin.com/in/abishek-samuel-605266184",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:samuelabi123@gmail.com", // Keep this as standard mailto for Outlook users
      color: "hover:text-cyan-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer id="contact" className="py-20 px-6 border-t border-white/10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/50 mb-6">Interested in working together? Drop me a mail!</p>
          
          {/* --- GMAIL BUTTON --- */}
          <a 
            href={gmailUrl}
            target="_blank"            // Opens in new tab
            rel="noopener noreferrer"  // Security best practice
            className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-2">
              Send via Gmail
              <ArrowUpRight size={18} />
            </div>
          </a>
          
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full border border-white/20 text-white/60 ${link.color} transition-colors duration-300`}
                aria-label={link.label}
              >
                <Icon size={20} />
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="text-white/40 text-sm">
          <p>© 2025 Abishek Samuel. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}