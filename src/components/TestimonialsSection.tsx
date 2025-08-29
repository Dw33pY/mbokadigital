import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Brian Mwangi',
      role: 'Retail Owner',
      business: 'Mwangi Electronics',
      content: 'Mboka Digital helped me take my shop online. The process was smooth and affordable! My customers can now browse my products online and I have seen a 40% increase in sales.',
      rating: 5,
    },
    {
      name: 'Anne Wanjiku',
      role: 'Salon Owner',
      business: 'Beauty Haven Salon',
      content: 'The team created a professional website for my salon. My customers love the online booking system and I can manage appointments so much easier now. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Kevin Ochieng',
      role: 'Business Consultant',
      business: 'KO Consulting',
      content: 'Great experience! They explained everything clearly and delivered on time. The website looks professional and has helped me attract new clients. Worth every shilling.',
      rating: 5,
    },
    {
      name: 'Mary Njeri',
      role: 'Restaurant Owner',
      business: 'Mama Kitchen',
      content: 'Amazing work! Our restaurant website now showcases our menu beautifully and customers can place orders online. The team was patient and professional throughout.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with Mboka Digital.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-20">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author Info */}
              <div className="space-y-2">
                <div className="text-xl font-semibold gradient-text">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].business}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                onClick={prevTestimonial}
                variant="ghost"
                size="sm"
                className="glass-strong rounded-full p-3 hover:neon-glow"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary shadow-neon'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextTestimonial}
                variant="ghost"
                size="sm"
                className="glass-strong rounded-full p-3 hover:neon-glow"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Ready to join our satisfied clients?
            </p>
            <Button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;