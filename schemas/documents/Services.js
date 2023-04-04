export default {
  name: 'services',
  title: 'Services',
  type: 'document',
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
      name: 'subHeading',
      type: 'text',
      title: 'SubHeading',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          name: 'services',
          title: 'Services',
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
      name: 'joinUs',
      title: 'Join Us',
      type: 'object',
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
      ],
    },
  ],
}
