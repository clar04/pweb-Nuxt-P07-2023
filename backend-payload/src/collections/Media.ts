import { CollectionConfig } from 'payload/types';
import payload from 'payload'

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    update : () => true,
    delete : () => true,
    create : () => true
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/*"],
  },
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "create") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Posts",
              action: "Create",
              timestamp: new Date(),
            },
          });
        } else if (args.operation == "update") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Posts",
              action: "Update",
              timestamp: new Date(),
            }
          });
        } else if (args.operation == "delete") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Posts",
              action: "Delete",
              timestamp: new Date(),
            }
          });
        }
      },
    ],
  },
}

export default Media;