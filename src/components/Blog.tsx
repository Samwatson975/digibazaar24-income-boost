
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: '10 High-Paying Freelance Skills in 2025',
    excerpt: 'Discover which digital skills are commanding top dollar in today\'s gig economy and how to master them quickly.',
    category: 'Freelancing',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Crypto Passive Income: 5 Methods That Actually Work',
    excerpt: 'Move beyond the hype and learn practical, sustainable ways to generate passive income with cryptocurrencies.',
    category: 'Crypto',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'How AI Tools Are Revolutionizing Side Hustles',
    excerpt: 'Leverage artificial intelligence to automate, scale, and innovate your side business with minimal investment.',
    category: 'AI',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Latest from Our Blog</h2>
        <p className="section-subtitle text-center">
          Actionable insights, practical guides, and success stories to fuel your online income journey
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-digibazaar-accent/20 text-digibazaar-primary rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-digibazaar-primary font-medium hover:text-digibazaar-secondary transition-colors"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-digibazaar-primary hover:bg-digibazaar-secondary text-white">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
