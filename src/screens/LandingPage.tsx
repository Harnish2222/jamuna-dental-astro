import { Phone, Award, Users, MapPin, Clock, CircleCheckBig, User, CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useRef } from 'react';
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
  { img: '/uploads/service-general-dentistry.png', title: 'General & Preventive Dentistry', desc: 'Routine care to keep your smile healthy and catch issues early.' },
  { img: '/uploads/root canal.jpg', title: 'Root Canal Treatment', desc: 'Save your natural tooth with painless, advanced root canal therapy.' },
  { img: '/uploads/service-smile-design.png', title: 'Cosmetic Dentistry', desc: 'Designed for a brighter, more confident smile.' },
  { img: '/uploads/dental implant.jpg', title: 'Dental Implants', desc: 'Permanent, natural-looking replacement for missing teeth.' },
  { img: '/uploads/crowns and bridges1.jpg', title: 'Crowns & Bridges', desc: 'Restore damaged teeth and bridge gaps with strong, aesthetic zirconia.' },
  { img: '/uploads/clear%20alligners.jpg', title: 'Braces & Aligners', desc: 'Straighter teeth and a better bite for all ages.' },
  { img: '/uploads/pediatric-dentistry.png', title: 'Kids Dentistry', desc: 'Gentle, child-friendly dental care in a fun, comfortable setting.' },
  { img: '/uploads/emergency-toothache.png', title: 'Emergency Dental Care', desc: 'Fast relief for sudden dental pain, trauma, and urgent treatment needs.' },
];

const usps = [
  'MDS Specialist — 12+ Years',
  'Same-Day Consultation',
  'Painless Treatments',
  'Family-Friendly Clinic',
];

const faqs = [
  {
    question: 'What dental treatments do you offer?',
    answer: 'We offer a full range of dental services including dental implants, root canal treatment, teeth cleaning & scaling, teeth whitening, braces & invisible aligners, cosmetic dentistry, pediatric dentistry, gum treatment, tooth extraction, and smile design.',
  },
  {
    question: 'Is the treatment painful?',
    answer: 'We focus on gentle and comfortable treatments. Our experienced & certified dentists use modern techniques and equipment to ensure minimal discomfort during all procedures.',
  },
  {
    question: 'What are your clinic timings?',
    answer: 'We are open from 9:00 AM to 9:00 PM, all days including weekends. Walk-ins and appointments are both welcome. We offer home visit services too.',
  },
  {
    question: 'Do you treat children?',
    answer: 'Yes! We provide specialized pediatric dental care by MDS pedodontist doctors in a fun, comfortable environment designed to make children feel at ease during their visit.',
  },
  {
    question: 'How long do dental implants last?',
    answer: 'With proper care and maintenance, dental implants can last a lifetime. They are designed to fuse with your bone, providing a permanent solution for missing teeth.',
  },
];

