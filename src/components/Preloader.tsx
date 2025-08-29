import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 3500); // Show for 3.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-50 bg-background transition-opacity duration-500 opacity-0 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted animate-gradient bg-[length:400%_400%]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-typewriter gradient-text font-mono overflow-hidden whitespace-nowrap w-0 mx-auto">
            Mboka Digital
          </h1>
        </div>
        
        {/* Loading Bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-primary animate-[slide-right_3s_ease-in-out] w-full" 
               style={{ animation: 'slide-right 3s ease-in-out forwards' }} />
        </div>
        
        <p className="text-muted-foreground mt-4 animate-slide-up">
          Creating Digital Magic...
        </p>
      </div>
    </div>
  );
};

export default Preloader;