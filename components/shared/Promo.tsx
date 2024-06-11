import Image from 'next/image';
import React from 'react';

const Promo = () => {
  return (
    <div className='flex flex-col overflow-hidden relative px-16 py-10 text-white min-h-screen max-md:px-5'>
      <div className='flex flex-col flex-grow'>
        <Image
          loading='lazy'
          src='/promobilde.jpg'
          className='object-cover absolute inset-0 w-full h-full'
          alt='Promo image'
          fill
        />
        <div className='relative self-start uppercase text-4xl md:text-8xl xl:text-[160px]'>
          PARKETTGRUPPEN
        </div>
      </div>
      <div className='relative self-end text-4xl text-end md:text-8xl w-1/2 uppercase'>
        Vi tenker på parkett nesten døgnet rundt.
      </div>
    </div>
  );
};

export default Promo;
