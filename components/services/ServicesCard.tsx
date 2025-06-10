"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, X, ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    brief: string;
    specifications: string[];
    images: string[];
    workflow: string[];
    capabilities: string[];
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const isEven = index % 2 === 0;
  const remainingCount = service.images.length - 4;

  // Auto-scroll main image
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % service.images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [service.images.length]);

  // Keyboard nav for lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight")
        setActiveImage((prev) => (prev + 1) % service.images.length);
      if (e.key === "ArrowLeft")
        setActiveImage(
          (prev) => (prev - 1 + service.images.length) % service.images.length
        );
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, service.images.length]);

  const openLightbox = (idx: number) => {
    setActiveImage(idx);
    setLightboxOpen(true);
  };

  const goToNext = () =>
    setActiveImage((prev) => (prev + 1) % service.images.length);
  const goToPrev = () =>
    setActiveImage(
      (prev) => (prev - 1 + service.images.length) % service.images.length
    );

  return (
    <div id={service.id} className="scroll-mt-32">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          !isEven ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Content */}
        <div className={`space-y-8 ${!isEven ? "lg:col-start-2" : ""}`}>
          <Badge variant="outline" className="mb-4 text-chart-1 border-chart-1">
            {service.title}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {service.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {service.brief}
          </p>

          <Card className="border-border/40">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-chart-1 mr-2" />
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.specifications.map((spec, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-chart-1 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-xl font-semibold mb-4">Key Capabilities</h3>
            <div className="flex flex-wrap gap-2">
              {service.capabilities.map((capability, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm">
                  {capability}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Images */}
        <div
          className={`space-y-6 ${
            !isEven ? "lg:col-start-1 lg:row-start-1" : ""
          }`}
        >
          {/* Main Image */}
          <div
            className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => openLightbox(activeImage)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={service.images[activeImage]}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={service.images[activeImage]}
                  alt={`${service.title} - Image ${activeImage + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{service.title}</p>
                  <p className="text-xs opacity-80">
                    Image {activeImage + 1} of {service.images.length}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Static Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {service.images.slice(0, 4).map((image, idx) => (
              <div
                key={idx}
                className={`relative h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                  activeImage === idx
                    ? "border-chart-1"
                    : "border-transparent hover:border-border"
                }`}
                onClick={() => setActiveImage(idx)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="100px"
                  className="object-cover"
                  loading="lazy"
                />
                {idx === 3 && remainingCount > 0 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      +{remainingCount}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={goToPrev}
              className="absolute left-4 text-white z-50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-5xl h-[70vh] rounded-lg overflow-hidden">
              <Image
                src={service.images[activeImage]}
                alt={`Full Image ${activeImage + 1}`}
                loading="lazy"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={goToNext}
              className="absolute right-4 text-white z-50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
