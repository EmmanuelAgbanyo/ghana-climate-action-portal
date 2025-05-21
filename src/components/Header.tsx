
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `font-medium px-4 py-2 rounded-md transition-colors ${
      isActive 
        ? "text-white bg-ghana-green" 
        : "text-gray-700 hover:text-ghana-green hover:bg-gray-100"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-ghana-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">CIC</span>
            </div>
            <span className="font-heading font-bold text-lg text-ghana-green hidden sm:block">
              Climate Information Centre - Ghana
            </span>
            <span className="font-heading font-bold text-lg text-ghana-green sm:hidden">
              CIC Ghana
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/climate-info" className={navLinkClass}>Climate Information</NavLink>
            <NavLink to="/adaptation" className={navLinkClass}>Adaptation</NavLink>
            <NavLink to="/leadership" className={navLinkClass}>Leadership</NavLink>
            <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <Button 
              variant="outline" 
              className="ml-2 border-ghana-green text-ghana-green hover:bg-ghana-green hover:text-white"
            >
              Ask ClimateWise
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-ghana-green"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink>
            <NavLink to="/climate-info" className={navLinkClass} onClick={closeMenu}>Climate Information</NavLink>
            <NavLink to="/adaptation" className={navLinkClass} onClick={closeMenu}>Adaptation</NavLink>
            <NavLink to="/leadership" className={navLinkClass} onClick={closeMenu}>Leadership</NavLink>
            <NavLink to="/blog" className={navLinkClass} onClick={closeMenu}>Blog</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink>
            <Button 
              variant="outline" 
              className="border-ghana-green text-ghana-green hover:bg-ghana-green hover:text-white"
            >
              Ask ClimateWise
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
