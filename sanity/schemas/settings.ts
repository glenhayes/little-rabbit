import {defineType} from 'sanity'
import {BiCog as icon} from 'react-icons/bi'

export default defineType({
  name: 'settings',
  title: 'Settings',
  icon,
  type: 'document',
  fields: [
    {
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
    },
    {
      title: 'Site Description',
      name: 'siteDescription',
      type: 'string',
    },
  ],
})
