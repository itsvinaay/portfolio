export default function Resume(props) {

    let items = props.items ? props.items.map((item, index) => {
        return <li className='resume-list-item' key={`resume-${index}`}>
                    {item}
                </li>
    }) : null
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