import { Container } from './Container'
import { Draggable } from './Draggable'

export function PluginBox(): HTMLButtonElement | HTMLDivElement {
  const container = Container({ gap: '10px', backgroundColor: 'red', borderRadius: '50%', width: '100px', height: '100px' })

  const draggable = Draggable({
    children: container,
    initialPosition: { top: 20, left: 20 }
  })

  return draggable
}