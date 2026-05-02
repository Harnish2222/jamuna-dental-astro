import { Badge } from '@/components/ui/badge';
import { type LucideIcon } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  badge: string;
  title: string;
  description: string;
  benefits: Benefit[];
  images: [string, string];
}

const ServiceBenefits = ({ badge, title, description, benefits, images }: ServiceBenefitsProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src={images[0]} alt="Dental care" className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover" />
                <img src={images[1]} alt="Dental treatment" className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover mt-8" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left">
            <div>
              <Badge className="mb-4">{badge}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{title}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{description}</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
