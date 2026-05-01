import { useEffect, useState, useRef } from 'react';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface ServiceStatsBarProps {
  stats: Stat[];
}

// SSR-safe: server-renders the final number so static HTML shows real stats.
// Count-up animation is a visual enhancement that runs only after hydration.
const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

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
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-teal">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const ServiceStatsBar = ({ stats }: ServiceStatsBarProps) => {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-primary-foreground/80 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStatsBar;
