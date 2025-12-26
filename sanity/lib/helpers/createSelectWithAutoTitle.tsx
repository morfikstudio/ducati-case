import { defineField, type FieldDefinition } from "sanity"

import { SelectWithAutoTitle } from "../components/SelectWithAutoTitle"

interface CreateSelectWithAutoTitleOptions {
  name: string
  title: string
  options: {
    label: string
    value: string
  }[]
  valueFieldTitle?: string
  customFieldLabel?: string
}

export function createSelectWithAutoTitle({
  name,
  title,
  options,
  valueFieldTitle = "Opzioni",
  customFieldLabel = "Etichetta",
}: CreateSelectWithAutoTitleOptions): FieldDefinition {
  return defineField({
    name,
    title,
    type: "object",
    components: {
      input: (props) => <SelectWithAutoTitle {...props} options={options} />,
    },
    fields: [
      defineField({
        name: "value",
        title: valueFieldTitle,
        type: "string",
        options: {
          list: options.map((opt) => ({ title: opt.label, value: opt.value })),
          layout: "dropdown",
        },
        initialValue: () => options[0].value,
      }),
      defineField({
        name: "label",
        title: customFieldLabel,
        type: "string",
        readOnly: true,
        hidden: true,
        initialValue: () => options[0].label,
      }),
    ],
  })
}
