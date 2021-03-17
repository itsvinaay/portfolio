
export default function ArtSingle(props) {
    return (
        <div style={{backgroundImage: `url(${props.image1})`}} className={`animate-fade-0 art-parent art-item art-${props.size}`}>

            <div style={{backgroundImage: `url(${props.image2})`}} className={`animate-fade-1 art-item delay-${props.delay}`}>

                <div style={{backgroundImage: `url(${props.image3})`}} className={`animate-fade-2 art-item delay-${props.delay}`}></div>
            </div>
        </div>
    )
}