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
        <div className='flex items-center rounded-sm border transition-colors border-brand-color-secundary-light/90 hover:border-brand-color-secundary-dark overflow-hidden' key={index}>
          { item.href ? (
            <a className='text-xxxs dark:text-white px-1 transition-colors bg-brand-color-secundary-light/90 hover:bg-brand-color-secundary-dart' href={item.href} aria-label={`Link sobre ${item.label}`}>
              {item.label}
            </a>
          ) : (
            <span className='text-xxxs dark:text-white px-1 transition-colors bg-brand-color-secundary-light/90 hover:bg-brand-color-secundary-dark cursor-default'>
              {item.label}
            </span>
          )}

          { index !== items.length && (
            <span className='text-brand-color-secundary-lightest px-1 cursor-default'>
              {item.icon ? <item.icon /> : <LinkBreak />}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}