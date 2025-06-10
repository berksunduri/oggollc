"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Calendar, Users, Award } from "lucide-react";

export default function TrainingCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-chart-1/10">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our internationally recognized training programs and gain the
              certifications that matter in today&apos;s competitive market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-border/40">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Phone className="h-6 w-6 text-chart-1 mr-3" />
                    Contact Our Training Team
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-chart-1 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Training Center Location</p>
                        <p className="text-muted-foreground text-sm">
                          Innovation & Training Park, 20000 Ukë Bytyçi, Prizren
                          / Kosovo
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-chart-1 mr-3" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground text-sm">
                          +383 48 353 508
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-chart-1 mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground text-sm">
                          saleseu@oggollc.com
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Training Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-border/40">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Award className="h-6 w-6 text-chart-1 mr-3" />
                    Why Choose OGGO•LLC Training?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-chart-1 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Expert Instructors</p>
                        <p className="text-muted-foreground text-sm">
                          Learn from certified professionals with decades of
                          industry experience
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-chart-1 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Flexible Scheduling</p>
                        <p className="text-muted-foreground text-sm">
                          Multiple session dates and customized corporate
                          training options
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-chart-1 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">International Recognition</p>
                        <p className="text-muted-foreground text-sm">
                          Certifications recognized across Europe and
                          internationally
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-chart-1 hover:bg-chart-1/90 text-white"
                onClick={() => (window.location.href = "/#contact")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => (window.location.href = "/#contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Request Training Catalog
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Custom corporate training programs available. Contact us for group
              rates and on-site training options.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
