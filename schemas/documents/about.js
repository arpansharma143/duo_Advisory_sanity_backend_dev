export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subHeading',
      type: 'text',
      title: 'SubHeading',
    },
    {
      name: 'heading',
      title: 'Heading',
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

    // {
    //   name: 'heading',
    //   type: 'text',
    //   title: 'Heading',
    // },
    // {
    //   name: 'subHeading',
    //   type: 'text',
    //   title: 'SubHeading',
    // },

    // {
    //   name: 'overViewList',
    //   title: 'OverView List',
    //   type: 'array',
    //   of: [
    //     {
    //       name: 'OverViewList',
    //       type: 'object',
    //       title: 'OverView List',
    //       fields: [
    //         {
    //           name: 'title',
    //           type: 'string',
    //           title: 'Title',
    //         },
    //         {
    //           name: 'quantity',
    //           type: 'string',
    //           title: 'Quantity',
    //         },
    //         {
    //           name: 'description',
    //           type: 'string',
    //           title: 'Description',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
}
