import { ArrowDown, ChevronDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-teal/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-foreground/20 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-foreground/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary-foreground/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary-foreground/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-5xl mx-auto fade-in">
          <h1 className="heading-hero text-primary-foreground mb-8">
            Innovating the Future of Clinical Trials
          </h1>
          
          <p className="text-hero text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
            Full-service clinical research management across Phases I–IV, delivering outcomes for tomorrow's therapies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={scrollToServices}
              className="btn-hero scale-in"
              style={{ animationDelay: '0.3s' }}
            >
              Explore Our Expertise
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary-foreground border-2 border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-lg font-semibold text-lg transition-[var(--transition-smooth)] scale-in"
              style={{ animationDelay: '0.5s' }}
            >
              Start the Conversation
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 slide-up" style={{ animationDelay: '0.7s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Clinical Trials</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Countries Served</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToServices}
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;