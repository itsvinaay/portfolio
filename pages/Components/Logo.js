import Image from 'next/image'

export default function Logo(props) {
    return (
        <span className='logo'>
        <Image
            src={props.src}
            height={40} 
            width={40} 
            alt={props.alt}
        />
        </span>
    )
}