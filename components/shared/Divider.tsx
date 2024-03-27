import React from 'react';

type DividerProps = {
  Character: string;
};

const Divider = ({ Character }: DividerProps) => {
  return (
    <div className='flex gap-5 justify-between text-3xl whitespace-nowrap text-neutral-900  '>
      <div className='items-start px-4 pt-6 pb-1.5 rounded-full border border-solid border-neutral-900 stroke-[1px] max-md:pr-5'>
        {Character}
      </div>
      <div className='shrink-0 my-auto max-w-full  border border-solid bg-neutral-900 border-neutral-900 w-screen' />
    </div>
  );
};

export default Divider;
