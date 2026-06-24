'use client'

import { useEffect, useRef, useState } from 'react'

interface Experience {
  period: string
  company: string
  position: string
  highlights: string[]
}

export function ExperienceSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const experiences: Experience[] = [
    {
      period: '09/2024 – Present',
      company: 'ELARABY GROUP - R&T Group Motors Development',
      position: 'R&D Engineer',
      highlights: [
        'DFM implementation and cost optimization',
        'Component standardization across motor lines',
        'CATIA V6 design of mechanical systems',
        'PLM collaboration and engineering changes',
        'SAP material management and procurement',
        'Supplier localization and qualification',
      ],
    },
    {
      period: '06/2024 – 09/2024',
      company: 'AutoCool AC & Refrigeration Solutions',
      position: 'R&D Engineer',
      highlights: [
        'Automotive heat exchanger design',
        'HVAC system development for hybrid vehicles',
        'BLUE project refrigeration systems',
        'Empirical and real-life simulations',
        'Manufacturing process management',
        'ERP system usage and optimization',
      ],
    },
    {
      period: '07/2022 – 06/2024',
      company: 'El Faris Heat Exchanger Industry',
      position: 'R&D Engineer',
      highlights: [
        'Heat exchanger design and testing',
        'Test line construction and calibration',
        'Python engineering programs development',
        'CFD & FEA analysis using ANSYS Fluent',
        'Technical proposals and client relations',
        'Advanced heat transfer optimization',
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev]
              const index = Array.from(sectionRef.current?.querySelectorAll('.timeline-item') || []).indexOf(entry.target as HTMLElement)
              if (index !== -1) newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = sectionRef.current?.querySelectorAll('.timeline-item')
    items?.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary text-sm font-semibold mb-2 inline-block">My Journey</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Professional Experience</h2>
        </div>

        <div ref={sectionRef} className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`timeline-item lg:flex gap-8 transition-all duration-700 ${
                  visibleItems[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="hidden lg:flex flex-col items-center flex-shrink-0 w-1/2 text-right pr-8">
                  <div className="relative z-10 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <p className="text-sm text-foreground/60 mt-2 font-semibold">{exp.period}</p>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xs font-semibold text-secondary mb-1">{exp.period}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.position}</h3>
                    <p className="text-primary font-semibold mb-4">{exp.company}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex gap-3 text-foreground/70 text-sm">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
