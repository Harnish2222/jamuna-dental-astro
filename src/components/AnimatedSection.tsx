import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in';
  delay?: string;
  className?: string;
}

const animationClassMap = {
  'fade-up': 'scroll-fade-up',
  'fade-left': 'scroll-fade-left',
  'fade-right': 'scroll-fade-right',
  'scale-in': 'scroll-scale-in',
};

// SSR-safe: renders an element with the animation class. The actual fade-in is
// driven by a single global IntersectionObserver in BaseLayout.astro, which
// means this component can render statically (no React hydration required) and
// still animate when JS is available.
const AnimatedSection = ({
  children,
  animation = 'fade-up',
  delay = '',
  className = '',
}: AnimatedSectionProps) => {
  const animClass = animationClassMap[animation];
  return (
    <div className={`${animClass} ${delay} ${className}`.trim()}>{children}</div>
  );
};

export default AnimatedSection;
