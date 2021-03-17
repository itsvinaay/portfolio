import Image from 'next/image'

export default function LogoBig(props) {
    return (
        <span className='logo-big'>
        <Image
            src={props.src}
            height={95} 
            width={95} 
            alt={props.alt}
        />
        <div>{props.alt}</div>
        </span>
    )
}