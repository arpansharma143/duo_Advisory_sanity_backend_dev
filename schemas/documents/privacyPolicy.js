export default {
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'privacyPolicy',
      title: 'Privacy Policy',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
              // options: {
              //   isHighlighted: true,
              // },
            },
          ],
        },
      ],
    },

    {
      name: 'metaTag',
      title: 'Meta Tags',
      type: 'metaTag',
      description: 'Reference for the Meta tags Of Privacy Policy Page',
    },
  ],
}
