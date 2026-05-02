import { useEffect, useRef, useState, type ReactNode } from 'react';

interface InViewProps {
  children: ReactNode;
  rootMargin?: string;
  /** Min height while waiting, prevents CLS */
  minHeight?: string;
  className?: string;
}

/**
 * Renders children only once the wrapper scrolls near the viewport.
 * Used to defer hydration-heavy / network-heavy widgets (JotForm, Google Maps,
 * Instagram embeds) until they're actually needed.
 */
const InView = ({ children, rootMargin = '300px', minHeight = '300px', className }: InViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown || !ref.current) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          obs.disconnect();
        }
      },
      { rootMargin },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [rootMargin, shown]);

  return (
    <div ref={ref} className={className} style={{ minHeight: shown ? undefined : minHeight }}>
      {shown ? children : null}
    </div>
  );
};

export default InView;
