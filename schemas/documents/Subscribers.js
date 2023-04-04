export default {
  name: 'subscribers',
  title: 'Subscribers',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.unique().error('This field must be unique'),
    },
  ],
}
