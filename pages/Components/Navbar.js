import Logo from './Logo'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {

    const [dropdown, setDropdown] = useState(false)

    if (dropdown) {
        return (
        < ul className='navbar navbar-vertical black flex-column' >
            <span onClick={()=>{setDropdown(!dropdown)}} className='navlink-head'>
                ELYSSA
                <div>v</div>
                </span>
                <span className='navlink'>
                < Link href='#code' scroll={false}>
                CODE
                </ Link >
                </span>
                <span className='navlink'>
                < Link href='#artwork' scroll={false} className='navlink'>
                ARTWORK
                </ Link >
                </span>
                <span className='navlink'>
                < Link href='#resume' scroll={false} className='navlink'>
                ABOUT
                </ Link >
                </span>
                <span className='navlink'>
                < Link href='#contact' scroll={false} className='navlink'>
                GITHUB
                </ Link >
                </span>
                <span className='navlink'>
                < Link href='#contact' scroll={false} className='navlink'>
                LINKEDIN
                </ Link >
                </span>
                <span className='navlink'>
                < Link href='#contact' scroll={false} className='navlink'>
                CONTACT
                </ Link >
            </span>
        </ul>
        )
    } 

    return (
        <>
        < ul className='navbar black flex-row nav-horizontal' >
            <span className='link-bank flex-row'>
                < Link href='#bio' scroll={false}>
                    <span className='icon'>E</span>
                </ Link >
                < Link href='#code' scroll={false} className='navlink'>
                CODE
                </ Link >
                < Link href='#artwork' scroll={false} className='navlink'>
                ARTWORK
                </ Link >
                < Link href='#resume' scroll={false} className='navlink'>
                RESUME
                </ Link >
                < Link href='#contact' scroll={false} className='navlink'>
                CONTACT
                </ Link >
            </span>

            <li className='logo-bank'>
                < Logo 
                    src='/images/linkedin.png'
                    alt='Linkedin link'
                />
                < Logo 
                    src='/images/github.png'
                    alt='Github link'
                />
            </li>
        </ul>


< ul className='navbar navbar-vertical black flex-column' >
            <span onClick={()=>{setDropdown(!dropdown)}} className='navlink-head'>
                ELYSSA
                <div>v</div>
                </span>
                <span className='navlink hidden'>
                < Link href='#code' scroll={false}>
                CODE
                </ Link >
                </span>
                <span className='navlink hidden'>
                < Link href='#artwork' scroll={false} className='navlink'>
                ARTWORK
                </ Link >
                </span>
                <span className='navlink hidden'>
                < Link href='#resume' scroll={false} className='navlink'>
                ABOUT
                </ Link >
                </span>
                <span className='navlink hidden'>
                < Link href='#contact' scroll={false} className='navlink'>
                GITHUB
                </ Link >
                </span>
                <span className='navlink hidden'>
                < Link href='#contact' scroll={false} className='navlink'>
                LINKEDIN
                </ Link >
                </span>
                <span className='navlink hidden'>
                < Link href='#contact' scroll={false} className='navlink'>
                CONTACT
                </ Link >
            </span>
        </ul>
        </>
    )
}