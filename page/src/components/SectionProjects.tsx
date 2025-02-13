import { useState } from 'react'
import { Card } from './Card'
import { Button } from './Button'
import { useThemeContextProviderContext } from '../context/ThemeContext'

type Project = {
  title: string
  description: string
  image: string
  image_description: string
}

const projects: Project[] = [
  {
    title: 'Acessibilidade 360º',
    description: 'Este projeto visa criar plataformas digitais inclusivas, quebrando barreiras tecnológicas e permitindo que todos, independentemente de suas habilidades, acessem e interajam com o conteúdo online de forma plena e intuitiva.',
    image: '/src/assets/avatar.png',
    image_description: 'Imagem do projeto Acessibilidade 360º',
  },
  {
    title: 'Transformando Ambientes Digitais',
    description: 'Nosso projeto foca em desenvolver ferramentas que conectam pessoas com deficiência a recursos essenciais, utilizando tecnologia de ponta para garantir uma experiência inclusiva e sem restrições, em qualquer lugar do mundo.',
    image: '/src/assets/avatar.png',
    image_description: 'Imagem do projeto transformando ambientes digitais',
  },
  {
    title: 'Tecnologia para Todos',
    description: 'Através de soluções inovadoras, buscamos criar ambientes de trabalho, educação e convivência acessíveis, transformando a maneira como as pessoas com deficiência interagem com a sociedade e aproveitam as oportunidades ao seu redor.',
    image: '/src/assets/avatar.png',
    image_description: 'Imagem do projeto tecnologia para todos',
  },
  {
    title: 'Quebrando Barreiras Digitais',
    description: 'Este projeto está moldando o futuro da acessibilidade digital, utilizando tecnologias emergentes para garantir que todos, independentemente das limitações físicas ou cognitivas, possam participar ativamente do mundo digital e social.',
    image: '/src/assets/avatar.png',
    image_description: 'Imagem do projeto quebrando barreiras digitais',
  },
  {
    title: 'Conectando o Mundo Acessível',
    description: 'Em um mundo repleto de desafios, estamos desenvolvendo soluções acessíveis que vão além das expectativas, criando experiências significativas e impactantes para pessoas de todas as origens, condições e capacidades.',
    image: '/src/assets/avatar.png',
    image_description: 'Imagem do projeto conectando o mundo acessível',
  },
]

export function SectionProjects() {
  const [visibleProjects, setVisibleProjects] = useState<number>(4)
  const [showAll, setShowAll] = useState<boolean>(false)
  const { acessibilityMode } = useThemeContextProviderContext()

  const showAllProjects = (): void => {
    if (showAll) {
      setVisibleProjects(4)
    } else {
      setVisibleProjects(projects.length)
    }
    setShowAll(!showAll)
  }

  return (
    <div className='flex flex-col items-center justify-center gap-7'>
      <h2 className='text-4xl font-extrabold'>Projetos</h2>
      <div className={`grid grid-flow-row auto-cols-fr gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
        { projects.slice(0, visibleProjects).map((project) => (
          <Card className='transition-opacity duration-500 ease-in-out opacity-100' key={project.title}>
            <div className='flex flex-col max-w-72 gap-9'>
              <div className='min-h-30 rounded-md overflow-hidden'>
                <img className='object-cover w-full max-h-40' src={project.image} alt={project.image_description} />
              </div>
              <div className='flex flex-col gap-8'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <Button>
                <p>Ver mais</p>
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <Button className={`${ acessibilityMode ? 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : '' } px-5`} onClick={showAllProjects}>
        <p>{ showAll ? 'Ver menos' : 'Ver todos os projetos' }</p>
      </Button>
    </div>
  )
}