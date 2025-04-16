import type { Metadata } from 'next';
import RichTextComponent from '@/components/shared/RichTextComponent';
import { sanityFetch } from '@/sanity/lib/fetch';
import { PROJECT_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import type { SanityDocument } from 'next-sanity';

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { name } = await sanityFetch<SanityDocument>({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug: params.slug },
  });

  return {
    title: `${name} | Parkettgruppen`,
    description: `Project details for ${name}`,
  };
}

// Page component that uses the slug from the URL
export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='max-w-4xl mx-auto'>
        <RichTextComponent slug={params.slug} />
      </div>
    </main>
  );
}
