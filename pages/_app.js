
import '../styles/w3.css'
import '../styles/karma.css'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
