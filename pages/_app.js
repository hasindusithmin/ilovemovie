
import '../styles/w3.css'
import '../styles/karma.css'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <div className="w3-main w3-content w3-padding" style={{maxWidth:'1200px',marginTop:'100px'}}>
        <Component {...pageProps} />
      </div>

    </>
  )
}

export default MyApp
