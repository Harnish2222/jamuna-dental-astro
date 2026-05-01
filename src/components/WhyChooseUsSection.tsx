import { Phone, Shield, Star, Heart, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { dentalImages } from '@/lib/dentalImages';
import AnimatedSection from '@/components/AnimatedSection';

const WhyChooseUsSection = () => {
  const features = [
    { icon: Heart, title: "Family-Centered Care", description: "We provide dental care for all ages — children, adults, and seniors — with gentle, comfortable treatments tailored to each patient." },
    { icon: Star, title: "4.9★ Rating | 600+ Reviews", description: "Many patients highlight our professional care, advanced equipment, patient-friendly and comfortable & safe treatment experience. Trusted by families across Dindigul." },
    { icon: Stethoscope, title: "Advanced Technology", description: "We use the latest dental equipment with sterilized instruments in a clean, hygienic clinic for quick diagnosis and precise treatment." }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <AnimatedSection animation="fade-left" className="space-y-6 text-center lg:text-left">
            <div className="flex items-center gap-2 text-white/80 justify-center lg:justify-start">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wide">Why Choose JFDC</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal leading-tight">
              Your smile is<br />our priority
            </h2>
            <p className="text-white/90 leading-relaxed max-w-md mx-auto lg:mx-0">
              Jamuna Family Dental Care focuses on comfortable treatments, advanced technology, and personalized patient-centered dental care to help patients maintain healthy and confident smiles.
            </p>
            <Button size="lg" className="bg-white hover:bg-white/90 text-primary rounded-full px-8" asChild>
              <a href="tel:+917200620011" onClick={() => (window as any).gtag_report_phone_conversion?.()}><Phone className="mr-2 h-5 w-5" />Call Now</a>
            </Button>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" className="relative flex justify-center items-center min-h-[360px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[26rem] h-[26rem] rounded-full bg-teal/20 blur-3xl" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[22rem] h-[22rem] rounded-full border border-white/15" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[19rem] h-[19rem] rounded-full border border-white/25" />
            </div>
            <div className="relative z-10 w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-white/20 shadow-[0_0_60px_rgba(0,154,167,0.35)]">
              <img src={dentalImages.team.dentist1} alt="Professional dentist team at JFDC" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-right" className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal mb-1">{feature.title}</h3>
                  <p className="text-white/85 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
