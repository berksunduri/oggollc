"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const strengths = [
  'Centrally located in Kosovo with access to all European markets',
  'Over 20 years of experience in steel manufacturing',
  'ISO 9001 certified quality management system',
  'Team of highly skilled engineers and technicians',
  'State-of-the-art manufacturing facilities',
  'Commitment to sustainable and environmentally friendly practices',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              European Excellence, <span className="text-chart-1">Kosovo Heritage</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2023, OGGO•LLC has established itself as a leading steel manufacturing company in Kosovo with a strong presence across European markets. Our commitment to quality, precision, and innovation has made us the preferred partner for industries requiring specialized steel solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With state-of-the-art facilities and a team of skilled professionals, we deliver exceptional steel products that meet the highest industry standards and specific client requirements.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-chart-1 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-foreground">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Steel manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block">
              <div className="bg-chart-1 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-3xl font-bold mb-2">20+</p>
                <p className="text-white/90">Years of Industry Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}