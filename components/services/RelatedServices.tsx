"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const relatedServices = [
  {
    title: 'Quality Assurance',
    description: 'Comprehensive testing and certification services',
    link: '#quality'
  },
  {
    title: 'Engineering Consultation',
    description: 'Expert technical guidance and design optimization',
    link: '#consultation'
  },
  {
    title: 'Logistics & Delivery',
    description: 'Efficient shipping solutions across Europe',
    link: '#logistics'
  },
  {
    title: 'Maintenance Services',
    description: 'Ongoing support and equipment maintenance',
    link: '#maintenance'
  }
];

export default function RelatedServices() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        {/* Related Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/40 hover:border-chart-1/40 hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2 group-hover:text-chart-1 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-chart-1 transition-colors" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-primary to-chart-1 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our engineering team to discuss your specific requirements and get a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-primary">
              <Phone className="mr-2 h-5 w-5" />
              +383 48 353 508
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Mail className="mr-2 h-5 w-5" />
              sales@oggollc.com
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}