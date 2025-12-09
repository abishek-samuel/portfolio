"use client"

import { motion } from "framer-motion"
import { X, Github, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

interface ProjectModalProps {
  project: {
    title: string
    subtitle: string
    images: string[]
    challenges: string
    solution: string
    github?: string
    demo?: string
    tags: string[]
  }
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const hasLinks = project.github || project.demo

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-6"
    >
      <style>{`
        /* Custom Scrollbar Styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px; /* Made thinner */
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        // LAYOUT FIX: Flex Column + Overflow Hidden on parent
        className="bg-slate-950/90 backdrop-blur-2xl border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl shadow-violet-500/10"
      >
        
        {/* 1. HEADER (Fixed, Non-Scrolling) */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-950/50 backdrop-blur-md z-20 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <p className="text-sm text-cyan-400 font-medium mt-1">{project.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors group">
            <X size={24} className="text-white/60 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* 2. BODY (Scrollable Area) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
          
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 group">
              {/* Fallback visualization */}
              <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 ${project.images[selectedImageIndex]}`} />
              <div className="absolute inset-0 flex items-center justify-center text-white/10 text-lg font-mono">
                [ {project.title} - View {selectedImageIndex + 1} ]
              </div>
            </div>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-16 w-24 shrink-0 rounded-lg border-2 transition-all overflow-hidden ${
                      index === selectedImageIndex
                        ? "border-cyan-400 opacity-100 ring-2 ring-cyan-400/20"
                        : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                    }`}
                  >
                    <div className="h-full w-full bg-slate-800" />
                  </button>
                ))}
              </div>
            )}
          </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-violet-500/20 transition-colors">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                🚧 Challenges
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">{project.challenges}</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-cyan-400/20 transition-colors">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                💡 Solution
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">{project.solution}</p>
            </div>

          {/* Tags */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-cyan-950/30 text-cyan-300 border border-cyan-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer (Only renders if links exist) */}
          {hasLinks && (
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10 mt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all border border-white/10 hover:border-white/30"
                >
                  <Github size={20} />
                  <span>View Source</span>
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-cyan-500/20"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}