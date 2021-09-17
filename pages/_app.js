import '../styles/globals.css'

// next só permite import global para o css
import './css/integration1.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
