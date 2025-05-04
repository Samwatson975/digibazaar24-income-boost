
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What makes DigiBazaar24 different from other platforms?",
    answer: "Unlike general educational platforms, we focus exclusively on money-making opportunities and skills that generate real income. Our content is vetted for practicality, and we provide ongoing support rather than just courses. We also offer early access to emerging trends and opportunities before they become saturated."
  },
  {
    question: "Is this suitable for complete beginners?",
    answer: "Absolutely! We provide content for all experience levels, from beginner-friendly guides to advanced strategies. Many of our most successful members started with zero online income experience. Our step-by-step approach ensures nobody gets left behind."
  },
  {
    question: "How soon can I expect to start earning?",
    answer: "This depends on your current skills, time commitment, and which opportunities you pursue. Some members implement quick freelancing strategies and earn within days, while others build more substantial passive income streams over weeks or months. We're transparent that real success requires consistent effort, but we provide the shortest path possible."
  },
  {
    question: "Do I need technical skills to benefit from this?",
    answer: "Not at all. We cover many non-technical income opportunities and provide simple, beginner-friendly tutorials for any technical skills required. Many of our members had no coding or design experience when they started, but now earn from these skills."
  },
  {
    question: "How much does membership cost?",
    answer: "We offer multiple membership tiers to suit different budgets and goals. Our basic subscription starts at an accessible price point with immediate access to core strategies and opportunities. Premium tiers include personalized guidance, early access features, and exclusive high-value opportunities. All tiers offer exceptional ROI compared to traditional education."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no questions asked. We're confident in the value we provide and want you to stay because you're getting results, not because you're locked in."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <p className="section-subtitle text-center">
          Everything you need to know before getting started
        </p>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold text-lg">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