const LandingPage = () => {
  const isMobile = useIsMobile();
  const autoplayPlugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  const heroImages = [
    { src: '/uploads/jfdc clinic.png', alt: 'Jamuna Family Dental Care building' },
    { src: '/uploads/happy-family-appointment.jpg', alt: 'Happy patient family' },
    { src: '/uploads/hero-treatment-room-blue.jpg', alt: 'Modern treatment room' },
    { src: '/uploads/service-smile-design.png', alt: 'Smile Design' },
    { src: '/uploads/hero-doctor-child.jpg', alt: 'Doctor treating child' },
    { src: '/uploads/hero-consultation-room.jpg', alt: 'Consultation room' },
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
  const clinicImages = [
    { src: '/uploads/clinic3.jpg', alt: 'Clinic Facility 1' },
    { src: '/uploads/clininc2.jpg', alt: 'Clinic Facility 2' },
    { src: '/uploads/clininc5.jpg', alt: 'Clinic Facility 3' },
    { src: '/uploads/clinic1.jpg', alt: 'Clinic Facility 4' },
    { src: '/uploads/clinic4.jpg', alt: 'Clinic Facility 5' },
    { src: '/uploads/hero-consultation-room.jpg', alt: 'Consultation Room' },
    { src: '/uploads/hero-reception.jpg', alt: 'Reception Area' },
    { src: '/uploads/jamuna-doctor-operation.jpg', alt: 'Operation Theatre' },
    { src: '/uploads/pediatric dentistry.jpg', alt: 'Pediatric Dentistry Area' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SEO
        title="Trusted Family Dental Clinic in Dindigul | Jamuna Family Dental Care"
        description="Expert MDS specialist dental care in Dindigul — implants, root canal, braces, kids dentistry. 4.9★ rated. Call +91 7200 620 011."
        canonical="https://jamunadental.com/dental"
        noindex
      />
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 pt-2 lg:pt-4">
        <div className="max-w-7xl mx-auto rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-border">
          <div className="flex items-center justify-between h-14 lg:h-16 px-4 lg:px-8">
            <div className="flex items-center gap-2">
              <img
                src={jfdcLogo.src}
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
                <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  ⭐ Rated 4.9 by 600+ Patients
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
                  <span className="text-gray-900 block">Dindigul&apos;s Most</span>
                  <span className="text-primary block mt-1">Trusted Dental Clinic</span>
                </h1>
                <h2 className="text-[#0080B5] font-bold tracking-[0.15em] uppercase text-xs sm:text-sm md:text-base mt-4">
                  Expert MDS Specialists • Painless Care
                </h2>
              </div>
            </div>

            {/* ② Carousel — between heading & content on mobile */}
            <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full max-w-2xl mx-auto">
               <HeroCarousel images={heroImages.map(img => ({ src: img.src, alt: img.alt }))} />
            </div>

            {/* ③ Description, highlights, CTA — below carousel on mobile */}
            <div className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col gap-5 text-center lg:text-left pb-4">
              <p className="text-base sm:text-lg text-gray-600 leading-[1.6] max-w-2xl mx-auto lg:mx-0 font-medium">
                Expert MDS specialist dental care for your entire family with painless treatments and advanced technology in the heart of Dindigul.
              </p>

              {/* Highlights Box */}
              <div className="flex items-start justify-center lg:justify-start py-3 px-2 sm:px-4 border border-gray-100 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_4px_15px_-4px_rgba(0,0,0,0.05)] w-fit mx-auto lg:mx-0 mt-2">
                {[
                  { text: 'Modern treatments', icon: <path d="M12 22C12 22 15 19 16.5 16C18 13 18.5 10 17.5 7.5C16.5 5 14 4 12 5C10 4 7.5 5 6.5 7.5C5.5 10 6 13 7.5 16C9 19 12 22 12 22Z" /> },
                  { text: 'Pain-free procedures', icon: <g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></g> },
                  { text: 'Gentle approach', icon: <g><circle cx="9" cy="7" r="4"/><path d="M16 11l-2-2m-1.5-1.5L11 6"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="16" cy="11" r="3"/><path d="M13 21v-2a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2"/></g> },
                  { text: 'Expert care', icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> },
                ].map((highlight, idx, arr) => (
                  <div key={idx} className={`flex flex-col items-center px-4 ${idx !== arr.length - 1 ? 'border-r border-gray-300/60' : ''}`}>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm border border-blue-50 flex items-center justify-center mb-2">
                      <svg className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {highlight.icon}
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

      <ServiceMarquee services={services.map(s => s.title)} />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white hover:bg-primary px-4 py-1.5">Our Services</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">Complete Dental Care</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              From routine treatments to advanced procedures, we provide a full range of dental services for all age groups in a clean and hygienic environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <article key={index} className="group h-full overflow-hidden rounded-2xl bg-card border border-border shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.img}
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
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">{service.desc}</p>
                  <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                    Learn More <CircleCheckBig className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutUsSection 
        content={{
          badge: 'About Us',
          heading_part1: 'Your Journey to a',
          heading_part2: 'Healthier Smile Begins Here',
          subtitle: 'Serving families across Dindigul with ethical, modern and comfortable dental care.',
          description: `With experienced and certified dentists along with modern equipments, we provide both routine dental treatments and advanced dental procedures in a clean and hygienic environment. Jamuna Family Dental Care combines modern techniques with a gentle & friendly approach to help every patient achieve their dream smile.\n\nAt JFDC, we believe in making dentistry transparent, ethical and comfortable for families, young adults and professionals across Dindigul.`,
          image: '/uploads/about%20jamuna%20dental.png',
          features: [
            { title: 'Certified & Experienced Specialists', description: '' },
            { title: 'Sterilized & Hygienic Clinic', description: '' },
            { title: 'Gentle & Comfortable Treatment', description: '' },
            { title: 'Quick Diagnosis & Treatment', description: '' },
          ],
          cta_text: 'View Treatments',
          cta_secondary_text: 'Meet Our Doctors'
        }} 
      />

      <TestimonialsSection 
        content={{
          badge: 'Patient Reviews',
          heading: 'What Our Patients Say',
          description: 'Read real stories from our satisfied patients across Dindigul.',
          reviews: [
            { author: "Kokila Kalimuthu", content: "Had a great experience at Jamuna Family dental care. Dr Arun sarath sir is very kind and gentle. Procedure was very smooth and pain-free. Very happy with the care and results." },
            { author: "Suki Vignesh", content: "Nice ambience and excellent quality crowns.. very happy to get treated here.. Highly recommending this best dental hospital in dindigul" },
            { author: "k. kokila", content: "Recently I visited jamuna family dental care for scaling and root canal treatment. Such a good & calm environment . Highly satisfied with their treatments, Especially doctors and sisters caring." },
            { author: "Antony Flx", content: "I had a very good experience of extraction of the wisdom tooth as well scaling and filling. So gentle and excellent service very kind in approach. Excellently skillful." },
            { author: "karthick karthick", content: "I had the best experience at Jamuna dental..Dr Arun and Dr Priyanka were so well versed with the speciality procedures.. truly the best dental Hosptial in Dindigul" },
            { author: "Amal Raj", content: "Treatment was painless drs and staffs were very kind. I had pain in lower teeth did rct and followed by crown. Now i am happy and satisfied thank you dr." }
          ]
        }}
      />

      <PhotoGalleryMarquee 
        content={{ 
          badge: 'OUR ESTEEMED PATIENTS',
          heading_part1: 'Trusted by',
          heading_part2: 'Dindigul',
          description: 'Business leaders, educators, and public figures who choose Jamuna Family Dental Care.',
          images: [
            { src: '/uploads/vip-kamalahassan.jpg', alt: 'Mr. N. KamalaHassan - Anil Foods MD' },
            { src: '/uploads/vip-vengatachalam.jpg', alt: 'Mr. Vengatachalam - Vivera Grande MD' },
            { src: '/uploads/vip-palpandi.jpg', alt: 'Mr. Palpandi - MSP School HM' },
            { src: '/uploads/vip-ramji.jpg', alt: 'Mr. Ramji Natarajan - SMB CBSE Principal' },
            { src: '/uploads/vip-ravi.jpg', alt: 'Mr. Ravi Thiyagarajan - Chettinadu Construction' },
            { src: '/uploads/vip-ravichandran.jpg', alt: 'Mr. Ravichandran - Padma Lites MD' },
            { src: '/uploads/vip-ramesh.jpg', alt: 'Mr. S. Ramesh - Naga Foods Director' },
            { src: '/uploads/vip-thenmozhi.jpg', alt: 'Mrs. Thenmozhi MLA & Mr. Gunasekar - Nilakottai MLA' }
          ]
        }} 
        hasGap={true} 
      />

      <MilestonesSection 
        content={{
          badge: 'Our Track Record',
          heading_part1: 'Numbers That',
          heading_part2: 'Speak for Us',
          description: 'Trusted by families across Dindigul since 2011',
          image: '/uploads/hero-jfdc-front.jpg',
          stats: [
            { icon: 'Users', value: 18, suffix: '+', label: 'Years Experience', iconColor: 'text-primary', bgColor: 'bg-primary/5' },
            { icon: 'Star', value: 600, suffix: '+', label: 'Patient Reviews', iconColor: 'text-[#009AA7]', bgColor: 'bg-[#009AA7]/10' },
            { icon: 'Heart', value: 25, suffix: 'K+', label: 'Happy Patients', iconColor: 'text-destructive', bgColor: 'bg-destructive/5' },
            { icon: 'Clock', value: 4, suffix: '.9★', label: 'Google Rating', iconColor: 'text-primary', bgColor: 'bg-primary/5' }
          ]
        }}
      />

      <PriceTellerSection 
        content={{
          badge: 'Most Affordable in Dindigul',
          heading: 'Most Affordable Dental Treatments in Dindigul',
          description: 'Transparent, honest pricing with zero hidden fees — select a treatment below to see our rates.'
        }}
      />

      <WhyChooseUsSection 
        content={{
          heading: 'Your smile is our priority',
          description: 'Jamuna Family Dental Care focuses on comfortable treatments, advanced technology, and personalized patient-centered dental care to help patients maintain healthy and confident smiles.',
          image: '/uploads/why-choose-tooth.png',
          features: [
            { title: "Family-Centered Care", description: "We provide dental care for all ages — children, adults, and seniors — with gentle, comfortable treatments tailored to each patient." },
            { title: "4.9★ Rating | 600+ Reviews", description: "Many patients highlight our professional care, advanced equipment, patient-friendly and comfortable & safe treatment experience. Trusted by families across Dindigul." },
            { title: "Advanced Technology", description: "We use the latest dental equipment with sterilized instruments in a clean, hygienic clinic for quick diagnosis and precise treatment." }
          ]
        }}
      />

      <PhotoGalleryMarquee 
        content={{ 
          badge: 'CLINIC GALLERY',
          heading_part1: 'Our Modern',
          heading_part2: 'Facilities',
          description: 'Experience our world-class dental care infrastructure in Dindigul.',
          images: clinicImages 
        }} 
        hasGap={true} 
      />



      <FindUsSection />

      <section id="faq" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center lg:text-left">
            <span className="text-primary text-sm font-semibold tracking-wide mb-4 block uppercase tracking-[0.2em]">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              <span className="text-primary">Everything You Need To Know</span><br />
              <span className="text-foreground">About Dental Care</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-stretch">
            <div className="hidden lg:block lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px]">
              <img 
                src={jamunaDoctorTreatment.src} 
                alt="Dental care professional treating a patient" 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            <div className="col-span-1 lg:col-span-3 flex flex-col justify-center">
              <FAQAccordionReact faqs={faqs} />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LandingPage;
