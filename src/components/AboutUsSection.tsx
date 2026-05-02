import { CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import jamunaDoctorOperation from '@/assets/jamuna-doctor-portrait.png';

interface AboutContent {
  badge?: string;
  heading_part1?: string;
  heading_part2?: string;
  heading_part3?: string;
  description?: string;
  highlights?: { text: string }[];
  image?: string;
  cta_text?: string;
}

const AboutUsSection = ({ content }: { content?: AboutContent }) => {
  const highlights = content?.highlights?.map(h => h.text) || [
    "Experienced Specialists",
    "Sterilized & Hygienic Clinic",
    "Gentle & Comfortable Treatment",
    "Certified Doctors",
  ];

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* Mobile: Heading first */}
          <AnimatedSection animation="fade-right" className="order-1 lg:order-none space-y-3 text-center lg:text-left w-full lg:col-start-2 lg:row-start-1">
            <Badge variant="outline" className="text-primary border-primary/30">
              <Sparkles className="w-3 h-3 mr-1" />
              {content?.badge || 'About Us'}
            </Badge>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-foreground">{content?.heading_part1 || 'Your Journey to a '} </span>
              <span className="text-primary">{content?.heading_part2 || 'Healthier Smile'}</span>
              <span className="text-foreground"> {content?.heading_part3 || 'Begins Here'}</span>
            </h2>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection animation="fade-left" className="relative order-2 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={content?.image || jamunaDoctorOperation.src} alt="Doctor performing dental treatment at JFDC" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-xl px-4 py-2 text-center shadow-lg">
                <div className="text-xl font-bold">4.9★</div>
                <div className="text-xs">600+ Reviews</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-right" delay="delay-200" className="order-3 lg:order-none space-y-4 text-center lg:text-left w-full lg:col-start-2 lg:row-start-2">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {content?.description || 'With certified MDS specialists, advanced equipment and a gentle approach, JFDC delivers both routine and advanced dental care in a clean, hygienic environment — making dentistry transparent, comfortable and ethical for every patient across Dindigul.'}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
            
            <div>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                {content?.cta_text || 'View Our Services'}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
