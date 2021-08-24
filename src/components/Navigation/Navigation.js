import React, {useState, useEffect} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import CrossIcon from '../../assets/cross.png'
import './Navigation.css';
import Sidebar from '../Sidebar/Sidebar'
import Aos from "aos";
import "aos/dist/aos.css";
const Navigation = props => {
    const [navbar, setNavbar] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)
    const pathname = window.location.pathname;
    const handleItemClick = (name) => {
        setShowSidebar(false);
        setActiveItem(name)
    }
    
    const path = pathname === '/' ? 'home' : pathname.substr(1)
    const [ active, setActiveItem] = useState(path)
    console.log(active, "ACTIVE ITEM")
    useEffect(() => { 
        console.log(window.location)
    })
    const changeNavBackground = () => {
        if(window.scrollY > 50){
            setNavbar(true)

        }else{
            setNavbar(false)
        }
    }

    const handleLogoClick = (e) => {
        setShowSidebar(false);
        console.log(e)
        setActiveItem(e.target.name)
    
    }

    window.addEventListener('scroll', changeNavBackground)
    return (
        <div className={navbar ? 'Navigation active-nav' : 'Navigation'} >
            <Link to='#home' name='home' smooth className='logo' onClick={handleLogoClick}>US</Link>
            <ul>
                <li ><Link name='skills'  smooth to='#skills' onClick={(e) => handleItemClick(e.target.name)} style={active === 'skills' ? { textDecoration : 'underline', color : '#C3073F'} : null || navbar ? {color : '#C3073F'} : null }>Skills</Link></li>
                <li ><Link name='work'  smooth to='#work' onClick={(e) => handleItemClick(e.target.name)} style={active === 'work' ? { textDecoration : 'underline', color : '#C3073F'} : null || navbar ? {color : '#C3073F'} : null}>Work</Link></li>
                <li ><Link name='projects' smooth to='#projects' onClick={(e) => handleItemClick(e.target.name)} style={ active === 'projects' ? { textDecoration : 'underline', color : '#C3073F'} : null || navbar ? {color : '#C3073F'} : null}>Projects</Link></li>
                <li ><Link name='about' smooth to='#about' onClick={(e) => handleItemClick(e.target.name)} style={ active === 'about' ? { textDecoration : 'underline', color : '#C3073F'} : null || navbar ? {color : '#C3073F'} : null}>Contact</Link></li>
            </ul>
            <div className='three-lines' onClick={() =>setShowSidebar(prevState => !prevState)}>
                {!showSidebar ?
                <>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
                </>
                :
                <img className='cross-icon' src={CrossIcon}/>}
            </div>
            {showSidebar ? <div className='backdrop'></div> : null}
            <Sidebar handleItemClick={handleItemClick} showSidebar={showSidebar}/> 
        </div>
    )
}


export default Navigation;