import Header from "./Header"
import { useState } from "react"
import data from "/data.json"

export default function Crew() {
    const [currentCrew, setCurrentCrew] = useState(0)

    function handleCrew(e) {
        e.preventDefault()
        setCurrentCrew(Number(e.target.value))
    }
    console.log(currentCrew)

    console.log(data.crew[currentCrew])

    return(
        <>
            <div className="crewPage">
                <div className="container">
                    <Header />
                    <div className="crewHero">
                                <div className="crewMainTitle">
                                    <h4>02</h4>
                                    <h3>MEET YOUR CREW</h3>
                                </div>
                        <div className="crewDescriptions">
                            <div className="crewDescription">
                                <div className="crewTitle">
                                    <h2>{data.crew[currentCrew].role}</h2>
                                </div>
                                <div className="crewName">
                                    <h2>{data.crew[currentCrew].name}</h2>
                                </div>
                                <div className="crewInfo">
                                    <p>{data.crew[currentCrew].bio}</p>
                                </div>
                                <div className="crewSelectionBar">
                                    {
                                        data.crew.map((crew, index) => {
                                            return (
                                                <button key={index} className={index === currentCrew ? 'active' : ''} onClick={handleCrew} value={index}></button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="crewImg">
                                <img src={data.crew[currentCrew].images} alt="Douglas Hurley Avatar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}