import Header from "./Header"
import data from "/data.json"
import { useState } from "react"

export default function Destination() {

    const [currentDestination, setCurrentDestination] = useState(0)

    function handleDestination(e) {
        e.preventDefault()
        setCurrentDestination(Number(e.target.value))
    }
    console.log(currentDestination)

    return(
        <>
            <div className="destinationPage">
                <div className="container">
                    <Header />
                    {/* Moon Start */}
                    <div className="destinationHero">
                        <div className="destinationMainTitle">
                            <h4>01</h4>
                            <h3>PICK YOUR DESTINATION</h3>
                        </div>
                        <div className="destinationDescriptions">
                            <div className="destinationImg">
                                <img src={data.destinations[currentDestination].images} alt="Moon Image" />
                            </div>
                            <div className="destinationDescription">
                                <div className="destinationNavBar">
                                    {
                                        data.destinations.map((destination, index) => {
                                            return (
                                                <button key={index} className={index === currentDestination ? 'active' : ''} onClick={handleDestination} value={index}>{destination.name}</button>
                                            )
                                        })
                                    }
                                </div>
                                <div className="destinationTitle">
                                    <h1>{data.destinations[currentDestination].name}</h1>
                                </div>
                                <div className="destinationInfo">
                                    <p>{data.destinations[currentDestination].description}</p>
                                </div>
                                <div className="roadInfo">
                                    <div className="distance">
                                        <p>AVG. DISTANCE</p>
                                        <h4>{data.destinations[currentDestination].distance}</h4>
                                    </div>
                                    <div className="travelTime">
                                        <p>EST. TRAVEL TIME</p>
                                        <h4>{data.destinations[currentDestination].travel}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Moon End */}
                </div>
            </div>
        </>
    )
}