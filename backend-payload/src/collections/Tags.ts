import { CollectionConfig } from 'payload/types'
import payload from 'payload'

const Tags : CollectionConfig = {
  slug: 'tags',
  access : {
    read : () => true,
    update : () => true,
    delete : () => true,
    create : () => true
  },
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "create") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Tags",
              action: "Create",
              timestamp: new Date(),
            },
          });
        } else if (args.operation == "update") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Tags",
              action: "Update",
              timestamp: new Date(),
            }
          });
        } else if (args.operation == "delete") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Tags",
              action: "Delete",
              timestamp: new Date(),
            }
          });
        }
      },
    ],
  },
  admin: {
    useAsTitle: 'Tags',
  },
  fields: [
    {
      name: 'Tags',
      label: 'Tags',
      type: 'text',
      required: true,
    },
  ],
}

export default Tags