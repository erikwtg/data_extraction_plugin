import { JSX } from 'react'
import { Card } from './Card'
import { Button } from './Button'

import {
  GithubLogo,
  Textbox,
  Code,
  NotionLogo,
  Icon,
} from '@phosphor-icons/react'
import { useThemeContextProviderContext } from '../context/ThemeContext'
import { Breadcumbs } from './Breadcumbs'

type Item = {
  label: string
  href?: string
  icon?: Icon
}

const itemsHabilities: Item[] = [
  { label: 'HTML', },
  { label: 'CSS', },
  { label: 'JavaScript', },
  { label: 'TypeScript', },
  { label: 'React', },
  { label: 'Node.js', },
  { label: 'Next.js', },
  { label: 'Tailwind CSS', },
  { label: 'Git', },
  { label: 'GitHub', },
  { label: 'Docker', },
  { label: 'AWS', },
]

const itemsTool: Item[] = [
  { label: 'Notion', href: '/', icon: NotionLogo, },
  { label: 'Github', href: '/', icon: GithubLogo, },
  { label: 'Cursor', href: '/', icon: Textbox, },
  { label: 'VSCode', href: '/', icon: Code, },
]

const itemsMethod: Item[] = [
  { label: 'Scrum', }
]

const itemsDatabase: Item[] = [
  { label: 'MySQL', }
]

export function Hero(): JSX.Element {
  const { acessibilityMode } = useThemeContextProviderContext()

  return (
    <div className='flex items-center justify-center h-content'>
      <div className='flex flex-col md:flex-row items-center justify-around max-h-min gap-y-20 lg:gap-y-0'>
        <div className='flex flex-col items-center justify-center gap-10'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <img src="src/assets/avatar.png" alt="Imagem de Erik W T Gonçalves" className='w-52 md:w-72 h-52 md:h-72 rounded-full' loading='lazy'/>
            <h1 className='text-2xl font-bold'>Erik W T Gonçalves</h1>
          </div>
          <Button className={`${ acessibilityMode ? 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : '' }`}>Entre em contato</Button>
        </div>

        <div className='lg:max-w-3/5'>
          <Card expansible>
            <div className='flex flex-col items-center justify-center gap-y-14'>
              <div className='flex flex-col items-center justify-center gap-y-6'>
                <h2 className='text-xl font-extrabold'>Sobre mim</h2>
                <p className='font-normal'>
                  Eu sou um desenvolvedor de software crio soluções inovadoras e eficientes. Estou sempre buscando novos desafios e
                  oportunidades para aprimorar minhas habilidades e contribuir para o sucesso de projetos.
                </p>
              </div>

              <div className='flex flex-col items-center justify-center gap-y-10'>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <p className='whitespace-nowrap'>Habilidades:</p>
                  <Breadcumbs items={itemsHabilities} />
                </div>

                <div className='flex flex-col items-center justify-center gap-4'>
                  <p className='whitespace-nowrap'>Ferramentas:</p>
                  <Breadcumbs items={itemsTool} />
                </div>

                <div className='flex flex-col items-center justify-center gap-4'>
                  <p className='whitespace-nowrap'>Metodologia:</p>
                  <Breadcumbs items={itemsMethod} />
                </div>

                <div className='flex flex-col items-center justify-center gap-4'>
                  <p className='whitespace-nowrap'>Banco de dados:</p>
                  <Breadcumbs items={itemsDatabase} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}