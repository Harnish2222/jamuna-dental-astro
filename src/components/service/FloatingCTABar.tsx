import { Phone, Calendar } from 'lucide-react';

interface FloatingCTABarProps {
  variant?: 'default' | 'emergency';
}

// SSR-safe: visibility is driven by Tailwind's responsive classes, no hook
// required. Hidden on desktop, visible on mobile, no JS shipped.
const FloatingCTABar = ({ variant = 'default' }: FloatingCTABarProps) => {
  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 ${
        variant === 'emergency' ? 'bg-red-600' : 'bg-primary'
      } shadow-[0_-4px_20px_rgba(0,0,0,0.2)]`}
    >
      <div className="flex gap-3">
        <a
          href="tel:+917200620011"
          onClick={() => (window as unknown as { gtag_report_phone_conversion?: () => void }).gtag_report_phone_conversion?.()}
          className="flex-1 inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md py-3 text-base font-semibold"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </a>
        <a
          href="/#appointment"
          className="flex-1 inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md py-3 text-base font-semibold"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Book
        </a>
      </div>
    </div>
  );
};

export default FloatingCTABar;
