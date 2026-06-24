'use client'

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary text-sm font-semibold mb-2 inline-block">Academic Background</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Education</h2>
        </div>

        <div className="grid gap-8">
          {/* University */}
          <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                🎓
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-2xl font-bold text-foreground">Mechanical Power Engineering</h3>
                  <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    2016 - 2022
                  </span>
                </div>
                <p className="text-lg text-primary font-semibold mb-3">Cairo University, Faculty of Engineering</p>
                <div className="space-y-2">
                  <p className="text-foreground/70">
                    <span className="font-semibold text-foreground">Graduation Grade:</span> Very Good with Honors
                  </p>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-foreground/60 mb-2">
                      <span className="font-semibold text-foreground">Core Focus Areas:</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Thermal Systems',
                        'Mechanical Design',
                        'HVAC Systems',
                        'Power Generation',
                        'Fluid Mechanics',
                        'Heat Transfer',
                      ].map((focus, idx) => (
                        <span key={idx} className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* High School */}
          <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                📚
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-2xl font-bold text-foreground">High School Degree</h3>
                  <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    2016
                  </span>
                </div>
                <p className="text-lg text-primary font-semibold mb-3">El-Shrouk Language School</p>
                <div className="space-y-2">
                  <p className="text-foreground/70">
                    <span className="font-semibold text-foreground">Graduation Grade:</span> 97.5%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Continuous Learning */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8">Continuous Learning & Development</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Advanced CAD Design',
                description: 'CATIA V6 and PLM system mastery',
              },
              {
                title: 'CFD & FEA Analysis',
                description: 'ANSYS Fluent and simulation expertise',
              },
              {
                title: 'ERP & SAP Systems',
                description: 'Material management and production planning',
              },
            ].map((cert, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                <p className="text-sm text-foreground/60">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
