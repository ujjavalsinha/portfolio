import React,{useEffect} from 'react';
import './About.css'
import Aos from "aos";
import "aos/dist/aos.css";

const About = props => {
  useEffect(() => {
    Aos.init({duration : 600})
  })
  return (
    <div id='about' className="About">
      <div className='about-section'>
        <p className='whats-next'>What's Next?</p>
        <h1 className='about-heading'>Get In Touch</h1>
        <p className='text'>You can reach to me from here. Whether you have a question or just want to say hi, I'll always get back to you</p>
        <button className='hello'><a rel="noopener noreferrer" href="mailto:ujjavalsihna9@gmail.com" target="_blank">Say Hello</a>
        </button>
      </div>
    </div>
  )
}

export default About