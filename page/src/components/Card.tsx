import { ReactNode, useState, JSX } from 'react'
import { useThemeContextProviderContext } from '../context/ThemeContext'

interface ICardProps {
  children: ReactNode
  className?: string
  expansible?: boolean
}

export function Card({ children, className, expansible = false }: ICardProps): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(false)
  const { acessibilityMode } = useThemeContextProviderContext()

  return (
    <div className={`flex flex-col items-center justify-center py-8 px-6 rounded-xl border-2 border-transparent transition-color hover:border-brand-color-secundary-dark/10 shadow-level-1 shadow-brand-color-secundary-dark/35 ${className}`}>
      <div className={`${expansible ? 'overflow-hidden transition-all duration-300' : 'max-h-full'} ${expanded ? 'max-h-full' : 'max-h-96 py-2'}`}>
        { children }
      </div>
      {
        expansible && (
          <button className={`w-full text-sm text-brand-color-secundary-medium text-start cursor-pointer ${ acessibilityMode ? 'focus:outline-none focus:ring-2 focus:accent-accessibility-color-main focus:ring-offset-2' : '' }`} onClick={() => setExpanded(!expanded)}>
            { expanded ? 'ver menos' : 'ver mais' }
          </button>
        )
      }
    </div>
  )
}