import React from 'react';
import Divider from './Divider';
import AnsattCard from '../cards/AnsattCard';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SanityDocument } from 'next-sanity';
import { EMPOLOYEES_QUERY } from '@/sanity/lib/queries';
const cards = [
  {
    id: 1,
    name: 'Card 1',
    role: 'Role',
    phone: '+47 123 45 678',
    image: '/person.png',
  },
  {
    id: 2,
    name: 'Card 2',
    role: 'Role',
    phone: '+47 123 45 678',
    image: '/person.png',
  },
  {
    id: 3,
    name: 'Card 3',
    role: 'Role',
    phone: '+47 123 45 678',
    image: '/person.png',
  },
  {
    id: 4,
    name: 'Card 4',
    role: 'Role',
    phone: '+47 123 45 678',
    image: '/person.png',
  },
  {
    id: 5,
    name: 'Card 5',
    role: 'Role',
    phone: '+47 123 45 678',
    image: '/person.png',
  },
  {
    id: 6,
    name: 'Card 6',
    role: 'Role',
    phone: '+47 123 45 678',
    image: '/person.png',
  },
];

const Ansatte = async () => {
  const ansatte = await sanityFetch<SanityDocument[]>({
    query: EMPOLOYEES_QUERY,
  });
  return (
    <div className='w-full bg-[#343432] pt-32 md:pt-52 pb-24'>
      <div className='flex flex-col px-16 mx-auto max-w-screen-2xl'>
        <Divider Character='D' color='white' />
        <div className='flex gap-5 justify-between ml-16  text-lg text-white '>
          <div>VÅRT TEAM</div>
          <div>ALLE ANSATTE</div>
        </div>
        <div className='self-center mt-20 w-full '>
          <div className='grid gap-10 md:grid-cols-4'>
            <div className='flex flex-col sm:col-span-3 '>
              <div className='text-xl leading-8 text-white font-thin max-md:mt-10 uppercase'>
                Et av våre hovedmål er å tilby våre kunder en komplett
                gulvløsning med høyeste kvalitet i alle ledd fra planlegging,
                gjennomføring og oppfølging i etterkant av prosjekter. Vi legger
                også stor vekt på at alle våre produkter holder markedets beste
                kvalitet.
              </div>
            </div>
          </div>
          <div className='grid gap-10 mt-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
            {ansatte.map((ansatt, index) => (
              <>
                {index % 3 === 0 && (
                  <div className='hidden xl:flex col-span-1'></div>
                )}
                <AnsattCard
                  key={index}
                  id={ansatt.id}
                  name={ansatt.name}
                  role={ansatt.role}
                  email={ansatt.email}
                  image={ansatt.image}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ansatte;
