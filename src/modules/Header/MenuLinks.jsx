import './MenuLinks.css';

const MenuLinks = () =>{

    function menuLinkFactory(_name,_id,_class, _isCallToAction=false){
        return{
            id: _id,
            className: _class,
            name: _name,
            isCallToAction: _isCallToAction,
        }
    }
    const menuLinks = [
        // menuLinkFactory('Become full-stack', 'https://www.hartt.io/', 'fas fa-dollar-sign', true),
        menuLinkFactory('Download resume', 'https://bit.ly/generate-resume', 'fas fa-dollar-sign', true),
        // menuLinkFactory('I want to be a valuable dev', 'https://hotm.art/JavaScriptFullstackProfissional', 'fas fa-dollar-sign', true),
        // menuLinkFactory('Want to be a dev?', 'https://hotm.art/JavaScriptFullstackProfissional', 'fas fa-dollar-sign', true),
        // menuLinkFactory('About', '#AboutMe', 'fas fa-user'),
        // menuLinkFactory('Work', '#Work', 'fas fa-mobile-alt'),
        // menuLinkFactory('Roles', '#Roles', 'fas fa-code-branch'),
    ]

    return(
        <nav className='MenuLinks'>
            <ul>
                {
                    menuLinks.map((_link, _index)=>{
                        const cta = _link.isCallToAction;
                        return(
                            <li key={_index} className={cta ? `cta` : `inner`} >
                                <a href={_link.id} target={cta && `_blank`} rel={cta  && "noopener noreferrer"}>
                                    <i className={_link.className}></i>
                                    <span>{_link.name}</span>
                                </a>
                            </li>      
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default MenuLinks;