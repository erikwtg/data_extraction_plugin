import React from 'react'

interface ILayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className='flex flex-col bg-white dark:bg-neutral-color-low-dark/90 dark:text-white'>
      { children }
    </div>
  )
}