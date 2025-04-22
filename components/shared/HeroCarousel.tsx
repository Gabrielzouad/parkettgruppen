'use client';
import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { CAROUSEL_NEXT_EVENT, CAROUSEL_PREV_EVENT } from './CarouselNavButton';
import { SanityDocument } from 'next-sanity';

interface HeroCarouselProps {
  heroImages: SanityDocument[];
}

const HeroCarousel = ({ heroImages }: HeroCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  // Listen for carousel navigation events
  useEffect(() => {
    if (!api) return;

    const handlePrev = () => {
      api.scrollPrev();
    };

    const handleNext = () => {
      api.scrollNext();
    };

    // Add event listeners
    window.addEventListener(CAROUSEL_PREV_EVENT, handlePrev);
    window.addEventListener(CAROUSEL_NEXT_EVENT, handleNext);

    // Clean up event listeners
    return () => {
      window.removeEventListener(CAROUSEL_PREV_EVENT, handlePrev);
      window.removeEventListener(CAROUSEL_NEXT_EVENT, handleNext);
    };
  }, [api]);
  return (
    <div className='md:mt-10'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className=' w-full  pt-10 mx-auto'
        plugins={[autoplayPlugin.current]}
        setApi={setApi}
      >
        <CarouselContent>
          {heroImages.map((image: any) =>
            image.imageUrl ? (
              <CarouselItem key={image.slug.current} className=''>
                <div className='p-1'>
                  <Card className='relative'>
                    <CardContent className='flex aspect-square md:aspect-video items-center justify-center p-6'>
                      <Image
                        src={image.imageUrl}
                        alt={image.slug.current}
                        className='object-cover w-full h-full'
                        fill
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ) : null
          )}
        </CarouselContent>

        <CarouselPrevious className='absolute top-[100px] left-[35px] z-50 bg-slate-900 text-white border-none h-16 w-16 hidden md:flex ' />
        <CarouselNext className='absolute top-[100px] left-[110px] z-50 bg-slate-900 text-white border-none h-16 w-16 hidden md:flex ' />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
