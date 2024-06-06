import { defineType, defineField } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Blogg',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'url',
      title: 'Link til artikkel',
      type: 'url',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, author, media } = selection;
      return {
        title,
        subtitle: author && `by ${author}`,
        media,
      };
    },
  },
});
