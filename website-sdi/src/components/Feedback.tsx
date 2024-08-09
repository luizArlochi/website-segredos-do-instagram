import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const Feedback: React.FC = () => {
  const feedbackImages = [
    'src/assets/feedback-image.png',
    'src/assets/feedback-image.png',
    'src/assets/feedback-image.png',
    'src/assets/feedback-image.png',
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 relative">
        <Carousel className="relative max-w-[600px] mx-auto">
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-10" />
          <CarouselContent className="flex">
            {feedbackImages.map((image, index) => (
              <CarouselItem key={index} className="w-1/2 px-2">
                  <img src={image} alt={`Feedback ${index + 1}`} className="w-full h-auto" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default Feedback;
