import { useState, JSX } from 'react'
import { useThemeContextProviderContext } from '../context/ThemeContext'
import { List, X, Sun, Moon } from '@phosphor-icons/react'

export function Navbar(): JSX.Element {
  const { theme,toggleTheme } = useThemeContextProviderContext()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav className='flex items-center justify-end bg-brand-color-secundary-lightest dark:bg-brand-color-secundary-dark py-4 px-6 gap-x-8'>
      <button className='cursor-pointer' onClick={ toggleTheme }>{ theme === 'dark' ? <Sun size={32} /> : <Moon size={32} /> }</button>
      <button className='cursor-pointer' onClick={ () => setIsOpen(!isOpen) }>
        { isOpen ? (
          <X size={32} />
        ) : (
          <List size={32} />
        ) }
      </button>
    </nav>
  )
}
