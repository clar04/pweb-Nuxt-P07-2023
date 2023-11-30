import { CollectionConfig } from 'payload/types'
import payload from 'payload'
import Content from '../blocks/Content';

export const Blogs: CollectionConfig = {
  slug: 'Blogs',
  access : {
    read : () => true,
    update : () => true,
    delete : () => true,
    create : () => true
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'postMeta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'Tags',
          label: 'Tags',
          type: 'relationship',
          relationTo: 'tags',
          required: true,
        },
        {
          name: 'Author',
          label: 'Author',
          type: 'text',
          required: true
        },
        {
          name: 'readMin',
          label: 'readMin',
          type: 'number',
          required: true
        },
        {
          name: 'ImageURL',
          label: 'ImageURL',
          type: 'text',
        }
      ],
    },
  ],

  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "create") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Blogs",
              action: "Create",
              timestamp: new Date(),
            },
          });
        } else if (args.operation == "update") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Blogs",
              action: "Update",
              timestamp: new Date(),
            }
          });
        } else if (args.operation == "delete") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Blogs",
              action: "Delete",
              timestamp: new Date(),
            }
          });
        }
      },
    ],
  },
}

export default Blogs