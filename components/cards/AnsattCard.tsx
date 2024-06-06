import React from 'react';
import Image from 'next/image';

type AnsattCardProps = {
  id: number;
  name: string;
  role: string;
  email: string;
  image: string;
};

const AnsattCard = ({ name, role, email, image }: AnsattCardProps) => {
  return (
    <div className=' my-4'>
      <Image
        src={image}
        alt={name}
        width={250}
        height={300}
        className='w-full'
      />
      <h2 className='my-2 tracking-wide text-white '>{name}</h2>
      <div className='w-full h-0.5 my-2 bg-slate-400'></div>
      <div className='flex justify-between '>
        <p className='opacity-60 text-slate-200'>{role}</p>
        <p className='opacity-60 text-slate-200'>{email}</p>
      </div>
    </div>
  );
};

export default AnsattCard;
