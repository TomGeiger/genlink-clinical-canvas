import { Heart, Brain, Shield, Droplets, Wind, Eye, Pill, Activity } from 'lucide-react';

const TherapeuticAreas = () => {
  const areas = [
    {
      icon: Pill,
      title: "Rare Diseases",
      description: "Specialized expertise in orphan drug development and regulatory pathways",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Activity,
      title: "Oncology",
      description: "Comprehensive cancer research across all phases and tumor types",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Advanced neurological and psychiatric disorder research capabilities",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Cardiovascular and metabolic disease clinical trial expertise",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Immunology",
      description: "Autoimmune and inflammatory condition research programs",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Droplets,
      title: "Endocrinology",
      description: "Diabetes, hormonal, and metabolic disorder clinical studies",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Activity,
      title: "Infectious Diseases",
      description: "Antimicrobial and vaccine development research",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Droplets,
      title: "Renal",
      description: "Kidney disease and dialysis-related clinical trials",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Wind,
      title: "Respiratory",
      description: "Pulmonary and respiratory condition research expertise",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="expertise" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">
              Therapeutic Expertise That Drives Results
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-teal mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our deep therapeutic area knowledge spans across medical specialties, ensuring your clinical trials benefit from targeted expertise and nuanced understanding of disease-specific challenges.
            </p>
          </div>

          {/* Therapeutic Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {areas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div 
                  key={area.title}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:scale-105 scale-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${area.color} mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-teal transition-colors duration-300">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {area.description}
                    </p>
                    
                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expertise Highlights */}
          <div className="grid md:grid-cols-3 gap-8 slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Specialized Protocols</h3>
              <p className="text-muted-foreground text-sm">
                Tailored study designs that address unique therapeutic area requirements and regulatory considerations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Safety Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Advanced safety monitoring and risk management protocols specific to each therapeutic indication.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Endpoint Optimization</h3>
              <p className="text-muted-foreground text-sm">
                Strategic endpoint selection and measurement approaches that maximize study success potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapeuticAreas;