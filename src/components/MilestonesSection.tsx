import { useEffect, useRef, useState } from 'react';
import { Star, Clock, Users, Heart } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import heroJfdcFront from '@/assets/hero-jfdc-front.jpg';

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

const stats = [
  { icon: <Users size={22} />, iconColor: 'text-primary', bgColor: 'bg-primary/5', value: 18, suffix: '+', label: 'Years Experience' },
  { icon: <Star fill="currentColor" size={22} />, iconColor: 'text-accent-teal', bgColor: 'bg-accent-teal/10', value: 600, suffix: '+', label: 'Patient Reviews' },
  { icon: <Heart size={22} fill="currentColor" />, iconColor: 'text-destructive', bgColor: 'bg-destructive/5', value: 25, suffix: 'K+', label: 'Happy Patients' },
  { icon: <Clock size={22} />, iconColor: 'text-primary', bgColor: 'bg-primary/5', value: 4, suffix: '.9★', label: 'Google Rating' },
];

const MilestonesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/40 border-y border-border/60 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <AnimatedSection animation="fade-left" className="w-full lg:w-[42%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
              <img src={heroJfdcFront.src} alt="Modern dental clinic at Jamuna Family Dental Care" className="w-full h-[280px] md:h-[380px] object-cover" />
            </div>
          </AnimatedSection>

          <div className="w-full lg:w-[58%]">
            <AnimatedSection animation="fade-right" className="text-center lg:text-left mb-10">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 text-primary font-black text-xs tracking-wide mb-6 border border-primary/10">
                Our Track Record
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4 leading-[1.1]">
                Numbers That <span className="text-primary italic">Speak for Us</span>
              </h2>
              <span className="text-muted-foreground text-sm md:text-base font-medium block">
                Trusted by families across Dindigul since 2011
              </span>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <AnimatedSection key={i} animation="scale-in" delay={`delay-${i * 100}`}>
                  <div className="flex flex-col items-center text-center p-4 group">
                    <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-full ${stat.bgColor} ${stat.iconColor} group-hover:scale-110 transition-transform`}>
                      {stat.icon}
                    </div>
                    <div className="flex items-baseline mb-1">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-muted-foreground font-semibold text-xs leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
