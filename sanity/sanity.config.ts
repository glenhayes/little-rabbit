import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {BiCog} from 'react-icons/bi'

export default defineConfig({
  name: 'default',
  title: 'Little Rabbit',

  projectId: 'fvy787gw',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            S.listItem()
              .title('Settings')
              .icon(BiCog)
              .child(S.document().schemaType('settings').documentId('settings')),
            ...S.documentTypeListItems().filter(
              (listItem) => !['settings'].includes(listItem.getId() as string)
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
