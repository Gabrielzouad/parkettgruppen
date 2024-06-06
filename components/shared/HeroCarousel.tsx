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
  console.log(heroImages);
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
        <CarouselPrevious className='absolute top-[100px] left-[35px] z-50 bg-slate-900 text-white border-none h-16 w-16 hidden sm:flex ' />
        <CarouselNext className='absolute top-[100px] left-[110px] z-50 bg-slate-900 text-white border-none h-16 w-16 hidden sm:flex ' />
        <CarouselContent>
          {heroImages.map((image: any) => (
            <CarouselItem key={image.slug} className=''>
              <Card className='bg-slate-600'>
                <CardContent className='flex aspect-video items-center justify-center p-6'>
                  <Image
                    src={image.imageUrl}
                    alt={image.slug}
                    className='object-cover w-full h-full'
                    fill
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
