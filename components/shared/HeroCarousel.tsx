'use client';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

const HeroCarousel = ({ heroImages }: any) => {
  return (
    <div className='mt-12 '>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className=' w-full  pt-10 mx-auto'
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {heroImages.map((image: any) =>
            image.imageUrl ? (
              <CarouselItem key={image.slug.current} className=''>
                <div className='p-1'>
                  <Card className='relative'>
                    <CardContent className='flex aspect-video items-center justify-center p-6'>
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

        <CarouselPrevious className='absolute top-[100px] left-[35px] z-50 bg-slate-900 text-white border-none h-16 w-16 hidden sm:flex ' />
        <CarouselNext className='absolute top-[100px] left-[110px] z-50 bg-slate-900 text-white border-none h-16 w-16 hidden sm:flex ' />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
