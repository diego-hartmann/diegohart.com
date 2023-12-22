import React, { useState, useEffect, useRef } from 'react';

const Obstacle = ({ index }) => {
  const [delay, setDelay] = useState(1);
  const obstacleRef = useRef(null);

  useEffect(() => {
    function getRandomFloat(min, max, decimals) {
      const str = (Math.random() * (max - min) + min).toFixed(decimals);
      return parseFloat(str);
    }

    const _delay = getRandomFloat(index + 2, index + 4, 2);
    setDelay(_delay);

    // Event listener function
    const handleCollision = () => {
      alert('Player hit the obstacle!');
      // apply other logics
    };

    const playerElement = document.getElementById('player');
    if (playerElement) {
      playerElement.addEventListener('collision', handleCollision);
    }
    return () => {
      if (playerElement) {
        playerElement.removeEventListener('collision', handleCollision);
      }
    };
  }, [index]);

  return <div className="obstacle" style={{ animationDelay: `${delay}s` }} ref={obstacleRef} />;
};

export default Obstacle;
