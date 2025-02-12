// import { Button } from "./Button"

interface CreateDraggableButtonProps {
  children: HTMLElement
  initialPosition?: {
    top: number
    left: number
  }
}

export function Draggable({
  children,
  initialPosition = { top: 20, left: 20 }
}: CreateDraggableButtonProps): HTMLDivElement {
  const savedPosition = localStorage.getItem("buttonPosition")
  const position = savedPosition ? JSON.parse(savedPosition) : initialPosition

  let container = document.createElement("div")
  Object.assign(container.style, {
    position: "fixed",
    display: "inline-block",
    top: `${position.top}px`,
    left: `${position.left}px`,
  })

  let isDragging = false
  let offset = { x: 0, y: 0 }
  // let isLocked = true //Todo[Erik] - Verificar a necessidade de isLocked

  container.addEventListener("mousedown", (event) => {
    event.preventDefault()
    // if (!isLocked) return
    isDragging = true
    offset.x = event.clientX - container.getBoundingClientRect().left
    offset.y = event.clientY - container.getBoundingClientRect().top
    container.classList.add("dragging")
  })

  document.addEventListener("mousemove", (event) => {
    // if (!isDragging || isLocked) return //Todo[Erik] - Verificar a necessidade de isLocked
    if (!isDragging ) return
    container.style.left = `${event.clientX - offset.x}px`
    container.style.top = `${event.clientY - offset.y}px`
  })

  document.addEventListener("mouseup", () => {
    isDragging = false
    //Todo[Erik] - Verificar a necessidade de isLocked
    // if (!isLocked) {
    localStorage.setItem(
      "buttonPosition",
      JSON.stringify({
        top: parseFloat(container.style.top),
        left: parseFloat(container.style.left),
      })
    )
    // }
    container.classList.remove("dragging")
  })

  container.appendChild(children)

  //Todo[Erik] - Verificar a necessidade de isLocked
  // const dataLockButton = {
  //   text: '🔒',
  //   styles: {
  //     position: 'absolute',
  //     top: '-10px',
  //     left: '-10px',
  //     zIndex: '1000',
  //     padding: '0',
  //     backgroundColor: '#FB8C01',
  //     border: 'none',
  //     borderRadius: '50%',
  //     cursor: 'pointer',
  //     fontSize: '14px',
  //     fontWeight: 'bold',
  //     transition: 'background-color 0.3s ease',
  //     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
  //   }
  // }
  // const lockButton = Button(dataLockButton)

  // lockButton.addEventListener("click", () => {
  //   isLocked = !isLocked
  //   lockButton.textContent = isLocked ? "🔒" : "🔓"
  //   lockButton.style.backgroundColor = isLocked ? "#FB8C01" : "#FFFFFF"
  // })
  // container.appendChild(lockButton)

  return container
}