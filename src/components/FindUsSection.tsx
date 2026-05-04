import { MapPin } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useState, useEffect } from 'react';

const FindUsSection = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    // Small delay to ensure main thread is free
    const timer = setTimeout(() => setLoadMap(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Find Us</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              41, Ram Nagar, Round Road, Near Vijayan Temptation, Dindigul – 624001
            </p>
          </div>
        </AnimatedSection>
      </div>
      <div className="w-full relative min-h-[450px] bg-gray-100 flex items-center justify-center">
        {!loadMap && (
          <div className="text-muted-foreground animate-pulse flex flex-col items-center gap-2">
            <MapPin className="w-8 h-8 opacity-20" />
            <span className="text-sm font-medium">Loading Map...</span>
          </div>
        )}
        {loadMap && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.7292464014304!2d77.98605627479878!3d10.36352038976122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00abcac82d737b%3A0x978916dc4a86f0a0!2zSkFNVU5BIEZBTUlMWSBERU5UQUwgQ0FSRSAo4K6c4K6u4K-B4K6p4K6-IOCuquCusuCvjeCuruCusOCvgeCupOCvjeCupOCvgeCuteCusuCuqeCviCk!5e0!3m2!1sen!2sin!4v1776146911648!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jamuna Family Dental Care Location"
            className="block absolute inset-0"
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default FindUsSection;
