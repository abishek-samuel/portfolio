"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About Me", "Technical Expertise", "Projects", "Skills", "Contact"]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "top-4" : "top-8"
      }`}
    >
      <div
        className={`glass px-8 py-3 rounded-full flex items-center justify-between gap-8 ${
          isScrolled ? "shadow-2xl" : ""
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-4 left-1/2 -translate-x-1/2 glass px-6 py-4 flex flex-col gap-4 w-48"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
