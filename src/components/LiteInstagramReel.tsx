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

  // Fetch thumbnail using a proxy to bypass Instagram's restrictions
  // Note: Using /p/ prefix instead of /reel/ as it's more reliable for the media endpoint
  const thumbnailUrl = `https://images.weserv.nl/?url=https://www.instagram.com/p/${id}/media/?size=l`;
  const embedUrl = `https://www.instagram.com/reel/${id}/embed/?hidecaption=true`;

  return (
    <div 
      ref={ref}
      className="relative w-full rounded-xl overflow-hidden shadow-md bg-muted group cursor-pointer border border-border/50"
      style={{ aspectRatio: '9/16' }}
      onClick={() => setIsLoaded(true)}
    >
      {!isLoaded ? (
        <>
          {/* Real Thumbnail Image */}
          <img 
            src={thumbnailUrl} 
            alt={`Instagram Reel ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              // Fallback to gradient if thumbnail fails
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />

          {/* Facade UI Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center bg-black/20 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-white fill-white ml-1 shadow-lg" />
            </div>
            <div className="flex items-center gap-2 text-white text-sm font-bold drop-shadow-md">
              <Instagram className="w-4 h-4" />
              <span>Watch Reel</span>
            </div>
          </div>

          {/* Branded Fallback (behind image) */}
          <div 
            className="absolute inset-0 -z-10"
            style={{
              background: `linear-gradient(${135 + index * 45}deg, hsl(var(--primary)) 0%, #dc2743 50%, #bc1888 100%)`,
            }}
          />
        </>
      ) : (
        /* Actual Embed: Only loaded on user click */
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          scrolling="no"
          title={`Instagram Reel ${index + 1}`}
          style={{ overflow: 'hidden' }}
        />
      )}
    </div>
  );
};

export default LiteInstagramReel;
