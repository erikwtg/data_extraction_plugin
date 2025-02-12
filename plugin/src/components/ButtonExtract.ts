import { Button } from './Button'
import { Spinner } from './Spinner'

interface IButtonExtract extends HTMLButtonElement {
  text?: string
  status?: string
}

export function ButtonExtract( text = 'Capturar Dados', status = 'normal' ): IButtonExtract {
  const dataButton = {
    text: text,
    styles: {
      backgroundColor: '#FB8C01',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      width: '100%',
      padding: '10px 20px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    }
  }
  const button = Button(dataButton)

  const spinner = Spinner()
  button.prepend(spinner)

  if (status === 'loading') {
    spinner.style.display = "block"
    button.disabled = true
  } else {
    spinner.style.display = "none"
    button.disabled = false
  }

  return button
}
