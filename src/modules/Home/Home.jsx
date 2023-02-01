import React, {useState, useEffect} from 'react'
import './Home.css';
import UserInfo from './UserInfo.jsx'
import UserSkills from './UserSkills.jsx'

import Game from './Game';

import  useMedia from 'use-media'

const Home = () =>{

    const isWide = useMedia({minWidth: 800});
    
    const [playerPlayed, set_playerPlayed] = useState(false)

    
    useEffect(()=>{
        document.querySelector(`.fa-react`)?.addEventListener(`click`, ()=>{
          set_playerPlayed(!playerPlayed);
        })
    },[playerPlayed])

    return(
        <div className='sectionWrapper'>
            <main id='Home' className='container'>

                <UserInfo/>
                {/* <i className="pullArrow fas fa-angle-double-left"></i> */}
                {/* <i className="pullArrowRight fas fa-angle-double-right"></i> */}
                <UserSkills/>
                
                {isWide && playerPlayed && <Game/> }

            </main>
        </div>
    )

}

export default Home;