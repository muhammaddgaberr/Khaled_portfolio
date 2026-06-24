'use client'

export function AboutSection() {
  const specialties = [
    'Product Development',
    'Design for Manufacturing (DFM)',
    'Cost Optimization',
    'Supplier Localization',
    'SAP & ERP Systems',
    'CATIA V6 Design',
    'PLM (3DEXPERIENCE)',
    'HVAC Systems',
    'Motors Development',
    'CFD & FEA Analysis',
    'Technical Documentation',
    'Project Management',
  ]

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-secondary text-sm font-semibold mb-2 inline-block">About Me</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Overview
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Self-motivated Mechanical Engineer with strong expertise in product design, development, and manufacturing optimization. I bring a strategic approach to engineering challenges with a proven track record of delivering cost-effective solutions and driving innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Core Competencies</h3>
            <div className="grid grid-cols-2 gap-4">
              {specialties.slice(0, 6).map((specialty, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <p className="font-semibold text-foreground text-sm">{specialty}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Key Achievements</h3>
            <div className="grid grid-cols-2 gap-4">
              {specialties.slice(6).map((specialty, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg border border-secondary/10 hover:border-secondary/30 transition-colors"
                >
                  <p className="font-semibold text-foreground text-sm">{specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
