export function Spinner(): HTMLDivElement {
  const spinner = document.createElement('div')
  Object.assign(spinner.style, {
    width: "16px",
    height: "16px",
    border: "2px solid white",
    borderTop: "2px solid transparent",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "8px",
    animation: "spin 0.8s linear infinite",
    visibility: "hidden"
  })
  return spinner
}

