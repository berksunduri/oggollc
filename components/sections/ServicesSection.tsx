"use client"

import { motion } from 'framer-motion';
import { Zap, PenTool as Tool, Compass, Layers, Cog, Scale } from 'lucide-react';

const services = [
  {
    title: 'Galvanizing',
    description: 'Hot-dip galvanizing for superior corrosion protection, extending the lifespan of steel structures in harsh environments.',
    icon: Zap,
  },
  {
    title: 'Precision Welding',
    description: 'Advanced welding techniques including MIG, TIG, and laser welding for complex steel structures and components.',
    icon: Tool,
  },
  {
    title: 'Steel Fabrication',
    description: 'Custom steel fabrication services tailored to specific industrial needs and engineering requirements.',
    icon: Compass,
  },
  {
    title: 'CNC Machining',
    description: 'High-precision CNC machining for intricate steel components with tight tolerances and complex geometries.',
    icon: Cog,
  },
  {
    title: 'Structural Steel',
    description: 'Design and manufacturing of structural steel components for construction, infrastructure, and industrial applications.',
    icon: Layers,
  },
  {
    title: 'Quality Control',
    description: 'Rigorous quality assurance processes ensuring all products meet European standards and client specifications.',
    icon: Scale,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Industrial Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive steel manufacturing capabilities delivering precision, quality, and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-muted/40 to-muted/30 rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-background" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>

              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-block bg-primary text-background px-6 py-3 rounded-lg font-semibold">
            Delivering Excellence in Every Detail
          </div>
        </div>
      </div>
    </section>
  );
}
