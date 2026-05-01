import AnimatedSection from '@/components/AnimatedSection';
import { dentalImages } from '@/lib/dentalImages';

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
  image?: string;
}

// SSR-safe: pure-HTML accordion using <details>/<summary>. Renders all Q+A
// content statically so crawlers (and the FAQPage JSON-LD) match what the user
// sees, with no React hydration required.
const ServiceFAQ = ({ faqs, image = dentalImages.services.generalExam }: ServiceFAQProps) => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="mb-12 text-center lg:text-left">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">FAQ'S</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary">Frequently Asked</span><br />
              <span className="text-foreground">Questions</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <AnimatedSection animation="fade-left" className="col-span-1 lg:col-span-3">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 px-5"
                >
                  <summary className="cursor-pointer list-none py-5 flex items-start gap-3 text-left font-medium text-foreground text-lg group-hover:text-primary transition-colors">
                    <span className="text-primary font-semibold shrink-0">Q{index + 1}.</span>
                    <span className="flex-1">{faq.question}</span>
                    <svg
                      className="w-5 h-5 shrink-0 mt-1 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="text-muted-foreground text-base leading-relaxed pb-5 pl-9 text-left">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-right" className="hidden lg:block lg:col-span-2 relative">
            <img src={image} alt="Dental care" className="w-full h-auto rounded-2xl object-cover shadow-lg" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
