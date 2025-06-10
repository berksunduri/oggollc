"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Magnet, Droplets, Waves, Clock, CheckCircle } from 'lucide-react';

const ndtPrograms = [
  {
    id: 'visual-inspection',
    title: 'Visual Inspection (VT)',
    icon: Eye,
    description: 'Fundamental NDT method training covering visual examination techniques for detecting surface discontinuities and defects in welded structures.',
    duration: '2 days',
    certification: 'VT Level 1 & 2 Certificate',
    prerequisites: 'None',
    outcomes: [
      'Visual inspection principles and techniques',
      'Defect recognition and classification',
      'Inspection equipment and tools',
      'Reporting and documentation standards'
    ]
  },
  {
    id: 'magnetic-particle',
    title: 'Magnetic Particle Testing (MT)',
    icon: Magnet,
    description: 'Advanced training in magnetic particle testing for detecting surface and near-surface discontinuities in ferromagnetic materials.',
    duration: '3 days',
    certification: 'MT Level 1 & 2 Certificate',
    prerequisites: 'Basic NDT knowledge',
    outcomes: [
      'Magnetic particle testing principles',
      'Equipment setup and calibration',
      'Indication evaluation and interpretation',
      'Safety procedures and best practices'
    ]
  },
  {
    id: 'penetrant-testing',
    title: 'Penetrant Testing (PT)',
    icon: Droplets,
    description: 'Comprehensive training in liquid penetrant testing methods for detecting surface-breaking defects in non-porous materials.',
    duration: '3 days',
    certification: 'PT Level 1 & 2 Certificate',
    prerequisites: 'Basic understanding of materials',
    outcomes: [
      'Penetrant testing methodology',
      'Material compatibility and selection',
      'Processing techniques and timing',
      'Indication assessment and reporting'
    ]
  },
  {
    id: 'ultrasonic-testing',
    title: 'Ultrasonic Testing (UT)',
    icon: Waves,
    description: 'Advanced ultrasonic testing training for detecting internal flaws and measuring material thickness using high-frequency sound waves.',
    duration: '5 days',
    certification: 'UT Level 1 & 2 Certificate',
    prerequisites: 'Technical background recommended',
    outcomes: [
      'Ultrasonic wave propagation principles',
      'Equipment operation and calibration',
      'Flaw detection and sizing techniques',
      'Data interpretation and analysis'
    ]
  }
];

export default function NDTTraining() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Non-Destructive Testing (NDT) Training</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Develop expertise in essential NDT methods for quality assurance and defect detection in welded structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ndtPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/40 hover:border-chart-1/40 hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-chart-1/10 rounded-lg flex items-center justify-center group-hover:bg-chart-1/20 transition-colors">
                      <program.icon className="h-6 w-6 text-chart-1" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      NDT Training
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-chart-1 transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{program.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-chart-1 mr-2" />
                      <span className="text-sm font-medium">{program.duration}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Prerequisites: </span>
                      <span className="text-muted-foreground">{program.prerequisites}</span>
                    </div>
                  </div>

                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-4 w-4 text-chart-1 mr-2" />
                      <span className="font-semibold text-sm">{program.certification}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Learning Outcomes:</h4>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-chart-1 rounded-full mr-3 flex-shrink-0 mt-2" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-chart-1 hover:bg-chart-1/90 text-white" onClick={() => window.location.href = '/#contact'}>
                    Request Information
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}