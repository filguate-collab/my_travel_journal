import marker from "../assets/marker.png"

export function Entry(props) {
    
    return (
        <section>
            <div className="image-container">
                <img className="main-image" 
                src={props.entry.img.src} alt={props.entry.img.alt}></img>
            </div>
            <div className="text-container">
                <div className="location-container">
                    <img src={marker} className="marker"></img>
                    <span>{props.entry.country}</span>
                    <a href={props.entry.googleMapsLink} target="_blank">View on Google Maps</a>
                </div>
                <h2>{props.entry.title}</h2>
                <h4>{props.entry.dates}</h4>
                <p>{props.entry.text}</p>
            </div>
        </section>
    )
}