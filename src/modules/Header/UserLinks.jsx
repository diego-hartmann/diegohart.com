import './UserLinks.css';

const UserLinks = () =>{

    const phoneNumber = '5548991855550'
	const desiredMessage = 'Hi Diego! I saw your webpage and would like to get in touch.'
    const whatsappText = desiredMessage.split(' ').join('%20');
    
    const createUserLink = ( className, link ) => ( { className, link } );
    

    const linksArray =[
        //github
        createUserLink('fab fa-github', 'https://github.com/diegohartmann/'),
        //linkedin
        createUserLink('fab fa-linkedin-in', 'https://www.linkedin.com/in/diegohart/'),
        //resume
        // createUserLink('far fa-address-card', 'https://bit.ly/generate-resume'),
        //gmail
        createUserLink('far fa-envelope', 'mailto:diego11hartmann@gmail.com'),
        //cellphone
        createUserLink('fas fa-phone-alt', `tel:+${phoneNumber}`),
        //whatsapp
        createUserLink('fab fa-whatsapp', `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappText}`),
        //instagram
        // createUserLink('fab fa-instagram', 'https://www.instagram.com/diegohartmann11/'),
        //facebook
        // createUserLink('fab fa-facebook', 'https://www.facebook.com/diegohartmann11/'),
    ]


    return(
        <nav className='userLinks'>
            <ul>
                {
                    linksArray.map((_link, _index)=>(
						<li key={_index}>
							<a target='_blank' rel='noopener noreferrer' href={_link.link}>
								<i className={_link.className}></i>
							</a>
						</li>
					))                  
                }
                <i className="externalLink fas fa-reply"></i>
            </ul>
        </nav>
    )
}

export default UserLinks;