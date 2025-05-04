
import React from 'react';
import { 
  TrendingUp, 
  Laptop, 
  Briefcase, 
  Bitcoin, 
  LineChart, 
  Share2, 
  ShieldCheck, 
  Clock 
} from "lucide-react";

const featureItems = [
  {
    icon: <TrendingUp className="h-12 w-12 text-digibazaar-primary" />,
    title: "Latest Money-Making Methods",
    description: "Discover tested & proven strategies to earn from anywhere, with regular updates on what's working now."
  },
  {
    icon: <Laptop className="h-12 w-12 text-digibazaar-primary" />,
    title: "High-Demand Digital Skills",
    description: "Master freelancing, AI tools, crypto trading, and social media growth with step-by-step guidance."
  },
  {
    icon: <Briefcase className="h-12 w-12 text-digibazaar-primary" />,
    title: "Freelancing Opportunities",
    description: "Get first dibs on lucrative freelance gigs, client leads, and platforms that pay premium rates."
  },
  {
    icon: <Bitcoin className="h-12 w-12 text-digibazaar-primary" />,
    title: "Crypto & Web3 Insights",
    description: "Stay ahead with actionable crypto strategies, NFT opportunities, and early access to promising projects."
  },
  {
    icon: <LineChart className="h-12 w-12 text-digibazaar-primary" />,
    title: "Passive Income Streams",
    description: "Build automated income systems that work while you sleep, from digital products to smart investments."
  },
  {
    icon: <Share2 className="h-12 w-12 text-digibazaar-primary" />,
    title: "Affiliate Marketing Mastery",
    description: "Unlock high-converting affiliate strategies and gain access to exclusive high-commission programs."
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-digibazaar-primary" />,
    title: "Verified Opportunities Only",
    description: "Every strategy, tool and opportunity is personally vetted to ensure you never waste time on scams."
  },
  {
    icon: <Clock className="h-12 w-12 text-digibazaar-primary" />,
    title: "Future-Proof Knowledge",
    description: "Stay updated on new tech, trends, and platforms before they go mainstream and become saturated."
  }
];

const Features = () => {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center gradient-text">Why Join DigiBazaar24?</h2>
        <p className="section-subtitle text-center">
          The digital economy is booming—but only those who act fast profit. We provide everything you need to succeed.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((item, index) => (
            <div key={index} className="feature-card">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
