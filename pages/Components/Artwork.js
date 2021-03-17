import ArtSingle from './ArtSingle'

export default function Artwork(props) {
    return (
        <div className='artwork-div container' id='artwork'>
            <h1 className='section-title artwork-title'>Artwork</h1>
            <div className='artwork-grid flex-row'>

                <div className='flex-column art-column'>
                    < ArtSingle 
                        image1='/images/HylicsPoster.jpg'
                        image2='/images/Garages.jpg'
                        image3='/images/PlayBlall.jpg'
                        size='extra-tall'
                        delay='1'
                    />

                    < ArtSingle 
                        image1='/images/pearl.jpg'
                        image2='/images/porg.jpg'
                        image3='/images/charmander.jpg'
                        size='small'
                        delay='2'
                    />
                </div>

                <div className='flex-column art-column'>
                    < ArtSingle 
                        image1='/images/WildThingsPosterShaded.jpg'
                        image2='/images/Luna.jpg'
                        image3='/images/FrogDad.jpg'
                        size='tall'
                        delay=''
                    />

                    < ArtSingle 
                        image1='/images/eye.jpg'
                        image2='/images/ACFull.jpg'
                        image3='/images/soot.png'
                        size='medium'
                        delay='1'
                    />
                </div>


                <div className='flex-column art-column'>
                    < ArtSingle 
                        image1='/images/magikarp.jpg'
                        image2='/images/shepherd.jpg'
                        image3='/images/wolf.jpg'
                        size='small'
                        delay='2'
                    />


                    < ArtSingle 
                        image1='/images/CCPosterSmall.png'
                        image2='/images/Crowe.png'
                        image3='/images/SlimeRancher.png'
                        size='extra-tall'
                        delay=''
                    />
                </div>

                <div className='flex-column art-column'>
                    < ArtSingle 
                        image1='/images/KaniCartoon.jpg'
                        image2='/images/SFLovers2.jpg'
                        image3='/images/KlaasjePosterSmall.jpg'
                        size='extra-tall'
                        delay=''
                    />

                    < ArtSingle 
                        image1='/images/bird.png'
                        image2='/images/burger.jpg'
                        image3='/images/pizza.jpg'
                        size='small'
                        delay='2'
                    />
                </div>
            </div>
        </div>
    )
}