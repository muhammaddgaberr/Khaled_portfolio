'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Counter {
  label: string
  value: number
  unit: string
}

export function HeroSection() {
  const [counters, setCounters] = useState<Counter[]>([
    { label: 'Years of Experience', value: 0, unit: '+' },
    { label: 'Projects Delivered', value: 0, unit: '+' },
    { label: 'Cost Savings Generated', value: 0, unit: 'M EGP' },
    { label: 'Engineering Programs', value: 0, unit: '+' },
  ])

  const finalCounters = [
    { label: 'Years of Experience', value: 4, unit: '+' },
    { label: 'Projects Delivered', value: 5, unit: '+' },
    { label: 'Cost Savings Generated', value: 52, unit: 'M EGP' },
    { label: 'Engineering Programs', value: 10, unit: '+' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev =>
        prev.map((counter, idx) => ({
          ...counter,
          value: Math.min(counter.value + Math.ceil(finalCounters[idx].value / 30), finalCounters[idx].value),
        }))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-secondary text-sm font-semibold mb-2">Welcome to my portfolio</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                Khalid M. Abd El-Samea
              </h1>
              <p className="text-xl text-primary font-semibold mb-4">
                R&D Engineer | Product Development | Mechanical Power Engineer
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Mechanical Engineer specialized in Product Design, Product Development, DFM, Cost Optimization, HVAC Systems, Motors Development, CAD Design, SAP, and PLM solutions. Experienced in delivering innovative engineering solutions that improve performance, reduce costs, and accelerate product development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-3xl" />
            <div className="relative h-full rounded-2xl overflow-hidden border border-primary/20 shadow-2xl bg-white/50 backdrop-blur-sm">
              <Image
                src="/engineer-portrait.jpeg"
                alt="Khalid M. Abd El-Samea"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {counters.map((counter, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {counter.value}
                <span className="text-2xl">{counter.unit}</span>
              </div>
              <p className="text-sm text-foreground/60">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
