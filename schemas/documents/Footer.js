export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },

    {
      name: 'heading',
      type: 'text',
      title: 'Heading',
    },

    {
      name: 'resources',
      type: 'object',
      title: 'Resources',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'resourcesList',
          title: 'ResourcesList',
          type: 'array',
          of: [
            {
              name: 'resource',
              title: 'Resource Title',
              type: 'object',

              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                },
                {
                  name: 'url',
                  type: 'string',
                  title: 'Url',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: 'navigationList',
      type: 'object',
      title: 'Nav Items',
      fields: [
        {
          name: 'navItems',
          title: 'NavItems',
          type: 'array',
          of: [{type: 'navItems'}],
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
              title: 'Email',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'MainLogo',
      type: 'logo',
      title: 'Footer Main Logo',
    },
    {
      title: 'Social Media',
      name: 'socialMedia',
      type: 'object',
      fields: [
        {
          name: 'socialMediaIcon',
          title: 'social Media Icon',
          type: 'socialMedia',
        },
      ],
    },

    {
      name: 'copyrightLine',
      type: 'string',
      title: 'Copy Right Line',
    },
  ],
}
