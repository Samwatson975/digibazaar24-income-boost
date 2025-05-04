
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Freelance Designer",
    image: "",
    content: "Before DigiBazaar24, I struggled to find consistent freelance work. Their gig alerts and skill recommendations helped me double my income in just 3 months!",
    stars: 5
  },
  {
    name: "Michael T.",
    role: "Digital Nomad",
    image: "",
    content: "The crypto insights alone paid for my subscription 10x over. I've been able to identify several early opportunities that have performed incredibly well.",
    stars: 5
  },
  {
    name: "Priya M.",
    role: "Social Media Manager",
    image: "",
    content: "I implemented just one of their passive income strategies and now make an extra $1,200/month with minimal ongoing effort. Game changer!",
    stars: 5
  },
  {
    name: "James L.",
    role: "Former Office Worker",
    image: "",
    content: "After being laid off, DigiBazaar24's AI tool tutorials helped me land my first tech job with a 30% salary increase. Best investment I've made in myself.",
    stars: 5
  }
];

const RatingStars = ({ count }: { count: number }) => {
  return (
    <div className="flex">
      {[...Array(count)].map((_, i) => (
        <StarIcon key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-gradient-to-r from-digibazaar-primary to-digibazaar-secondary text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-white">Success Stories</h2>
        <p className="section-subtitle text-center text-gray-100">
          Join thousands of digital earners who have transformed their financial future
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-2 border-2 border-digibazaar-accent">
                    <AvatarFallback className="bg-digibazaar-accent text-digibazaar-dark">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <RatingStars count={testimonial.stars} />
                <p className="mt-4 text-gray-100">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
