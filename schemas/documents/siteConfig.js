export default {
  name: 'siteConfig',
  title: 'Site Config',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'siteConfig',
      title: 'Site Config',
      type: 'reference',
      description: ' Reference to the  header , footer , analyticsCode , for the Home Page ',
      to: [{type: 'header'}, {type: 'footer'}, {type: 'analyticsCode'}],
    },
  ],
}
