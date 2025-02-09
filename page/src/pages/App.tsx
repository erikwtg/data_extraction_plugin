import { JSX } from 'react'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'
import { SectionProjects } from '../components/SectionProjects'
import { SectionPosts } from '../components/SectionPosts'

function App(): JSX.Element {
  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <main className='flex flex-col px-4 md:px-12 2xl:px-54 gap-y-20 py-20'>
        <Hero />
        <SectionProjects />
        <SectionPosts />
      </main>
      <Footer />
    </Layout>
  )
}

export default App
