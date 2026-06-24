'use client'

interface SkillCard {
  id: string
  title: string
  icon: string
  skills: string[]
}

export function SkillsSection() {
  const skillCards: SkillCard[] = [
    {
      id: 'cad',
      title: 'CAD & Design',
      icon: '📐',
      skills: ['CATIA V6', 'SolidWorks', 'AutoCAD'],
    },
    {
      id: 'simulation',
      title: 'Simulation & Analysis',
      icon: '🔬',
      skills: ['ANSYS Fluent (CFD)', 'FEA / Simulation', 'EES'],
    },
    {
      id: 'plm',
      title: 'PLM & ERP',
      icon: '📊',
      skills: ['SAP', '3DEXPERIENCE (PLM)', 'Microsoft Dynamics AX'],
    },
    {
      id: 'hvac',
      title: 'HVAC & Thermal',
      icon: '❄️',
      skills: ['HAP', 'Coil Designer', 'CoolSelector', 'CoolPack', 'DuctSizer'],
    },
    {
      id: 'programming',
      title: 'Programming & Tools',
      icon: '💻',
      skills: ['Python', 'KissSoft'],
    },
    {
      id: 'engineering',
      title: 'Engineering Expertise',
      icon: '⚙️',
      skills: ['Design for Manufacturing (DFM)', 'Cost Optimization', 'Supplier Localization', 'Product Development'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary text-sm font-semibold mb-2 inline-block">Technical Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground/60">
            Comprehensive toolkit across CAD design, simulation, project management, and process optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCards.map((card) => (
            <div
              key={card.id}
              className="group p-6 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{card.icon}</div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {card.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1.5 bg-secondary/10 text-secondary font-medium text-sm rounded-full border border-secondary/20 hover:bg-secondary/20 hover:border-secondary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
