import { Header } from "./components/Header"
import { Entry } from "./components/Entry"
import array from "./data"



export default function App(){
 
    const places = array.map( entry => {
        return (<Entry 
        key={entry.id}
        entry={entry}
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