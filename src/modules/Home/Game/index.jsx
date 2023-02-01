import React from 'react'
import Player from './Player'
import Scenary from './Scenary'
import Obstacles from './Obstacles/'

const Game = () => {
  return (
    <>
        <Scenary />
        <Obstacles/>
        <Player /> 
    </>
  )
}

export default Game