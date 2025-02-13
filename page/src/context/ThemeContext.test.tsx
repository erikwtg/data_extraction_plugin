import '@testing-library/jest-dom'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeContextProvider, useThemeContextProviderContext } from '../context/ThemeContext'

function TestComponent(): React.ReactNode {
  const { theme, toggleTheme } = useThemeContextProviderContext()

  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

describe('ThemeContextProvider', (): void => {
  beforeEach((): void => {
    localStorage.clear()
    vi.spyOn(Storage.prototype, 'setItem')
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null)
  })

  it('Deve alternar entre os temas ao clicar no botão', () => {
    render(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    )

    const thmeText = screen.getByText(/Theme: (light|opaque)/i)
    expect(thmeText).toBeInTheDocument()

    const toggleThemeButton = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(toggleThemeButton);

    const toggleThemeText = screen.getByText((content) => 
      content.includes("Theme: light") || content.includes("Theme: opaque")
    );
    expect(toggleThemeText).toBeInTheDocument();
  })
})