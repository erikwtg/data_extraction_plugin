import { Container } from './Container'
import { Draggable } from './Draggable'
import { ButtonExtract } from './ButtonExtract'
import { Activation } from './Activation'

import { DataScrapper } from '../services/DataScrapper'

export function PluginBox(): HTMLButtonElement | HTMLDivElement {
  const container = Container({ gap: '10px' })
  const buttonExtract = ButtonExtract()
  const activation = Activation()

  // let token = null

  container.appendChild(buttonExtract)
  container.appendChild(activation)

  function updateButtonState(status: string, message: string, bgColor: string) {
    buttonExtract.status = status
    buttonExtract.textContent = message
    buttonExtract.style.backgroundColor = bgColor
  }

  buttonExtract.addEventListener('click', async () => {
    try {
      const extractor = new DataScrapper()
      const data = extractor.scrap()

      if (!data) {
        throw new Error('Não foi possível capturar dados!')
      }

      console.log('data', data)

      updateButtonState('error', 'Erro ao capturar dados!', '#FF0000')
      activation.style.display = 'block'
      // updateButtonState('success', 'Dados capturados com sucesso!', '#008000')
    } catch (error) {
      console.error(error)
      updateButtonState('error', 'Erro ao capturar dados!', '#FF0000')
    }
  })

  document.addEventListener('click', (event) => {
    if (!buttonExtract.contains(event.target as Node) && !activation.contains(event.target as Node)) {
      updateButtonState('success', 'Capturar dados', '#FB8C01')
      activation.style.display = 'none'
    }
  })

  const draggable = Draggable({
    children: container,
    initialPosition: { top: 20, left: 20 }
  })

  return draggable
}