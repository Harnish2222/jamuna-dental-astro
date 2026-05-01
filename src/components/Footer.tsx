import { Phone, MapPin, Clock, Facebook, Linkedin, Instagram } from 'lucide-react';

// Pure presentational footer — no React state, safe to render statically
// without `client:*` hydration. In-page nav uses anchor hashes so it works
// from any route via a full-page jump.
const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
  ];

  const treatments = [
    { name: 'Dental Implants', href: '/services/restorative-dentistry/' },
    { name: 'Root Canal Treatment', href: '/services/general-dentistry/' },
    { name: 'Teeth Cleaning & Scaling', href: '/services/general-dentistry/' },
    { name: 'Teeth Whitening', href: '/services/cosmetic-dentistry/' },
    { name: 'Braces & Aligners', href: '/services/orthodontics/' },
    { name: 'Smile Design', href: '/services/cosmetic-dentistry/' },
    { name: 'Child Dental Care', href: '/services/pediatric-dentistry/' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-teal">Jamuna Family</span>
                <span className="text-2xl font-light text-teal">Dental Care</span>
              </div>
              <p className="text-primary-foreground/80 text-base leading-relaxed">
                A modern dental clinic in Dindigul providing complete dental care for children, adults, and senior patients with advanced technology and personalized care.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-teal">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <a key={link.href} href={link.href} className="block text-primary-foreground/80 hover:text-white transition-colors text-base">{link.name}</a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-teal">Our Treatments</h3>
              <div className="space-y-3">
                {treatments.map((service) => (
                  <a key={service.name} href={service.href} className="block text-primary-foreground/80 hover:text-white transition-colors text-base">{service.name}</a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-teal">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-1 text-primary-foreground/80" />
                  <div>
                    <a href="tel:+917200620011" className="font-medium text-base hover:text-white transition-colors">+91 7200 620 011</a>
                    <div className="text-base text-primary-foreground/80">Call us today</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 text-primary-foreground/80" />
                  <div>
                    <div className="font-medium text-base">41, Ram Nagar, Round Road</div>
                    <div className="text-base text-primary-foreground/80">Near Vijayan Temptation, Dindigul – 624001</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-1 text-primary-foreground/80" />
                  <div>
                    <div className="font-medium text-base">9:00 AM – 9:00 PM</div>
                    <div className="text-base text-primary-foreground/80">Open all days including weekends</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-primary-foreground/20">
                  <h4 className="font-medium text-base mb-3 text-teal">Follow Us</h4>
                  <div className="flex space-x-3">
                    <a href="https://www.facebook.com/p/Jamuna-Family-Dental-Care-JFDC-100071995166959/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
                    <a href="https://in.linkedin.com/in/jamuna-family-dental-care-dindigul-0abb46358" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                    <a href="https://www.instagram.com/jamuna_family_dental_care/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-base text-primary-foreground/80">© 2026 Jamuna Family Dental Care. All rights reserved.</div>
            <div className="flex items-center gap-4 text-base text-primary-foreground/80">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
              <span>•</span>
              <a href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
