import Image from 'next/image'
import Link from 'next/link'

export default function Project(props) {
    if (props.index % 2 == 1) {
        return (
            <div className='project-div'>
            <div className='project-image-div drop-shadow project-body potlucky' style={{backgroundImage: `url(${props.image})`}}>
            </div>

            <div className='project-body yellow flex-column drop-shadow'>
                <h2 className='project-title subtitle'>{props.title}</h2>
                <p className='project-desc'>{props.desc}</p>
                <div className='link-bank'>
                    <span className='project-link button red'><Link href={props.demo_url ? props.demo_url : null}>DEMO</Link></span>
                    <span className='project-link button red'><Link href={props.code_url ? props.code_url : null}>CODE</Link></span>
                </div>
            </div>
        </div>
        )
    }
    return (
        <div className='project-div'>
            <div className='project-body yellow flex-column drop-shadow'>
                <h2 className='project-title subtitle'>{props.title}</h2>
                <p className='project-desc'>{props.desc}</p>
                <div className='link-bank'>
                    <span className='project-link button red'><Link href={props.demo_url ? props.demo_url : null}>DEMO</Link></span>
                    <span className='project-link button red'><Link href={props.code_url ? props.code_url : null}>CODE</Link></span>
                </div>
            </div>

            <div className='project-image-div drop-shadow project-body' style={{backgroundImage: `url(${props.image})`}}>
            </div>
        </div>
    )
}