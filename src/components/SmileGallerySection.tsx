import { useState } from 'react';
import { Smile, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

import stockSmile1 from '@/assets/stock-smile-result-1.jpg';
import stockSmile2 from '@/assets/stock-smile-result-2.jpg';
import stockSmile3 from '@/assets/stock-smile-result-3.jpg';
import stockSmile6 from '@/assets/stock-smile-result-6.jpg';
import stockSmile7 from '@/assets/stock-smile-result-7.jpg';
import stockSmile8 from '@/assets/stock-smile-result-8.jpg';
import stockSmile9 from '@/assets/stock-smile-result-9.jpg';
import stockDentalExam from '@/assets/stock-dental-exam.jpg';
import stockTeethWhitening from '@/assets/stock-teeth-whitening.jpg';

const SmileGallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Teeth Whitening', 'Veneers', 'Implants', 'Orthodontics', 'Full Makeover'];

  const smileTransformations = [
    { title: 'Professional Whitening', category: 'Teeth Whitening', description: 'Dramatic 8-shade improvement with our in-office whitening treatment.', testimonial: "I can't stop smiling! The results exceeded my expectations.", patient: 'Priya M.', image: stockTeethWhitening },
    { title: 'Porcelain Veneers', category: 'Veneers', description: 'Complete smile transformation with custom porcelain veneers.', testimonial: 'My new smile has given me so much confidence.', patient: 'Rajesh S.', image: stockSmile1 },
    { title: 'Dental Implants', category: 'Implants', description: 'Single tooth replacement with natural-looking dental implant.', testimonial: "You can't even tell which tooth is the implant!", patient: 'Kumar R.', image: stockSmile6 },
    { title: 'Invisalign Treatment', category: 'Orthodontics', description: '18-month Invisalign journey for perfectly aligned teeth.', testimonial: 'The process was so easy and the results are amazing.', patient: 'Lakshmi L.', image: stockSmile7 },
    { title: 'Crown Restoration', category: 'Implants', description: 'Full crown restoration for damaged front teeth.', testimonial: 'My smile looks completely natural now.', patient: 'Suresh K.', image: stockSmile2 },
    { title: 'Complete Smile Makeover', category: 'Full Makeover', description: 'Combination of whitening, bonding, and veneers for total transformation.', testimonial: "Best investment I've ever made in myself.", patient: 'Anitha T.', image: stockSmile3 },
    { title: 'Teeth Alignment', category: 'Orthodontics', description: 'Braces treatment for severe crowding and bite correction.', testimonial: 'Finally confident to smile in photos!', patient: 'Deepa M.', image: stockSmile8 },
    { title: 'Whitening & Bonding', category: 'Teeth Whitening', description: 'Combined whitening and bonding for a celebrity-worthy smile.', testimonial: 'Everyone asks about my new smile.', patient: 'Vijay P.', image: stockSmile9 },
    { title: 'Full Mouth Rehabilitation', category: 'Full Makeover', description: 'Complete restoration with implants, crowns, and veneers.', testimonial: 'Dr. transformed my oral health completely.', patient: 'Ganesh S.', image: stockDentalExam },
  ];

  const filteredTransformations = activeFilter === 'All' ? smileTransformations : smileTransformations.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <Badge className="mb-4">Patient Transformations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Smile Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Browse our gallery of real patient results. Each smile tells a story of confidence restored.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay="delay-100">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button key={category} onClick={() => setActiveFilter(category)} variant={activeFilter === category ? "default" : "outline"} size="sm" className={`transition-all duration-300 ${activeFilter === category ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/10'}`}>
                <Smile className="w-4 h-4 mr-2" />{category}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTransformations.map((item, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={`delay-${(index % 3) * 100}`}>
              <Card className="border-0 shadow-md overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={`${item.title} - Smile transformation`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">{item.category}</Badge>
                    <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/80 transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{item.description}</p>
                    <div className="border-t pt-4">
                      <p className="text-sm italic text-muted-foreground mb-2">"{item.testimonial}"</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">— {item.patient}</span>
                        <div className="flex gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />))}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmileGallerySection;
