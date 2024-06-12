import { sanityFetch } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';
import { PROJECT_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import { SanityDocument } from 'next-sanity';
import Image from 'next/image';
import React, { ReactNode } from 'react';

// Define types for the components
export const RichTextConfig = {
  types: {
    image: ({ value }: any) => {
      return (
        <div>
          <Image
            src={urlForImage(value)}
            alt='image'
            className='object-contain'
            layout='fill'
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => <ul>{children}</ul>,
    number: ({ children }: any) => <ol>{children}</ol>,
  },
  block: {
    h1: ({ children }: any) => <h1>{children}</h1>,
    h2: ({ children }: any) => <h2>{children}</h2>,
    h3: ({ children }: any) => <h3>{children}</h3>,
    h4: ({ children }: any) => <h4>{children}</h4>,
    blockquote: ({ children }: any) => <blockquote>{children}</blockquote>,
  },
};

const RichTextComponent = async ({ slug }: any) => {
  const { body, imageUrl, name, location } = await sanityFetch<SanityDocument>({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
  });
  return (
    <div className='h-screen'>
      <div className='flex justify-between'>
        <h1 className='text-xl font-medium'>{name}</h1>
        <p>{location}</p>
      </div>
      <div className='flex items-center relative w-full h-60 my-6'>
        <Image
          src={urlForImage(imageUrl)}
          alt='image'
          className='object-cover'
          fill
        />
      </div>
      <PortableText value={body} components={RichTextConfig} />
    </div>
  );
};

export default RichTextComponent;
