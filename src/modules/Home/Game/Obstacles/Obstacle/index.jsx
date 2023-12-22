import React, {useState, useEffect} from 'react'

const Obstacle = ({index}) => {
    const [delay, setDelay] = useState(1)
    useEffect(()=>{
        function getRandomFloat(min, max, decimals) {
            const str = (Math.random() * (max - min) + min).toFixed(decimals);
            return parseFloat(str);
        }
        const _delay = getRandomFloat(index+2, index+4, 2);
        setDelay(_delay)
    },[])

    return <div className="obstacle" style={{animationDelay:`${delay}s`}}/>
}
export default Obstacle
