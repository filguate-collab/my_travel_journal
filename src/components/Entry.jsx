export function Entry({img,title, country, googleMapsLink, dates,text}) {

    return (
        <section>
            <div className="image-container">
                <img className="main-image" 
                src={img.src} alt={img.alt}></img>
            </div>
            <div className="text-container">
                <div className="location-container">
                    <img src="./src/assets/marker.png" className="marker"></img>
                    <span>{country}</span>
                    <a href={googleMapsLink} target="_blank">View on Google Maps</a>
                </div>
                <h2>{title}</h2>
                <h4>{dates}</h4>
                <p>{text}</p>
            </div>
        </section>
    )
}