'use client'

import { useEffect, useRef, useState } from 'react'

interface Achievement {
  metric: string
  description: string
  project: string
  icon: string
}

export function AchievementsSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const achievements: Achievement[] = [
    {
      metric: '35M EGP',
      description: 'Annual Savings',
      project: 'Ceiling Fan Stator Redesign',
      icon: '📈',
    },
    {
      metric: '10.4M EGP',
      description: 'Annual Savings',
      project: 'Synchronous Mechanism Design',
      icon: '🎯',
    },
    {
      metric: '4M EGP',
      description: 'Annual Savings',
      project: 'Shaft Localization & Cost Optimization',
      icon: '🔧',
    },
    {
      metric: '2M EGP',
      description: 'Annual Savings',
      project: 'Ventilation Fan Motor Optimization',
      icon: '⚡',
    },
    {
      metric: '30%',
      description: 'Cost Reduction',
      project: 'Local Material Sourcing',
      icon: '💰',
    },
    {
      metric: '40%',
      description: 'Cost Reduction',
      project: 'Assembly Optimization',
      icon: '🏭',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev]
              const items = sectionRef.current?.querySelectorAll('.achievement-card') || []
              const index = Array.from(items).indexOf(entry.target as HTMLElement)
              if (index !== -1) newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = sectionRef.current?.querySelectorAll('.achievement-card')
    items?.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-secondary text-sm font-semibold mb-2 inline-block">Impact & Results</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Key Achievements & Impact
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Demonstrated ability to deliver tangible business value through innovative engineering solutions
          </p>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`achievement-card p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-700 transform ${
                visibleItems[idx] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <h3 className="text-3xl font-bold text-primary mb-2">{achievement.metric}</h3>
              <p className="text-foreground font-semibold mb-2">{achievement.description}</p>
              <p className="text-sm text-foreground/60">{achievement.project}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
