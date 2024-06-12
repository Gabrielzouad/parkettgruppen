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
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const ProsjektCarousel = ({ projects }: any) => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className=' w-full sm:w-4/6 pt-10 mx-auto'
    >
      <CarouselContent className='-ml-1'>
        {projects.map((project: any, index: any) => (
          <CarouselItem key={index} className='md:basis-2/3 md:m-12'>
            <div className='p-1'>
              <Card className='relative'>
                <CardContent className='flex aspect-video items-center justify-center p-6'>
                  <a href={`/prosjekt/${project.slug.current}`}>
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      className='object-cover w-full h-full'
                      fill
                    />
                  </a>
                </CardContent>
              </Card>
              <div className='flex justify-between'>
                <h3 className='text-xl mt-4'>{project.name}</h3>
                <p className='mt-4 text-md text-neutral-900'>
                  {project.location}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=' hidden sm:flex' />
      <CarouselNext className=' hidden sm:flex' />
    </Carousel>
  );
};

export default ProsjektCarousel;
