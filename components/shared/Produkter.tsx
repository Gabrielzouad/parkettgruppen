import React from 'react';
import Divider from './Divider';
import { ArrowRight } from 'lucide-react';
import { produkter } from '@/lib/constants';

const Produkter = () => {
  return (
    <div className='flex flex-col px-16 mt-32 mb-52 mx-auto max-w-screen-2xl'>
      <Divider Character='C' />
      <div className='flex gap-5 justify-between ml-16  text-lg text-neutral-900 '>
        <div>PRODUKTER</div>
      </div>
      <div className='grid md:ml-16 md:grid-cols-2 pt-10 ml-2 '>
        {produkter.map((produkt, index) => (
          <div key={index} className='flex gap-4'>
            {/* <ArrowRight /> */}
            <a className='text-3xl text-start sm:text-4xl xl:text-6xl'>
              {produkt.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produkter;
