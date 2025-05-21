
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
  backgroundImage,
  children,
  buttonText,
  buttonLink = "#",
}: HeroSectionProps) => {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <div 
      className="relative overflow-hidden bg-gradient-to-br from-ghana-green to-ghana-brown min-h-[80vh] flex items-center"
      style={bgStyle}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
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
