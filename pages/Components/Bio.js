import Image from 'next/image'

export default function Bio() {
    return (
        <div className='bio-div container' id='bio'>
            <div className='title bio-title flex'>
                <div className='bio-avatar image'>
                    <div className='bio-background-1 yellow'>
                        
                    </div>
                </div>
                <div className='bio-body'>
                    <div className='title-body'>
                        <div>
                            <span className='title-letter letter-1'>V</span>
                            <span className='title-letter letter-2'>I</span>
                            <span className='title-letter letter-3'>N</span>
                            <span className='title-letter letter-4'>A</span>
                            <span className='title-letter letter-5'>Y</span>
                            {/* <span className='title-letter letter-6'>a</span> */}
                        </div>
                        <div>
                            <span className='title-letter letter-1'>.</span>
                            <span className='title-letter letter-2'>.</span>
                            <span className='title-letter letter-3'>.</span>
                            <span className='title-letter letter-4'>.</span>
                            <span className='title-letter letter-5'>.</span>
                            <span className='title-letter letter-6'>.</span>
                            <span className='title-letter letter-7'>S</span>
                            <span className='title-letter letter-8'>I</span>
                            <span className='title-letter letter-9'>N</span>
                            <span className='title-letter letter-10'>G</span>
                            <span className='title-letter letter-11'>H</span>
                        </div>
                    </div>
                        
                    <div className='bio-text'>I’m a developer, designer, and software engineer with a keen eye for aesthetics and a knack for solving complex problems.</div>
                </div>
            </div>
            
        </div>
    )
}