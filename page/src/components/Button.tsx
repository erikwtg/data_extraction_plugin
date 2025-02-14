import { JSX } from 'react'
import { useThemeContextProviderContext } from '../context/ThemeContext'
interface IButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Button({ children, onClick, className = '' }: IButtonProps): JSX.Element {
  const { acessibilityMode } = useThemeContextProviderContext()

  return (
    <button
      className={`
        bg-brand-color-secundary-light/90
        dark:bg-brand-color-secundary-main/70
        transition-colors
        hover:bg-brand-color-secundary-dark
        dark:hover:bg-brand-color-secundary-dark
        p-2
        rounded-md
        cursor-pointer
        ${className}
        ${ acessibilityMode ? 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : '' }
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}