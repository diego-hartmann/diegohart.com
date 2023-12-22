import './UserSkills.css';

import useMedia from 'use-media';

const UserSkills = () =>{

    const isWide = useMedia({minWidth: 800});


    const skillsArray = [
        <i className="skillItem Y fab fa-js-square"></i>        ,
                    
        <i className="skillItem Z fab fa-react" style={{...(isWide && {cursor: 'pointer'})}}></i> ,
        
        <i className="skillItem Y fab fa-node"></i>  ,

        <i className="skillItem X fab fa-css3"></i>             ,
        
        <span className='skillItem X'>TypeScript</span>                     ,

        <i className="skillItem X fab fa-unity"></i> ,

        <i className="skillItem Y fab fa-git-alt"></i> ,
    
    ]


    return(
        <nav className='userSkills'>
            <ul>

                {
                    skillsArray.map((_skill, _index)=>{
                        return(
                            <li style={{"--delay": .5 + (_index/10)}} key={_index} >
                                {_skill}
                            </li>
                        )
                    })
                }


            </ul>            
        </nav>
    )
}


export default UserSkills;
