import './UserLinks.css';

const UserLinks = () =>{

    const phoneNumber = '351915706378'
	const desiredMessage = 'Hi Diego! I saw your webpage and would like to get in touch.'
    const whatsappText = desiredMessage.split(' ').join('%20');
    
    const createUserLink = ( className, link ) => ( { className, link } );
    

    const linksArray =[
        //github
        createUserLink('fab fa-github', 'https://github.com/diego-hartmann/'),
        //npm
        createUserLink('fab fa-npm', 'https://www.npmjs.com/~diego-hartmann'),
        //linkedin
        createUserLink('fab fa-linkedin-in', 'https://www.linkedin.com/in/diegohart/'),
        //gmail
        createUserLink('fab fa-youtube', 'https://www.youtube.com/@diego-hartmann'),
        createUserLink('far fa-envelope', 'mailto:diego11hartmann@gmail.com'),
        //cellphone
        createUserLink('fas fa-phone-alt', `tel:+${phoneNumber}`),
        //whatsapp
        createUserLink('fab fa-whatsapp', `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappText}`),
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
