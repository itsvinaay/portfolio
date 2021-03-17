
import Project from './Components/Project'
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
