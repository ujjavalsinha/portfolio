import React, {useEffect} from 'react';
import DigitalDoctor from '../../assets/digitaldoctor.png'
import Corona from '../../assets/corona.png'
import Todo from '../../assets/todo.png';
import Blog from '../../assets/blog.png'
import Aos from "aos";
import "aos/dist/aos.css";
import './Projects.css'

const Projects = props => {
  useEffect(() => {
    Aos.init({duration : 1000})
})
  return (
    <div id='projects' className="Projects">
      <div className='projects-main'>
        <div className='project-heading'>
          <h1 className='heading-text' data-aos='fade-up'>Some things I've Built</h1>
          <div className='heading-line' data-aos="slide-right" data-aos-easing='ease-in-out-cubic'></div>
        </div>
        <div className='projects-list'>
          <div className='project'>
            <div className='image-container right-image' data-aos='flip-up'>
              <img className='digital-doctor-image project-image '  src={DigitalDoctor}/>
            </div>
            
            <div className='project-details right-details'>
              <p className='featured-project'>Featured Project</p>
              <p className='project-name'>Digital Doctor</p>
              <p className='project-description' data-aos="zoom-in-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.by the readable content of a page when  'Content here, content here', making it look like readable English. </p>
              <div className='tech-stack'>
                <p>React</p>
                <p>Django</p>
                <p>CSS</p>
                <p>Redux</p>
              </div>
              <div className='code-link'>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/ujjavalsinha/DigitalDoctor">Code</a>
                <a rel="noopener noreferrer" target="_blank" href="https://digital-doctor.herokuapp.com/">Visit</a>
              </div>
            </div>
          </div>
          <div className='project'>
            <div className='image-container left-image' data-aos='flip-up'>
              <img className='digital-doctor-image project-image '   src={Blog}/>
            </div>
            
            <div className='project-details left-details'>
              <p className='featured-project left '>Featured Project</p>
              <p className='project-name left'>My Blog</p>
              <p className='project-description left left-description' data-aos="zoom-in-right">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.by the readable content of a page when  'Content here, content here', making it look like readable English. </p>
              <div className='tech-stack left-tech-stack'>
                <p>React</p>
                <p>Flask</p>
                <p>CSS</p>
                <p>Redux</p>
              </div>
              <div className='code-link left-code-link'>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/ujjavalsinha/blog-flask-react">Code</a>
                <a rel="noopener noreferrer" target="_blank" href="https://blog-flask-react.vercel.app/">Visit</a>
              </div>
            </div>
          </div>
          <div className='project'>
            <div className='image-container right-image'  data-aos='flip-up'>
              <img className='digital-doctor-image project-image ' src={Todo}/>
            </div>
            
            <div className='project-details right-details'>
              <p className='featured-project'>Featured Project</p>
              <p className='project-name'>Todo App</p>
              <p className='project-description' data-aos="zoom-in-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.by the readable content of a page when  'Content here, content here', making it look like readable English. </p>
              <div className='tech-stack'>
                <p>React</p>
                <p>Django</p>
                <p>CSS</p>
                <p>Redux</p>
              </div>
              <div className='code-link'>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/ujjavalsinha/todo-list-frontend">Code</a>
                <a rel="noopener noreferrer" target="_blank" href="https://todolist-react-django.herokuapp.com/signup">Visit</a>
              </div>
            </div>
          </div>
          <div className='project'>
            <div className='image-container left-image'   data-aos='flip-up'>
              <img className='digital-doctor-image project-image ' src={Corona}/>
            </div>
            
            <div className='project-details left-details'>
              <p className='featured-project left '>Featured Project</p>
              <p className='project-name left'>Corona Count Tracker</p>
              <p className='project-description left left-description' data-aos="zoom-in-right">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.by the readable content of a page when  'Content here, content here', making it look like readable English. </p>
              <div className='tech-stack left-tech-stack'>
                <p>React</p>
                <p>CSS</p>
                <p>Redux</p>
                <p>MaterialUI</p>
              </div>
              <div className='code-link left-code-link'>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/ujjavalsinha/corona-tracker-react">Code</a>
                <a rel="noopener noreferrer" target="_blank" href="https://corona-count-tracker.netlify.app">Visit</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects