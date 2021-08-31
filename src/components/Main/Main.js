import React from 'react';
import './Main.css'
import { HashLink as Link } from 'react-router-hash-link';
import {ReactComponent as InstagramIcon} from '../../assets/instagram.svg';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg'
const Main = props => {
  return (
    <div id='home' className="Main">
      <p style={{position : 'absolute', top : '-100%'}}>Ujjaval Sinha</p>
      <div className='icons-list'>
        <a rel="noopener noreferrer" target="_blank"><InstagramIcon className='icons'/></a>
        <a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/ujjaval-sinha-6794453a/'><LinkedinIcon className='icons'/></a>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/ujjavalsinha"><GithubIcon className='icons'/></a>
        <a rel="noopener noreferrer" target="_blank"><InstagramIcon className='icons'/></a>
        <div className='line'></div>
      </div>
      <div className='main-sub'>
        <div className='anim-element1'></div>
        <div className='anim-element2'></div>
        <p className='hi-message'>Hi, my name is</p>
        <h1 className='name'>
          <span className='letter'>U</span>
          <span className='letter'>J</span>
          <span className='letter'>J</span>
          <span className='letter'>A</span>
          <span className='letter'>V</span>
          <span className='letter'>A</span>
          <span className='letter'>L</span>
          <span className='letter'>&nbsp;</span>
          <span className='letter'>S</span>
          <span className='letter'>I</span>
          <span className='letter'>N</span>
          <span className='letter'>H</span>
          <span className='letter'>A</span>
          </h1>
          <div className='anim-element3'></div>
        <p className='message'>I build things for web</p>
        <p className='paragraph'>I'm a software engineer specializing in building exceptional digital experiences. I am currently working as a web developer at Infosys</p>
        <Link to='#about' smooth><button className='get-in-touch'>Get In Touch</button></Link>
      </div>
    </div>
  )
}

export default Main
