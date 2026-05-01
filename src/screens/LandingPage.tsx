import { Phone, Award, Users, CalendarCheck, Stethoscope, MapPin, Clock, CircleCheckBig } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useRef } from 'react';
import PhotoGalleryMarquee from '@/components/PhotoGalleryMarquee';
import TestimonialsSection from '@/components/TestimonialsSection';
import SEO from '@/components/SEO';

import jfdcLogo from '@/assets/jfdc-logo.png';
import jamunaBuilding from '@/assets/jamuna-building.jpg';
import jamunaExterior from '@/assets/jamuna-exterior.jpg';
import jamunaTreatmentRoom from '@/assets/jamuna-treatment-room.jpg';
import jamunaDoctorTreatment from '@/assets/jamuna-doctor-treatment.jpg';
import jamunaClinicInterior from '@/assets/jamuna-clinic-interior.jpg';
import drArunPortrait from '@/assets/dr-arun-portrait.jpg';

import stockDentalImplants from '@/assets/stock-dental-implants.jpg';
import stockTeethWhitening from '@/assets/stock-teeth-whitening.jpg';
import stockDentalExam from '@/assets/stock-dental-exam.jpg';
import stockOrthodontics from '@/assets/stock-orthodontics.jpg';
import stockPediatric from '@/assets/stock-pediatric.jpg';
import stockDentalCrowns from '@/assets/stock-dental-crowns.jpg';

const PHONE = '+917200620011';
const PHONE_DISPLAY = '+91 7200 620 011';

const services = [
  { img: stockDentalImplants, title: 'Dental Implants', desc: 'Permanent tooth replacement with latest technology' },
  { img: stockTeethWhitening, title: 'Teeth Whitening', desc: 'Professional whitening for a brighter smile' },
  { img: stockDentalExam, title: 'Root Canal', desc: 'Painless treatment to save your natural teeth' },
  { img: stockOrthodontics, title: 'Braces & Aligners', desc: 'Invisible aligners & braces for better alignment' },
  { img: stockPediatric, title: 'Kids Dentistry', desc: 'Gentle, child-friendly dental care' },
  { img: stockDentalCrowns, title: 'Teeth Cleaning', desc: 'Professional scaling & polishing for healthy gums' },
];

const usps = [
  'MDS Specialist — 12+ Years',
  'Same-Day Consultation',
  'Painless Treatments',
  'Family-Friendly Clinic',
];

const faqs = [
  {
    q: 'Is the treatment really painless?',
    a: 'Yes. We use modern anaesthesia techniques and a gentle treatment approach so most patients feel little to no discomfort.',
  },
  {
    q: 'Do you offer dental implants in Dindigul?',
    a: 'Yes. We provide advanced dental implant treatment by an MDS specialist using trusted implant systems.',
  },
  {
    q: 'Are braces or aligners available for adults?',
    a: 'Yes. We treat both teens and adults with braces and clear aligner options based on your smile goals.',
  },
  {
    q: 'Do you treat children and senior citizens?',
    a: 'Yes. We provide dental care for the whole family, including kids, adults, and elderly patients.',
  },
  {
    q: 'What are your call timings?',
    a: 'You can call us from 9:00 AM to 9:00 PM IST, Sunday to Saturday.',
  },
];

