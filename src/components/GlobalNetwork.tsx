import { Globe, MapPin, Users, Award, Clock, Shield } from 'lucide-react';

const GlobalNetwork = () => {
  const networkFeatures = [
    {
      icon: MapPin,
      title: "Regional Deployment",
      description: "CRAs strategically positioned for rapid deployment across all major clinical research regions."
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description: "Deep understanding of regional regulations, cultural nuances, and healthcare systems."
    },
    {
      icon: Users,
      title: "Site Coaching",
      description: "Comprehensive training and support to empower research sites for optimal performance."
    },
    {
      icon: Shield,
      title: "Data Integrity",
      description: "Rigorous quality assurance protocols ensuring highest standards of data collection."
    },
    {
      icon: Award,
      title: "Protocol Compliance",
      description: "Expert guidance and monitoring to maintain strict adherence to study protocols."
    },
    {
      icon: Clock,
      title: "Patient Engagement",
      description: "Innovative strategies to improve patient recruitment, retention, and experience."
    }
  ];

  const regions = [
    { name: "North America", studies: "250+", sites: "500+" },
    { name: "Europe", studies: "180+", sites: "350+" },
    { name: "Asia-Pacific", studies: "120+", sites: "200+" },
    { name: "Latin America", studies: "80+", sites: "150+" },
    { name: "Middle East & Africa", studies: "45+", sites: "90+" }
  ];

  return (
    <section id="network" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">
              A CRA Network That Reaches the World
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-teal mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our global network of clinical research associates combines local expertise with international standards, ensuring seamless execution across diverse markets and regulatory environments.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Description */}
            <div className="slide-up">
              <div className="space-y-6">
                <div className="text-lg leading-relaxed">
                  <p className="text-foreground mb-4">
                    Our CRAs are regionally based for rapid deployment, fluent in local regulations, and experts in EDC/eTMF systems.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We empower sites through coaching in data integrity, protocol compliance, and patient engagement, creating a collaborative ecosystem that drives study success.
                  </p>
                  <p className="text-muted-foreground">
                    With deep therapeutic expertise and cultural understanding, our team bridges the gap between global clinical standards and local execution excellence.
                  </p>
                </div>

                {/* Call-to-Action */}
                <div className="pt-6">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-secondary"
                  >
                    Explore Global Capabilities
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Regional Stats */}
            <div className="scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-accent to-secondary p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Global Reach</h3>
                <div className="space-y-4">
                  {regions.map((region, index) => (
                    <div 
                      key={region.name}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors duration-300"
                      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                    >
                      <div className="font-medium text-primary">{region.name}</div>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{region.studies} studies</span>
                        <span>{region.sites} sites</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Network Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className="card-service group scale-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary group-hover:text-teal transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 pt-16 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in" style={{ animationDelay: '1.2s' }}>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Active Sites</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">On-Time Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Global Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;