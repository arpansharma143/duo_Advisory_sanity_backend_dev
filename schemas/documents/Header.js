export default {
  name: 'header',
  type: 'document',
  title: 'Header',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'MainLogo',
      type: 'logo',
      title: 'Header Image',
    },
    {
      name: 'NavItems',
      type: 'array',
      of: [{type: 'navItems'}],
      title: 'Nav Items',
    },
    {
      name: 'contactUs',
      title: 'Contact Us',
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