const LandingPage = () => {
  const isMobile = useIsMobile();
  const autoplayPlugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  const heroImages = [
    { src: jamunaBuilding, alt: 'Jamuna Family Dental Care building' },
    { src: jamunaExterior, alt: 'Clinic exterior' },
    { src: jamunaTreatmentRoom, alt: 'Modern treatment room' },
    { src: jamunaDoctorTreatment, alt: 'Doctor treating patient' },
    { src: jamunaClinicInterior, alt: 'Clinic interior' },
  ];

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      name: 'Jamuna Family Dental Care',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '41-B, Kurinji Street, Ram Nagar',
        addressLocality: 'Dindigul',
        postalCode: '624001',
        addressRegion: 'Tamil Nadu',
      },
      telephone: '+917200620011',
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '548' },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SEO
        title="Trusted Family Dental Clinic in Dindigul | Jamuna Family Dental Care"
        description="Expert MDS specialist dental care in Dindigul — implants, root canal, braces, kids dentistry. 4.9★ rated. Call +91 7200 620 011."
        canonical="https://jamunadental.com/landing"
        noindex
      />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 sm:px-6 md:gap-4 md:py-3">
          <img
            src={jfdcLogo}
            alt="JFDC Logo"
            className="h-9 w-9 rounded-full border-2 border-primary/15 object-cover md:h-11 md:w-11"
          />
          <div className="min-w-0 text-center">
            <p className="text-sm font-bold leading-tight text-foreground sm:text-base md:text-lg">Jamuna Family Dental Care</p>
            <p className="text-[11px] text-muted-foreground sm:text-xs md:text-sm">Trusted dental care in Dindigul</p>
          </div>
        </div>
      </header>

      <div className="h-16" />

      <section className="overflow-hidden bg-background px-0 pb-8 pt-4 sm:pt-6 md:pb-14 md:pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
            <div className="order-1 mx-auto flex w-full max-w-xl flex-col items-center space-y-4 text-center lg:mx-0 lg:max-w-none lg:items-start lg:space-y-5 lg:text-left">
              <Badge className="border-0 bg-accent-teal px-3 py-1 text-xs text-accent-teal-foreground md:px-4 md:py-1.5 md:text-sm">
                ⭐ Rated 4.9 by 548+ Patients
              </Badge>

              <h1 className="text-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Dindigul&apos;s <span className="text-primary">Most Trusted</span> Dental Clinic
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:text-xl">
                Expert MDS specialist dental care for your entire family with painless treatments and advanced technology.
              </p>

              <div className="flex w-full flex-wrap items-center justify-center gap-2 pt-1 md:gap-3 lg:justify-start">
                <div className="flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1.5 md:px-4 md:py-2">
                  <Award className="h-4 w-4 text-primary md:h-5 md:w-5" />
                  <span className="text-xs font-semibold text-foreground md:text-sm">12+ Years Exp.</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1.5 md:px-4 md:py-2">
                  <Users className="h-4 w-4 text-primary md:h-5 md:w-5" />
                  <span className="text-xs font-semibold text-foreground md:text-sm">548+ Happy Reviews</span>
                </div>
              </div>

              <div className="flex w-full justify-center pt-2 lg:justify-start">
                <Button
                  size="lg"
                  className="w-full max-w-sm rounded-full bg-primary px-6 py-6 text-base text-primary-foreground shadow-lg hover:bg-primary/90 sm:w-auto md:px-10 md:py-7 md:text-lg"
                  asChild
                >
                  <a href={`tel:${PHONE}`} aria-label={`Call ${PHONE_DISPLAY}`}>
                    <Phone className="mr-2 h-5 w-5 md:h-6 md:w-6" /> Call Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="order-2 mx-auto w-full max-w-[30rem] overflow-hidden rounded-2xl lg:max-w-none">
              <Carousel opts={{ loop: true }} plugins={[autoplayPlugin.current]} className="w-full">
                <CarouselContent>
                  {heroImages.map((img, i) => (
                    <CarouselItem key={i}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-0 py-5 md:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {usps.map((usp, i) => (
              <div key={i} className="flex min-h-[58px] items-center gap-2 rounded-lg bg-primary-foreground/10 px-3 py-2.5 md:min-h-[68px] md:gap-3 md:px-5 md:py-4">
                <CircleCheckBig className="h-4 w-4 shrink-0 text-success md:h-5 md:w-5" />
                <span className="text-xs font-medium leading-tight text-primary-foreground sm:text-sm md:text-base">{usp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-0 py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center md:mb-12">
            <Badge className="mb-2 md:mb-3 md:text-sm">Our Services</Badge>
            <h2 className="mb-2 text-2xl font-bold text-foreground md:text-4xl lg:text-5xl">Complete Dental Care Under One Roof</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base lg:text-lg">
              From routine check-ups to advanced implants — all by qualified MDS specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-shadow hover:shadow-md md:flex-col md:items-stretch md:gap-0 md:p-0 md:overflow-hidden"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-20 w-28 shrink-0 rounded-lg object-cover sm:w-32 md:h-44 md:w-full md:rounded-none md:rounded-t-xl"
                />
                <div className="min-w-0 flex-1 text-left md:p-5">
                  <h3 className="mb-1 text-sm font-semibold leading-tight text-foreground sm:text-base md:text-lg md:mb-2">{service.title}</h3>
                  <p className="text-xs leading-snug text-muted-foreground sm:text-sm md:text-base">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <PhotoGalleryMarquee /> */}

      <section className="bg-muted/30 px-0 py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center md:mb-10">
            <Badge className="mb-2 md:mb-3 md:text-sm">Meet Your Dentist</Badge>
            <h2 className="text-2xl font-bold text-foreground md:text-4xl lg:text-5xl">Expert Care You Can Trust</h2>
          </div>

          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="flex justify-center">
              <img
                src={drArunPortrait}
                alt="Dr. Arun Baabu Sarath"
                className="aspect-[3/4] w-52 max-w-full rounded-2xl border-4 border-primary/10 object-cover shadow-xl md:w-72 lg:w-80"
              />
            </div>

            <div className="space-y-3 text-center md:space-y-4 md:text-left">
              <h3 className="text-xl font-bold text-foreground md:text-3xl lg:text-4xl">Dr. Arun Baabu Sarath</h3>
              <p className="font-semibold text-primary md:text-lg">MDS — Prosthodontics</p>
              <p className="text-muted-foreground md:text-lg">12+ Years of Clinical Experience</p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
                Dedicated to providing world-class dental care in Dindigul with special expertise in implants, cosmetic dentistry, and pain-free family care.
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-1 md:justify-start md:gap-2">
                {['Dental Implants', 'Root Canal', 'Aligners', 'Cosmetic', 'Pediatric'].map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-2 py-0.5 text-xs md:px-3 md:py-1 md:text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="px-0 py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center md:mb-10">
            <Badge className="mb-2 md:mb-3 md:text-sm">Find Us</Badge>
            <h2 className="text-2xl font-bold text-foreground md:text-4xl lg:text-5xl">Visit Our Clinic</h2>
          </div>

          <div className="mx-auto mb-6 max-w-md space-y-3 md:max-w-lg md:space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary md:h-5 md:w-5" />
              <p className="text-sm text-foreground md:text-base">
                41-B, Kurinji Street, Ram Nagar, Round Road, Near Vijayan Temptation, Dindigul - 624001
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-primary md:h-5 md:w-5" />
              <p className="text-sm text-foreground md:text-base">Sun – Sat: 9:00 AM – 9:00 PM IST</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary md:h-5 md:w-5" />
              <a href={`tel:${PHONE}`} className="text-sm font-semibold text-primary hover:underline md:text-base">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d77.9756!3d10.3624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aa5f59e0f9c1%3A0x8c2b4e2e2d8f5a8e!2sJamuna%20Family%20Dental%20Care!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jamuna Family Dental Care Location"
              className="md:h-[400px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-0 py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <Badge className="mb-2">Common Questions</Badge>
            <h2 className="text-2xl font-bold text-foreground md:text-4xl">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border-0 bg-background">
                <AccordionTrigger className="px-4 py-3 text-left text-sm font-medium text-foreground hover:text-primary hover:no-underline md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-muted/30 px-0 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="space-y-4 rounded-3xl bg-card p-6 shadow-soft sm:p-8">
            <h2 className="text-2xl font-bold text-foreground md:text-4xl">Need to Speak to a Dentist?</h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Call Jamuna Family Dental Care and speak to our clinic team today.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="w-full max-w-sm rounded-full bg-primary px-8 py-6 text-base text-primary-foreground shadow-xl hover:bg-primary/90"
                asChild
              >
                <a href={`tel:${PHONE}`} aria-label={`Call ${PHONE_DISPLAY}`}>
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">9 AM – 9 PM IST · Sun – Sat</p>
          </div>
        </div>
      </section>

      <footer className="bg-foreground px-4 py-6 text-background md:py-8">
        <div className="mx-auto max-w-7xl space-y-2 text-center text-xs md:text-sm">
          <p className="font-medium">© 2026 Jamuna Family Dental Care, Dindigul. All rights reserved.</p>
          <p className="text-background/60">41-B, Kurinji Street, Ram Nagar, Dindigul - 624001</p>
        </div>
      </footer>

      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] shadow-[0_-4px_20px_hsl(var(--foreground)/0.12)] backdrop-blur-sm">
          <Button
            size="lg"
            className="w-full rounded-full bg-success py-5 text-base font-bold text-success-foreground shadow-lg hover:bg-success/90"
            asChild
          >
            <a href={`tel:${PHONE}`} aria-label={`Call ${PHONE_DISPLAY}`}>
              <Phone className="mr-2 h-5 w-5" /> Call Now
            </a>
          </Button>
        </div>
      )}

      {isMobile && <div className="h-24" />}
    </div>
  );
};

export default LandingPage;
