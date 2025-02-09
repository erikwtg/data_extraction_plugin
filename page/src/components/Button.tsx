import { JSX } from 'react'

interface IButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Button({ children, onClick, className = '' }: IButtonProps): JSX.Element {
  return (
    <button className={`bg-brand-color-secundary-light/90 transition-colors hover:bg-brand-color-secundary-dark dark:text-white p-2 rounded-md cursor-pointer ${className}`} onClick={onClick}>{children}</button>
  )
}