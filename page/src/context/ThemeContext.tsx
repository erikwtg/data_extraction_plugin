import { useState, createContext, useContext, useEffect } from 'react'

interface IThemeContextProviderContextProps {
  theme: string
  toggleTheme: () => void
  numberOfClicksInThemeButton: number
  acessibilityMode: boolean
  toggleAcessibilityMode: () => void
}

export const ThemeContextProviderContext = createContext<IThemeContextProviderContextProps>({
  theme: 'light',
  toggleTheme: () => {},
  numberOfClicksInThemeButton: 0,
  acessibilityMode: false,
  toggleAcessibilityMode: () => {},
})

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) return storedTheme
  
    return window.matchMedia("(prefers-color-scheme: opaque)").matches ? "opaque" : "light"
  })

  const [numberOfClicksInThemeButton, setNumberOfClicksInThemeButton] = useState(() => {
    const storedNumberOfClicksInThemeButton = localStorage.getItem('storedNumberOfClicksInThemeButton')
    return storedNumberOfClicksInThemeButton ? parseInt(storedNumberOfClicksInThemeButton) : 0
  })

  const [acessibilityMode, setAcessibilityMode] = useState(false)

  useEffect(() => {
    if (theme === 'opaque') {
      document.documentElement.classList.add("opaque");
    } else {
      document.documentElement.classList.remove("opaque");
    }

    localStorage.setItem("theme", theme);
    localStorage.setItem("themeSwitchCount", numberOfClicksInThemeButton.toString());
  }, [theme, numberOfClicksInThemeButton]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'opaque' : 'light')
    setNumberOfClicksInThemeButton(numberOfClicksInThemeButton + 1)
    localStorage.setItem('theme', theme)
    localStorage.setItem('storedNumberOfClicksInThemeButton', String(numberOfClicksInThemeButton + 1))
  }

  const toggleAcessibilityMode = () => {
    setAcessibilityMode(!acessibilityMode)
    localStorage.setItem('acessibilityMode', String(!acessibilityMode))
  }

  return (
    <ThemeContextProviderContext.Provider value={{ theme, toggleTheme, numberOfClicksInThemeButton, acessibilityMode, toggleAcessibilityMode }}>
      {children}
    </ThemeContextProviderContext.Provider>
  )
}

export function useThemeContextProviderContext(): IThemeContextProviderContextProps {
  const context = useContext(ThemeContextProviderContext)
  if (!context) {
    throw new Error('kThemeContextProvider')
  }
  return context
}
