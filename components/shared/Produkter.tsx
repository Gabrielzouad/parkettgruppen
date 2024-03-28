import React from 'react';
import Divider from './Divider';
import { ArrowRight } from 'lucide-react';

const Produkter = () => {
  return (
    <div className='flex flex-col px-16 mt-32 mb-52 mx-auto max-w-screen-2xl'>
      <Divider Character='C' />
      <div className='flex gap-5 justify-between ml-16  text-lg text-neutral-900 '>
        <div>PRODUKTER</div>
        <div>SE ALLE PRODUKTER</div>
      </div>
      <div className='grid ml-16 md:grid-cols-2 pt-10'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-4'>
            <ArrowRight />
            <h2 className='text-3xl sm:text-4xl xl:text-6xl'>PARKETT</h2>
          </div>
          <div className='flex items-center gap-4'>
            <ArrowRight />
            <h2 className='text-3xl sm:text-4xl xl:text-6xl'>LISTVERK</h2>
          </div>
          <div className='flex items-center gap-4'>
            <ArrowRight />
            <h2 className='text-3xl sm:text-4xl xl:text-6xl'>
              SPESIALKOMPONENTER
            </h2>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center gap-4'>
            <ArrowRight />
            <h2 className='text-3xl sm:text-4xl xl:text-6xl'>LEVERING</h2>
          </div>
          <div className='flex items-center gap-4'>
            <ArrowRight />
            <h2 className='text-3xl sm:text-4xl xl:text-6xl'>MONTERING</h2>
          </div>
          <div className='flex items-center gap-4'>
            <ArrowRight />
            <h2 className='text-3xl sm:text-4xl xl:text-6xl'>VEDLIKEHOLD</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produkter;
