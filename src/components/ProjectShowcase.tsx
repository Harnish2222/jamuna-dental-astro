import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, DollarSign } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  location: string;
  timeline: string;
  value?: string;
  features: string[];
  image?: string;
}

interface ProjectShowcaseProps {
  title: string;
  subtitle?: string;
  projects: Project[];
}

const ProjectShowcase = ({ title, subtitle, projects }: ProjectShowcaseProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              {project.image && (
                <div className="h-48 bg-muted bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
              )}
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.timeline}
                  </div>
                  {project.value && (
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {project.value}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-1">
                  {project.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;