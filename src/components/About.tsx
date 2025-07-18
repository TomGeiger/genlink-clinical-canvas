import { CheckCircle, Shield, Globe, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Industry Acumen",
      description: "Deep expertise across therapeutic areas with proven track record in clinical excellence."
    },
    {
      icon: Shield,
      title: "Global Compliance Standards",
      description: "Rigorous adherence to international regulatory requirements and quality assurance."
    },
    {
      icon: Globe,
      title: "Deep Therapeutic Expertise",
      description: "Specialized knowledge spanning rare diseases, oncology, neurology, and beyond."
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "Working hand-in-hand with sponsors to accelerate therapeutic development."
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">
              Strategic Support for Every Stage of Research
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-teal mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="slide-up">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground">
                  At GenLink Research, we believe groundbreaking science should never be limited by operational barriers.
                </p>
                
                <p className="text-muted-foreground">
                  Our comprehensive approach combines decades of clinical research experience with cutting-edge technology and global regulatory expertise to help sponsors bring life-changing therapies to market faster and more efficiently.
                </p>
                
                <p className="text-muted-foreground">
                  From first-in-human studies to large-scale Phase III trials, we provide the strategic oversight, operational excellence, and scientific rigor that complex clinical programs demand.
                </p>
              </div>

              {/* Call-to-Action */}
              <div className="mt-8">
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary"
                >
                  Discover Our Services
                </button>
              </div>
            </div>

            {/* Right Column - Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 scale-in" style={{ animationDelay: '0.3s' }}>
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className="card-feature group hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-primary">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-20 pt-16 border-t border-border fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                <div className="text-muted-foreground">Data Quality Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">45%</div>
                <div className="text-muted-foreground">Faster Enrollment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Global Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Regulatory Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;