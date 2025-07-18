import { Award, Briefcase, GraduationCap, Target } from 'lucide-react';

const Leadership = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Unwavering commitment to the highest standards of clinical research quality and regulatory compliance."
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every study we touch brings us closer to life-changing therapies that improve patient outcomes worldwide."
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Decades of collective expertise across all phases of clinical development and therapeutic areas."
    },
    {
      icon: GraduationCap,
      title: "Innovation",
      description: "Continuous learning and adoption of cutting-edge technologies to advance clinical research."
    }
  ];

  const expertise = [
    "Clinical Operations Leadership",
    "Regulatory Strategy & Compliance", 
    "Global Project Management",
    "Quality Assurance & Risk Management",
    "Site Network Development",
    "Data Science & Analytics",
    "Medical & Scientific Affairs",
    "Business Development & Partnerships"
  ];

  return (
    <section id="leadership" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">
              Led by Experts, Driven by Purpose
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-teal mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              GenLink Research is powered by a team of clinical professionals with decades of experience in operations, monitoring, and regulatory strategy. We bring excellence to every study we touch.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Leadership Description */}
            <div className="slide-up">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Transforming Clinical Research Through Expertise
                </h3>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Our leadership team combines extensive clinical research experience with deep therapeutic expertise, regulatory knowledge, and operational excellence.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  With proven track records in managing complex global studies, our experts understand the intricacies of bringing innovative therapies from laboratory to market. We've successfully navigated regulatory challenges across multiple regions and therapeutic areas.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  This depth of experience enables us to anticipate challenges, optimize protocols, and deliver results that exceed expectations while maintaining the highest standards of quality and compliance.
                </p>

                {/* Expertise Areas */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-primary mb-4">Core Leadership Expertise</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {expertise.map((item, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-teal rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Values Grid */}
            <div className="scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div 
                      key={value.title}
                      className="card-feature group hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-primary group-hover:text-teal transition-colors duration-300">
                          {value.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Leadership Metrics */}
          <div className="bg-gradient-to-r from-accent to-secondary p-8 rounded-2xl fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              Leadership Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground text-sm">Combined Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground text-sm">Therapeutic Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500M+</div>
                <div className="text-muted-foreground text-sm">Study Budgets Managed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 slide-up" style={{ animationDelay: '1s' }}>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Partner with Proven Excellence
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our leadership team is ready to bring their expertise to your clinical program. Let's discuss how our experience can accelerate your path to success.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Meet Our Leadership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;