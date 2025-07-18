import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "genelinkresearch@gmail.com",
      href: "mailto:genelinkresearch@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "919-333-1572",
      href: "tel:919-333-1572"
    },
    {
      icon: MapPin,
      title: "Global Offices",
      value: "Multiple Locations Worldwide",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">
              Let's Bring Breakthroughs to Life
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-teal mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're launching a first-in-human study or a global Phase III trial, we're ready to support your vision. Reach out for tailored clinical research partnerships.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <div className="slide-up">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Ready to Start Your Clinical Journey?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Our team of clinical research experts is here to discuss your specific needs and develop a customized approach that aligns with your therapeutic goals and timeline.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <div 
                        key={contact.title}
                        className="flex items-center group scale-in"
                        style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                      >
                        <div className="p-4 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">{contact.title}</h4>
                          {contact.href.startsWith('#') ? (
                            <p className="text-muted-foreground">{contact.value}</p>
                          ) : (
                            <a 
                              href={contact.href}
                              className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            >
                              {contact.value}
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-br from-accent to-secondary p-6 rounded-xl">
                  <h4 className="font-semibold text-primary mb-3">Why Choose GenLink Research?</h4>
                  <div className="space-y-2">
                    {[
                      "Rapid response within 24 hours",
                      "Comprehensive project scoping",
                      "Transparent pricing and timelines",
                      "Dedicated project management"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-teal mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="card-service">
                <h3 className="text-xl font-bold text-primary mb-6">Start the Conversation</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Tell us about your clinical research needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-hero disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;