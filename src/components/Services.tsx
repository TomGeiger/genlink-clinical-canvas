import { 
  FileText, 
  Monitor, 
  Shield, 
  Settings, 
  Database, 
  Users, 
  BarChart3, 
  Smartphone 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Clinical Trial Management",
      subtitle: "Phases I–IV",
      description: "Comprehensive study management from protocol development through database lock, ensuring timeline adherence and quality delivery.",
      features: ["Protocol optimization", "Site selection & management", "Timeline coordination", "Quality oversight"]
    },
    {
      icon: Monitor,
      title: "Clinical Monitoring",
      subtitle: "On-site & Remote",
      description: "Expert monitoring services combining traditional on-site visits with innovative remote monitoring technologies.",
      features: ["Source data verification", "Protocol compliance", "Risk-based monitoring", "Real-time reporting"]
    },
    {
      icon: Shield,
      title: "Medical Monitoring",
      subtitle: "Safety & Efficacy",
      description: "Specialized medical oversight ensuring patient safety and optimal data interpretation throughout the study lifecycle.",
      features: ["Safety assessments", "Medical review", "Adverse event management", "Data interpretation"]
    },
    {
      icon: Settings,
      title: "Regulatory Consulting",
      subtitle: "Global Compliance",
      description: "Strategic regulatory guidance to navigate complex international requirements and accelerate approval pathways.",
      features: ["Regulatory strategy", "Submission support", "Authority liaison", "Compliance auditing"]
    },
    {
      icon: Database,
      title: "eTMF & EDC System Oversight",
      subtitle: "Digital Excellence",
      description: "Advanced electronic systems management ensuring data integrity, accessibility, and regulatory compliance.",
      features: ["System validation", "Data management", "Quality control", "Inspection readiness"]
    },
    {
      icon: Users,
      title: "Custom CRA Deployment",
      subtitle: "Expert Teams",
      description: "Dedicated clinical research associates tailored to your study needs and therapeutic requirements.",
      features: ["Therapeutic expertise", "Regional knowledge", "Flexible deployment", "Continuous training"]
    },
    {
      icon: BarChart3,
      title: "PRO Collection",
      subtitle: "Patient Outcomes",
      description: "Patient-reported outcome strategies and implementation for comprehensive efficacy and safety assessments.",
      features: ["PRO strategy", "Instrument selection", "Data collection", "Analysis support"]
    },
    {
      icon: Smartphone,
      title: "eDiaries, IVR & Real-Time Data",
      subtitle: "Digital Solutions",
      description: "Cutting-edge digital tools for enhanced patient engagement and real-time data capture and monitoring.",
      features: ["Digital platforms", "Real-time monitoring", "Patient engagement", "Data analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">
              Comprehensive Clinical Trial Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-teal mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end clinical research solutions designed to accelerate your path to market while maintaining the highest standards of quality and compliance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.title}
                  className="card-service group hover:border-primary/20 scale-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {/* Header */}
                  <div className="flex items-start mb-6">
                    <div className="p-4 bg-primary/5 rounded-xl mr-4 group-hover:bg-primary/10 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-teal transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-teal mb-3">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/10 transition-colors duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-to-r from-accent to-secondary p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Accelerate Your Clinical Program?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how our comprehensive services can streamline your clinical development and bring your therapeutic vision to life.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;