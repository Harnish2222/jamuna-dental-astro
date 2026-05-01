import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

interface Testimonial {
  name: string;
  quote: string;
  image?: string;
  rating?: number;
  service?: string;
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
}

const ServiceTestimonials = ({ testimonials }: ServiceTestimonialsProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <Badge className="mb-4">Patient Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Patients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Real experiences from our valued patients</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={`delay-${(index % 3) * 100}`}>
              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-teal/40 mb-4" />
                  <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  {testimonial.rating && (
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < testimonial.rating! ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-4">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-teal">{testimonial.name.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-teal">{testimonial.name}</div>
                      {testimonial.service && <div className="text-sm text-muted-foreground">{testimonial.service}</div>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
