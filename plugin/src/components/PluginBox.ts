import { Container } from './Container'
import { Draggable } from './Draggable'
import { ButtonExtract } from './ButtonExtract'
import { Activation } from './Activation'

export function PluginBox(): HTMLButtonElement | HTMLDivElement {
  const container = Container({ gap: '10px' })
  const buttonExtract = ButtonExtract()
  const activation = Activation()

  container.appendChild(buttonExtract)
  container.appendChild(activation)

  const draggable = Draggable({
    children: container,
    initialPosition: { top: 20, left: 20 }
  })

  return draggable
}