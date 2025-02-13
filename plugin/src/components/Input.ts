interface IInputProps {
  placeholder?: string
  fontSize?: string
  color?: string
  height?: string
  border?: string
  borderRadius?: string
  backgroundColor?: string
  boxShadow?: string
}

export function Input(styles?: IInputProps): HTMLInputElement {
  const input = document.createElement("input")
  input.style.all = "unset"
  input.type = "text"
  input.style.padding = "10px"
  input.style.width = "100%"
  input.style.boxSizing = "border-box"
  input.spellcheck = false
  input.autocomplete = "off"
  input.tabIndex = 0

  if (styles?.placeholder) {
    input.placeholder = styles.placeholder
  }

  Object.assign(input.style, styles)

  return input;
}