import { type SchemaTypeDefinition } from 'sanity'
import projectCard from './lib/project-card'
import projectType from './lib/project-type'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectCard, projectType],
}
