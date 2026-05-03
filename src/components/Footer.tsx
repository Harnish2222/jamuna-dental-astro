import { Phone, MapPin, Clock, Facebook, Linkedin, Instagram, ChevronRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
  ];

  const treatments = [
    { name: 'Dental Implants', href: '/#appointment' },
    { name: 'Root Canal Treatment', href: '/#appointment' },
    { name: 'Teeth Cleaning & Scaling', href: '/#appointment' },
    { name: 'Teeth Whitening', href: '/#appointment' },
    { name: 'Braces & Aligners', href: '/#appointment' },
    { name: 'Smile Design', href: '/#appointment' },
    { name: 'Child Dental Care', href: '/#appointment' },
  ];

  return (
    <footer className="relative bg-[#072674] text-[#DDEBF7] overflow-hidden">
      {/* Decorative Brand Wave (Top) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 lg:pt-32 lg:pb-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <img 
                src="/uploads/jamuna-logo-icon.png" 
                alt="Jamuna Family Dental Care Logo" 
                className="w-16 h-16 mb-4 object-contain brightness-0 invert opacity-90" 
              />
              <span className="text-3xl font-extrabold text-white tracking-widest leading-none">JAMUNA</span>
              <span className="text-[13px] font-bold tracking-[0.25em] text-[#7ED1C8] uppercase mt-2">Family Dental Care</span>
              <div className="w-12 h-[3px] bg-[#009AA7] my-4 rounded-full"></div>
              <span className="italic text-[#DDEBF7] text-[15px]">We Care; not just Cure</span>
            </div>
            <p className="text-[#DDEBF7]/80 text-[15px] leading-relaxed pr-4">
              A modern dental clinic in Dindigul providing complete dental care for children, adults, and senior patients with advanced technology and personalized compassion.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://www.facebook.com/p/Jamuna-Family-Dental-Care-JFDC-100071995166959/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#009AA7] hover:border-[#009AA7] hover:text-white transition-all duration-300" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="https://in.linkedin.com/in/jamuna-family-dental-care-dindigul-0abb46358" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#009AA7] hover:border-[#009AA7] hover:text-white transition-all duration-300" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/jamuna_family_dental_care/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#009AA7] hover:border-[#009AA7] hover:text-white transition-all duration-300" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 lg:pl-8">
            <h3 className="font-bold text-[18px] text-white tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group flex items-center text-[#DDEBF7]/80 hover:text-[#7ED1C8] transition-colors text-[15px] font-medium">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-[#7ED1C8]" />
                    <span className="transform group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Treatments */}
          <div className="space-y-6">
            <h3 className="font-bold text-[18px] text-white tracking-wide uppercase">Treatments</h3>
            <ul className="space-y-3.5">
              {treatments.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="group flex items-center text-[#DDEBF7]/80 hover:text-[#7ED1C8] transition-colors text-[15px] font-medium">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-[#7ED1C8]" />
                    <span className="transform group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-[18px] text-white tracking-wide uppercase">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#009AA7]/20 border border-[#009AA7]/30 flex items-center justify-center flex-shrink-0 mr-4">
                  <Phone className="w-4 h-4 text-[#7ED1C8]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#DDEBF7]/60 mb-1 uppercase tracking-widest font-bold">Call Us Today</div>
                  <a href="tel:+917200620011" className="font-bold text-[16px] text-white hover:text-[#7ED1C8] transition-colors block">+91 7200 620 011</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#009AA7]/20 border border-[#009AA7]/30 flex items-center justify-center flex-shrink-0 mr-4">
                  <MapPin className="w-4 h-4 text-[#7ED1C8]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#DDEBF7]/60 mb-1 uppercase tracking-widest font-bold">Location</div>
                  <div className="font-medium text-[14px] leading-relaxed text-white">41, Ram Nagar, Round Road<br/><span className="text-[#DDEBF7]/80">Near Vijayan Temptation, Dindigul – 624001</span></div>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#009AA7]/20 border border-[#009AA7]/30 flex items-center justify-center flex-shrink-0 mr-4">
                  <Clock className="w-4 h-4 text-[#7ED1C8]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#DDEBF7]/60 mb-1 uppercase tracking-widest font-bold">Hours</div>
                  <div className="font-medium text-[14px] leading-relaxed text-white">9:00 AM – 9:00 PM<br/><span className="text-[#DDEBF7]/80">Open all days</span></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 border-t border-white/10 bg-[#041647]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[13px] text-[#DDEBF7]/60 font-medium tracking-wide">
              © {new Date().getFullYear()} Jamuna Family Dental Care. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-[13px] font-medium text-[#DDEBF7]/60">
              <a href="/privacy-policy" className="hover:text-[#7ED1C8] transition-colors">Privacy Policy</a>
              <a href="/terms-and-conditions" className="hover:text-[#7ED1C8] transition-colors">Terms & Conditions</a>
              <a href="/disclaimer" className="hover:text-[#7ED1C8] transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Wave Overlay */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none opacity-5 pointer-events-none z-0">
        <svg className="relative block w-full h-[250px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V3C1132.19,26.09,1055.71,33.53,985.66,92.83Z" className="fill-[#009AA7]"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
