import React from 'react'
import './Scenary.css'
const index = () => {

    const Cloud = ({
        distanceFactor = 2
    }) =>(
        <div className="cloud-wrapper" style={{
            animationDuration: `${20*distanceFactor}s`,
            opacity: `${20/distanceFactor}%`,
        }}>
            <div className="cloud" style={{ transform:`scale(${1/distanceFactor})`  }}></div>
        </div>
    )

    return (
        <div id="Level">
            <div id="background">
                <Cloud distanceFactor={1}/>
                <Cloud distanceFactor={1.5}/>
                <Cloud distanceFactor={2}/>
                <Cloud distanceFactor={2.5}/>
                <Cloud distanceFactor={3}/>
                <Cloud distanceFactor={3.5}/>
                <Cloud distanceFactor={4}/>
                <Cloud distanceFactor={4.5}/>
                <Cloud distanceFactor={5}/>
            </div>
        </div>
    )
}

export default index