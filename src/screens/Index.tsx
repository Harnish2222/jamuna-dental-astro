import { ArrowRight, Phone, Stethoscope, Sparkles, Wrench, AlignCenter, Zap, Baby, Scissors, SmilePlus, ShieldCheck, HeartHandshake, Smile, Award, Siren, CheckCircle2 } from 'lucide-react';
import serviceImplants from '@/assets/service-implants.jpg';
import AnimatedSection from '@/components/AnimatedSection';
import serviceRootCanal from '@/assets/service-root-canal.jpg';
import serviceToothExtraction from '@/assets/service-tooth-extraction.jpg';
import serviceSmileDesign from '@/assets/service-smile-design.jpg';
import serviceTeethWhitening from '@/assets/service-teeth-whitening.jpg';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import ServiceMarquee from '@/components/ServiceMarquee';
import AboutUsSection from '@/components/AboutUsSection';
import MilestonesSection from '@/components/MilestonesSection';
import MissionVisionSection from '@/components/MissionVisionSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import OurTeamSection from '@/components/OurTeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AppointmentBookingSection from '@/components/AppointmentBookingSection';
import PhotoGalleryMarquee from '@/components/PhotoGalleryMarquee';
import InstagramReelsSection from '@/components/InstagramReelsSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import SmileGallerySection from '@/components/SmileGallerySection';
import { useRef } from 'react';
import { dentalImages } from '@/lib/dentalImages';
import SEO from '@/components/SEO';
import InView from '@/components/InView';
import { dentistSchema, organizationSchema, breadcrumbHome, homeFaqSchema } from '@/seo/schemas';

import heroJfdcFront from '@/assets/hero-jfdc-front.jpg';
import heroTreatmentBlue from '@/assets/hero-treatment-room-blue.jpg';
import heroReception from '@/assets/hero-reception.jpg';
import heroConsultation from '@/assets/hero-consultation-room.jpg';
import heroTreatmentPink from '@/assets/hero-treatment-room-pink.jpg';
import heroDoctorChild from '@/assets/hero-doctor-child.jpg';

