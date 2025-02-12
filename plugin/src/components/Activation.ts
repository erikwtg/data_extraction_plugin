import { Container } from './Container'
import { Input } from './Input'

// import { updateStoredConfig } from '../utils/localStorage'

export function Activation(): HTMLDivElement {
  const container = Container()
  // let tokenValue = ''

  const inputData = {
    placeholder: 'Insira o Token',
    fontSize: '16px',
    color: '#C4C4C4',
    height: '40px',
    border: '1px solid #FF4D4D',
    borderRadius: '20px',
    backgroundColor: '#F5F5F5',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
  }
  const input = Input(inputData)

  container.appendChild(input)

  // Atualiza a variável quando o usuário digita
  input.addEventListener('change', (event: Event) => {
    console.log('input', event)
    // tokenValue = (event.target as HTMLInputElement).value.trim()
    // console.log('Novo Token:', tokenValue)

    // Atualiza o localStorage
    // updateStoredConfig({ token: tokenValue })
  })

  // input.addEventListener('input', (event: Event) => {
  //   console.log('input', event)
  //   // const token = (event.target as HTMLInputElement).value.trim()

  //   // console.log('Token inserido:', token)

  //   // if (token) {
  //   //   console.log('Token inserido:', token)
  //   //   updateStoredConfig({ token })
  //   // } else {
  //   //   alert('Por favor, insira um token válido!')
  //   // }
  // })

  /** Todo[Erik] - Verificar a necessidade de lógica de ativação do plugin */

  return container
}
