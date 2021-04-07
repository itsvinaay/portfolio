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
                    <a href={props.demo_url ? props.demo_url : 'https://github.com/ElyssaW'} className='project-link dark button red' target="_blank">DEMO</a>
                    <a href={props.code_url ? props.code_url : 'https://github.com/ElyssaW'} className='project-link dark button red' target="_blank">CODE</a>
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
                    <a href={props.demo_url ? props.demo_url : 'https://github.com/ElyssaW'} className='project-link dark button red' target="_blank">DEMO</a>
                    <a href={props.code_url ? props.code_url : 'https://github.com/ElyssaW'} className='project-link dark button red' target="_blank">CODE</a>
                </div>
            </div>

            <div className='project-image-div drop-shadow project-body' style={{backgroundImage: `url(${props.image})`}}>
            </div>
        </div>
    )
}