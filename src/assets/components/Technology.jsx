import { useState } from 'react'
import Header from './Header'
import data from '/data.json'

export default function Technology() {

    const [currentTech, setCurrentTech] = useState(0)

    function handleTech(e) {
        setCurrentTech(Number(e.target.value))
    }

    console.log(data.technology[currentTech])
    console.log(currentTech)

    return (
        <>
            <div className="technologyPage">
                <Header />
                <div className="technologyHero">
                    <div className="technologyMainTitle">
                        <h4>03</h4>
                        <h3>SPACE LAUNCH 101</h3>
                    </div>
                    <div className="technologyDescriptions">
                        <div className="technologyDescription">
                            <div className="technologyNavBar">
                                {
                                    data.technology.map((tech, index) => {
                                        return (
                                            <button key={index} className={index === currentTech ? 'active' : ''} onClick={handleTech} value={index}>{index + 1}</button>
                                        )
                                    })
                                }
                            </div>
                            <div className="technologyInfo">
                                <div className="technologyTitle">
                                    <h4>THE TERMINOLOGY…</h4>
                                </div>
                                <div className="technologyName">
                                    <h4>{data.technology[currentTech].name}</h4>
                                </div>
                                <div className="technologyInfo">
                                    <p>{data.technology[currentTech].description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="technologyImg">
                            <img src={data.technology[currentTech].images} alt="Launch Vehicle Image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}