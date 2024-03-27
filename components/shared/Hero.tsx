import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='flex overflow-hidden relative flex-col px-16 pt-1 pb-16 mx-auto max-w-screen-2xl '>
      <div className='flex relative gap-5 items-start mt-32 text-neutral-900 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full'>
        <div className='flex-auto text-8xl leading-[110px] max-md:max-w-full max-md:text-4xl max-md:leading-10'>
          Alt i parkett
          <br />
          levert og montert
        </div>
        <div className='flex flex-col mt-5'>
          <div className='text-lg'>— siden 2005</div>
          <div className='mt-10 text-4xl max-md:mt-10'>
            PARKETT.
            <br />
            gulv.
            <br />
            montering.
          </div>
        </div>
      </div>
      <div className='flex overflow-hidden relative flex-col items-start px-10 pt-10 pb-20 mt-6 min-h-[850px] max-md:px-5 max-md:max-w-full'>
        <img
          loading='lazy'
          srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&'
          className='object-cover absolute inset-0 size-full'
        />
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/d7fac59416390224eba3926935789235f21eb9107686d27884a7b9899bbdf826?apiKey=b446d51b9534433b80edb44226844ac6&'
          className='max-w-full aspect-[2.13] mb-[507px] w-[162px] max-md:mb-10'
        />
      </div>
    </div>
  );
};

export default Hero;
