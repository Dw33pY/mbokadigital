import { useState } from 'react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Preloader from '@/components/Preloader';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        {/* Preloader */}
        {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
        
        {/* Main Content */}
        <div className={`transition-opacity duration-500 ${showPreloader ? 'opacity-0' : 'opacity-100'}`}>
          <Navigation />
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
