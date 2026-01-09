import { Header } from "./components/Header"
import { Entry } from "./components/Entry"
import array from "./data"



export default function App(){
 
    const places = array.map( place => {
        return (<Entry 
        img={place.img}
        title={place.title}
        country={place.country}
        googleMapsLink={place.googleMapsLink}
        dates={place.dates}
        text={place.text}
/>
)
})
    return (
        <>
            <Header />
            {places}
            
        </>
    )
}