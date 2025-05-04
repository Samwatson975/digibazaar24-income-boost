
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-digibazaar-dark text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">DigiBazaar24</h3>
            <p className="mb-4">
              Your ultimate hub for online money-making strategies and digital skills that generate real income.
            </p>
            <p className="text-sm">
              &copy; {currentYear} DigiBazaar24. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-digibazaar-accent transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-digibazaar-accent transition-colors">How It Works</a></li>
              <li><a href="#blog" className="hover:text-digibazaar-accent transition-colors">Blog</a></li>
              <li><a href="#testimonials" className="hover:text-digibazaar-accent transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-digibazaar-accent transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-digibazaar-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-digibazaar-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-digibazaar-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-digibazaar-accent transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:Digibazaar9@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-sm">
              <a href="mailto:Digibazaar9@gmail.com" className="hover:text-digibazaar-accent transition-colors">
                Digibazaar9@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
