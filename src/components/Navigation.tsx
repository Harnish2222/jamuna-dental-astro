import { useState, useEffect } from 'react';
import { Link, useLocation } from '@/lib/router-compat';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jfdcLogo from '@/assets/jfdc-logo.png';

const Navigation = ({ logo }: { logo?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHomePage) {
      window.location.href = '/#' + id;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    // { name: 'Smile Gallery', id: 'gallery' },
    // { name: 'Our Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  // Dental Services for dropdown
  const serviceItems = [
    { name: 'General Dentistry', path: '/services/general-dentistry/' },
    { name: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry/' },
    { name: 'Restorative Dentistry', path: '/services/restorative-dentistry/' },
    { name: 'Orthodontics', path: '/services/orthodontics/' },
    { name: 'Emergency Dental Care', path: '/services/emergency-dental-care/' },
    { name: 'Pediatric Dentistry', path: '/services/pediatric-dentistry/' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 pt-4">
      <div 
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/90 backdrop-blur-sm shadow-md'
        }`}
      >
        <div className="flex items-center justify-between h-14 lg:h-16 px-4 lg:px-8">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 cursor-pointer" aria-label="Scroll to top">
            <img 
              src={logo || jfdcLogo.src} 
              alt="Jamuna Family Dental Care" 
              width={70} 
              height={70} 
              className="h-10 w-auto object-contain" 
            />
            <div>
              <span className="text-sm sm:text-lg font-bold text-primary sm:hidden">Jamuna Family Dental</span>
              <span className="text-lg font-bold text-primary hidden sm:block">JFDC</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-medium rounded-full transition-colors text-foreground hover:text-primary"
                  aria-label={`Go to ${item.name}`}
                >
                  {item.name}
                </button>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Button 
              size="sm"
              className="hidden sm:inline-flex rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
              asChild
            >
              <a href="tel:+917200620011" onClick={() => (window as any).gtag_report_phone_conversion?.()} aria-label="Call Jamuna Dental">
                <Phone className="w-4 h-4 mr-1" />Call Now
              </a>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-7xl bg-white rounded-2xl shadow-lg border border-border overflow-hidden animate-fade-in">
          <div className="p-4 space-y-1">
            {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {item.name}
                </button>
            ))}
            
            <div className="pt-3">
              <Button className="w-full rounded-full" asChild>
                <a href="tel:+917200620011" onClick={() => (window as any).gtag_report_phone_conversion?.()}><Phone className="w-4 h-4 mr-2" />Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
