import Image from 'next/image'

export default function Bio() {
    return (
        <div className='bio-div container' id='bio'>
            <div className='title bio-title flex'>
                <div className='bio-avatar image'>
                    <div className='bio-background-1 yellow'></div>
                </div>
                <div className='bio-body'>
                    <div>Elyssa</div>
                    <div>......Winch</div>
                    <div className='bio-text'>I’m a developer, designer, and software engineer with a keen eye for aesthetics and a knack for solving complex problems.</div>
                </div>
            </div>
        </div>
    )
}