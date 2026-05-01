import AnimatedSection from '@/components/AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { Instagram } from 'lucide-react';

const reelIds = [
  'C_atBRUyMby',
  'C_jxdPmS-3h',
  'DBvzB5uyjwS',
  'DCGpxUQSL1F',
  'DCO02CASsWL',
  'DEumpuayZTo',
  'DE2GYn5yu9p',
];

const InstagramReelsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <Badge className="mb-4">Instagram</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Watch Our Reels</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Follow us on Instagram for dental tips, patient transformations, and behind-the-scenes moments.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reelIds.map((id, index) => (
            <AnimatedSection key={id} animation="fade-up" delay={`delay-${(index % 4) * 100}`}>
              <div
                className="relative w-full rounded-xl overflow-hidden shadow-md"
                style={{ aspectRatio: '9/16' }}
              >
                <iframe
                  src={`https://www.instagram.com/reel/${id}/embed/?hidecaption=true`}
                  className="absolute border-0"
                  allowFullScreen
                  loading="lazy"
                  scrolling="no"
                  title={`Instagram Reel ${index + 1}`}
                  style={{
                    top: '-60px',
                    left: 0,
                    width: '100%',
                    height: 'calc(100% + 200px)',
                    overflow: 'hidden',
                  }}
                />
              </div>
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
              Follow Jamuna on Instagram
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InstagramReelsSection;
