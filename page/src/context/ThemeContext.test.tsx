import { describe, it, expect, vi, beforeEach } from "vitest"
import { ThemeContextProvider } from "./ThemeContext"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

const ThemeContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}

describe("ThemeContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the theme context", () => {
    render(<ThemeContextWrapper><div>Test</div></ThemeContextWrapper>)
    expect(screen.getByText("Test")).toBeInTheDocument()
  });

  it("should toggle the theme", () => {
    render(<ThemeContextWrapper><div>Test</div></ThemeContextWrapper>)
    const button = screen.getByRole("button", { name: "Toggle Theme" })
    userEvent.click(button)
    expect(screen.getByText("Test")).toBeInTheDocument()
  });
});
