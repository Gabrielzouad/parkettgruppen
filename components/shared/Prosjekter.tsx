import React from 'react';
import Divider from './Divider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';

const Prosjekter = () => {
  return (
    <div className='flex flex-col px-16 mt-52 mx-auto max-w-screen-2xl '>
      <Divider Character='B' />
      <div className='flex gap-5 justify-between ml-16  text-lg text-neutral-900 '>
        <div>PROSJEKTER</div>
        <div className='line-clamp-1'>SE ALLE PROSJEKTER</div>
      </div>

      <Carousel
        opts={{
          align: 'start',
        }}
        className=' w-full sm:w-4/6 pt-10 mx-auto'
      >
        <CarouselPrevious />
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className=''>
              <div className='p-1'>
                <Card className='bg-slate-600'>
                  <CardContent className='flex aspect-video items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
                <div className='flex justify-between'>
                  <h3 className='text-xl mt-4'>NASJONALMUSEET</h3>
                  <p className='mt-4 text-sm text-neutral-900'>OSLO</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Prosjekter;
