import Cube3D from './Cube3D';
import './AboutMe.css';

const AboutMe = () =>{
    return(
        <div className="sectionWrapper">
            <section id="AboutMe" className='container section'>
                {/* <h1>About me</h1> */}
                <div className='about'>
                    <p>
                        <i className="fab fa-codepen"></i>
                        Experience as<span className='orange'>techlead</span>
                    </p>
                    <br></br>
                    <br></br>
                    
                    <p>
                        <i className="fas fa-laptop-house"></i>
                        <span className='orange'>Freelance</span> developer
                    </p>
                    
                    <br></br>
                    <br></br>
                    <p>
                        <i className="fas fa-user-graduate"></i>
                        Game Design <span className='orange'>bachelor</span>
                    </p>
                
                    <br></br>
                    <br></br>
                    <p>
                        <i className="fas fa-chart-line"></i>     
                        <span className='orange'>International</span> work history
                    </p>
                 
                </div>
                <Cube3D className="Cube3D" />
            </section>
        </div>
    )
}

export default AboutMe;
