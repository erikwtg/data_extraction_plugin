import { JSX } from 'react'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'
import { SectionPosts } from '../components/SectionPosts'

function App(): JSX.Element {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Layout>
        <main className=' text-white dark:text-neutral-color-low-main bg-white dark:bg-neutral-color-low-dark flex flex-col gap-y-20 py-20'>
          <Hero />
          <SectionPosts />
        </main>
      </Layout>
      <Footer />
    </>
  )
}

export default App
