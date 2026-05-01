import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
  stepNumber: number;
}

interface ServiceProcessProps {
  title: string;
  steps: ProcessStep[];
}

const ServiceProcess = ({ title, steps }: ServiceProcessProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery from concept to completion.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={`delay-${(index % 3) * 100}`}>
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">{step.stepNumber}</div>
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
