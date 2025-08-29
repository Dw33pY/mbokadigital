import { useEffect, useRef } from 'react';
import aboutIllustration from '@/assets/about-illustration.jpg';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-up');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">Mboka Digital</span>?
              </h2>
            </div>

            <div className="fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Mboka Digital, we believe every business deserves a strong online presence. 
                We create affordable, professional websites that help small businesses grow 
                and compete in the digital age.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From clean landing pages to fully managed websites, we've got a package for you. 
                Our team combines creativity with technical expertise to deliver solutions that 
                not only look great but drive real results for your business.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-6 fade-in-up">
              <div className="glass rounded-2xl p-6">
                <div className="text-2xl font-bold gradient-text mb-2">Fast Delivery</div>
                <p className="text-muted-foreground">Get your website live in as little as 3 days</p>
              </div>
              
              <div className="glass rounded-2xl p-6">
                <div className="text-2xl font-bold gradient-text mb-2">Affordable</div>
                <p className="text-muted-foreground">Professional quality at prices that work for you</p>
              </div>
              
              <div className="glass rounded-2xl p-6">
                <div className="text-2xl font-bold gradient-text mb-2">Full Support</div>
                <p className="text-muted-foreground">Ongoing maintenance and updates included</p>
              </div>
              
              <div className="glass rounded-2xl p-6">
                <div className="text-2xl font-bold gradient-text mb-2">Local Expertise</div>
                <p className="text-muted-foreground">Based in Nairobi, serving Kenyan businesses</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 fade-in-up">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="fade-in-up">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-primary rounded-full blur-xl opacity-20 animate-float" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-secondary rounded-full blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
              
              {/* Main Image */}
              <div className="glass rounded-3xl p-8 overflow-hidden">
                <img
                  src={aboutIllustration}
                  alt="Team collaboration and creativity"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 glass-strong rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-2xl">🚀</div>
              </div>
              
              <div className="absolute bottom-8 left-8 glass-strong rounded-2xl p-4 animate-float" style={{ animationDelay: '3s' }}>
                <div className="text-2xl">✨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;