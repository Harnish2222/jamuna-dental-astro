import { useEffect, useRef } from 'react';

const WIDGET_ID = '019d04e39d357049af75671e0af99767ef49';
const SCRIPT_SRC = `https://www.jotform.com/website-widgets/embed/${WIDGET_ID}`;

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create widget target div
    const widgetDiv = document.createElement('div');
    widgetDiv.id = `JFWebsiteWidget-${WIDGET_ID}`;
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(widgetDiv);

    // Dynamically load the JotForm script so it finds the div
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div ref={containerRef} className="max-w-5xl mx-auto min-h-[300px]" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
