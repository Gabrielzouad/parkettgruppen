import React from 'react';

type DividerProps = {
  Character: string;
  color?: 'white' | 'black'; // You can extend this with more color options if needed.
};

const Divider = ({ Character, color = 'black' }: DividerProps) => {
  // Determine the classes based on the color prop.
  const textColor = color === 'black' ? 'text-neutral-900' : 'text-white';
  const borderColor = color === 'black' ? 'border-neutral-900' : 'border-white';
  const bgColor = color === 'black' ? 'bg-neutral-900' : 'bg-white';

  return (
    <div
      className={`flex gap-5 justify-between text-3xl whitespace-nowrap ${textColor} overflow-hidden`}
    >
      <div
        className={`items-start px-4 pt-6 pb-1.5 rounded-full border border-solid ${borderColor} stroke-[1px] max-md:pr-5`}
      >
        {Character}
      </div>
      <div
        className={`shrink-0 my-auto max-w-full border border-solid ${bgColor} ${borderColor} w-screen`}
      />
    </div>
  );
};

export default Divider;
