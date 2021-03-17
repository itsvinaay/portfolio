import Image from 'next/image'
import Project from './Project'

export default function Code(props) {

    let projects = [
        < Project
          title='Sun Voyage'
          demo_url='https://github.com/patricia-pan/sun-voyage-client'
          code_url='https://github.com/patricia-pan/sun-voyage-client'
          image_url='/images/sunvoyage.png'
          desc="An exploration of planetary objects in the Solar System (Including Pluto!), using the MERN tech stack and a decoupled app structure."
          index='0'
          image='/images/sunvoyage.png'
        />,
        < Project
          title='Potlucky'
          demo_url='https://potlucky-app.herokuapp.com/'
          code_url='https://github.com/ElyssaW/potlucky'
          image_url='/images/potlucky.png'
          desc="Feel like cooking, but can't eat it all yourself? Just looking for a good culinary samaritian in your area? Potlucky connects your community through food, using the PEN stack and the Mapbox API."
          index='1'
          image='/images/potlucky.png'
          special='potlucky'
        />,
        < Project
          title='Spell Checkers'
          demo_url='https://elyssaw.github.io/spell-checkers/'
          code_url='https://github.com/ElyssaW/spell-checkers'
          image_url='/images/spellcheckers.png'
          desc="A typing game/dungeon crawler crossover, purely made with Javascript and Canvas. Fix typos! Type fast! Escape the editing process!"
          index='2'
          image='/images/spellcheckers.png'
        />
    ]

    return (
        <div className='container'>
        <h1 className='section-title' id='code'>Code</h1>
        {projects}
      </div>
    )
}