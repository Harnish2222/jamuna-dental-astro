import AnimatedSection from '@/components/AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { Instagram } from 'lucide-react';

interface InstagramReelsProps {
  content?: {
    badge: string;
    heading: string;
    description: string;
    cta_text: string;
    reels: string[];
  }
}

const InstagramReelsSection = ({ content }: InstagramReelsProps) => {
  if (!content || !content.reels) return null;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <Badge className="mb-4">{content.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{content.heading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {content.description}
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {content.reels.map((id, index) => (
            <AnimatedSection key={id} animation="fade-up" delay={`delay-${(index % 4) * 100}`}>
              <a
                href={`https://www.instagram.com/reel/${id}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full rounded-xl overflow-hidden shadow-md bg-gray-200"
                style={{ aspectRatio: '9/16' }}
              >
                {/* Static Placeholder Image with Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <div 
                  className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
                
                {/* Fallback pattern/gradient since we don't have the thumbnail locally */}
                <div 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(${45 + index * 45}deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)`,
                    opacity: 0.8
                  }}
                />
                
                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <div className="flex items-center gap-2 text-white text-xs font-semibold">
                    <Instagram className="h-4 w-4" />
                    <span>View Reel</span>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection animation="fade-up">
          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/jamuna_family_dental_care/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              style={{
                background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              }}
            >
              <Instagram className="h-6 w-6" />
              {content.cta_text}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InstagramReelsSection;
