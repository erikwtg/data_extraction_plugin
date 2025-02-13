import React, { JSX } from 'react'
import { LinkBreak } from '@phosphor-icons/react'

type Item = {
  label: string
  href?: string
  icon?: React.ComponentType<{ size?: number }>
}

interface IBreadcumbsProps {
  items: Item[]
}

export function Breadcumbs({ items }: IBreadcumbsProps): JSX.Element {
  return (
    <div className='flex flex-wrap justify-center items-center gap-2'>
      { items.map((item, index) => (
        <div className='flex items-center rounded-sm border transition-colors border-brand-color-secundary-light/90 dark:border-brand-color-secundary-main/70 hover:border-brand-color-secundary-dark dark:hover:bg-brand-color-secundary-lightest overflow-hidden' key={index}>
          { item.href ? (
            <a className='text-xxxs px-1 transition-colors bg-brand-color-secundary-light/90 dark:bg-brand-color-secundary-main/70 hover:bg-brand-color-secundary-dark dark:hover:bg-brand-color-secundary-lightest' href={item.href} aria-label={`Link sobre ${item.label}`}>
              {item.label}
            </a>
          ) : (
            <span className='text-xxxs px-1 transition-colors bg-brand-color-secundary-light/90 dark:bg-brand-color-secundary-main/70 hover:bg-brand-color-secundary-dark dark:hover:bg-brand-color-secundary-lightest cursor-default'>
              {item.label}
            </span>
          )}

          { index !== items.length && (
            <span className='text-brand-color-secundary-lightest dark:text-brand-color-secundary-dark px-1 cursor-default'>
              {item.icon ? <item.icon /> : <LinkBreak />}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}