import { Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Network', href: '#network' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">GenLink Research</h3>
                <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                  Leading global clinical research site specializing in comprehensive clinical trial management across all phases, delivering excellence in therapeutic development.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <p className="text-primary-foreground/80">
                  <span className="font-medium">Email:</span> genelinkresearch@gmail.com
                </p>
                <p className="text-primary-foreground/80">
                  <span className="font-medium">Phone:</span> 919-333-1572
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Clinical Trial Management</li>
                <li>Clinical Monitoring</li>
                <li>Medical Monitoring</li>
                <li>Regulatory Consulting</li>
                <li>Global CRA Network</li>
                <li>Digital Solutions</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
                © 2025 GenLink Research. All rights reserved.
              </div>

              {/* Social Links & Back to Top */}
              <div className="flex items-center space-x-4">
                {/* Social Media Links */}
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>

                {/* Back to Top Button */}
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300 ml-4"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Additional Legal Links */}
          <div className="mt-8 pt-6 border-t border-primary-foreground/20">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-primary-foreground/60">
              <button className="hover:text-primary-foreground transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-primary-foreground transition-colors duration-300">
                Terms of Service
              </button>
              <button className="hover:text-primary-foreground transition-colors duration-300">
                Quality Standards
              </button>
              <button className="hover:text-primary-foreground transition-colors duration-300">
                Compliance
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;