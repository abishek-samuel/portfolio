"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import TechnicalExpertise from "@/components/technical-expertise"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-violet-500/20 via-slate-950 to-slate-950 blur-3xl"></div>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutMe />
        <TechnicalExpertise />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </div>
  )
}
