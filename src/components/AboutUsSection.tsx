import { Star, ShieldCheck, HeartHandshake, Smile, User, ChevronRight, Stethoscope, Microscope, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import jamunaDoctorOperation from '@/assets/jamuna-doctor-portrait.png';

interface AboutFeature {
  title: string;
  description: string;
}

interface AboutStat {
  title: string;
  description: string;
}

interface AboutContent {
  badge?: string;
  heading_part1?: string;
  heading_part2?: string;
  heading_part3?: string;
  subtitle?: string;
  description?: string;
  banner_text?: string;
  years_experience?: string;
  features?: AboutFeature[];
  stats?: AboutStat[];
  image?: string;
  cta_text?: string;
  cta_secondary_text?: string;
}

const AboutUsSection = ({ content }: { content?: AboutContent }) => {
  const features = content?.features || [];
  const stats = content?.stats || [];

  return (
    <section className="py-20 bg-[#F9FAFB] overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Mobile Heading & Subtitle (Hidden on Desktop) */}
          <div className="flex lg:hidden w-full flex-col space-y-6 text-center items-center mb-[-2rem]">
            {/* Tag */}
            <div>
              <Badge variant="outline" className="text-[#072674] border-[#072674]/20 rounded-full px-4 py-1.5 uppercase tracking-widest text-xs font-bold bg-white">
                <User className="w-3.5 h-3.5 mr-2" />
                {content?.badge || 'ABOUT US'}
              </Badge>
            </div>

            {/* Headings */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.2] text-[#072674]">
                {content?.heading_part1 || "Your Family's Trusted Dental Experts in"} <span className="text-[#0080B5]">{content?.heading_part2 || "Dindigul"}</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                {content?.subtitle}
              </p>
            </div>
          </div>

          {/* Left Column - Image & Badges (Order 2 on Mobile, 1 on Desktop) */}
          <AnimatedSection animation="fade-right" className="relative w-full order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-gray-200 aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/4.5] xl:aspect-[4/4]">
              <img 
                src={content?.image || jamunaDoctorOperation.src} 
                alt="Doctor performing dental treatment at JFDC" 
                className="w-full h-full object-cover object-top" 
              />
            </div>

            {/* Top Right Badge: Rating */}
            <div className="absolute top-6 -right-2 md:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-[160px]">
              <div className="text-3xl font-extrabold text-gray-900 mb-1 text-left">4.9</div>
              <div className="flex gap-1 mb-2 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="text-sm font-bold text-[#072674] text-left">600+ Happy Patients</div>
            </div>
          </AnimatedSection>

          {/* Right Column - Content (Order 3 on Mobile, 2 on Desktop) */}
          <AnimatedSection animation="fade-left" delay="delay-100" className="w-full flex flex-col space-y-6 pt-0 lg:pt-0 order-3 lg:order-2 items-center lg:items-start text-center lg:text-left">
            
            {/* Desktop Heading & Subtitle */}
            <div className="hidden lg:flex flex-col space-y-6 w-full">
              {/* Tag */}
              <div>
                <Badge variant="outline" className="text-[#072674] border-[#072674]/20 rounded-full px-4 py-1.5 uppercase tracking-widest text-xs font-bold bg-white">
                  <User className="w-3.5 h-3.5 mr-2" />
                  {content?.badge || 'ABOUT US'}
                </Badge>
              </div>

              {/* Headings */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-extrabold leading-[1.2] text-[#072674]">
                  {content?.heading_part1 || "Your Family's Trusted Dental Experts in"} <span className="text-[#0080B5]">{content?.heading_part2 || "Dindigul"}</span>
                </h2>
                <p className="text-xl text-gray-600 font-medium leading-relaxed">
                  {content?.subtitle}
                </p>
              </div>
            </div>

            {/* Horizontal Line (Desktop only) */}
            <div className="hidden lg:block h-px w-full bg-gray-200"></div>

            {/* Description (Centered on mobile, left on desktop) */}
            <div className="text-[15px] text-gray-600 leading-relaxed max-w-2xl whitespace-pre-line text-center lg:text-left">
              {content?.description}
            </div>

            {/* Features List */}
            {features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 py-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0080B5]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#0080B5]" />
                    </div>
                    <span className="text-[#072674] font-semibold text-[15px]">{feature.title}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <a href="#services" className="w-full sm:w-auto bg-[#072674] hover:bg-[#072674]/90 text-white rounded-full px-8 py-6 text-sm font-bold shadow-lg shadow-[#072674]/20 group inline-flex items-center justify-center transition-colors h-14">
                {content?.cta_text || 'View Services'}
              </a>
              <a href="#team" className="w-full sm:w-auto border border-[#072674] text-[#072674] hover:bg-[#072674]/5 rounded-full px-8 py-6 text-sm font-bold bg-white inline-flex items-center justify-center transition-colors h-14">
                <User className="w-4 h-4 mr-2" />
                {content?.cta_secondary_text || 'Meet Our Doctors'}
              </a>
            </div>

          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
