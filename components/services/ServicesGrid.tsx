"use client"

import { motion } from 'framer-motion';
import ServiceCard from './ServicesCard';

const servicesData = [
  {
    id: 'gear-production',
    title: 'Gear Production',
    brief: 'State-of-the-art gear manufacturing utilizing advanced CNC technology for precise, custom gear solutions across multiple industries.',
    specifications: [
      'Module range: 0.5 - 12',
      'Diameter capacity: Up to 2000mm',
      'Precision grade: DIN 5-8',
      'Materials: Steel, stainless steel, bronze'
    ],
    images: [
        'images/services/GearProduction/1.jpg',
        'images/services/GearProduction/2.jpg',
        'images/services/GearProduction/3.jpg',
        'images/services/GearProduction/4.jpg',
        'images/services/GearProduction/5.jpg',
        'images/services/GearProduction/6.jpg',
        'images/services/GearProduction/7.jpg',
    ],
    workflow: ['Design & Engineering', 'Material Selection', 'CNC Machining', 'Quality Control', 'Finishing'],
    capabilities: [
      'Spur gears, helical gears, bevel gears',
      'Internal and external gearing',
      'Gear racks and pinions',
      'Custom gear assemblies'
    ]
  },
  {
    id: 'electrostatic-paint',
    title: 'Electrostatic Paint',
    brief: 'Superior finish quality using advanced electrostatic painting technology, ensuring uniform coverage and exceptional durability.',
    specifications: [
      'Coating thickness: 60-120 microns',
      'Temperature resistance: Up to 200°C',
      'Salt spray test: 1000+ hours',
      'Color options: RAL, custom matching'
    ],
    images: [
        'images/services/ElectrostaticPaint/1.jpg',
        'images/services/ElectrostaticPaint/2.jpg',
        'images/services/ElectrostaticPaint/3.jpg',
        'images/services/ElectrostaticPaint/4.jpg',
    ],
    workflow: ['Surface Preparation', 'Primer Application', 'Electrostatic Coating', 'Curing Process', 'Quality Inspection'],
    capabilities: [
      'Powder coating systems',
      'Liquid paint application',
      'Multi-layer coating processes',
      'Specialized industrial finishes'
    ]
  },
  {
    id: 'galvanized-coating',
    title: 'Galvanized Coating',
    brief: 'Industrial-grade corrosion protection through hot-dip galvanization process.',
    specifications: [
      'Coating thickness: 45-85 microns',
      'Zinc purity: 99.95%',
      'Corrosion resistance: 50+ years',
      'Size capacity: Up to 12m length'
    ],
    images: [
        'images/services/GalvanizedCoating/1.jpg',
        'images/services/GalvanizedCoating/2.jpg',
        'images/services/GalvanizedCoating/3.jpg',
        'images/services/GalvanizedCoating/4.jpg',
        'images/services/GalvanizedCoating/5.jpg',
        'images/services/GalvanizedCoating/6.jpg',
        'images/services/GalvanizedCoating/7.jpg',
        'images/services/GalvanizedCoating/8.jpg',
        'images/services/GalvanizedCoating/9.jpg',
        'images/services/GalvanizedCoating/10.jpg',
        'images/services/GalvanizedCoating/11.jpg',
        'images/services/GalvanizedCoating/12.jpg',
        'images/services/GalvanizedCoating/13.jpg',
        'images/services/GalvanizedCoating/14.jpg',
        'images/services/GalvanizedCoating/15.jpg',
        'images/services/GalvanizedCoating/16.jpg',
        'images/services/GalvanizedCoating/17.jpg',
        'images/services/GalvanizedCoating/18.jpg',
        'images/services/GalvanizedCoating/19.jpg',
        'images/services/GalvanizedCoating/20.jpg',
        'images/services/GalvanizedCoating/21.jpg',

    ],
    workflow: ['Degreasing', 'Pickling', 'Fluxing', 'Hot-Dip Galvanizing', 'Cooling & Inspection'],
    capabilities: [
      'Structural steel galvanizing',
      'Marine-grade protection',
      'Architectural applications',
      'Industrial equipment coating'
    ]
  },
  {
    id: 'welded-construction',
    title: 'Welded Construction',
    brief: 'Precision welding services utilizing multiple welding techniques for complex structural projects.',
    specifications: [
      'Welding standards: EN ISO 3834',
      'Material thickness: 1-100mm',
      'Welding positions: All positions',
      'Certified welders: EN ISO 9606'
    ],
    images: [
        'images/services/WeldedConstruction/1.jpg',
        'images/services/WeldedConstruction/2.jpg',
        'images/services/WeldedConstruction/3.jpg',
        'images/services/WeldedConstruction/4.jpg',
        'images/services/WeldedConstruction/5.jpg',
        'images/services/WeldedConstruction/6.jpg',
        'images/services/WeldedConstruction/7.jpg',
        'images/services/WeldedConstruction/8.jpg',
        'images/services/WeldedConstruction/9.jpg',
        'images/services/WeldedConstruction/10.jpg',
        'images/services/WeldedConstruction/11.jpg',
        'images/services/WeldedConstruction/12.jpg',
        'images/services/WeldedConstruction/13.jpg',
        'images/services/WeldedConstruction/14.jpg',
        'images/services/WeldedConstruction/15.jpg',
        'images/services/WeldedConstruction/16.jpg',
        'images/services/WeldedConstruction/17.jpg',
        'images/services/WeldedConstruction/18.jpg',
        'images/services/WeldedConstruction/19.jpg',
        'images/services/WeldedConstruction/20.jpg',
        'images/services/WeldedConstruction/21.jpg',
        'images/services/WeldedConstruction/22.jpg',
        'images/services/WeldedConstruction/23.jpg',
        'images/services/WeldedConstruction/24.jpg',
        'images/services/WeldedConstruction/25.jpg',
    ],
    workflow: ['Design Review', 'Material Preparation', 'Welding Process', 'NDT Testing', 'Final Assembly'],
    capabilities: [
      'MIG/MAG welding',
      'TIG welding',
      'Arc welding',
      'Robotic welding systems'
    ]
  },
  {
    id: 'sheet-metal-twist',
    title: 'Sheet Metal Twist',
    brief: 'Custom sheet metal forming and twisting capabilities for architectural and industrial applications.',
    specifications: [
      'Material thickness: 0.5-10mm',
      'Bending radius: Min 1x thickness',
      'Twist angles: Up to 360°',
      'Materials: Steel, aluminum, stainless'
    ],
    images: [
        'images/services/SheetMetalTwist/1.jpg',
        'images/services/SheetMetalTwist/2.jpg',
        'images/services/SheetMetalTwist/3.jpg',
    ],
    workflow: ['CAD Design', 'Material Selection', 'Forming Process', 'Twist Operation', 'Quality Check'],
    capabilities: [
      'Architectural metalwork',
      'Decorative elements',
      'Industrial components',
      'Custom fabrication'
    ]
  },
  {
    id: 'machining',
    title: 'Machining',
    brief: 'Advanced CNC machining services for precise component manufacturing.',
    specifications: [
      'Tolerance: ±0.01mm',
      'Surface finish: Ra 0.8-6.3',
      'Max dimensions: 2000x1000x800mm',
      '5-axis CNC capability'
    ],
    images: [
        'images/services/Machining/1.jpg',
        'images/services/Machining/2.jpg',
        'images/services/Machining/3.jpg',
        'images/services/Machining/4.jpg',
        'images/services/Machining/5.jpg',
        'images/services/Machining/6.jpg',
        'images/services/Machining/7.jpg',
        'images/services/Machining/8.jpg',
        'images/services/Machining/9.jpg',
        'images/services/Machining/10.jpg',
        'images/services/Machining/11.jpg',
        'images/services/Machining/12.jpg',
    ],
    workflow: ['Programming', 'Setup', 'Machining', 'Measurement', 'Finishing'],
    capabilities: [
      'Precision turning',
      'Milling operations',
      'Complex geometries',
      'Prototype to production'
    ]
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="space-y-32">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}