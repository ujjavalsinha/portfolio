import React, {useEffect} from 'react';
import './Skills.css'
import ReactIcon from '../../assets/react.svg';
import DjangoIcon from '../../assets/django.svg'
import JavascriptIcon from '../../assets/javascript.svg'
import HtmlIcon from '../../assets/html.svg'
import CssIcon from '../../assets/css3.svg'
import GitIcon from '../../assets/git.svg'
import NodejsIcon from '../../assets/nodejs.svg'
import PythonIcon from '../../assets/python.svg'
import SqlIcon from '../../assets/sql.png'
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = props => {
  useEffect(() => {
    Aos.init({duration : 700})
})
  return (
    <div id='skills' className="Skills">
     <div className='skill-main'>
       <div className='skills-heading'>
         <div className='skill-left-line' data-aos='zoom-out-left'></div>
         <h1 className='skills-heading-text' data-aos='fade-up' >Skills I have</h1>
         <div className='skill-right-line' data-aos='zoom-out-right'></div>
        </div>
       <div className='skills-icons'>
        <img className='skill-icon' data-aos='slide-right' data-aos-duration="900" src={HtmlIcon}/>
        <img className='skill-icon' data-aos='slide-up' src={CssIcon}/>
        <img className='skill-icon' data-aos='slide-left' data-aos-duration="900" src={JavascriptIcon}/>
        <img className='skill-icon' data-aos='slide-right' data-aos-duration="1400" src={ReactIcon}/>
        <img className='skill-icon' data-aos='slide-up' src={NodejsIcon}/>
        <img className='skill-icon' data-aos='slide-left' data-aos-duration="900" src={PythonIcon}/>
        <img className='skill-icon' data-aos='slide-right' data-aos-duration="1800" src={DjangoIcon}/>
        <img className='skill-icon' data-aos='slide-up' src={GitIcon}/>
        <img className='skill-icon' data-aos='slide-left' data-aos-duration="900" src={SqlIcon}/>
       </div>
     </div>
    </div>
  )
}

export default Skills