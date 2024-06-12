import React from 'react';
import HeroCarousel from './HeroCarousel';

import { HERO_IMAGES_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SanityDocument } from 'next-sanity';

const Hero = async () => {
  const heroImages = await sanityFetch<SanityDocument[]>({
    query: HERO_IMAGES_QUERY,
  });
  return (
    <div className='flex flex-col mx-auto max-w-screen-2xl sm:px-0'>
      <div className='flex max-w-screen-2xl gap-5 items-start px-4 sm:px-16 mt-24 text-neutral-900 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full'>
        <div className='flex-auto text-8xl leading-[110px] max-md:max-w-full max-md:text-4xl max-md:leading-10 uppercase'>
          Alt i parkett
          <br />
          levert og montert
        </div>
        <div className='flex flex-col items-center sm:items-end mt-5'>
          <div className='text-2xl sm:text-4xl uppercase font-bold'>
            PARKETT.
            <br />
            GULV.
            <br />
            MONTERING.
          </div>
          <div className='text-lg pr-2 mt-4 sm:mt-10'>— siden 2005</div>
        </div>
      </div>
      <HeroCarousel heroImages={heroImages} />
    </div>
  );
};

export default Hero;
