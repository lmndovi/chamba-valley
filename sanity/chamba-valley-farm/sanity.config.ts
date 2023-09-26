import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'chamba-valley-farm',

  projectId: 'h9tdgzzq',
  dataset: 'chamba-valley',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
