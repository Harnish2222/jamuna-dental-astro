import { Link } from '@/lib/router-compat';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

import indianDentistMale1 from '@/assets/indian-dentist-male-1.jpg';
import indianDentistFemale1 from '@/assets/indian-dentist-female-1.jpg';
import indianHygienistFemale from '@/assets/indian-hygienist-female.jpg';
import indianDentistMale2 from '@/assets/indian-dentist-male-2.jpg';

const OurTeamSection = () => {
  const teamMembers = [
    { name: "Dr. Arun Sarath Baabu", role: "MDS — Root Canal Specialist · 18+ Years", image: indianDentistMale1 },
    { name: "Dr. Priyanka Sarath", role: "Smile Designing Specialist · 14+ Years", image: indianDentistFemale1 },
    { name: "Dr. Hema Kalai Chelvi", role: "MDS — Implant & Crown Specialist · 13+ Years", image: indianHygienistFemale },
    { name: "Dr. Arivukkarasu", role: "MDS — Gum Specialist · 17+ Years", image: indianDentistMale2 },
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="absolute top-10 left-10 w-32 h-32 text-primary/10" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C35 5 25 15 25 30C25 45 30 50 30 65C30 80 35 95 45 95C50 95 52 85 55 85C58 85 60 95 65 95C75 95 80 80 80 65C80 50 85 45 85 30C85 15 75 5 60 5C55 5 52 10 50 10C48 10 45 5 50 5Z"/>
        </svg>
        <svg className="absolute bottom-20 right-20 w-48 h-48 text-primary/10" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C35 5 25 15 25 30C25 45 30 50 30 65C30 80 35 95 45 95C50 95 52 85 55 85C58 85 60 95 65 95C75 95 80 80 80 65C80 50 85 45 85 30C85 15 75 5 60 5C55 5 52 10 50 10C48 10 45 5 50 5Z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wide mb-4 block">Our Dental Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Specialized Dental Care<br />Doctors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">Our clinic was created to make your smile beautiful, healthy and white with a wide range of dental treatment and dental restoration.</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={`delay-${index * 100}`}>
              <div className="group">
                <div className="rounded-3xl overflow-hidden bg-primary/5">
                  <div className="relative">
                    <svg className="absolute top-4 right-4 w-24 h-24 text-primary/5" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
                      <path d="M50 5C35 5 25 15 25 30C25 45 30 50 30 65C30 80 35 95 45 95C50 95 52 85 55 85C58 85 60 95 65 95C75 95 80 80 80 65C80 50 85 45 85 30C85 15 75 5 60 5C55 5 52 10 50 10C48 10 45 5 50 5Z" />
                    </svg>
                    <img src={typeof member.image === 'string' ? member.image : (member.image as any).src} alt={member.name} className="relative z-10 w-full aspect-square object-cover object-top" loading="lazy" />
                  </div>
                  <div className="bg-background p-4">
                    <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay="delay-300">
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">See All Doctors <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OurTeamSection;
