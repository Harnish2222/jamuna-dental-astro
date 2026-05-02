import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

import vipKamalahassan from '@/assets/vip-kamalahassan.jpg';
import vipVengatachalam from '@/assets/vip-vengatachalam.jpg';
import vipPalpandi from '@/assets/vip-palpandi.jpg';
import vipRamji from '@/assets/vip-ramji.jpg';
import vipRavi from '@/assets/vip-ravi.jpg';
import vipRavichandran from '@/assets/vip-ravichandran.jpg';
import vipRamesh from '@/assets/vip-ramesh.jpg';
import vipArul from '@/assets/vip-arul.jpg';
import vipThenmozhi from '@/assets/vip-thenmozhi.jpg';
import vipVengatachalamSteels from '@/assets/vip-vengatachalam-steels.jpg';
import vipSujana from '@/assets/vip-sujana.jpg';
import vipArul2 from '@/assets/vip-arul-2.jpg';
import vipManoharan from '@/assets/vip-manoharan.jpg';

const PhotoGalleryMarquee = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();
  const scrollPositionRef = useRef(0);

  const galleryImages = [
    { src: vipKamalahassan.src, alt: 'Mr. N. KamalaHassan - Anil Foods MD at JFDC' },
    { src: vipVengatachalam.src, alt: 'Mr. Vengatachalam - Vivera Grande MD at JFDC' },
    { src: vipPalpandi.src, alt: 'Mr. Palpandi - MSP School HM at JFDC' },
    { src: vipRamji.src, alt: 'Mr. Ramji Natarajan - SMB CBSE Principal at JFDC' },
    { src: vipRavi.src, alt: 'Mr. Ravi Thiyagarajan - Chettinadu Construction at JFDC' },
    { src: vipRavichandran.src, alt: 'Mr. Ravichandran - Padma Lites MD at JFDC' },
    { src: vipRamesh.src, alt: 'Mr. S. Ramesh - Naga Foods Director at JFDC' },
    { src: vipArul.src, alt: 'Dr. Er. Arul - VA Consultancy at JFDC' },
    { src: vipThenmozhi.src, alt: 'Mrs. Thenmozhi MLA & Mr. Gunasekar - Nilakottai MLA at JFDC' },
    { src: vipVengatachalamSteels.src, alt: 'Mr. Vengatachalam - 3S Shree Sivabalaaji Steels Vice Chairman at JFDC' },
    { src: vipSujana.src, alt: 'Mrs. Sujana - iGenius Int PreSchool at JFDC' },
    { src: vipArul2.src, alt: 'Dr. Er. Arul - VA Consultancy at JFDC' },
    { src: vipManoharan.src, alt: 'Mr. Manoharan - Ambal Jeweller MD at JFDC' },
  ];

  const tripleImages = [...galleryImages, ...galleryImages, ...galleryImages];
  const stepWidth = 296;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const totalWidth = galleryImages.length * stepWidth;
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
    const totalWidth = galleryImages.length * stepWidth;
    const nextPosition = scrollPositionRef.current - stepWidth;
    updatePosition(nextPosition < 0 ? totalWidth + nextPosition : nextPosition);
  };

  const scrollRight = () => {
    const totalWidth = galleryImages.length * stepWidth;
    const nextPosition = scrollPositionRef.current + stepWidth;
    updatePosition(nextPosition >= totalWidth ? nextPosition - totalWidth : nextPosition);
  };

  return (
    <section className="overflow-hidden bg-background py-12 sm:py-16">
      <AnimatedSection animation="fade-up">
        <div className="mb-8 px-4 text-center sm:mb-10 sm:px-6">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-primary">+ Our Esteemed Patients</span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-primary">Trusted </span>
            <span className="text-foreground">by Dindigul</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
            Business leaders, educators, and public figures from Dindigul who choose Jamuna Family Dental Care.
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
            <div ref={scrollRef} className="flex gap-3 px-4 will-change-transform sm:gap-4 sm:px-6">
              {tripleImages.map((image, index) => (
                <div key={index} className="group aspect-square w-[17rem] flex-shrink-0 overflow-hidden rounded-2xl sm:w-72 md:w-80 lg:w-[22rem]">
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
