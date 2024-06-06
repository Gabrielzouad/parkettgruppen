import React from 'react';
import Divider from './Divider';
import BloggCard from '../cards/BloggCard';
import { SanityDocument } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/fetch';
import { POSTS_QUERY } from '@/sanity/lib/queries';

const Blogg = async () => {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
  });
  return (
    <div
      className='flex flex-col px-16 mt-52 mx-auto max-w-screen-2xl '
      id='blogg'
    >
      <Divider Character='E' />
      <div className='flex gap-5 justify-between ml-16 text-lg text-neutral-900 '>
        <div>BLOGG</div>
        <a
          className='hover:underline'
          href='https://www.bygg.no/search/?q=parkettgruppen&sort=date&date=0'
        >
          SE ALLE INNLEGG
        </a>
      </div>
      <div className='overflow-hidden '>
        {posts?.length ? (
          posts.map((post) => (
            <BloggCard
              key={post.slug}
              publishedAt={post.publishedAt}
              title={post.title}
              slug={post.slug}
              url={post.url}
            />
          ))
        ) : (
          <div>No posts found</div>
        )}
      </div>
    </div>
  );
};

export default Blogg;
