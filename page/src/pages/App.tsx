import { JSX } from 'react'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

function App(): JSX.Element {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Layout>
        <main>
          <h1 className='dark:text-neutral-color-low-main min-h-screen'>Data Extraction Plugin</h1>
        </main>
      </Layout>
      <Footer />
    </>
  )
}

export default App
