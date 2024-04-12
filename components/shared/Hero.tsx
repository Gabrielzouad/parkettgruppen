import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col mx-auto overflow-hidden'>
      <div className='flex relative max-w-screen-2xl gap-5 items-start px-16 mt-24 text-neutral-900 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full'>
        <div className='flex-auto text-8xl leading-[110px] max-md:max-w-full max-md:text-4xl max-md:leading-10 uppercase'>
          Alt i parkett
          <br />
          levert og montert
        </div>
        <div className='flex flex-col mt-5'>
          <div className='text-lg'>— siden 2005</div>
          <div className='mt-10 text-4xl max-md:mt-10 uppercase font-bold'>
            PARKETT.
            <br />
            GULV.
            <br />
            MONTERING.
          </div>
        </div>
      </div>
      <div className='mt-12 md:min-h-screen'>
        <img
          srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/922cb2d71dfd4c4a94a32e24a532a787bfea9c58a8fcc824d16316850ff7d510?apiKey=b446d51b9534433b80edb44226844ac6&'
          className='object-contain w-full h-full'
        />
      </div>
    </div>
  );
};

export default Hero;
