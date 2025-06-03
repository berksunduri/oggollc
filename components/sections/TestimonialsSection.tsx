"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Hans Mueller',
    position: 'Project Manager',
    company: 'Alpine Transit Systems',
    testimonial: 'OGGO•LLC delivered exceptional quality steel components for our cable car system. Their attention to detail and commitment to meeting our specifications was impressive.',
    avatar: 'HM',
    rating: 5,
  },
  {
    name: 'Sophia Bergmann',
    position: 'Chief Engineer',
    company: 'Hamburg Port Authority',
    testimonial: 'We\'ve worked with OGGO•LLC on multiple port infrastructure projects. Their ability to deliver complex steel structures on time and to exact specifications has made them our preferred partner.',
    avatar: 'SB',
    rating: 5,
  },
  {
    name: 'Marco Rossi',
    position: 'Operations Director',
    company: 'Mediterranean Shipyards',
    testimonial: 'The quality of galvanized steel components provided by OGGO•LLC has significantly extended the lifespan of our marine structures. Excellent service and products.',
    avatar: 'MR',
    rating: 4,
  },
  {
    name: 'Elena Popescu',
    position: 'Procurement Manager',
    company: 'Danube Logistics',
    testimonial: 'OGGO•LLC\'s ability to customize steel solutions for our specific cargo handling needs has improved our operational efficiency. Their team is responsive and knowledgeable.',
    avatar: 'EP',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what our European partners have to say about working with OGGO•LLC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/40 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? 'text-chart-1 fill-chart-1' : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.testimonial}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback className="bg-chart-1/10 text-chart-1">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}