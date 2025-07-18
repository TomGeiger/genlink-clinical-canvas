import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Network', id: 'network' },
    { label: 'Leadership', id: 'leadership' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-primary cursor-pointer hover:text-teal transition-colors duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            GenLink Research
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-lg border-t border-border">
            <div className="container mx-auto px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors duration-300 font-medium border-b border-border/50 last:border-0"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary mt-4 w-full text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;