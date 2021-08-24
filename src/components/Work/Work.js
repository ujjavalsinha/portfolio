import React, {useEffect, useState} from 'react';
import './Work.css'
import Aos from "aos";
import "aos/dist/aos.css";

const Work = props => {
    const [company, setCompany] = useState('Infosys')

    const handleCompanySelection = (e) => {
        setCompany(e.target.value)
    }
    
    useEffect(() => {
        Aos.init({
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            

            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        })
    })

    const roleElement = () => {
        if(company === "Infosys"){
            return (
                <div className='role' data-aos='zoom-in' data-aos-duration='1000' data-aos-easing='ease-in-out-sine'>
                        <p className='position' ><span className='profile'>Software Developer</span><span className='comp-name'><span>&nbsp;</span>@Infosys</span> </p>
                        <p className='time-period'>Feb 2021 - Present</p>
                        <div className='description'>
                            <p className='point'>Identified web-based user interactions and developed highly responsive user interface components via React concepts</p>
                            <p className='point'>Developed backend services with Nodejs and implemented authentication and authorization features</p>
                            <p className='point'>Monitored and improved frontend performance by optimizing components for maximum performance</p>
                            <p className='point'>Troubleshoot interface software and debugged application codes to improve functionality and performance</p>
                            <p className='point'>Communicate with multi-disciplinary teams of engineers, designers, testers and clients on a daily basis</p>
                        </div>
                    </div>
            )
        }else if(company === 'Mphasis'){
            return <div className='role' data-aos='zoom-in' data-aos-duration='1000' data-aos-easing='ease-in-out-sine'>
                        <p className='position'><span className='profile'>Software Developer</span><span className='comp-name'><span>&nbsp;</span>@Mphasis</span> </p>
                        <p className='time-period'>Jany 2019 - Jan 2021</p>
                        <div className='description'>
                            <p className='point'>Write modern, performant, maintainable code for diverse array of client and internal projects</p>
                            <p className='point'>Work with a variety of different languages, platforms and frameworks such as Javascript, Reactjs, Nodejs, Python, Oracle Database and Docker</p>
                            <p className='point'>Built internal tool used for data migration and certification with a team which is used by many clients</p>
                            <p className='point'>Work as a full stack developer in developing and maintaing web application</p>
                            <p className='point'>Communicate with multi-disciplinary teams of engineers, designers, producers and clients on a daily basis</p>
                        </div>
                    </div>
        }
    }
    return (
        <div id='work' className='Work'  >
            <div className='work-main' >
                <div className='where-and-line'>
                    <p className='where' data-aos='zoom-in-right' >Where I've worked</p>
                    <div className='where-line' data-aos='zoom-in-left'></div>
                </div>
                <div className='work-desc'>
                    <div className='left-line'></div>
                    <div className='company-list' >
                        <button data-aos='flip-up' data-aos-duration='500' className={ company==='Infosys' ? 'company-name active-comp' : 'company-name'} onClick={handleCompanySelection} value='Infosys'>Infosys</button>
                        <button data-aos='flip-right' data-aos-duration='800' className={ company==='Mphasis' ? 'company-name active-comp' : 'company-name'} onClick={handleCompanySelection} value='Mphasis'>Mphasis</button>
                    </div>
                   {roleElement()}
                </div>
            </div>
        </div>
    )
}

export default Work;