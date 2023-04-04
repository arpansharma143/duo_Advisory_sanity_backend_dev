export default {
  name: 'banner',
  type: 'document',
  title: 'Banner',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'rightImage',
      type: 'logo',
      title: 'Right Side Image',
    },
    {
      name: 'schedule',
      title: 'schedule a Consultation',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
        },
        {
          name: 'email',
          type: 'email',
          validation: (Rule) =>
            Rule.regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).error('Invalid email address'),
        },
      ],
    },
  ],
}
