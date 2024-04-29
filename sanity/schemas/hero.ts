import { defineType, defineField } from 'sanity';

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'largeText',
      type: 'string',
      title: 'Large Text',
      description: 'Large text displayed in the hero section, usually the main headline.'
    }),
    defineField({
      name: 'yearsText',
      type: 'string',
      title: 'Years of Service Text',
      description: 'Text showing how long the service has been provided, e.g., "— siden 2005".'
    }),
    defineField({
      name: 'bulletedWords',
      type: 'array',
      title: 'Bulleted Words',
      of: [{ type: 'string' }],
      description: 'List of words or phrases displayed in a bold font. Each entry represents a new line.'
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      options: { hotspot: true },
      description: 'The main image used in the hero section, supporting different resolutions.',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'A short description of the image for accessibility (e.g., for screen readers).'
        })
      ]
    })
  ]
});
