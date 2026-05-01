import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';

import stockGallery6 from '@/assets/stock-gallery-6.jpg';
import stockBeautifulSmile from '@/assets/stock-beautiful-smile.jpg';
import stockOrthodontics from '@/assets/stock-orthodontics.jpg';
import stockDentalImplants from '@/assets/stock-dental-implants.jpg';

const BeforeAfterSection = () => {
  const transformations = [
    { before: stockGallery6, after: stockBeautifulSmile, title: "Smile Makeover", description: "Complete smile transformation with veneers" },
    { before: stockOrthodontics, after: stockDentalImplants, title: "Teeth Restoration", description: "Professional restoration treatment results" }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <Badge className="mb-4">Real Results</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Before & After</span>
              <span className="text-foreground"> Transformations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">See the incredible transformations achieved by our patients. Drag the slider to compare results.</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {transformations.map((item, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={`delay-${index * 200}`}>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={item.before} alt={`Before ${item.title}`} />}
                    itemTwo={<ReactCompareSliderImage src={item.after} alt={`After ${item.title}`} />}
                    handle={
                      <ReactCompareSliderHandle
                        buttonStyle={{ backdropFilter: undefined, WebkitBackdropFilter: undefined, backgroundColor: 'hsl(var(--primary))', border: '3px solid white', color: 'white', width: 40, height: 40, borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                        linesStyle={{ width: 3, color: 'hsl(var(--primary))' }}
                      />
                    }
                    style={{ aspectRatio: '4/3' }}
                    position={50}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
