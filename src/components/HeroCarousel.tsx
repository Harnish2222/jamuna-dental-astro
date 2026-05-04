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
    <Carousel opts={{ loop: true }} plugins={[autoplayPlugin.current]} className="w-full" aria-label="Featured dental treatments">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img
              src={image.src}
              alt={image.alt || "Dental clinic treatment"}
              width={1200}
              height={900}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              {...(index === 0 ? { fetchpriority: 'high' as const } : {})}
              className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;
