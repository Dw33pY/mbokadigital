import { Button } from '@/components/ui/button';
import { Check, Zap, Crown, Rocket, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const packages = [
    {
      name: 'Starter Package',
      price: 'Ksh 2,999',
      period: 'One-time',
      icon: Zap,
      features: [
        '1-page website (subdomain hosting included)',
        'Mobile-friendly design',
        'Basic SEO setup',
        'Free maintenance for 1 month',
        'Delivery: 3–5 days',
      ],
      popular: false,
    },
    {
      name: 'Pro Package',
      price: 'Ksh 6,999',
      period: 'Setup + Ksh 1,599/month',
      icon: Rocket,
      features: [
        'Up to 5 pages',
        'Custom domain & hosting included',
        'Business email setup',
        'SEO optimization',
        'Monthly maintenance & updates',
        'Delivery: 5–7 days',
      ],
      popular: true,
    },
    {
      name: 'Elite Package',
      price: 'Ksh 12,999',
      period: 'Setup + Ksh 3,999/month',
      icon: Crown,
      features: [
        'Unlimited pages',
        'Premium hosting + free SSL',
        'Branding package (logo + visuals)',
        'Advanced SEO & Google Business setup',
        'Priority support & full maintenance',
        'Delivery: 7–10 days',
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Digital Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional websites designed to grow your business. 
            From simple landing pages to complete digital solutions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={pkg.name}
                className={`relative glass rounded-3xl p-8 transition-all duration-500 hover:scale-110 hover:rotate-1 neon-glow group cursor-pointer animate-slide-up ${
                  pkg.popular ? 'ring-2 ring-primary shadow-glow animate-pulse-slow' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 glass-strong rounded-2xl flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Package Info */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold gradient-text mb-1">{pkg.price}</div>
                  <p className="text-muted-foreground text-sm">{pkg.period}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={scrollToContact}
                  className={`w-full rounded-xl py-6 transition-all duration-300 group hover:scale-105 ${
                    pkg.popular
                      ? 'bg-gradient-primary hover:shadow-glow text-primary-foreground'
                      : 'glass-strong hover:neon-glow hover:bg-gradient-primary hover:text-primary-foreground'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need something custom? Let's discuss your unique requirements.
          </p>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="glass border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Contact Us for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;