import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { Camera } from 'lucide-react';

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

const SmileGallerySection = ({ content }: SmileGalleryProps) => {
  if (!content || !content.transformations || content.transformations.length === 0) return null;

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {content.transformations.map((item, idx) => (
            <TransformationCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TransformationCard = ({ item, index }: { item: Transformation; index: number }) => {
  return (
    <AnimatedSection animation="fade-up" delay={`delay-${index * 100}`}>
      <div className="group bg-white rounded-[2.5rem] p-4 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl h-full flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-square rounded-[2rem] overflow-hidden border-2 border-white shadow-inner bg-gray-50">
          <img 
            src={item.image} 
            srcSet={item.smallMobileSrc ? `${item.smallMobileSrc} 320w, ${item.mobileSrc} 480w, ${item.image} 800w` : undefined}
            sizes="(max-width: 480px) 320px, (max-width: 768px) 480px, 800px"
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Subtle Overlays */}
          <div className="absolute top-4 left-4 z-20">
             <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-widest border border-white/20">Before</span>
          </div>
          <div className="absolute bottom-4 left-4 z-20">
             <span className="px-3 py-1 bg-primary/70 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-widest border border-white/20">After</span>
          </div>

          {/* Gradient Overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Info Area */}
        <div className="mt-6 px-4 pb-2 flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <Camera className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SmileGallerySection;
