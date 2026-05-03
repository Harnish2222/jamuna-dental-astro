import { useEffect, useRef, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// SSR-safe: renders the final number on the server. The count-up animation is
// purely visual enhancement that only runs if/when JS hydrates this island.
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (!ref.current) return;
    let didAnimate = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !didAnimate) {
          didAnimate = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          setCount(0);
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-black text-foreground tracking-tighter">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

interface Stat {
  icon: string;
  value: number;
  suffix: string;
  label: string;
  iconColor: string;
  bgColor: string;
}

interface MilestonesProps {
  content?: {
    badge: string;
    heading_part1: string;
    heading_part2: string;
    description: string;
    image: string;
    stats: Stat[];
  };
}

const MilestonesSection = ({ content }: MilestonesProps) => {
  if (!content) return null;

  return (
    <section className="py-16 md:py-20 bg-muted/40 border-y border-border/60 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <AnimatedSection animation="fade-left" className="w-full lg:w-[42%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
              <img src={content.image || '/uploads/hero-jfdc-front.jpg'} alt="Modern dental clinic at Jamuna Family Dental Care" className="w-full h-[280px] md:h-[380px] object-cover" />
            </div>
          </AnimatedSection>

          <div className="w-full lg:w-[58%]">
            <AnimatedSection animation="fade-right" className="text-center lg:text-left mb-10">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 text-primary font-black text-xs tracking-wide mb-6 border border-primary/10">
                {content.badge}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4 leading-[1.1]">
                {content.heading_part1} <span className="text-primary italic">{content.heading_part2}</span>
              </h2>
              <span className="text-muted-foreground text-sm md:text-base font-medium block">
                {content.description}
              </span>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {content.stats?.map((stat, i) => {
                // @ts-ignore
                const IconComponent = LucideIcons[stat.icon] || LucideIcons.Circle;
                return (
                <AnimatedSection key={i} animation="scale-in" delay={`delay-${i * 100}`}>
                  <div className="flex flex-col items-center text-center p-4 group">
                    <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-full ${stat.bgColor} ${stat.iconColor} group-hover:scale-110 transition-transform`}>
                      <IconComponent size={22} fill={stat.icon === 'Star' || stat.icon === 'Heart' ? 'currentColor' : 'none'} />
                    </div>
                    <div className="flex items-baseline mb-1">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-muted-foreground font-semibold text-xs leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </AnimatedSection>
              )})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
