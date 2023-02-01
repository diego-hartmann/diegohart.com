import actor from './actor-removebg_black.png';
import actor3 from './actor3.jpg';
import './UserInfo.css';

const UserInfo = () =>{
    return(
        <div className="userInfo">
            <div className='actor'>
                <picture>
                    <img className="back"  src={actor3} alt="Diego Hartmann"></img>
                    <img className="front" src={actor} alt="Diego Hartmann B&W"></img>
                </picture>
                <div>
                    <h1>Diego Hartmann</h1>
                    <div className='userTitles'>
                        <span>JavaScript</span> <p>engineer</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserInfo;