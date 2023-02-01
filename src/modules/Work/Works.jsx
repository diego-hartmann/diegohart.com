
import phonePrint from './mobile_temp.jpg';
import laptopPrint from './laptop_temp.jpg';
import WorkSingle from './WorkSingle.jsx';
import createSingleWork from './CreateSingleWork.mjs';


const works =[
    
    createSingleWork(phonePrint, laptopPrint, 'https://google.com', [
        <p>Mobile app <span className='purple'>for you</span></p>,
        <p>Mobile app for you</p>,
        <p>Mobile app for you</p>
    ] ),



    createSingleWork(phonePrint, laptopPrint, 'https://google.com', [
        <p>Mobile app <span className='purple'>for you</span></p>,
        <p>Mobile app for you</p>,
        <p>Mobile app for you</p>
    ] ),



]

const Works = () =>{
    return(
        <div className='works'>
            {
                works.map((_workSingle, _index)=>{
                    return(
                       <WorkSingle key={_index}
                            mobilePrint={_workSingle.mobilePrint}
                            desktopPrint={_workSingle.desktopPrint}
                            descriptionJSXArray={_workSingle.descriptionJSXArray} 
                            workLink={_workSingle.workLink}   
                        />
                    )

                })
            }

           

        </div>
    )
}

export default Works;