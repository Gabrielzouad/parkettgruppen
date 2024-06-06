import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { ansatteType } from './ansatteType'
import { projectType } from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ postType, ansatteType, projectType]
  
}
