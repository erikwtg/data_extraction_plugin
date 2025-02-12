interface IContainerProps extends Record<string, string> {}

export function Container( styles?: IContainerProps ): HTMLDivElement {
  const container = document.createElement('div')
  container.style.padding = '0px'
  container.style.margin = '0px'
  container.style.width = '100%'
  container.style.height = '100%'
  container.style.display = 'flex'
  container.style.flexDirection = 'column'
  container.style.alignItems = 'center'
  container.style.justifyContent = 'center'
  container.style.textAlign = 'center'

  if (styles) {
    Object.assign(container.style, styles)
  }

  return container
}