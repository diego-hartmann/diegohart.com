import './Header.css';
import UserLinks from './UserLinks.jsx';
import MenuLinks from './MenuLinks.jsx'

const Header = () =>{

    return(
        <div className="sectionWrapper HeaderWrapper">

            <header id='Header' className="container">
                <UserLinks/>
                <MenuLinks/>
            </header>
        </div>

    )

}

export default Header;