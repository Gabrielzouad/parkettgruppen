// ./schemas/heroType.ts

import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  type: 'document',
  title: 'Hero',
  options: {
    singleton: true, // Identify this document as a singleton
  },
  fields: [
    defineField({
      name: 'mainText',
      type: 'string',
      title: 'Main Text',
      description: 'Enter the large text shown in the hero component.'
    }),
    defineField({
      name: 'sinceYear',
      type: 'string',
      title: 'Since Year',
      description: 'Enter the year for the "since" text.'
    }),
    defineField({
      name: 'additionalText',
      type: 'array',
      title: 'Additional Text',
      description: 'Enter additional texts like PARKETT, GULV, MONTERING.',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Alternative text description for SEO and accessibility.'
        }),
      ],
    }),
  ],
});
