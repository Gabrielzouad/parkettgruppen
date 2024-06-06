import { convertISOToDate } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface BloggCardProps {
  publishedAt: string;
  title: string;
  slug: string;
  url: string;
}

const BloggCard = ({ publishedAt, title, slug, url }: BloggCardProps) => {
  return (
    <>
      <div
        className={`shrink-0 max-w-full border border-solid black bg-black border-black md:ml-16 my-8  w-screen`}
      />
      <div>
        <div className='flex md:grid md:grid-cols-4 gap-5 justify-between md:ml-16 items-center text-neutral-900 '>
          <div className='md:flex items-center col-span-3 justify-between'>
            <div className='text-sm'>{convertISOToDate(publishedAt)}</div>
            <div className='text-2xl line-clamp-1'>{title}</div>
          </div>
          <ArrowRight className='col-start-5 cursor-pointer' href={url} />
        </div>
      </div>
    </>
  );
};

export default BloggCard;
