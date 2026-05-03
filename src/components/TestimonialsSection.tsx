import React from 'react';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import AnimatedSection from '@/components/AnimatedSection';
import { Badge } from '@/components/ui/badge';

interface Review {
  author: string;
  content: string;
}

interface TestimonialsContent {
  badge?: string;
  heading?: string;
  description?: string;
  reviews?: Review[];
}

const getAvatarColor = (name: string) => {
  const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#8E24AA', '#F4511E', '#3949AB'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

const getTimeAgo = (index: number) => {
  const times = ['2 days ago', '1 week ago', '3 weeks ago', '1 month ago', '2 months ago', '4 months ago', '6 months ago'];
  return times[index % times.length];
};

const TestimonialsSection = ({ content }: { content?: TestimonialsContent }) => {
  const [expandedIndices, setExpandedIndices] = React.useState<number[]>([]);
  const toggleExpand = (idx: number) => setExpandedIndices(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);

  const reviews = content?.reviews || [];

  if (!reviews.length) return null;

  return (
    <section className="py-24 bg-[#F9FAFB] overflow-hidden relative" id="reviews">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        
        <div className="text-center mb-10">
          <Badge variant="outline" className="text-[#072674] border-[#072674]/20 rounded-full px-4 py-1.5 uppercase tracking-widest text-xs font-bold mb-4 bg-white">
            <Star className="w-3.5 h-3.5 mr-2 fill-current" />
            {content?.badge || 'Patient Reviews'}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#072674] mb-4 tracking-tight">
            {content?.heading || 'What Our Patients Say'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content?.description || 'Read real stories from our satisfied patients across Dindigul.'}
          </p>
        </div>

        {/* Main Card Wrapper */}
        <div className="bg-white rounded-[2rem] shadow-xl p-6 md:p-10 border border-gray-100">
          {/* Authentic Google Header Block */}
          <AnimatedSection animation="slide-up">
            <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-100 pb-8">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center mb-3">
                  <svg viewBox="0 0 92 30" width="92" height="30" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285F4" d="M11.9,23.8c-6.5,0-11.9-5.3-11.9-11.9S5.4,0,11.9,0c3.5,0,6.5,1.4,8.8,3.5l-2.4,2.4C16.8,4.4,14.6,3.4,11.9,3.4  c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5c3.2,0,5.4-1.3,6.6-2.5c1-1,1.7-2.4,1.9-4.5H11.9v-3.4h10.4c0.1,0.6,0.2,1.3,0.2,2  C22.5,15,22,18,20,20.2C17.9,22.5,15.3,23.8,11.9,23.8z"/>
                    <path fill="#EA4335" d="M37.7,16.2c0,4.3-3.4,7.6-7.6,7.6s-7.6-3.4-7.6-7.6s3.4-7.6,7.6-7.6S37.7,11.9,37.7,16.2z M34.3,16.2  c0-2.8-2-4.7-4.2-4.7s-4.2,2-4.2,4.7s2,4.7,4.2,4.7S34.3,19,34.3,16.2z"/>
                    <path fill="#FBBC05" d="M53.9,16.2c0,4.3-3.4,7.6-7.6,7.6s-7.6-3.4-7.6-7.6s3.4-7.6,7.6-7.6S53.9,11.9,53.9,16.2z M50.4,16.2  c0-2.8-2-4.7-4.2-4.7s-4.2,2-4.2,4.7s2,4.7,4.2,4.7S50.4,19,50.4,16.2z"/>
                    <path fill="#4285F4" d="M69.1,12.4v10.6c0,4.3-3.4,6.4-7.4,6.4c-3.8,0-6.1-2.6-7-4.7l3-1.3c0.6,1.3,2,2.7,4,2.7c2.6,0,4.3-1.6,4.3-4.7v-1.1  h-0.1c-0.8,1-2.4,1.9-4.3,1.9c-4.1,0-7.5-3.3-7.5-7.6s3.4-7.6,7.5-7.6c1.9,0,3.4,0.9,4.3,1.9h0.1v-1.4h3.3C69,10,69.1,11.2,69.1,12.4z   M65.8,16.2c0-2.7-2-4.7-4.2-4.7c-2.3,0-4.2,2-4.2,4.7s1.9,4.7,4.2,4.7C63.8,20.9,65.8,19,65.8,16.2z"/>
                    <path fill="#34A853" d="M74.3,1.1h3.4v22.5h-3.4V1.1z"/>
                    <path fill="#EA4335" d="M88.7,18.9l2.7,1.8c-0.8,1.3-2.8,3.1-6.1,3.1c-4.3,0-7.5-3.4-7.5-7.6c0-4.4,3.3-7.6,7.1-7.6  c3.9,0,5.9,3.3,6.5,5l-1.1,0.5L84.1,19c0.8,1.5,1.9,2.2,3.5,2.2C89.1,21.2,90.2,20.4,88.7,18.9z M81.2,16.1l4.5-1.9  c-0.2-0.8-1.2-1.3-2.1-1.3C82.4,12.9,81.1,14.2,81.2,16.1z"/>
                  </svg>
                  <span className="text-[#3C4043] ml-3 font-medium text-2xl tracking-tight mt-0.5">Rating</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="flex items-center gap-2 bg-[#F8F9FA] px-4 py-1.5 rounded-full border border-gray-100">
                    <span className="text-2xl font-bold text-[#202124]">5.0</span>
                    <div className="flex gap-0.5 text-[#FBBC05] drop-shadow-sm">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                  </div>
                  <div className="h-1 w-1 rounded-full bg-gray-300 hidden sm:block"></div>
                  <span className="text-[15px] font-medium text-[#70757A]">Based on <span className="font-bold text-[#3C4043]">600+ reviews</span></span>
                </div>
              </div>
              
              <a 
                href="https://g.page/r/YOUR_GOOGLE_LINK/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#4285F4] hover:bg-[#3367D6] text-white px-8 py-3 rounded text-[15px] font-medium transition-colors shadow-sm whitespace-nowrap"
              >
                Write A Review
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay="delay-100">
            <div className="w-full relative px-0 md:px-12">
              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[
                  Autoplay({
                    delay: 6000,
                    stopOnMouseEnter: true,
                    stopOnInteraction: true,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-4 md:-ml-6">
                  {reviews.map((review, index) => (
                    <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                      <div className="bg-[#F8F9FA] rounded-xl p-8 h-full flex flex-col items-center text-center border border-gray-100">
                        {/* Stars */}
                        <div className="flex gap-1 text-[#FBBC05] mb-4">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        
                        {/* Review Text */}
                        <p className={`text-[#3C4043] leading-relaxed text-[14px] ${review.content.length > 150 && !expandedIndices.includes(index) ? 'line-clamp-5 mb-1' : 'mb-6'}`}>
                          "{review.content}"
                        </p>
                        
                        {review.content.length > 150 && (
                          <button 
                            onClick={() => toggleExpand(index)}
                            className="text-[#70757A] text-sm hover:text-[#4285F4] transition-colors mb-6"
                          >
                            {expandedIndices.includes(index) ? 'Read less' : 'Read more'}
                          </button>
                        )}
                        
                        {/* Author Info */}
                        <div className="flex flex-col items-center w-full pt-2">
                          <div 
                            className="w-12 h-12 rounded-full text-white flex items-center justify-center font-medium text-xl mb-3 shadow-sm"
                            style={{ backgroundColor: getAvatarColor(review.author) }}
                          >
                            {review.author.charAt(0).toUpperCase()}
                          </div>
                          <h4 className="font-bold text-[#202124] text-[15px]">{review.author}</h4>
                          <p className="text-xs text-[#70757A] mt-1 mb-6">{getTimeAgo(index)}</p>
                          
                          {/* Posted on Google */}
                          <div className="flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6 shrink-0">
                              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                            </svg>
                            <div className="text-left flex flex-col justify-center">
                              <span className="text-[10px] text-[#70757A] leading-[1.1]">Posted on</span>
                              <span className="text-[12px] text-[#4285F4] leading-[1.1] font-medium">Google</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8 md:mt-12 gap-4">
                  <CarouselPrevious className="static transform-none bg-white border border-gray-200 text-gray-700 hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4] transition-all w-12 h-12 shadow-sm" />
                  <CarouselNext className="static transform-none bg-white border border-gray-200 text-gray-700 hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4] transition-all w-12 h-12 shadow-sm" />
                </div>
              </Carousel>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
