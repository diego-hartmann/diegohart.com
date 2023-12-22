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

    const handleCollision = () => {
      alert('GAME OVER');
      location.reload();
    };

    // Attach the event listener to the obstacle element
    const obstacleElement = obstacleRef.current;

    const playerElement = document.getElementById('player');
    if (playerElement && obstacleElement) {
      const obstacleRect = obstacleElement.getBoundingClientRect();
      const playerRect = playerElement.getBoundingClientRect();

      // Check for collision when the component mounts
      if (isColliding(obstacleRect, playerRect)) {
        handleCollision();
      }
    }
    return () => {
      // apply cleanup
    };
  }, [index]);

  // Function to check for collision between two elements
  const isColliding = (rect1, rect2) => {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  };

  return <div className="obstacle" style={{ animationDelay: `${delay}s` }} ref={obstacleRef} />;
};

export default Obstacle;
