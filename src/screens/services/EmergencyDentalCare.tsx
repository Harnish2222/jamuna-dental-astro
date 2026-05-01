import SEO from '@/components/SEO';
import { breadcrumbForService, medicalProcedureSchema } from '@/seo/schemas';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ServiceStatsBar, 
  ServiceBenefits,
  ServiceTestimonials,
  FloatingCTABar 
} from '@/components/service';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AppointmentBookingSection from '@/components/AppointmentBookingSection';
import ServiceFAQ from '@/components/ServiceFAQ';
import { dentalImages } from '@/lib/dentalImages';
import { Phone, Zap, Clock, Shield, Heart, AlertTriangle, ArrowRight, Star, Users } from 'lucide-react';
import { Link } from '@/lib/router-compat';

// Import JFDC images
import jamunaDoctorOperation from '@/assets/jamuna-doctor-operation.jpg';
import jamunaTreatmentRoom from '@/assets/jamuna-treatment-room.jpg';
import jamunaClinicInterior from '@/assets/jamuna-clinic-interior.jpg';

const EmergencyDentalCare = () => {
  const stats = [
    { value: 2000, suffix: '+', label: 'Emergencies Treated' },
    { value: 30, suffix: '', label: 'Min Avg Wait Time' },
    { value: 24, suffix: '/7', label: 'Phone Support' },
    { value: 4.9, suffix: '★', label: 'Patient Rating' },
  ];

  const emergencies = [
    'Severe toothache',
    'Broken or chipped tooth',
    'Knocked-out tooth',
    'Lost filling or crown',
    'Dental abscess',
    'Swollen gums or face',
    'Bleeding that won\'t stop',
    'Jaw pain or injury',
  ];

  const steps = [
    {
      title: 'Call Us Immediately',
      description: 'Contact JFDC as soon as the emergency occurs. Our team will assess the situation and provide immediate guidance.',
      icon: Phone
    },
    {
      title: 'Follow Our Instructions',
      description: 'We\'ll give you steps to manage the situation until you reach our clinic, potentially saving your tooth.',
      icon: Shield
    },
    {
      title: 'Same-Day Treatment',
      description: 'Come to our clinic for immediate care. We prioritize emergencies and will see you as soon as possible.',
      icon: Zap
    },
    {
      title: 'Follow-Up Care',
      description: 'After initial treatment, we\'ll schedule any necessary follow-up appointments to ensure complete healing.',
      icon: Heart
    }
  ];

  const tips = [
    {
      emergency: 'Knocked-Out Tooth',
      tip: 'Handle by the crown (not root), rinse gently, try to place back in socket or keep in milk, get to us within 30 minutes for best chance of saving it.'
    },
    {
      emergency: 'Severe Toothache',
      tip: 'Rinse with warm salt water, gently floss to remove debris, take over-the-counter pain relief, apply cold compress to cheek, call us immediately.'
    },
    {
      emergency: 'Broken Tooth',
      tip: 'Save any pieces, rinse mouth with warm water, apply cold compress to reduce swelling, cover sharp edges with dental wax or sugar-free gum.'
    },
    {
      emergency: 'Lost Filling/Crown',
      tip: 'Keep the crown if found, apply dental cement or toothpaste as temporary fix, avoid chewing on that side, see us as soon as possible.'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Same-day appointments for urgent care'
    },
    {
      icon: Clock,
      title: 'Quick Relief',
      description: 'Fast pain management and treatment'
    },
    {
      icon: Shield,
      title: 'Save Your Tooth',
      description: 'Expert care to preserve natural teeth'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Gentle treatment when you\'re in distress'
    }
  ];

  const testimonials = [
    {
      name: 'Gokul Krishnan',
      quote: 'Broke my tooth on a Saturday evening. They saw me within an hour and fixed it beautifully. Lifesavers!',
      rating: 5,
      service: 'Broken Tooth'
    },
    {
      name: 'Shalini Ramesh',
      quote: 'Worst toothache of my life. Called at 8am and was pain-free by 10am. Incredible emergency service.',
      rating: 5,
      service: 'Severe Toothache'
    },
    {
      name: 'Manoj Kumar',
      quote: 'My son knocked out his tooth playing cricket. They saved it! Can\'t thank JFDC enough.',
      rating: 5,
      service: 'Knocked-Out Tooth'
    }
  ];

  const faqs = [
    {
      question: 'What counts as a dental emergency?',
      answer: 'Dental emergencies include severe tooth pain, knocked-out teeth, broken teeth, lost fillings or crowns, dental abscesses (swelling with pus), uncontrolled bleeding, and jaw injuries. If you\'re in severe pain or have trauma to your mouth, it\'s an emergency.'
    },
    {
      question: 'Do you offer same-day emergency appointments?',
      answer: 'Yes! We reserve time each day for dental emergencies. Call us immediately and we\'ll fit you in as soon as possible, often within hours. For after-hours emergencies, leave a message and we\'ll call back promptly.'
    },
    {
      question: 'What should I do if my tooth gets knocked out?',
      answer: 'Time is critical! Pick up the tooth by the crown (white part), rinse gently if dirty (don\'t scrub), try to place it back in the socket, or keep it in milk or saliva. Get to our clinic within 30 minutes for the best chance of saving the tooth.'
    },
    {
      question: 'How can I manage tooth pain until I reach you?',
      answer: 'Rinse with warm salt water, take over-the-counter pain relief (ibuprofen or paracetamol), apply a cold compress to your cheek, and avoid very hot or cold foods. Don\'t place aspirin directly on the gum as it can burn tissue.'
    },
    {
      question: 'Is a dental abscess an emergency?',
      answer: 'Yes, a dental abscess is a serious emergency. The infection can spread to other parts of your body if untreated. Symptoms include severe throbbing pain, swelling, fever, and a bad taste. Seek immediate care.'
    }
  ];

  return (
    <>
      <SEO
        title="24x7 Emergency Dental Care in Dindigul | JFDC"
        description="Emergency dental care in Dindigul — same-day treatment for tooth pain, injuries, swelling and broken teeth at Jamuna Family Dental Care. Call +91 7200 620 011."
        canonical="https://jamunadental.com/services/emergency-dental-care/"
        jsonLd={[
          breadcrumbForService("Emergency Dental Care", "/services/emergency-dental-care/"),
          medicalProcedureSchema("Emergency Dental Care", "Same-day treatment for severe tooth pain, dental injuries, swelling and broken or knocked-out teeth.", "/services/emergency-dental-care/"),
        ]}
      />
      {/* Emergency Hero - Custom for urgency */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-2xl">
            <Badge className="mb-6 px-4 py-2 text-sm bg-white/20 text-white border-white/30">
              <Zap className="w-4 h-4 mr-2" />
              Emergency Dental Care
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Same-Day Emergency Dental Care
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Dental emergencies can't wait. At JFDC, we offer same-day appointments for urgent 
              dental issues. Call us immediately if you're experiencing severe pain, 
              swelling, or trauma. We're here when you need us most.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-red-600 hover:bg-white/90" asChild>
                <a href="tel:+917200620011" onClick={() => (window as any).gtag_report_phone_conversion?.()}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 7200 620 011
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10" asChild>
                <Link to="/contact">
                  Request Callback <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="flex flex-wrap gap-4 md:gap-8">
              {[
                { value: '15+', label: 'Years Experience', icon: Clock },
                { value: '10K+', label: 'Patients Helped', icon: Users },
                { value: '4.8', label: 'Google Rating', icon: Star },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20"
                >
                  <stat.icon className="w-5 h-5 text-white" />
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/80">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceStatsBar stats={stats} />

      {/* Emergency Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200">Emergencies We Handle</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">We Treat These Emergencies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              If you're experiencing any of these issues, contact us immediately for same-day care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {emergencies.map((emergency, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm border-l-4 border-red-500">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-foreground">{emergency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Emergency Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What To Do In A Dental Emergency</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Follow these steps when facing a dental emergency to get the best possible outcome.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm text-primary font-semibold mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* First Aid Tips */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={jamunaDoctorOperation} 
                alt="Emergency treatment" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src={jamunaTreatmentRoom} 
                alt="Treatment room" 
                className="rounded-xl shadow-lg mt-8"
              />
            </div>
            <div>
              <Badge className="mb-4">First Aid Tips</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What To Do Before You Reach Us
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                Quick action can make a big difference in dental emergencies. Here's what to do 
                while you're on your way to our clinic.
              </p>
              <div className="space-y-4">
                {tips.map((item, index) => (
                  <div key={index} className="p-4 bg-background rounded-lg shadow-sm border-l-4 border-primary">
                    <h3 className="font-semibold text-foreground mb-1 text-primary">{item.emergency}</h3>
                    <p className="text-sm text-muted-foreground">{item.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <Clock className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Wait — Get Relief Now
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Dental pain can indicate a serious problem. The sooner you get treatment, 
            the better the outcome. Call us immediately for same-day emergency care.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <a href="tel:+917200620011" onClick={() => (window as any).gtag_report_phone_conversion?.()}><Phone className="mr-2 h-5 w-5" />Call +91 7200 620 011</a>
          </Button>
        </div>
      </section>

      <ServiceTestimonials testimonials={testimonials} />

      <WhyChooseUsSection />

      <ServiceFAQ faqs={faqs} image={dentalImages.services.emergency} />

      <AppointmentBookingSection />

      <FloatingCTABar variant="emergency" />
    </>
  );
};

export default EmergencyDentalCare;
