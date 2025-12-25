import { useEffect, useRef } from "react"
import { set, useFormValue } from "sanity"

export function SelectWithCustomField(props: any) {
  const { onChange, path, options } = props

  const valueField = useFormValue([...path, "value"]) as string | undefined
  const previousValueRef = useRef<string | undefined>(valueField)

  useEffect(() => {
    const previousValue = previousValueRef.current
    previousValueRef.current = valueField

    if (previousValue !== valueField) {
      if (valueField === "other") {
        // Reset label to an empty string when selecting "other"
        onChange(set("", ["label"]))
      } else {
        // Set to the corresponding label
        const correspondingLabel = options.find(
          (option: { value: string; label: string }) =>
            option?.value === valueField,
        )?.label
        if (correspondingLabel) {
          onChange(set(correspondingLabel, ["label"]))
        }
      }
    }
  }, [valueField, onChange, options])

  // use sanity's standard ObjectInput component
  const ObjectInput = props.renderDefault

  return ObjectInput(props)
}
