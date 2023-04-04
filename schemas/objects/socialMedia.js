export default {
  name: 'socialMedia',
  title: 'social Media Icon',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'socialMediaIcon',
          title: 'Social Media Icon',
          type: 'logo',
        },
        {
          name: 'url',
          type: 'url',
          title: 'Url',
        },
      ],
    },
  ],
}
