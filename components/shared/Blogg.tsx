import React from 'react';
import Divider from './Divider';
import BloggCard from '../cards/BloggCard';

const Blogg = () => {
  return (
    <div className='flex flex-col px-16 mt-52 mx-auto max-w-screen-2xl'>
      <Divider Character='E' />
      <div className='flex gap-5 justify-between ml-16 text-lg text-neutral-900 '>
        <div>PROSJEKTER</div>
        <div>SE ALLE PROSJEKTER</div>
      </div>
      <div className='overflow-hidden '>
        <BloggCard />
        <BloggCard />
        <BloggCard />
        <BloggCard />
        <BloggCard />
        <BloggCard />
      </div>
    </div>
  );
};

export default Blogg;
