import {defineField, defineType} from 'sanity'
import {FiFeather as icon} from 'react-icons/fi'

export default defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name of the collection',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
})
