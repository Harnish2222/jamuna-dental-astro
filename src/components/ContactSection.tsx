import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AnimatedSection from '@/components/AnimatedSection';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', service: '', message: '', preferredTime: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const data = {
      ...formData,
      formType: 'Contact Page Form'
    };

    try {
      (window as any).gtag_report_form_conversion?.();

      const { FORM_WEBHOOK_URL } = await import('@/lib/constants');
      
      if (FORM_WEBHOOK_URL) {
        await fetch(FORM_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      }

      setSuccess(true);
      setSubmitting(false);
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', service: '', message: '', preferredTime: ''
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setSubmitting(false);
      alert('Something went wrong. Please call us directly.');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, title: 'Phone', details: '+91 7200 620 011', description: 'Open all days, 9AM - 9PM' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Location', details: '41, Ram Nagar, Round Road', description: 'Near Vijayan Temptation, Dindigul – 624001' },
    { icon: <Clock className="w-6 h-6" />, title: 'Hours', details: '9:00 AM – 9:00 PM', description: 'Open all days including weekends' },
  ];

  const services = ['Dental Implants', 'Root Canal Treatment', 'Teeth Cleaning & Scaling', 'Teeth Whitening', 'Braces & Teeth Alignment', 'Cosmetic Dentistry', 'Pediatric Dentistry', 'Tooth Extraction', 'Smile Design', 'Other'];
  const preferredTimes = ['Morning (9AM - 12PM)', 'Afternoon (12PM - 4PM)', 'Evening (4PM - 9PM)', 'Weekend', 'Flexible'];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wide mb-4 block">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready for a healthier smile? Schedule your appointment today.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={`delay-${index * 100}`}>
              <Card className="text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{info.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-primary">{info.title}</h3>
                  <div className="font-medium text-foreground mb-1">{info.details}</div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection animation="fade-left">
            <h3 className="text-2xl font-bold mb-2 text-primary">Book Your Appointment</h3>
            <p className="text-muted-foreground mb-6">Fill out the form and we'll contact you shortly.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label htmlFor="c-firstName">First Name *</Label><Input id="c-firstName" value={formData.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} required className="mt-1" /></div>
                <div><Label htmlFor="c-lastName">Last Name *</Label><Input id="c-lastName" value={formData.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} required className="mt-1" /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label htmlFor="c-email">Email *</Label><Input id="c-email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} required className="mt-1" /></div>
                <div><Label htmlFor="c-phone">Phone *</Label><Input id="c-phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} required className="mt-1" /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Service Needed *</Label>
                  <Select onValueChange={(v) => handleInputChange('service', v)}>
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Select service" /></SelectTrigger>
                    <SelectContent>{services.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Preferred Time</Label>
                  <Select onValueChange={(v) => handleInputChange('preferredTime', v)}>
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Select time" /></SelectTrigger>
                    <SelectContent>{preferredTimes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="c-message">Your Message</Label>
                <Textarea id="c-message" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} placeholder="Any concerns or questions..." className="mt-1 min-h-[100px]" />
              </div>
              <Button type="submit" size="lg" className={`w-full ${success ? 'bg-success text-success-foreground' : ''}`} disabled={submitting}>
                {submitting ? 'Sending...' : success ? '✓ Request Received!' : 'Request Appointment'}
              </Button>
              {success && (
                <div className="mt-4 p-4 bg-success/10 border border-success/20 text-success rounded-xl text-center text-sm font-bold">
                  🎉 Thank you! We'll call you shortly to confirm your appointment.
                </div>
              )}
            </form>
          </AnimatedSection>

          <AnimatedSection animation="fade-right">
            <h3 className="text-2xl font-bold mb-2 text-primary">Why Choose JFDC?</h3>
            <p className="text-muted-foreground mb-6">Your trusted partner for oral health and well-being.</p>
            <div className="space-y-4">
              {[
                { title: '4.9 Star Rating with 600+ Reviews', description: 'Trusted by hundreds of happy patients across Dindigul.' },
                { title: 'Experienced Specialist Dentists', description: 'Skilled team providing expert care for all dental needs.' },
                { title: 'Sterilized & Hygienic Clinic', description: 'Clean environment with fully sterilized equipment.' },
                { title: 'Open All Days', description: '9AM to 9PM, including weekends — no day off.' },
              ].map((f, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1 text-primary">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Card className="mt-6 bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <Phone className="w-10 h-10 mx-auto mb-3" />
                <h4 className="text-xl font-semibold mb-2">Need Immediate Care?</h4>
                <p className="text-primary-foreground/90 mb-3">Call us for dental emergencies</p>
                <a href="tel:+917200620011" onClick={() => (window as any).gtag_report_phone_conversion?.()} className="text-2xl font-bold hover:underline">+91 7200 620 011</a>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
