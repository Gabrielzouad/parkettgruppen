'use server';
import React from 'react';
import Divider from './Divider';
import ProsjektCarousel from './ProsjektCarousel';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SanityDocument } from 'next-sanity';

const Prosjekter = async () => {
  const projects = await sanityFetch<SanityDocument[]>({
    query: PROJECTS_QUERY,
  });

  return (
    <div
      className='flex flex-col px-16 mt-52 mx-auto max-w-screen-2xl'
      id='prosjekter'
    >
      <Divider Character='B' />
      <div className='flex gap-5 justify-between ml-16  text-lg text-neutral-900 '>
        <div>PROSJEKTER</div>
      </div>
      <ProsjektCarousel projects={projects} />
    </div>
  );
};

export default Prosjekter;
