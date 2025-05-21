
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1920&h=1080",
  children,
  buttonText,
  buttonLink = "#",
}: HeroSectionProps) => {
  const bgStyle = backgroundImage
    ? { 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }
    : {};

  return (
    <div 
      className="relative overflow-hidden min-h-[80vh] flex items-center"
      style={bgStyle}
    >
      <div className="container mx-auto px-4 py-16 relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl mb-8 text-ghana-gold">{subtitle}</p>}
          {children}
          {buttonText && (
            <Button 
              asChild
              size="lg" 
              className="bg-ghana-gold text-ghana-green hover:bg-yellow-400 mt-8"
            >
              <a href={buttonLink}>{buttonText}</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
