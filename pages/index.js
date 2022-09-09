import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Contact'
import HomePage from '../components/HomePage'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Services from '../components/Services'

import { pages, usePageContext } from '../store/PageTypeContext'


export default function Home() {

  const pageCtx = usePageContext()

  return (
    <div>
      <Head>
        <title>Medialics - Digital profilering og annonsering</title>
        <meta
          name="description"
          content="Jeg er en programmerer med makgrunn i digital markedsføring, og jeg tilbyr nettside utvikling, vedlikehold samt google annonsering" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {pageCtx.currentPage === pages.projectsPage ? <Projects />
          : pageCtx.currentPage === pages.servicesPage ? <Services />
            : pageCtx.currentPage === pages.contactPage ? <Contact />
              : <HomePage />
        }
      </Layout>

    </div>
  )
}
