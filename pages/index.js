import Head from 'next/head'
import Navbar from './Components/Navbar'
import Bio from './Components/Bio'
import Artwork from './Components/Artwork'
import Contact from './Components/Contact'
import CallToAction from './Components/CallToAction'
import Resume from './Components/Resume'
import Code from './Components/Code'

export default function Home() {
  return (
    <div className='app-main'>
      <Head>
        <title>Vinay Singh</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />      
      </Head>

      < Navbar /> 

      < Bio />

      < Code />

      < CallToAction />

      < Artwork />

      < Resume />
      
      < Contact /> 
    </div>
  )
}
