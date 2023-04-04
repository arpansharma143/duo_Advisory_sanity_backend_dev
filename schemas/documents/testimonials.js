export default {
  name: 'testimonials',
  type: 'document',
  title: 'Testimonials',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'heading',
      type: 'text',
      title: 'Heading',
    },

    {
      name: 'clientReviews',
      title: 'ClientReviews',
      type: 'array',
      of: [
        {
          name: 'clientReviews',
          title: 'ClientReviews',
          type: 'object',
          fields: [
            {
              name: 'Image',
              type: 'logo',
              title: 'Image',
            },
            {
              name: 'name',
              title: 'name',
              type: 'string',
            },
            {
              name: 'description',
              title: 'description',
              type: 'text',
            },
          ],
        },
      ],
    },

    {
      name: 'clientsLogos',
      title: 'Clients Logos',
      type: 'array',
      of: [{type: 'logo'}],
    },
  ],
}
