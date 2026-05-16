import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';

interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

interface ServiceProcessTimelineProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

const ServiceProcessTimeline = ({ 
  title = "How It Works", 
  subtitle = "Our step-by-step process for your dental treatment.", 
  steps = [] 
}: ServiceProcessTimelineProps) => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <Badge className="mb-4">Your Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>
          </div>
        </AnimatedSection>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={`delay-${index * 200}`}>
                <div className="relative">
                  <div className="flex justify-center mb-8">
                    <div className="relative z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl font-bold text-primary-foreground shadow-lg">{index + 1}</div>
                  </div>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={`delay-${index * 100}`}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-lg font-bold text-primary-foreground shadow-lg shrink-0">{index + 1}</div>
                  {index < steps.length - 1 && <div className="w-0.5 flex-1 bg-primary/30 my-2" />}
                </div>
                <Card className="flex-1 overflow-hidden mb-2">
                  <div className="flex gap-4 p-4">
                    <img src={step.image} alt={step.title} className="w-24 h-24 object-cover rounded-lg shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessTimeline;
