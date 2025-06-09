"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-chart-1 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-heading">
              Ready to Elevate Your Industrial Steel Solutions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with OGGO•LLC for exceptional steel manufacturing services tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                size="lg" 
                className="bg-white text-chart-1 hover:bg-white/90"
                onClick={() => window.location.href = '/#contact'}
                >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-black dark:text-white border-white hover:bg-white/10"
              >
                Learn More About Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}