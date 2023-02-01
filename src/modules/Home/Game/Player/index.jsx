import React, {useEffect, useState} from 'react'
import './Player.css';

const Player = () => {
    // const [x, setX] = useState(3);
    // const [x, setX] = useState(154);
    const [jumped, setJumped] = useState(false);
    const [down, setDown] = useState(false);
    // const [isMoving, setIsMoving] = useState(false)
    const [turnRight, setTurnRight] = useState(true) 
    const [willJumpHeight, set_willJumpHeight] = useState(false);
    const [showPlayer, set_showPlayer] = useState(false)
    let jumpHolder = 0
    // const speed = 10;

    function hidePlayer(){ set_showPlayer(false) }
    function spawnPlayer(){
        // setX(3)
        setTurnRight(true)
        set_showPlayer(true)
    }

    const inputs={
        w(){
            set_willJumpHeight(false) 
            setJumped( true )
            setTimeout(()=>{
                setJumped( false )
            },500)
        },
        // d(){
        //     setX( x+speed );
        //     setIsMoving(true)
        //     setTurnRight(true)
        // },
        // a(){
        //     setX( x-speed );
        //     setIsMoving(true)
        //     setTurnRight(false)
        // },
        s(){
            jumpHolder ++
            setDown(true)
        }
    }
    const inputsUp={
        // d(){
        //     // setX( x+speed );
        //     setIsMoving(false)
        // },
        // a(){
        //     // setX( x-speed );
        //     setIsMoving(false)
        // },
        s(){
            setDown(false)
            if(jumpHolder > 1.5){
                set_willJumpHeight(true) 
                setJumped( true )
                setTimeout(()=>{
                    setJumped( false )
                },500)
            }else{
                set_willJumpHeight(false) 
            }
            jumpHolder = 0;
        }
    }
    useEffect(()=>{
        // const reactLogo = document.querySelector(`.fa-react`)
        // reactLogo.addEventListener(`click`, ()=>{
        //     hidePlayer();
        //     spawnPlayer();
        // })
        hidePlayer();
        spawnPlayer();
    },[])

    useEffect(()=>{
        function checkInput(event) {
            const key = event.key;
            inputs[key] && inputs[key](); 
        }
        function checkInputUp(event) {
            const key = event.key;
            inputsUp[key] && inputsUp[key](); 
        }

        window.addEventListener('keydown', checkInput);
        window.addEventListener('keyup', checkInputUp);

        return ()=> {
            window.removeEventListener('keydown', checkInput);
            window.removeEventListener('keyup', checkInputUp);

        }
    },[])


    const getAnimationName = () => (down && "down") || (jumped  && "jump") ||  "walk"
    // const getAnimationName = () => (down && "down") || (jumped  && "jump") || (isMoving && "walk") || "idle"
    // const getPlayerMovement = () => ( {left: `${x}px`} )
    const getPlayerFlip = () => ( { transform: `scaleX(${turnRight ? 1 : -1})` } )
    const getJumpHeight = () => willJumpHeight ? `200px` : `100px`
    
  return (
    showPlayer && <div id="Appear">
        {/* <div id="PlayerMovement" style={{...getPlayerMovement(), '--jumpHeight': getJumpHeight()}} className={getAnimationName()}> */}
        <div id="PlayerMovement" style={{'--jumpHeight': getJumpHeight()}} className={getAnimationName()}>
            <div id="PlayerTransformX" style={getPlayerFlip()}>
                {/* <div id="Player" onClick={hidePlayer} > */}
                <div id="Player" >
                    <div className="eye" style={{right:`1px`}}></div>
                    <div className="eye" style={{bottom: '20px', right: `12px`}}></div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Player