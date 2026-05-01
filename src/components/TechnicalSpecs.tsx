import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

interface TechnicalSpec {
  category: string;
  items: string[];
}

interface TechnicalSpecsProps {
  title: string;
  subtitle?: string;
  specs: TechnicalSpec[];
  certifications?: string[];
}

const TechnicalSpecs = ({ title, subtitle, specs, certifications = [] }: TechnicalSpecsProps) => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {specs.map((spec, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{spec.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {certifications.length > 0 && (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Certifications & Standards</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnicalSpecs;