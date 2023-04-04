export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
  ],
}
