export default {
  name: 'navItems',
  title: 'Nav Items',
  type: 'object',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'id',
      type: 'string',
      title: 'Id',
    },
    {
      name: 'navItemUrl',
      type: 'string', // references link object
      title: 'Nav Item URL',
    },
  ],
}
