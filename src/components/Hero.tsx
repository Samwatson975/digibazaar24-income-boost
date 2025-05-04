
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-digibazaar-primary to-digibazaar-secondary text-white py-20 md:py-32">
      {/* Abstract shapes for background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Turn Skills Into Income & Dominate the Digital World
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Your ultimate hub for online money-making strategies, cutting-edge digital skills, 
            and exclusive opportunities in freelancing, crypto, AI, affiliate marketing, and more.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-digibazaar-accent text-digibazaar-dark font-bold text-lg px-8 py-6 animate-pulse-glow">
              Subscribe Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white font-semibold text-lg px-8 py-6 hover:bg-white/20">
              Learn More
            </Button>
          </div>
          
          <div className="pt-6 border-t border-white/20">
            <p className="font-medium text-gray-200 mb-4">Stop Scrolling. Start Earning.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-10">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-digibazaar-accent" />
                <span>Latest Money-Making Methods</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-digibazaar-accent" />
                <span>Exclusive Deals & Offers</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-digibazaar-accent" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
