import { sanityFetch } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';
import { PROJECT_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import type { SanityDocument } from 'next-sanity';
import Image from 'next/image';
import type React from 'react';

// Define types for the rich text components
const RichTextConfig = {
  types: {
    image: ({ value }: { value: any }) => {
      return (
        <div className='relative w-full h-80 my-8'>
          <Image
            src={urlForImage(value) || '/placeholder.svg'}
            alt='Project image'
            className='object-contain rounded-lg'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className='list-disc pl-6 my-4 space-y-2'>{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className='list-decimal pl-6 my-4 space-y-2'>{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className='text-3xl font-bold mt-8 mb-4'>{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className='text-2xl font-bold mt-6 mb-3'>{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className='text-xl font-bold mt-4 mb-2'>{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className='text-lg font-bold mt-3 mb-2'>{children}</h4>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className='border-l-4 border-gray-300 pl-4 italic my-4'>
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className='my-4 leading-relaxed'>{children}</p>
    ),
  },
};

interface RichTextComponentProps {
  slug: string;
}

const RichTextComponent = async ({ slug }: RichTextComponentProps) => {
  const project = await sanityFetch<SanityDocument>({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!project) {
    return <div className='text-center py-12'>Project not found</div>;
  }

  const { body, imageUrl, name, location } = project;

  return (
    <article className='prose prose-lg max-w-none'>
      <header className='mb-8'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6'>
          <h1 className='text-3xl font-normal'>{name}</h1>
          {location && (
            <div className='text-gray-700 font-medium'>
              Sted: <span className='font-normal'>{location}</span>
            </div>
          )}
        </div>

        {imageUrl && (
          <div className='relative w-full aspect-video rounded-lg overflow-hidden'>
            <Image
              src={urlForImage(imageUrl) || '/placeholder.svg'}
              alt={name || 'Project image'}
              className='object-cover'
              fill
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
        )}
      </header>

      <div className='mt-8'>
        {body ? (
          <PortableText value={body} />
        ) : (
          <p className='text-gray-600'>
            No content available for this project.
          </p>
        )}
      </div>
    </article>
  );
};

export default RichTextComponent;
