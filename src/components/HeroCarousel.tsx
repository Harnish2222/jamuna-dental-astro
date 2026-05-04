import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface HeroCarouselProps {
  images?: { src: string; alt: string }[];
}

const HeroCarousel = ({ images }: HeroCarouselProps) => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  );
  
  if (!images || images.length === 0) return null;

  return (
    <Carousel 
      opts={{ loop: true }} 
      plugins={[autoplayPlugin.current]} 
      className="w-full max-w-[95vw] lg:max-w-none mx-auto" 
      aria-label="Featured dental treatments"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/8] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border-4 border-white/40 bg-muted">
              <img
                src={image.src}
                alt={image.alt || "Dental clinic treatment"}
                width={1920}
                height={1080}
                fetchpriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Optional Glassmorphism overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;
