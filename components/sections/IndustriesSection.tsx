"use client"

import { motion } from 'framer-motion';
import { Cable, Anchor, Ship, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const industries = [
  {
    title: 'Cable Transport',
    description: 'Critical components for cable cars, ski lifts, and other aerial transportation systems.',
    icon: Cable,
  },
  {
    title: 'Marine & Shipyards',
    description: 'Corrosion-resistant steel structures and components for vessels and marine infrastructure.',
    icon: Ship,
  },
  {
    title: 'Ports & Harbors',
    description: 'Durable steel solutions for harbor infrastructure, loading equipment, and port facilities.',
    icon: Anchor,
  },
  {
    title: 'Cargo Transport',
    description: 'Specialized steel components for freight transport, cargo handling, and logistics systems.',
    icon: Truck,
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Providing specialized steel solutions for demanding industrial applications across Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/40 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-chart-1/10 rounded-full flex items-center justify-center mb-4">
                    <industry.icon className="h-8 w-8 text-chart-1" />
                  </div>
                  <CardTitle className="text-xl font-bold">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{industry.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}