import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      description: 'The name of the project.',
    }),
    defineField({
      name: 'description',
      type: 'string',
      description: 'A short description of the project.',
    }),
    defineField({
      name: 'url',
      type: 'object',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Label',
          description: 'This label that URL will be displayed as.',
        },
        {
          name: 'link',
          type: 'string',
          title: 'Link',
          description: 'The link that will be navigated to.',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});
