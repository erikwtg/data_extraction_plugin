import { Container } from './Container'
import { Draggable } from './Draggable'
import { ButtonExtract } from './ButtonExtract'
import { Activation } from './Activation'

import { DataScrapper } from '../services/DataScrapper'

import { SendToAPI, IApiData } from '../services/SendToApi'
import { config } from '../config'

import { state } from '../utils/StateManager'

export function PluginBox(): HTMLButtonElement | HTMLDivElement {
  const container = Container({ gap: '10px' })
  const buttonExtract = ButtonExtract()
  const { container: activation, input: activationInput } = Activation()

  container.appendChild(buttonExtract)
  container.appendChild(activation)

  function updateButtonState(status: string, message: string, bgColor: string) {
    buttonExtract.status = status
    buttonExtract.textContent = message
    buttonExtract.style.backgroundColor = bgColor
  }

  function focusEnable() {
    activation.style.display = 'block'
    setTimeout(() => { requestAnimationFrame(() => activationInput.focus()) }, 100)
  }

  function focusDisable() {
    activation.style.display = 'none'
  }

  buttonExtract.addEventListener('click', async (): Promise<void> => {
    try {
      const extractor = new DataScrapper()
      const data = extractor.scrap()

      if (!data) {
        throw new Error('Não foi possível capturar dados!')
      }

      const response = await SendToAPI(data as IApiData, config.apiEndpoint, state.get('token'))

      if (('error' in response)) {
        updateButtonState('failed', response.message, '#FF4D4D')

        if (/token|invalid/i.test(response.message)) {
          focusEnable()

          setTimeout(() => {
            updateButtonState('success', 'Capturar dados', '#FB8C01')
          }, 1500)

          state.remove('token')
        } else if (/limite/i.test(response.message)) {
          buttonExtract.style.backgroundColor = '#FCC002'
        }

        return
      }

      if (response instanceof Error) {
        updateButtonState('failed', response.message, '#FF4D4D')
        return
      }

      updateButtonState('success', 'Nova captura', '#20C6AD')

      setTimeout(() => {
        updateButtonState('success', 'Capturar dados', '#FB8C01')
      }, 1500)

      focusDisable()
      state.remove('token')
    } catch (error) {
      console.error(error)
      updateButtonState('error', 'Erro ao capturar dados!', '#FF0000')
    }
  })

  document.addEventListener('click', (event): void => {
    if (!buttonExtract.contains(event.target as Node) && !activation.contains(event.target as Node)) {
      updateButtonState('success', 'Capturar dados', '#FB8C01')
      focusDisable()
    }
  })

  const draggable = Draggable({
    children: container,
    initialPosition: { top: 20, left: 20 }
  })

  return draggable
}