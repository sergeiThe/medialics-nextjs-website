import PageTypeContextProvider from '../store/PageTypeContext'
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <PageTypeContextProvider>
      <Component {...pageProps} />
    </PageTypeContextProvider>
  )
}

export default MyApp
