export default {
  name: 'expertiseArea',
  type: 'document',
  title: 'Expertise Area',
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
      type: 'string',
      title: 'Description',
    },

    {
      name: 'expertiseList',
      title: 'expertise List',
      type: 'array',
      of: [
        {
          name: 'inSight',
          title: 'InSight',
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
              name: 'logo',
              type: 'logo',
              title: 'Logo',
            },
          ],
        },
      ],
    },
    // {
    //   name: 'getInTouch',
    //   type: 'object',
    //   title: 'Get In Touch',

    //   fields: [
    //     {
    //       name: 'text',
    //       type: 'string',
    //       title: 'Text',
    //     },
    //     {
    //       name: 'email',
    //       type: 'email',
    //       validation: (Rule) =>
    //         Rule.regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).error('Invalid email address'),
    //     },
    //   ],
    // },
    // {
    //   name: 'rightImage',
    //   type: 'logo',
    //   title: 'Right Side Image',
    // },
  ],
}
