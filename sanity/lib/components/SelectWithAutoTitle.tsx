import { useEffect, useRef } from "react"
import { set, useFormValue } from "sanity"

export function SelectWithAutoTitle(props: any) {
  const { onChange, path, options } = props

  const valueField = useFormValue([...path, "value"]) as string | undefined
  const previousValueRef = useRef<string | undefined>(valueField)

  useEffect(() => {
    const previousValue = previousValueRef.current
    previousValueRef.current = valueField

    if (previousValue !== valueField && valueField) {
      // Set to the corresponding label
      const correspondingLabel = options.find(
        (option: { value: string }) => option?.value === valueField,
      )?.label

      if (correspondingLabel) {
        onChange(set(correspondingLabel, ["label"]))
      }
    }
  }, [valueField, onChange, options])

  // use sanity's standard ObjectInput component
  const ObjectInput = props.renderDefault

  return ObjectInput(props)
}
