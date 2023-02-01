import './Work.css';

import Works from './Works.jsx';

const Work = () =>{
    return(
        <div className="sectionWrapper">
            <section id="Work" className='container section'>
                <h1>My work</h1>
                <Works />
            </section>
        </div>
    )
}

export default Work;