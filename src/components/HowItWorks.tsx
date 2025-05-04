
import React from 'react';
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "1",
    title: "Follow Us",
    description: "Get daily money-making tips, gig alerts, and skill-building guides delivered directly to your inbox.",
    badge: "Step 1"
  },
  {
    number: "2",
    title: "Learn & Apply",
    description: "Access free & premium resources to fast-track your success and implement what you learn immediately.",
    badge: "Step 2"
  },
  {
    number: "3",
    title: "Start Earning",
    description: "Implement strategies and turn your skills into passive & active income streams that grow over time.",
    badge: "Step 3"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">How It Works</h2>
        <p className="section-subtitle text-center">
          Our simple three-step process to help you start generating income online
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full">
                <Badge className="bg-digibazaar-accent text-digibazaar-dark font-semibold mb-6">
                  {step.badge}
                </Badge>
                <div className="text-8xl font-bold gradient-text mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-digibazaar-accent rounded-full text-center flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-digibazaar-dark">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl font-bold mb-6">⏳ Time Is Money – Don't Wait!</p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <p className="text-red-500 font-bold text-lg mb-2">❌</p>
              <p className="text-lg">"Someday" never comes</p>
            </div>
            <div className="text-center">
              <p className="text-green-500 font-bold text-lg mb-2">✅</p>
              <p className="text-lg">Your breakthrough starts NOW</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
