import { ArrowRight } from 'lucide-react';
import React from 'react';

const BloggCard = () => {
  return (
    <>
      <div
        className={`shrink-0 max-w-full border border-solid black bg-black border-black ml-16 my-8  w-screen`}
      />
      <div>
        <div className='flex md:grid md:grid-cols-4 gap-5 justify-between  ml-16 items-center text-neutral-900 '>
          <div className='md:flex items-center col-span-3 justify-between'>
            <div className='text-sm'>20.5.2024</div>
            <div className='text-2xl line-clamp-1'>
              Ny kontrakt på Kunstsiloen Kristiansand!
            </div>
          </div>
          <ArrowRight className='col-start-5' />
        </div>
      </div>
    </>
  );
};

export default BloggCard;
