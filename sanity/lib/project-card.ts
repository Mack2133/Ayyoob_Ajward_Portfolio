export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
          name: 'project_name',
          title: 'Project Name',
          type: 'string',
        },
        {
          name: 'excerpt',
          type: 'text',
          title: 'Excerpt',
          validation: (Rule: any) => Rule.max(200),
        },
        {
          name: 'project_description',
          title: 'Project Description',
          type: 'text',
        },
        {
          name: 'project_url',
          title: 'Project URL',
          type: 'url',
        },
        {
          name: 'project_type',
          title: 'Project Type',
          type: 'reference',
          to: [{type: 'project-type'}],
        },
        {
          name: 'technologies',
          title: 'Technologies',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
            name: 'cover_image',
            title: 'Cover Image',
            type: 'image',
            options: {
            hotspot: true,
            }
        },
        {
            name: 'project_date',
            title: 'Project Date',
            type: 'date',
        }
    ]
  }