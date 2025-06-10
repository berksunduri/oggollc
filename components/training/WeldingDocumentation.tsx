"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Clipboard, TestTube, Award, Clock, Users } from 'lucide-react';

const documentationPrograms = [
  {
    id: 'pqr',
    title: 'PQR (Procedure Qualification Record)',
    icon: FileText,
    description: 'Comprehensive training on creating and maintaining Procedure Qualification Records. Learn to document welding procedure qualifications according to international standards.',
    duration: '2 days',
    certification: 'PQR Documentation Certificate',
    prerequisites: 'Basic welding knowledge',
    outcomes: [
      'PQR creation and documentation standards',
      'Test specimen preparation and evaluation',
      'Mechanical testing requirements',
      'Record keeping and traceability'
    ]
  },
  {
    id: 'wps',
    title: 'WPS (Welding Procedure Specification)',
    icon: Clipboard,
    description: 'Master the development of Welding Procedure Specifications. Essential for ensuring consistent welding quality and meeting project requirements.',
    duration: '3 days',
    certification: 'WPS Development Certificate',
    prerequisites: 'Welding experience recommended',
    outcomes: [
      'WPS development methodology',
      'Essential and non-essential variables',
      'Qualification range determination',
      'Documentation and approval processes'
    ]
  },
  {
    id: 'wqt',
    title: 'WQT (Welding Quality Testing)',
    icon: TestTube,
    description: 'Advanced training in welding quality testing procedures. Covers destructive and non-destructive testing methods for weld quality assessment.',
    duration: '4 days',
    certification: 'Welding Quality Testing Certificate',
    prerequisites: 'Technical background required',
    outcomes: [
      'Quality testing methodologies',
      'Test specimen preparation',
      'Acceptance criteria evaluation',
      'Quality reporting and documentation'
    ]
  },
  {
    id: 'wpqr',
    title: 'EN ISO 15614 WPQR',
    icon: Award,
    description: 'European standard for welding procedure qualification. Comprehensive coverage of qualification requirements for fusion welding of metallic materials.',
    duration: '5 days',
    certification: 'EN ISO 15614 WPQR Certificate',
    prerequisites: 'Welding coordination experience',
    outcomes: [
      'European welding procedure standards',
      'Qualification testing requirements',
      'Documentation compliance',
      'International standard implementation'
    ]
  }
];

export default function WeldingDocumentation() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welding Documentation & Procedures</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the essential documentation and procedural requirements for professional welding operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documentationPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/40 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Documentation
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{program.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{program.prerequisites}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Learning Outcomes:</h4>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-2" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" onClick={() => window.location.href = '/#contact'}>
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