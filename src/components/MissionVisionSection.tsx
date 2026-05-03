import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { AnimatedFeatureCard } from '@/components/ui/animated-feature-card';

interface MissionVisionProps {
  content?: {
    badge: string;
    heading: string;
    cta_text: string;
    cards: {
      icon: string;
      title: string;
      description: string;
    }[];
  }
}

const MissionVisionSection = ({ content }: MissionVisionProps) => {
  if (!content) return null;

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="absolute top-10 left-10 w-32 h-32 text-primary/10" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C35 5 25 15 25 30C25 45 30 50 30 65C30 80 35 95 45 95C50 95 52 85 55 85C58 85 60 95 65 95C75 95 80 80 80 65C80 50 85 45 85 30C85 15 75 5 60 5C55 5 52 10 50 10C48 10 45 5 50 5Z"/>
        </svg>
        <svg className="absolute bottom-20 right-20 w-48 h-48 text-primary/10" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C35 5 25 15 25 30C25 45 30 50 30 65C30 80 35 95 45 95C50 95 52 85 55 85C58 85 60 95 65 95C75 95 80 80 80 65C80 50 85 45 85 30C85 15 75 5 60 5C55 5 52 10 50 10C48 10 45 5 50 5Z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-primary font-medium text-sm tracking-wide">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {content.badge}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {content.heading}
              </h2>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full self-start" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {content.cta_text}
              <Plus className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-6">
          {content.cards?.map((card, index) => {
            // @ts-ignore
            const IconComponent = LucideIcons[card.icon] || LucideIcons.Circle;
            return (
            <AnimatedFeatureCard
              key={index}
              icon={IconComponent}
              title={card.title}
              description={card.description}
              index={index}
            />
          )})}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
