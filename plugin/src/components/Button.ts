interface IButtonProps {
  text: string
  styles?: Record<string, string>
}

export function Button({
  text,
  styles
}: IButtonProps): HTMLButtonElement {
  const button = document.createElement('button')
  button.textContent = text

  if (styles) {
    Object.assign(button.style, styles)
  }

  return button
}