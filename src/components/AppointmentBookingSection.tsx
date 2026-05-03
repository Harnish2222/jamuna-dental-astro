import { useState } from 'react';
import { ShieldCheck, ChevronDown, Zap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import smileCarousel1 from '@/assets/smile-carousel-1.jpg';

const services = [
  'Dental Implants', 'Root Canal Treatment', 'Teeth Cleaning & Scaling', 'Teeth Whitening',
  'Braces & Teeth Alignment', 'Cosmetic Dentistry', 'Pediatric Dentistry', 'Tooth Extraction',
  'Smile Design', 'Other',
];

interface AppointmentContent {
  badge?: string;
  heading_part1?: string;
  heading_part2?: string;
  description?: string;
  image?: string;
}

const AppointmentBookingSection = ({ content }: { content?: AppointmentContent }) => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [service, setService] = useState('Dental Implants');
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSuccess(true);
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setService('Dental Implants');
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section className="py-16 bg-muted/40" id="contact">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="bg-card rounded-[2.5rem] shadow-2xl overflow-hidden border border-border/80 flex flex-col lg:flex-row ring-1 ring-border/40">
            {/* Left: Image + Heading */}
            <div className="lg:w-[40%] flex flex-col relative group overflow-hidden bg-gradient-to-b from-[#072674] to-[#0080B5]">
              {/* Upper Half: Text */}
              <div className="p-10 lg:p-12 flex flex-col justify-center relative z-20 flex-shrink-0 pt-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight tracking-tight text-white drop-shadow-md">
                  {content?.heading_part1 || 'Book Your'} <br />
                  <span className="text-[#00A859] italic">{content?.heading_part2 || 'Dental Visit'}</span>
                </h2>
                <p className="text-blue-50 text-[15px] leading-relaxed font-medium opacity-90 drop-shadow-sm">
                  {content?.description || 'Take the first step towards a healthier smile. Fill in your details and our patient care team will reach out within 30 minutes to confirm your visit.'}
                </p>
              </div>

              {/* Bottom Half: Image */}
              <div className="flex-grow relative min-h-[250px] lg:min-h-[300px]">
                <img src={content?.image || '/uploads/happy-family-appointment.jpg'} alt="Happy patient family" className="absolute inset-0 w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-[60%] p-8 lg:p-10 flex flex-col justify-center bg-card relative">
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 tracking-tight">
                  Your <span className="text-primary">Details</span>
                </h3>
              </div>
              <div className="mb-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-xl text-[10px] font-bold border border-success/20 shadow-sm uppercase tracking-widest">
                  <ShieldCheck size={14} /> Secure
                </div>
                <div className="flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-xl text-[10px] font-bold border border-primary/10 shadow-sm uppercase tracking-widest">
                  <Zap size={14} /> Quick Response
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" required placeholder="e.g. Priya Lakshmi" className="w-full px-6 py-4 bg-muted/50 border border-border rounded-xl text-foreground font-bold placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-card focus:border-primary transition-all shadow-sm text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Phone Number</label>
                    <input type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full px-6 py-4 bg-muted/50 border border-border rounded-xl text-foreground font-bold placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-card focus:border-primary transition-all shadow-sm text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Email (Optional)</label>
                    <input type="email" placeholder="name@email.com" className="w-full px-6 py-4 bg-muted/50 border border-border rounded-xl text-foreground font-bold placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-card focus:border-primary transition-all shadow-sm text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Treatment Needed</label>
                    <div className="relative">
                      <button type="button" onClick={() => setIsSelectOpen(!isSelectOpen)} className="w-full px-6 py-4 bg-muted/50 border border-border rounded-xl text-foreground font-bold hover:bg-card focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all shadow-sm flex items-center justify-between text-sm">
                        <span>{service}</span>
                        <ChevronDown size={18} className={`text-muted-foreground transition-transform duration-200 ${isSelectOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isSelectOpen && (
                        <>
                          <div className="fixed inset-0 z-40" onClick={() => setIsSelectOpen(false)} />
                          <div className="absolute z-50 left-0 right-0 mt-2 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden py-2 max-h-60 overflow-y-auto">
                            {services.map((opt) => (
                              <button key={opt} type="button" onClick={() => { setService(opt); setIsSelectOpen(false); }} className={`w-full px-6 py-3.5 text-left text-sm font-bold transition-all hover:bg-muted/50 ${service === opt ? 'text-primary' : 'text-muted-foreground'}`}>
                                {opt}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Your Message</label>
                  <textarea rows={2} placeholder="Tell us about your dental concern..." className="w-full px-6 py-4 bg-muted/50 border border-border rounded-xl text-foreground font-bold placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-card focus:border-primary transition-all shadow-sm resize-none text-sm" />
                </div>
                <button type="submit" disabled={submitting} className={`w-full py-4 rounded-md font-bold text-sm uppercase tracking-[3px] transition-all shadow-xl hover:-translate-y-1 active:scale-[0.98] ${success ? 'bg-success text-success-foreground' : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20 shadow-lg'}`}>
                  {submitting ? 'Booking...' : success ? '✓ Request Received!' : 'Book Appointment'}
                </button>
                {success && (
                  <div className="p-4 bg-success/10 border border-success/20 text-success rounded-xl text-center text-sm font-bold">
                    🎉 Thank you! We'll call you shortly to confirm your appointment.
                  </div>
                )}
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AppointmentBookingSection;
