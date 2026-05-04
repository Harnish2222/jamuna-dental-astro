import AnimatedSection from '@/components/AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { Instagram } from 'lucide-react';
import LiteInstagramReel from './LiteInstagramReel';

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
              <LiteInstagramReel id={id} index={index} />
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
