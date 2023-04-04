export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'reference',
      title: 'Reference',
      type: 'reference',
      description:
        ' Reference to the   banner ,   about ,expertiseArea  , services  , testimonials section and  Meta Tags for the Home Page ',
      to: [
        {type: 'banner'},
        {type: 'about'},
        {type: 'expertiseArea'},
        {type: 'services'},
        {type: 'testimonials'},
        {type: 'metaTag'},
      ],
    },
  ],
}
