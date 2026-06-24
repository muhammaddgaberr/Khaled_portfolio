'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  company: string
  description: string
  highlights: string[]
  technologies: string[]
  image: string
  impact: string
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Heat Exchanger Test Line',
      company: 'El Faris Heat Exchanger Industry',
      description: 'Designed and implemented a comprehensive heat exchanger testing infrastructure from scratch, including sensor calibration and performance analysis programs.',
      highlights: [
        'Designed complete test cycle and wiring diagrams',
        'Developed 20 Python & EES programs for analysis',
        'Calibrated all sensors and created calibration graphs',
        'Innovated new flow measurement sensor',
        'Accommodates units up to 160cm x 160cm',
      ],
      technologies: ['Python', 'EES', 'AutoCAD', 'Sensor Calibration', 'CFD Analysis'],
      image: '/project-heat-exchanger.png',
      impact: 'Established automated testing infrastructure increasing analysis efficiency by 400%',
    },
    {
      id: 2,
      title: 'BLUE Automotive Cooling System',
      company: 'AutoCool & Elaraby Group',
      description: 'Complete cooling and refrigeration system design for next-generation Italian automotive company, including microchannel components and valve optimization.',
      highlights: [
        'Microchannel condenser design using specialized software',
        'Electronic and thermostatic expansion valve selection',
        'Blower and solenoid valve optimization',
        'Brazed plate chiller for DC/DC converter cooling',
        'System performance validation',
      ],
      technologies: ['CATIA V6', 'CoolSelector', 'Cool Pack', 'Coil Designer', 'ANSYS Fluent'],
      image: '/project-cooling.png',
      impact: 'Delivered production-ready cooling system for luxury automotive platform',
    },
    {
      id: 3,
      title: 'Motor Platform Optimization',
      company: 'ELARABY GROUP Motors',
      description: 'Comprehensive motor redesign initiative covering stator, shaft, and mechanism optimization, achieving significant cost reductions across product line.',
      highlights: [
        'Ceiling fan stator unified platform design: 35M EGP savings',
        'Stand fan shaft localization: 4M EGP savings',
        'Synchronous mechanism redesign: 10.4M EGP savings',
        'Ventilation fan core optimization: 2M EGP savings',
        'Component standardization across 3 motor types',
      ],
      technologies: ['CATIA V6', 'KissSoft', 'FEA', 'DFM', 'SAP'],
      image: '/project-motor.png',
      impact: 'Total annual savings of 51.4M EGP while maintaining performance standards',
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary text-sm font-semibold mb-2 inline-block">Featured Work</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Selected Projects
          </h2>
          <p className="text-lg text-foreground/60">
            A showcase of significant engineering projects that demonstrate design expertise and impact
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image */}
                <div className="lg:col-span-2 h-64 lg:h-auto relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold text-secondary mb-2">{project.company}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-foreground/70 mb-4 line-clamp-2">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                          <li key={hIdx} className="flex gap-2 text-sm text-foreground/70">
                            <span className="text-primary font-bold">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-sm text-primary font-semibold">{project.impact}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
