import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon, ArrowRight, Clock } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import AnimatedSection from '@/components/AnimatedSection';

interface Treatment {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  duration?: string;
  link?: string;
}

interface ServiceTreatmentCardsProps {
  title: string;
  subtitle: string;
  treatments: Treatment[];
}

const ServiceTreatmentCards = ({ title, subtitle, treatments }: ServiceTreatmentCardsProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Treatments</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={`delay-${(index % 3) * 100}`}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={treatment.image} alt={treatment.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-primary rounded-xl shadow-lg">
                      <treatment.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  {treatment.duration && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary">
                        <Clock className="w-4 h-4" />{treatment.duration}
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{treatment.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-3">{treatment.description}</p>
                  {treatment.link ? (
                    <Link to={treatment.link} className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all group/link">
                      Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <Link to="/contact" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all group/link">
                      Book Now <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTreatmentCards;
