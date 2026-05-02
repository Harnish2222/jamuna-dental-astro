import { CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import jamunaDoctorOperation from '@/assets/jamuna-doctor-operation.jpg';
import jamunaClinicInterior from '@/assets/jamuna-clinic-interior.jpg';

const AboutUsSection = () => {
  const highlights = [
    "Experienced Specialists",
    "Sterilized & Hygienic Clinic",
    "Gentle & Comfortable Treatment",
    "Certified Doctors",
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile: Heading first */}
          <AnimatedSection animation="fade-right" className="order-1 lg:order-none space-y-6 text-center lg:text-left w-full lg:col-start-2 lg:row-start-1">
            <Badge variant="outline" className="text-primary border-primary/30">
              <Sparkles className="w-3 h-3 mr-1" />
              About Us
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-foreground">Your Journey to a </span>
              <span className="text-primary">Healthier Smile</span>
              <span className="text-foreground"> Begins Here</span>
            </h2>
          </AnimatedSection>

          {/* Images */}
          <AnimatedSection animation="fade-left" className="relative order-2 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <Sparkles className="absolute top-0 left-0 w-8 h-8 text-primary/30" />
            <Sparkles className="absolute bottom-20 left-8 w-6 h-6 text-primary/40" />
            <Sparkles className="absolute top-1/3 right-0 w-10 h-10 text-primary/20" />
            
            <div className="relative z-10 w-[70%] rounded-2xl overflow-hidden shadow-xl">
              <img src={jamunaDoctorOperation.src} alt="Doctor performing dental treatment at JFDC" className="w-full aspect-[4/3] object-cover" />
            </div>
            
            <div className="absolute top-4 right-[15%] z-20 w-24 h-24 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center text-center shadow-lg border-4 border-background">
              <span className="text-2xl font-bold">4.9★</span>
              <span className="text-[10px] tracking-wide leading-tight">600+<br/>Reviews</span>
            </div>
            
            <div className="relative z-10 w-[65%] ml-auto -mt-16 rounded-2xl overflow-hidden shadow-xl border-4 border-background">
              <img src={jamunaClinicInterior.src} alt="Modern JFDC clinic interior" className="w-full aspect-[4/3] object-cover" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-right" delay="delay-200" className="order-3 lg:order-none space-y-6 text-center lg:text-left w-full lg:col-start-2 lg:row-start-2">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              With experienced and certified dentists along with modern equipment, we provide both routine dental treatments and advanced dental procedures in a clean and hygienic environment. Jamuna Family Dental Care combines modern techniques with a gentle & friendly approach to help every patient achieve their dream smile.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              At JFDC, we believe in making dentistry transparent, ethical and comfortable for families, young adults and professionals across Dindigul. Pleasing ambience, state-of-the-art facilities, home-care dental services and ample parking space are all our added advantages.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                View Our Services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
