import { useState, JSX } from 'react'
import { useThemeContextProviderContext } from '../context/ThemeContext'
import { List, X, Sun, Moon, PersonArmsSpread } from '@phosphor-icons/react'

export function Navbar(): JSX.Element {
  const { theme, toggleTheme } = useThemeContextProviderContext()
  const { acessibilityMode, toggleAcessibilityMode } = useThemeContextProviderContext()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav className='flex items-center justify-end bg-brand-color-secundary-light dark:bg-highlight-color-main dark:shadow-level-1 dark:shadow-brand-color-secundary-dark/30 py-4 px-6 gap-x-8'>
      <button
        className={`cursor-pointer ${ acessibilityMode ? 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : '' }`}
        onClick={ toggleTheme }
      >
        { theme === 'opaque' ? <Sun size={32} /> : <Moon size={32} /> }
      </button>
      <button
        className='cursor-pointer'
        onClick={ toggleAcessibilityMode }
      >
        { acessibilityMode ? <PersonArmsSpread color="#003087" size={32} /> : <PersonArmsSpread size={32} /> }
      </button>
      <button
        className={`cursor-pointer ${ acessibilityMode ? 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : '' }`}
        onClick={ () => setIsOpen(!isOpen) }
      >
        { isOpen ? ( <X size={32} /> ) : ( <List size={32} /> ) }
      </button>
    </nav>
  )
}
