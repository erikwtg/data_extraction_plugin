import React from 'react'

interface ILayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className='flex flex-col px-4 md:px-12 2xl:px-54 bg-white text-neutral-color-low-dark dark:bg-neutral-color-low-dark text-white'>
      { children }
    </div>
  )
}