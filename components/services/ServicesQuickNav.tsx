"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cog, Zap, Shield, Wrench, Layers, Settings } from 'lucide-react';

const services = [
  { id: 'gear-production', name: 'Gear Production', icon: Cog },
  { id: 'electrostatic-paint', name: 'Electrostatic Paint', icon: Zap },
  { id: 'galvanized-coating', name: 'Galvanized Coating', icon: Shield },
  { id: 'welded-construction', name: 'Welded Construction', icon: Wrench },
  { id: 'sheet-metal-twist', name: 'Sheet Metal Twist', icon: Layers },
  { id: 'machining', name: 'Machining', icon: Settings },
];

export default function ServiceQuickNav() {
  const [activeService, setActiveService] = useState('gear-production');

  const scrollToService = (serviceId: string) => {
    setActiveService(serviceId);
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b items-center border-border">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center overflow-x-auto py-4 space-x-2 scrollbar-hide">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => scrollToService(service.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeService === service.id
                  ? 'bg-primary text-background'
                  : 'bg-secondary hover:bg-secondary/80 text-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <service.icon size={16} />
              <span className="font-medium">{service.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}