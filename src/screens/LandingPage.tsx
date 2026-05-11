import { Phone, CircleCheckBig } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEffect } from 'react';
import PhotoGalleryMarquee from '@/components/PhotoGalleryMarquee';
import TestimonialsSection from '@/components/TestimonialsSection';
import HeroCarousel from '@/components/HeroCarousel';
import ServiceMarquee from '@/components/ServiceMarquee';
import AboutUsSection from '@/components/AboutUsSection';
import MilestonesSection from '@/components/MilestonesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import PriceTellerSection from '@/components/PriceTellerSection';
import FindUsSection from '@/components/FindUsSection';
import FAQAccordionReact from '@/components/FAQAccordionReact';
import SmileGallerySection from '@/components/SmileGallerySection';
import SEO from '@/components/SEO';
import { tinaField } from 'tinacms/dist/react';

import jfdcLogo from '@/assets/jfdc-logo.png';

const PHONE = '+917200620011';
const PHONE_DISPLAY = '+91 7200 620 011';



const LandingPage = ({ data, logo }: { data: any; logo?: string }) => {
  const landing = data;

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
        title={landing.seo?.title}
        description={landing.seo?.description}
        canonical={landing.seo?.canonical}
        noindex={landing.seo?.noindex}
      />
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 pt-2 lg:pt-4">
        <div className="max-w-7xl mx-auto rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-border">
          <div className="flex items-center justify-between h-14 lg:h-16 px-4 lg:px-8">
            <div className="flex items-center gap-2">
              <img
                src={logo || jfdcLogo.src}
                alt="JFDC Logo"
                className="h-9 w-9 rounded-full border-2 border-primary/15 object-cover md:h-11 md:w-11"
              />
              <div className="min-w-0">
                <p className="text-sm font-bold leading-tight text-foreground sm:text-base md:text-lg">
                  <span className="inline sm:hidden">Jamuna Dental</span>
                  <span className="hidden sm:inline">Jamuna Family Dental Care</span>
                </p>
                <p className="hidden sm:block text-[11px] text-muted-foreground sm:text-xs md:text-sm">Trusted dental care in Dindigul</p>
              </div>
            </div>
            <div>
               <a
                href={`tel:${PHONE}`}
                onClick={() => (window as any).gtag_report_phone_conversion?.()}
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-sm px-5 py-2.5 rounded-full shadow-md font-bold transition-all"
              >
                <Phone className="mr-2 h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="hidden lg:block h-4" />
      <div className="lg:hidden h-4" />

      <section id="hero" className="relative bg-background min-h-screen flex items-center pt-8 lg:pt-12 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 py-8 lg:py-16">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 gap-6 lg:items-center">
            
            {/* ① Heading — always first */}
            <div className="order-1 lg:col-start-1 lg:row-start-1 text-center lg:text-left pt-2">
              <div className="space-y-2">
                <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap" data-tina-field={tinaField(landing.hero, 'social_proof')}>
                  ⭐ Rated {landing.hero?.social_proof?.rating} by {landing.hero?.social_proof?.review_count}
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
                  <span className="text-gray-900 block" data-tina-field={tinaField(landing.hero, 'heading_part1')}>{landing.hero?.heading_part1}</span>
                  <span className="text-primary block mt-1" data-tina-field={tinaField(landing.hero, 'heading_part2')}>{landing.hero?.heading_part2}</span>
                </h1>
                <h2 className="text-[#0080B5] font-bold tracking-[0.15em] uppercase text-xs sm:text-sm md:text-base mt-4" data-tina-field={tinaField(landing.hero, 'subheading')}>
                  {landing.hero?.subheading}
                </h2>
              </div>
            </div>

            {/* ② Carousel — between heading & content on mobile */}
            <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full max-w-2xl mx-auto" data-tina-field={tinaField(landing, 'hero_carousel')}>
               <HeroCarousel images={landing.hero_carousel?.images || []} />
            </div>

            {/* ③ Description, highlights, CTA — below carousel on mobile */}
            <div className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col gap-5 text-center lg:text-left pb-4">
              <p className="text-base sm:text-lg text-gray-600 leading-[1.6] max-w-2xl mx-auto lg:mx-0 font-medium" data-tina-field={tinaField(landing.hero, 'description')}>
                {landing.hero?.description}
              </p>

              {/* Highlights Box */}
              <div className="flex items-start justify-center lg:justify-start py-3 px-2 sm:px-4 border border-gray-100 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_4px_15px_-4px_rgba(0,0,0,0.05)] w-fit mx-auto lg:mx-0 mt-2" data-tina-field={tinaField(landing.hero, 'highlights')}>
                {(landing.hero?.highlights || []).map((highlight: any, idx: number, arr: any[]) => (
                  <div key={idx} className={`flex flex-col items-center px-4 ${idx !== arr.length - 1 ? 'border-r border-gray-300/60' : ''}`}>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm border border-blue-50 flex items-center justify-center mb-2">
                      <svg className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {idx === 0 && <path d="M12 22C12 22 15 19 16.5 16C18 13 18.5 10 17.5 7.5C16.5 5 14 4 12 5C10 4 7.5 5 6.5 7.5C5.5 10 6 13 7.5 16C9 19 12 22 12 22Z" />}
                        {idx === 1 && <g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></g>}
                        {idx === 2 && <g><circle cx="9" cy="7" r="4"/><path d="M16 11l-2-2m-1.5-1.5L11 6"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="16" cy="11" r="3"/><path d="M13 21v-2a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2"/></g>}
                        {idx === 3 && <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />}
                      </svg>
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-center text-primary leading-tight max-w-[80px]">
                      {highlight.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
                <Button
                  size="lg"
                  className="rounded-full bg-primary px-8 py-7 text-base font-bold shadow-lg hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-primary/30 h-auto"
                  asChild
                >
                  <a href={`tel:${PHONE}`} onClick={() => (window as any).gtag_report_phone_conversion?.()} aria-label={`Call ${PHONE_DISPLAY}`}>
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary/5 px-8 py-7 text-base font-bold shadow-lg transition-all hover:-translate-y-1 h-auto"
                  asChild
                >
                  <a href="#pricing">
                    View Treatment Cost
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceMarquee services={landing.service_marquee?.services || []} />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white hover:bg-primary px-4 py-1.5" data-tina-field={tinaField(landing.services, 'badge')}>{landing.services?.badge}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight" data-tina-field={tinaField(landing.services, 'title')}>{landing.services?.title}</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed" data-tina-field={tinaField(landing.services, 'description')}>
              {landing.services?.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(landing.services?.cards || []).map((service: any, index: number) => (
              <article key={index} className="group h-full overflow-hidden rounded-2xl bg-card border border-border shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-light transition-colors">{service.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">{service.description}</p>
                  
                  {service.bullets && service.bullets.length > 0 && (
                    <ul className="mb-6 space-y-2">
                      {service.bullets.map((bullet: any, bIdx: number) => (
                        <li key={bIdx} className="flex items-start gap-2 text-sm text-foreground/80 font-medium">
                          <CircleCheckBig className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{bullet.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform mt-auto">
                    Learn More <CircleCheckBig className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutUsSection content={landing.about} />

      <TestimonialsSection content={landing.testimonials} />

      <PhotoGalleryMarquee content={landing.photo_gallery} hasGap={true} />

      <MilestonesSection content={landing.milestones} />

      <PriceTellerSection content={landing.price_teller} />
      
      <SmileGallerySection content={landing.smile_gallery} />

      <WhyChooseUsSection content={landing.why_choose} />

      <PhotoGalleryMarquee content={landing.clinic_gallery} hasGap={true} />

      <FindUsSection />

      <section id="faq" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center lg:text-left">
            <span className="text-primary text-sm font-semibold tracking-wide mb-4 block uppercase tracking-[0.2em]" data-tina-field={tinaField(landing.faq, 'badge')}>{landing.faq?.badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              <span className="text-primary" data-tina-field={tinaField(landing.faq, 'heading_part1')}>{landing.faq?.heading_part1}</span><br />
              <span className="text-foreground" data-tina-field={tinaField(landing.faq, 'heading_part2')}>{landing.faq?.heading_part2}</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-stretch">
            <div className="hidden lg:block lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px]">
              <img 
                src={landing.faq?.image} 
                alt="Dental care professional treating a patient" 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                data-tina-field={tinaField(landing.faq, 'image')}
              />
            </div>
            <div className="col-span-1 lg:col-span-3 flex flex-col justify-center">
              <FAQAccordionReact faqs={landing.faq?.items || []} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
