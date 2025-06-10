"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  {
    id: 1,
    src: 'images/training/1.jpg',
    alt: 'Engineer reviewing welding certification documentation',
    title: 'Certification Documentation Review',
    description: 'Our certified engineers meticulously review and validate welding procedures according to international standards.'
  },
  {
    id: 2,
    src: 'images/training/2.jpg',
    alt: 'Hands-on welding training session',
    title: 'Practical Welding Training',
    description: 'Comprehensive hands-on training sessions covering multiple welding techniques and safety protocols.'
  },
  {
    id: 3,
    src: 'images/training/3.jpg',
    alt: 'Quality control inspection training',
    title: 'Quality Control Training',
    description: 'Advanced training in quality control procedures and non-destructive testing methodologies.'
  },
  {
    id: 4,
    src: 'images/training/4.jpg',
    alt: 'ISO certification preparation',
    title: 'ISO Certification Preparation',
    description: 'Intensive preparation sessions for ISO welding and quality management certifications.'
  },
  {
    id: 5,
    src: 'images/training/5.jpg',
    alt: 'Advanced welding techniques demonstration',
    title: 'Advanced Techniques Workshop',
    description: 'Demonstration of advanced welding techniques for specialized industrial applications.'
  },
  {
    id: 6,
    src: 'images/training/6.jpg',
    alt: 'Team training session',
    title: 'Team Training Sessions',
    description: 'Collaborative learning environment fostering knowledge sharing and skill development.'
  },
  {
    id: 7,
    src: 'images/training/7.jpg',
    alt: 'Equipment calibration training',
    title: 'Equipment Calibration',
    description: 'Training on proper equipment setup, calibration, and maintenance procedures.'
  },
];

export default function TrainingGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index].id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex].id);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex].id);
  };

  return (
    <>
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Training in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See our expert engineers and certified instructors in action, delivering world-class training and certification programs.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium truncate">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-chart-1 text-chart-1 hover:bg-chart-1 hover:text-white">
              View Training Facilities Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden">
                <Image
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-xl font-bold mb-2">{galleryImages[currentIndex].title}</h3>
                <p className="text-white/80">{galleryImages[currentIndex].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-white/60">
                    {currentIndex + 1} of {galleryImages.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}