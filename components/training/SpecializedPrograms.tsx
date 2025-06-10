"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Atom, Settings, Wrench, Clock, Users, CheckCircle } from 'lucide-react';

const specializedPrograms = [
  {
    id: 'poka-yoke',
    title: 'Poka Yoke Methodologies',
    icon: Target,
    description: 'Learn error-proofing techniques and mistake-prevention methodologies to enhance quality control and reduce defects in manufacturing processes.',
    duration: '2 days',
    certification: 'Poka Yoke Implementation Certificate',
    prerequisites: 'Basic quality management knowledge',
    outcomes: [
      'Error-proofing principles and techniques',
      'Mistake prevention system design',
      'Quality control enhancement methods',
      'Implementation strategies and best practices'
    ]
  },
  {
    id: 'materials-science',
    title: 'Materials Science',
    icon: Atom,
    description: 'Comprehensive understanding of material properties, behavior, and selection for welding applications. Essential for quality welding outcomes.',
    duration: '4 days',
    certification: 'Materials Science for Welding Certificate',
    prerequisites: 'Technical background recommended',
    outcomes: [
      'Material properties and characteristics',
      'Heat treatment effects on materials',
      'Weldability assessment techniques',
      'Material selection for specific applications'
    ]
  },
  {
    id: 'iso-3834-implementation',
    title: 'EN ISO 3834 Implementation',
    icon: Settings,
    description: 'Practical implementation of ISO 3834 quality requirements for fusion welding. Hands-on approach to establishing compliant welding operations.',
    duration: '5 days',
    certification: 'ISO 3834 Implementation Specialist',
    prerequisites: 'Quality management experience',
    outcomes: [
      'ISO 3834 requirement interpretation',
      'Quality system development and implementation',
      'Documentation and procedure creation',
      'Audit preparation and compliance verification'
    ]
  },
  {
    id: 'iso-1090-implementation',
    title: 'EN ISO 1090 Implementation',
    icon: Wrench,
    description: 'Specialized training for implementing ISO 1090 execution standards for steel structures. Focus on practical application and compliance.',
    duration: '4 days',
    certification: 'ISO 1090 Implementation Specialist',
    prerequisites: 'Structural welding experience',
    outcomes: [
      'ISO 1090 execution requirements',
      'Quality control system establishment',
      'Conformity assessment procedures',
      'Documentation and traceability systems'
    ]
  }
];

export default function SpecializedPrograms() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Training Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced specialized programs designed to enhance your technical expertise and implementation capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specializedPrograms.map((program, index) => (
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
                    <Badge variant="outline" className="text-xs border-chart-1 text-chart-1">
                      Specialized
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
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-chart-1 mr-2" />
                      <span className="text-sm text-muted-foreground">{program.prerequisites}</span>
                    </div>
                  </div>

                  <div className="bg-chart-1/5 p-4 rounded-lg border border-chart-1/20">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-4 w-4 text-chart-1 mr-2" />
                      <span className="font-semibold text-chart-1 text-sm">{program.certification}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Program Outcomes:</h4>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-chart-1 rounded-full mr-3 flex-shrink-0 mt-2" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full border-chart-1 text-chart-1 hover:bg-chart-1 hover:text-white" onClick={() => window.location.href = '/#contact'}>
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