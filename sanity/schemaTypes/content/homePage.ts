import { defineField, defineType } from "sanity"
import { HomeIcon } from "@sanity/icons"

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().error("Campo richiesto"),
    }),
  ],
})
