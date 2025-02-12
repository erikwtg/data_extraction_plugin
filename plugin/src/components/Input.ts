interface IInputProps extends Record<string, string> {}

export function Input( styles?: IInputProps ): HTMLInputElement {
  const input = document.createElement('input')
  input.type = 'text'
  input.style.padding = '0 10px'

  if (styles?.placeholder) {
    input.placeholder = styles.placeholder
  }

  if (styles) {
    Object.assign(input.style, styles)
  }

  if (styles?.color) {
    input.style.setProperty('--placeholder-color', styles.color)
  }

  return input
}
