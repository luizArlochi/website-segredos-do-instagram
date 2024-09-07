import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { useDeviceType } from '@/utils/DevicesTypes';

const GiftBox: React.FC = () => {
  const { isMobile } = useDeviceType();

  const carouselImages = [
    'src/assets/grow-img.png',
    'src/assets/robot-img.png',
    'src/assets/giftbox.png',
    'src/assets/cell-img.png',
    'src/assets/support-img.png',
  ];

  return (
    <div className="py-8 relative">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="relative w-[90%] max-w-[1050px] mx-auto overflow-visible"
      >
        {!isMobile && (
          <>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hover:bg-green-600"/>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hover:bg-green-600"/>
          </>
        )}

        <CarouselContent className="flex p-2">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="w-full md:basis-1/2 lg:basis-1/2 p-2">
              <img src={image} alt={`Feedback ${index + 1}`} className="rounded-2xl w-full h-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default GiftBox;
