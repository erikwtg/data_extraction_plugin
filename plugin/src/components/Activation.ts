import { Container } from './Container'
import { Input } from './Input'

import { state } from '../utils/StateManager'
export function Activation(): { container: HTMLDivElement, input: HTMLInputElement } {
  const container = Container()

  const inputData = {
    placeholder: 'Insira o Token',
    fontSize: '16px',
    color: '#C4C4C4',
    height: '40px',
    border: '1px solid #FF4D4D',
    borderRadius: '20px',
    backgroundColor: '#F5F5F5',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)'
  }
  const input = Input(inputData)

  container.appendChild(input)

  const savedToken = state.get('token')
  if (savedToken) input.value = savedToken

  requestAnimationFrame(() => input.focus())

  input.addEventListener('input', (event: Event) => {
    const newToken = (event.target as HTMLInputElement).value.trim()
    if (newToken) {
      state.set('token', newToken)
    }
  })

  return { container, input }
}
