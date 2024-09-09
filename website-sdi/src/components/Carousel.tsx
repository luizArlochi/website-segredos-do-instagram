import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { useDeviceType } from '@/utils/DevicesTypes';
import GrowImg from "../assets/grow-img.png"
import RobotImg from "../assets/robot-img.png"
import GiftBoxImg from "../assets/giftbox.png"
import CellImg from "../assets/cell-img.png"
import SupportImg from "../assets/support-img.png"

const CarouselInfo: React.FC = () => {
  const { isMobile } = useDeviceType();

  const carouselImages = [
    GrowImg,
    RobotImg,
    GiftBoxImg,
    CellImg,
    SupportImg,
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

export default CarouselInfo;
