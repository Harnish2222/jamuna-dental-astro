import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { ArrowRight, Phone, Star, Users, Clock } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface HeroStat {
  value: string;
  label: string;
  icon?: LucideIcon;
}

interface ServiceHeroSectionProps {
  badge: string;
  badgeIcon?: LucideIcon;
  badgeVariant?: 'default' | 'emergency';
  title: string;
  description: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  stats?: HeroStat[];
}

const defaultStats: HeroStat[] = [
  { value: '15+', label: 'Years Experience', icon: Clock },
  { value: '10K+', label: 'Happy Patients', icon: Users },
  { value: '4.8', label: 'Google Rating', icon: Star },
];

const ServiceHeroSection = ({
  badge,
  badgeIcon: BadgeIcon,
  badgeVariant = 'default',
  title,
  description,
  backgroundImage,
  ctaText = 'Book Appointment',
  ctaLink = '/contact',
  stats = defaultStats,
}: ServiceHeroSectionProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          <Badge 
            className={`mb-6 px-4 py-2 text-sm ${
              badgeVariant === 'emergency' 
                ? 'bg-red-100 text-red-700 border-red-200' 
                : ''
            }`}
          >
            {BadgeIcon && <BadgeIcon className="w-4 h-4 mr-2" />}
            {badge}
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to={ctaLink}>
                {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-background/50 backdrop-blur-sm" asChild>
              <a href="tel:+917200620011" onClick={() => (window as any).gtag_report_phone_conversion?.()}>
                <Phone className="mr-2 h-5 w-5" />
                +91 7200 620 011
              </a>
            </Button>
          </div>

          {/* Trust Badges / Stats */}
          <div className="flex flex-wrap gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg border border-border/50"
              >
                {stat.icon && (
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                )}
                <div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
