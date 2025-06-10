"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Award,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
} from "lucide-react";

const certifications = [
  {
    id: "iso-1090",
    title: "ISO 1090: Steel Structure Execution",
    icon: Shield,
    description:
      "Comprehensive certification covering the execution of steel structures and structural components. This standard ensures quality requirements for conformity assessment of structural components.",
    duration: "5 days",
    certification: "ISO 1090 Certificate",
    prerequisites: "Basic welding knowledge",
    outcomes: [
      "Understanding of steel structure execution requirements",
      "Quality control procedures for structural components",
      "Conformity assessment methodologies",
      "Documentation and traceability systems",
    ],
  },
  {
    id: "iso-3834",
    title: "ISO 3834: Fusion Welding Quality Requirements",
    icon: Award,
    description:
      "Essential standard for quality requirements for fusion welding of metallic materials. Covers comprehensive quality requirements for welding fabrication.",
    duration: "4 days",
    certification: "ISO 3834 Implementation Certificate",
    prerequisites: "Welding experience recommended",
    outcomes: [
      "Implementation of welding quality management systems",
      "Personnel qualification requirements",
      "Equipment and consumable control",
      "Quality documentation and records management",
    ],
  },
  {
    id: "iso-14731",
    title: "ISO 14731: Welding Coordination",
    icon: Users,
    description:
      "International standard for welding coordination personnel qualification. Ensures competent supervision and coordination of welding activities.",
    duration: "6 days",
    certification: "International Welding Supervisor Certificate",
    prerequisites: "Technical education or equivalent experience",
    outcomes: [
      "Welding coordination responsibilities and tasks",
      "Technical knowledge of welding processes",
      "Quality assurance and control procedures",
      "Personnel management and training coordination",
    ],
  },
  {
    id: "iso-9001",
    title: "ISO 9001: Quality Management System",
    icon: CheckCircle,
    description:
      "World's most recognized quality management standard. Provides framework for consistent quality delivery and continuous improvement.",
    duration: "3 days",
    certification: "ISO 9001 Implementation Certificate",
    prerequisites: "None",
    outcomes: [
      "Quality management system principles",
      "Process approach implementation",
      "Risk-based thinking methodologies",
      "Continuous improvement strategies",
    ],
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            International Standards & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gain internationally recognized certifications that validate your
            expertise and enhance your professional credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/40 hover:border-chart-1/40 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-chart-1/10 rounded-lg flex items-center justify-center">
                      <cert.icon className="h-6 w-6 text-chart-1" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {cert.certification}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{cert.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-chart-1 mr-2" />
                      <span className="text-sm font-medium">
                        {cert.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 text-chart-1 mr-2" />
                      <span className="text-sm">{cert.prerequisites}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      Key Learning Outcomes:
                    </h4>
                    <ul className="space-y-2">
                      {cert.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-chart-1 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full bg-chart-1 hover:bg-chart-1/90 text-white"
                    onClick={() => (window.location.href = "/#contact")}
                  >
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
