import { defineField, type FieldDefinition } from "sanity"

import { SelectWithCustomField } from "../components/SelectWithCustomField"

interface CreateSelectWithCustomFieldOptions {
  name: string
  title: string
  options: {
    value: string
    label: string
  }[]
  customOptionValue?: string
  customFieldLabel?: string
  customFieldDescription?: string
  customFieldRequiredMessage?: string
}

export function createSelectWithCustomField({
  name,
  title,
  options,
  customOptionValue = "other",
  customFieldLabel = "Etichetta",
  customFieldDescription = "Inserisci un titolo personalizzato quando selezioni 'Altro'",
  customFieldRequiredMessage = "Campo richiesto",
}: CreateSelectWithCustomFieldOptions): FieldDefinition {
  return defineField({
    name,
    title,
    type: "object",
    components: {
      input: (props) => <SelectWithCustomField {...props} options={options} />,
    },
    fields: [
      defineField({
        name: "value",
        title: "Opzioni",
        type: "string",
        options: {
          list: options.map((opt) => ({ value: opt.value, title: opt.label })),
          layout: "dropdown",
        },
        initialValue: () => options[0].value,
      }),
      defineField({
        name: "label",
        title: customFieldLabel,
        type: "string",
        description: customFieldDescription,
        readOnly: ({ parent }) => parent?.value !== customOptionValue,
        hidden: ({ parent }) => parent?.value !== customOptionValue,
        initialValue: () => options[0].label,
        validation: (rule) =>
          rule.custom((value, context) => {
            const parent = context?.parent as { value?: string } | undefined

            if (
              parent?.value === customOptionValue &&
              (!value || value.trim() === "")
            ) {
              return customFieldRequiredMessage
            }

            return true
          }),
      }),
    ],
  })
}
