"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Terminal } from "lucide-react"

export default function Hero() {
  
  // FUNCTION 1: Smooth Scroll to Projects
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-0 bg-slate-950">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center max-w-5xl z-10">
        
        {/* Name Header */}
        <motion.div variants={itemVariants} className="mb-4">
           <h2 className="text-2xl md:text-3xl font-medium text-slate-300">
             Hi, I'm <span className="text-cyan-400 font-bold tracking-wide text-3xl md:text-4xl">Abishek Samuel</span>
           </h2>
        </motion.div>

        {/* Role Pill */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 glass px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5">
            <Terminal size={14} className="text-violet-400" />
            <p className="text-sm font-semibold tracking-wide text-violet-300 uppercase">
              Full Stack Developer
            </p>
          </div>
        </motion.div>

        {/* Headlines */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-balance tracking-tight">
          <span className="text-white">Building Scalable</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
            Distributed Systems
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
          Specializing in <strong>Node.js</strong>, <strong>AWS</strong>, and <strong>Event-Driven Microservices</strong>. 
          I engineer resilient backend architectures and high-performance infrastructure for enterprise applications.
        </motion.p>

        {/* --- FIXED BUTTONS AREA --- */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          
          {/* Button 1: Scrolls to Projects */}
          <button 
            onClick={scrollToProjects}
            className="group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden shadow-lg shadow-violet-500/20 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative flex items-center justify-center gap-2">
              View Featured Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Button 2: Downloads Resume 
              Ensure 'resume.pdf' is inside your 'public' folder 
          */}
          <a 
            href="/resume.pdf" 
            download="Abishek_Samuel_Resume.pdf"
            className="group px-8 py-4 rounded-full font-semibold text-slate-300 border border-white/10 hover:border-cyan-400/50 hover:text-white hover:bg-white/5 transition-all duration-300 backdrop-blur-md flex items-center gap-2 cursor-pointer"
          >
            <Download size={18} />
            Download Resume
          </a>
          
        </motion.div>
      </motion.div>
    </section>
  )
}