const Index = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const heroImages = [
    { src: heroJfdcFront, alt: "Jamuna Family Dental Care - Building Front" },
    { src: heroTreatmentBlue, alt: "Modern blue treatment room" },
    { src: heroReception, alt: "Clinic reception area" },
    { src: heroConsultation, alt: "Doctor consultation room" },
    
    { src: heroDoctorChild, alt: "Doctor treating a child patient" },
  ];


  const services = [
    {
      title: "General & Preventive Dentistry",
      description: "Routine care to keep your smile healthy and catch issues early.",
      bullets: ["Oral Checkups", "Teeth Cleaning & Polishing", "Advanced Digital X-Rays", "Dental Fillings"],
      icon: Stethoscope,
      image: dentalImages.services.generalExam,
      link: "/#appointment",
    },
    {
      title: "Root Canal Treatment",
      description: "Save your natural tooth with painless, advanced root canal therapy.",
      bullets: ["Single-visit RCT", "Painless procedure", "Save the natural tooth"],
      icon: Sparkles,
      image: serviceRootCanal,
      link: "/#appointment",
    },
    {
      title: "Implants & Restorations",
      description: "Rebuild missing or damaged teeth with permanent, natural-looking solutions.",
      bullets: ["Dental Implants", "Zirconia Crowns & Bridges", "Tooth Extraction", "Minor Oral Surgery"],
      icon: Wrench,
      image: serviceImplants,
      link: "/#appointment",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Designed for a brighter, more confident smile.",
      bullets: ["Teeth Whitening", "Veneers & Bonding", "Smile Design", "Gum Care"],
      icon: SmilePlus,
      image: serviceSmileDesign,
      link: "/#appointment",
    },
    {
      title: "Braces & Aligners",
      description: "Straighter teeth and a better bite for all ages.",
      bullets: ["Metal & Ceramic Braces", "Clear Aligners", "Invisible Braces"],
      icon: AlignCenter,
      image: dentalImages.services.orthodontics,
      link: "/#appointment",
    },
    {
      title: "Kids Dentistry",
      description: "Gentle, child-friendly dental care in a fun, comfortable setting.",
      bullets: ["Pediatric specialists", "Child-friendly approach", "Preventive kids care"],
      icon: Baby,
      image: dentalImages.services.pediatric,
      link: "/#appointment",
    },
    {
      title: "Emergency Dental Care",
      description: "Fast relief for sudden dental pain, trauma, and urgent treatment needs.",
      bullets: ["9 AM – 9 PM availability", "Same-day relief", "Walk-ins welcome"],
      icon: Siren,
      image: serviceToothExtraction,
      link: "/#appointment",
    },
  ];

  const faqs = [
    { question: "What dental treatments do you offer?", answer: "We offer a full range of dental services including dental implants, root canal treatment, teeth cleaning & scaling, teeth whitening, braces & invisible aligners, cosmetic dentistry, pediatric dentistry, gum treatment, tooth extraction, and smile design." },
    { question: "Is the treatment painful?", answer: "We focus on gentle and comfortable treatments. Our experienced & certified dentists use modern techniques and equipment to ensure minimal discomfort during all procedures." },
    { question: "What are your clinic timings?", answer: "We are open from 9:00 AM to 9:00 PM, all days including weekends. Walk-ins and appointments are both welcome. We offer home visit services too." },
    { question: "Do you treat children?", answer: "Yes! We provide specialized pediatric dental care by MDS pedodontist doctors in a fun, comfortable environment designed to make children feel at ease during their visit." },
    { question: "How long do dental implants last?", answer: "With proper care and maintenance, dental implants can last a lifetime. They are designed to fuse with your bone, providing a permanent solution for missing teeth." },
    { question: "Is teeth whitening safe?", answer: "Professional teeth whitening is completely safe when performed by a dental professional. We use proven whitening systems that protect your enamel while delivering dramatic results." },
    { question: "How often should I visit the dentist?", answer: "We recommend visiting every 6 months for routine teeth cleanings and checkups. However, some patients may need frequent visits based on their oral health needs." }
  ];

  return (
    <>
      <SEO
        title="Best Dental Clinic in Dindigul | Jamuna Family Dental Care"
        description="Jamuna Family Dental Care – Best dental clinic in Dindigul offering dental implants, root canal, teeth whitening, braces, smile design & pediatric dentistry. 4.9★ rated, 553+ Google reviews. Call +91 7200 620 011."
        canonical="https://jamunadental.com/"
        jsonLd={[dentistSchema, organizationSchema, breadcrumbHome, homeFaqSchema]}
      />
      {/* Hero Section */}
      <section id="hero" className="relative bg-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left order-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Dindigul's Most </span>
                <span className="text-primary">Trusted Dental Clinic</span>
                <span className="text-foreground"> — We Care, </span>
                <span className="text-primary">Not Just Cure</span>
              </h1>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Jamuna Family Dental Care is a modern, trusted, best dental clinic in Dindigul providing complete expert dental care for children, adults and senior patients. We focus on comfortable & gentle dental treatments with advanced technology and personalized expert care.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 justify-items-center lg:justify-items-start text-sm font-medium text-foreground/80">
                <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> Modern treatments</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Pain-free procedures</span>
                <span className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-primary" /> Gentle approach</span>
                <span className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" /> Expert care</span>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-lg" asChild>
                  <a href="tel:+917200620011" onClick={() => (window as any).gtag_report_phone_conversion?.()}><Phone className="mr-2 h-6 w-6" />Call Now – +91 7200 620 011</a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  <img src={dentalImages.team.dentist1} alt="Dentist" className="w-12 h-12 rounded-full border-2 border-background object-cover shadow-md" />
                  <img src={dentalImages.team.dentist2} alt="Dentist" className="w-12 h-12 rounded-full border-2 border-background object-cover shadow-md" />
                  <img src={dentalImages.team.hygienist} alt="Hygienist" className="w-12 h-12 rounded-full border-2 border-background object-cover shadow-md" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">600+ Patient Reviews</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <span className="text-yellow-500">★★★★★</span> 4.9 Rating
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic image carousel on the right */}
            <div className="order-2 w-full">
              <Carousel opts={{ loop: true }} plugins={[autoplayPlugin.current]} className="w-full">
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
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
            </div>
          </div>
        </div>
      </section>

      <ServiceMarquee />

      <div id="about">
        <AboutUsSection />
      </div>

      <MilestonesSection />
      <MissionVisionSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Complete Dental Care</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">From routine treatments to advanced procedures, we provide a full range of dental services for all age groups in a clean and hygienic environment.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={`delay-${(index % 3) * 100}`}>
                <Link to={service.link}>
                  <Card className="group h-full overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-border hover:border-primary/50">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <service.icon className="absolute bottom-4 left-4 h-8 w-8 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed mb-4">{service.description}</p>
                      <ul className="space-y-1.5">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After section hidden - enable later */}
      {/* <BeforeAfterSection /> */}
      <WhyChooseUsSection />

      {/* Team section hidden - enable later */}
      {/* <div id="team"><OurTeamSection /></div> */}

      <PhotoGalleryMarquee />
      <InView minHeight="600px"><InstagramReelsSection /></InView>
      <InView minHeight="500px"><TestimonialsSection /></InView>

      <div id="appointment">
        <AppointmentBookingSection />
      </div>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="mb-12 text-center lg:text-left">
              <span className="text-primary text-sm font-semibold tracking-wide mb-4 block">FAQs</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-primary">Everything You Need To Know</span><br />
                <span className="text-foreground">About Dental Care</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <AnimatedSection animation="fade-left" className="col-span-1 lg:col-span-3">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="bg-background border-0 rounded-lg px-0 data-[state=open]:bg-background shadow-sm hover:shadow-md transition-shadow duration-300">
                    <AccordionTrigger className="text-left font-medium text-foreground text-lg hover:text-primary hover:no-underline py-5 px-5 justify-start">
                      <span className="text-primary font-semibold mr-3">Q{index + 1}.</span>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed px-5 pb-5 text-left">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" className="hidden lg:block lg:col-span-2 relative">
              <img src={dentalImages.services.generalExam} alt="Dental care" className="w-full h-auto rounded-2xl object-cover shadow-lg" />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
