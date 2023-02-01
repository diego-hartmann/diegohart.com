import React from 'react'
import './Obstacles.css'
import Obstacle from './Obstacle'

const index = () => {
    
    return (
        <div id="Obstacles">
            {Array.from({length: 5}).map((_, index) => <Obstacle key={index} index={index+1}/>)}
        </div>
    )
}

export default index