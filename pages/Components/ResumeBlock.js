export default function Resume(props) {

    let items = props.items.map(item => {
        return <li className='resume-list-item'>
                    {item}
                </li>
    })
    return (
        <div className='resume-list container'>
            <div className='resume-list-title'>{props.title}</div>
            {props.titleDate ? 
                <div className='list-subtitle flex-row'>
                <span className='subtitle-left'>{props.subtitle}</span>
                <span className='subtitle-right'>{props.titleDate}</span> 
                </div>
            : null }
            <ul className='resume-list-items' >
                {items}
            </ul>
        </div>
    )
}