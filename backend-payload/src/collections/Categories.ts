import { CollectionConfig } from 'payload/types'
import payload from 'payload'

const Categories : CollectionConfig = {
  slug: 'Categories',
  access : {
    read : () => true,
    update : () => true,
    delete : () => true,
    create : () => true
  },
  admin: {
    useAsTitle: 'Categories',
  },
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "create") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Categories",
              action: "Create",
              timestamp: new Date(),
            },
          });
        } else if (args.operation == "update") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Categories",
              action: "Update",
              timestamp: new Date(),
            }
          });
        } else if (args.operation == "delete") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Categories",
              action: "Delete",
              timestamp: new Date(),
            }
          });
        }
      },
    ],
  },
  fields: [
    {
      name: 'Categories',
      label: 'Categories',
      type: 'text',
      required: true,
    },
  ],
}

export default Categories