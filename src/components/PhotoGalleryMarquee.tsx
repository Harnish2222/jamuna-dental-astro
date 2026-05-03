import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

interface PhotoGalleryProps {
  content?: {
    badge: string;
    heading_part1: string;
    heading_part2: string;
    description: string;
    images: { src: string; alt: string }[];
  };
  hasGap?: boolean;
  aspectRatio?: string;
}

const PhotoGalleryMarquee = ({ content, hasGap = false, aspectRatio = "aspect-square" }: PhotoGalleryProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();
  const scrollPositionRef = useRef(0);

  if (!content || !content.images) return null;

  const galleryImages = content.images;
  const tripleImages = [...galleryImages, ...galleryImages, ...galleryImages];
  const stepWidth = 296;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const totalWidth = container.scrollWidth / 3;
    const animate = () => {
      if (!isPaused) {
        scrollPositionRef.current += 0.5;
        if (scrollPositionRef.current >= totalWidth) scrollPositionRef.current = 0;
        container.style.transform = `translate3d(-${scrollPositionRef.current}px, 0, 0)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [galleryImages.length, isPaused]);

  const updatePosition = (nextPosition: number) => {
    const container = scrollRef.current;
    if (!container) return;
    scrollPositionRef.current = nextPosition;
    container.style.transform = `translate3d(-${scrollPositionRef.current}px, 0, 0)`;
  };

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (!container) return;
    const totalWidth = container.scrollWidth / 3;
    const singleWidth = totalWidth / galleryImages.length;
    const nextPosition = scrollPositionRef.current - singleWidth;
    updatePosition(nextPosition < 0 ? totalWidth + nextPosition : nextPosition);
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (!container) return;
    const totalWidth = container.scrollWidth / 3;
    const singleWidth = totalWidth / galleryImages.length;
    const nextPosition = scrollPositionRef.current + singleWidth;
    updatePosition(nextPosition >= totalWidth ? nextPosition - totalWidth : nextPosition);
  };

  return (
    <section className="overflow-hidden bg-background py-12 sm:py-16">
      <AnimatedSection animation="fade-up">
        <div className="mb-8 px-4 text-center sm:mb-10 sm:px-6">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-primary">{content.badge}</span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-primary">{content.heading_part1} </span>
            <span className="text-foreground">{content.heading_part2}</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
            {content.description}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay="delay-200">
        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <Button variant="outline" size="icon" className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 rounded-full bg-background/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground md:left-3 md:h-10 md:w-10" onClick={scrollLeft}>
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button variant="outline" size="icon" className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 rounded-full bg-background/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground md:right-3 md:h-10 md:w-10" onClick={scrollRight}>
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <div className="w-full overflow-hidden">
            <div ref={scrollRef} className={`flex will-change-transform ${hasGap ? 'gap-3 sm:gap-4 px-4 sm:px-6' : ''}`}>
              {tripleImages.map((image, index) => (
                <div key={index} className={`group ${aspectRatio} w-[17rem] flex-shrink-0 overflow-hidden sm:w-72 md:w-80 lg:w-[22rem] ${hasGap ? 'rounded-2xl' : ''}`}>
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default PhotoGalleryMarquee;
