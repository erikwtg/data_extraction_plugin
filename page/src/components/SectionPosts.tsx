import { useState, JSX } from 'react'
import { Button } from './Button'
import { Card } from './Card'
import { useThemeContextProviderContext } from '../context/ThemeContext'

type Post = {
  date: string
  title: string
}

const posts: Post[] = [
  {
    date: '2024-01-01',
    title: 'Reescrevendo o Futuro: Como Estamos Redefinindo a Acessibilidade e Criando um Legado Global',
  },
  {
    date: '2024-01-01',
    title: 'Quando a Inovação Encontra a Inclusão: Como Nossas Soluções Estão Moldando o Mundo de Amanhã',
  },
  {
    date: '2024-01-01',
    title: 'Poder da Mudança: Como Estamos Quebrando as Barreiras Invisíveis da Sociedade com Acessibilidade',
  },
  {
    date: '2024-01-01',
    title: 'A Revolução Invisível: O Impacto Silencioso das Soluções que Estão Transformando Vidas',
  },
  {
    date: '2024-01-01',
    title: 'Além da Inclusão: Como Estamos Liderando uma Nova Era de Acessibilidade Universal',
  },
  {
    date: '2024-01-01',
    title: 'Criando Pontes em um Mundo Dividido: Como Estamos Remodelando a Acessibilidade com Inovação',
  },
  {
    date: '2024-01-01',
    title: 'Acessibilidade Radical: Como Estamos Conectando Pessoas, Transformando Comunidades e Criando um Mundo Sem Fronteiras',
  },
  {
    date: '2024-01-01',
    title: 'Quebrando as Correntes da Exclusão: Como a Nossa Visão Está Redefinindo as Possibilidades para Todos',
  },
]

export function SectionPosts(): JSX.Element {
  const { acessibilityMode } = useThemeContextProviderContext()
  const [visiblePosts, setVisiblePosts] = useState<number>(4)
  const [showAll, setShowAll] = useState<boolean>(false)

  const showAllPosts = (): void => {
    if (showAll) {
      setVisiblePosts(4)
    } else {
      setVisiblePosts(posts.length)
    }
    setShowAll(!showAll)
  }

  return (
    <Card>
      <div className='flex flex-col items-center gap-9'>
        <h2 className='text-3xl font-extrabold'>Últimas postagens</h2>
        <ul className='flex flex-col gap-4'>
          { posts.slice(0, visiblePosts).map((post) => (
            <li key={post.title}>
              <a href="#">{`${post.date} - ${post.title}`}</a>
            </li>
          ))}
        </ul>
        <Button className={`${ acessibilityMode ? 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : '' }`} onClick={showAllPosts}>
          <p>{ showAll ? 'Ver menos' : 'Ver todas as postagens' }</p>
        </Button>
      </div>
    </Card>
  )
}