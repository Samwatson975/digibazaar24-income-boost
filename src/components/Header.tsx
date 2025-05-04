
import React from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-extrabold gradient-text">DigiBazaar24</span>
        </Link>
        
        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-white z-40 p-4">
                <nav className="flex flex-col space-y-4">
                  <a href="#features" className="text-lg font-medium py-2 border-b" onClick={() => setIsMenuOpen(false)}>Features</a>
                  <a href="#how-it-works" className="text-lg font-medium py-2 border-b" onClick={() => setIsMenuOpen(false)}>How It Works</a>
                  <a href="#blog" className="text-lg font-medium py-2 border-b" onClick={() => setIsMenuOpen(false)}>Blog</a>
                  <a href="#testimonials" className="text-lg font-medium py-2 border-b" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
                  <a href="#faq" className="text-lg font-medium py-2 border-b" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                  <Link to="/contact" className="text-lg font-medium py-2 border-b" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                  <Button className="mt-4 bg-gradient-to-r from-digibazaar-primary to-digibazaar-secondary text-white hover:from-digibazaar-secondary hover:to-digibazaar-primary">
                    Subscribe Now
                  </Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-digibazaar-primary font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-digibazaar-primary font-medium transition-colors">How It Works</a>
              <a href="#blog" className="text-gray-700 hover:text-digibazaar-primary font-medium transition-colors">Blog</a>
              <a href="#testimonials" className="text-gray-700 hover:text-digibazaar-primary font-medium transition-colors">Testimonials</a>
              <a href="#faq" className="text-gray-700 hover:text-digibazaar-primary font-medium transition-colors">FAQ</a>
              <Link to="/contact" className="text-gray-700 hover:text-digibazaar-primary font-medium transition-colors">Contact</Link>
            </nav>
            <Button className="bg-gradient-to-r from-digibazaar-primary to-digibazaar-secondary text-white hover:from-digibazaar-secondary hover:to-digibazaar-primary">
              Subscribe Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
