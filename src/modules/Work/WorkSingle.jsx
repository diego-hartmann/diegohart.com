import laptop from './laptop.png';
import phone from './phone.png';

const WorkSingle = props =>{
    return(
        <div className='workSingle'>

                <div className='imagesSide'>

                    <img  className='phone device' src={phone}></img>
                    <img  className='phone print' src={props.mobilePrint}></img>

                    <img className='laptop device' src={laptop}></img>
                    <img className='laptop print' src={props.desktopPrint}></img>

                </div>

                <div className='descriptionSide'>
                    <ul>
                        {
                            props.descriptionJSXArray.map((_desc, _index)=>{
                            return(
                                <li key={_index}>
                                    <i className=" purple far fa-check-circle"></i>
                                    {_desc}
                                </li>
                                )
                            })
                        }
                
                    </ul>
                </div>

            </div>
    )
}

export default WorkSingle;