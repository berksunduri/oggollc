"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Clock, Users, CheckCircle, Star } from 'lucide-react';

const professionalCerts = [
  {
    id: 'welding-supervisor',
    title: 'EN ISO 14731 International Welding Supervisor',
    icon: GraduationCap,
    description: 'Prestigious international certification for welding supervision personnel. Recognized across Europe and internationally for welding coordination and quality management.',
    duration: '10 days',
    certification: 'International Welding Supervisor (IWS) Certificate',
    prerequisites: 'Technical education + 2 years welding experience',
    level: 'Advanced',
    outcomes: [
      'Comprehensive welding technology knowledge',
      'Quality management system implementation',
      'Personnel coordination and training',
      'Technical problem-solving capabilities',
      'International standard compliance',
      'Project management skills'
    ]
  },
  {
    id: 'welder-qualification',
    title: 'EN ISO 9606 Welder Qualification',
    icon: Award,
    description: 'European standard for welder qualification testing. Validates practical welding skills and competency across various welding processes and materials.',
    duration: '5 days',
    certification: 'EN ISO 9606 Welder Certificate',
    prerequisites: 'Practical welding experience',
    level: 'Professional',
    outcomes: [
      'Practical welding skill validation',
      'Multi-process welding competency',
      'Quality workmanship standards',
      'Safety procedure compliance',
      'European market recognition',
      'Career advancement opportunities'
    ]
  }
];

export default function ProfessionalCertifications() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Achieve internationally recognized professional qualifications that validate your expertise and open career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {professionalCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full border-border/40 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <cert.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline" className="text-xs border-primary text-primary">
                        {cert.level}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs text-muted-foreground ml-1">Premium</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/40">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm font-medium">Duration</span>
                      </div>
                      <span className="text-sm font-semibold">{cert.duration}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/40">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm font-medium">Prerequisites</span>
                      </div>
                      <span className="text-sm text-muted-foreground text-right">{cert.prerequisites}</span>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span className="font-semibold text-primary">Certification Awarded</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.certification}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 flex items-center">
                      <Award className="h-4 w-4 text-primary mr-2" />
                      Key Learning Outcomes
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {cert.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/40">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white dark:text-black font-semibold" onClick={() => window.location.href = '/#contact'}>
                      Request Information
                    </Button>
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