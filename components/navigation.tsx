'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Khalid
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm font-medium capitalize transition-colors ${
                activeSection === item
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
          window.open(
          'https://drive.google.com/uc?export=download&id=1fjTGGSP-bIqd2plvgQR4cEOuUcKQKGTw',
          '_blank')
          }}
          className="hidden md:inline-flex px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Download Resume
        </button>
      </div>
    </nav>
  )
}
