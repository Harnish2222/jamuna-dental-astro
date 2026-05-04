import { useState, useEffect, useRef } from 'react';
import { Instagram, Play } from 'lucide-react';

interface LiteInstagramReelProps {
  id: string;
  index: number;
}

const LiteInstagramReel = ({ id, index }: LiteInstagramReelProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Standard Instagram Embed URL
  const embedUrl = `https://www.instagram.com/reel/${id}/embed/?hidecaption=true`;

  return (
    <div 
      ref={ref}
      className="relative w-full rounded-xl overflow-hidden shadow-md bg-muted group cursor-pointer"
      style={{ aspectRatio: '9/16' }}
      onClick={() => setIsLoaded(true)}
    >
      {!isLoaded ? (
        <>
          {/* Facade UI: Branded Placeholder */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <Instagram className="w-4 h-4" />
              <span>Watch on Instagram</span>
            </div>
          </div>

          {/* Branded Background Gradient (using Jamuna colors) */}
          <div 
            className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
            style={{
              background: `linear-gradient(${135 + index * 45}deg, hsl(var(--primary)) 0%, #dc2743 50%, #bc1888 100%)`,
            }}
          />
          
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        </>
      ) : (
        /* Actual Embed: Only loaded on user click */
        <iframe
          src={embedUrl}
          className="absolute border-0"
          allowFullScreen
          scrolling="no"
          title={`Instagram Reel ${index + 1}`}
          style={{
            top: '-60px',
            left: 0,
            width: '100%',
            height: 'calc(100% + 120px)',
            overflow: 'hidden',
          }}
        />
      )}
    </div>
  );
};

export default LiteInstagramReel;
