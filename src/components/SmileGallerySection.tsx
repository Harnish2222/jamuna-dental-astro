import React, { useState, useEffect, useCallback } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Transformation {
  title: string;
  description: string;
  image: string;
  mobileSrc?: string;
  smallMobileSrc?: string;
}

interface SmileGalleryProps {
  content?: {
    badge: string;
    heading: string;
    description: string;
    transformations: Transformation[];
  }
}

const ToothIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M7 3C4.23858 3 2 5.23858 2 8C2 10.15 3.35 12.3 5.5 13.5C6.5 14 7.5 15.5 8 17.5C8.5 19.5 9.5 21 12 21C14.5 21 15.5 19.5 16 17.5C16.5 15.5 17.5 14 18.5 13.5C20.65 12.3 22 10.15 22 8C22 5.23858 19.7614 3 17 3C15.5 3 14.5 3.5 13.5 4.5L12 6L10.5 4.5C9.5 3.5 8.5 3 7 3Z" />
  </svg>
);

const SmileGallerySection = ({ content }: SmileGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  if (!content || !content.transformations || content.transformations.length === 0) return null;

  const transformations = content.transformations;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  }, [transformations.length]);

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    nextSlide();
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-primary text-white hover:bg-primary px-4 py-1.5 uppercase tracking-widest text-xs font-bold">
              {content.badge || 'Smile Gallery'}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {content.heading || 'Real Smiles. Real Transformations.'}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {content.description || 'Every smile has a story. Explore real before & after results from our happy patients.'}
            </p>
          </div>
        </AnimatedSection>

        {/* Desktop Grid (4 columns on xl, 2 on md) */}
        <div 
          className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-[90rem] mx-auto items-start"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {transformations.map((item, idx) => (
            <TransformationCard key={idx} item={item} index={idx} />
          ))}
        </div>

        {/* Mobile Carousel (1 card at a time) */}
        <div 
          className="md:hidden relative px-2"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <TransformationCard item={transformations[currentIndex]} index={currentIndex} isCarousel />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            {transformations.length > 1 && (
              <div className="flex justify-center items-center gap-6 mt-8">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all active:scale-90"
                  aria-label="Previous transformation"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2">
                  {transformations.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setIsAutoPlaying(false); setCurrentIndex(idx); }}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/20'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all active:scale-90"
                  aria-label="Next transformation"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const TransformationCard = ({ item, index, isCarousel }: { item: Transformation; index: number; isCarousel?: boolean }) => {
  const hasText = !!(item.title || item.description);
  
  return (
    <div className={`group bg-white rounded-[2.5rem] ${hasText ? 'p-4' : 'p-2'} shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl flex flex-col ${!isCarousel ? 'scroll-fade-up h-full' : ''}`}>
      {/* Image Container */}
      <div className="relative aspect-square rounded-[2rem] overflow-hidden border-2 border-white shadow-inner bg-gray-50">
        <img 
          src={item.image} 
          srcSet={item.smallMobileSrc ? `${item.smallMobileSrc} 320w, ${item.mobileSrc} 480w, ${item.image} 800w` : undefined}
          sizes="(max-width: 480px) 320px, (max-width: 768px) 480px, 800px"
          alt={item.title || "Smile Transformation"}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading={isCarousel ? "eager" : "lazy"}
        />
        
        {/* Subtle Overlays */}
        <div className="absolute top-4 left-4 z-20">
           <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-widest border border-white/20">Before</span>
        </div>
        <div className="absolute bottom-4 left-4 z-20">
           <span className="px-3 py-1 bg-primary/70 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-widest border border-white/20">After</span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Info Area */}
      {hasText && (
        <div className="mt-6 px-4 pb-2 flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <ToothIcon className="w-6 h-6 text-primary" />
          </div>
          <div>
            {item.title && <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>}
            {item.description && <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmileGallerySection;
