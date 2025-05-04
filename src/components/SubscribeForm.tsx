
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Check } from "lucide-react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive your first money-making tip shortly.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section className="section bg-digibazaar-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-white">Join Thousands of Digital Earners Today!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Get exclusive access to money-making opportunities and start your journey to financial freedom.
          </p>
          
          {submitted ? (
            <div className="bg-green-600/20 border border-green-600/50 rounded-lg p-8 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">You're In!</h3>
              <p className="text-gray-300">
                Check your inbox for a confirmation email and your first money-making tip.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/10 border-gray-700 text-white placeholder:text-gray-400 h-14"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit"
                disabled={loading}
                className="bg-digibazaar-accent text-digibazaar-dark font-bold h-14 px-8 hover:bg-digibazaar-accent/90"
              >
                {loading ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </form>
          )}
          
          <div className="mt-8 text-sm text-gray-400">
            <p>By subscribing, you agree to receive emails from DigiBazaar24 and can unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeForm;
