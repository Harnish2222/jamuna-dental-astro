import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import heroJfdcFront from '@/assets/hero-jfdc-front.jpg';
import heroTreatmentBlue from '@/assets/hero-treatment-room-blue.jpg';
import heroReception from '@/assets/hero-reception.jpg';
import heroConsultation from '@/assets/hero-consultation-room.jpg';
import heroDoctorChild from '@/assets/hero-doctor-child.jpg';

const heroImages = [
  { src: heroJfdcFront, alt: 'Jamuna Family Dental Care - Building Front' },
  { src: heroTreatmentBlue, alt: 'Modern blue treatment room' },
  { src: heroReception, alt: 'Clinic reception area' },
  { src: heroConsultation, alt: 'Doctor consultation room' },
  { src: heroDoctorChild, alt: 'Doctor treating a child patient' },
];

const HeroCarousel = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  );

  return (
    <Carousel opts={{ loop: true }} plugins={[autoplayPlugin.current]} className="w-full">
      <CarouselContent>
        {heroImages.map((image, index) => (
          <CarouselItem key={image.src}>
            <img
              src={image.src}
              alt={image.alt}
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
