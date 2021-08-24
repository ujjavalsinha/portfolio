import React from 'react'
import './Sidebar.css';
import {HashLink as Link} from 'react-router-hash-link';

const Sidebar = props => {
    const { showSidebar, handleItemClick} = props
    return (
        <div className='Sidebar' style={showSidebar ? {transform : 'translateX(0%)'} : {transform : 'translateX(120%)'} }>
            
            <div className='sidebar-icons'>
                <Link name='skills' smooth to='#skills' onClick={(e) => handleItemClick(e.target.name)}>Skills</Link>
                <Link name='work' smooth to='#work' onClick={(e) => handleItemClick(e.target.name)}> Work</Link>
                <Link name='projects' smooth to='#projects' onClick={(e) => handleItemClick(e.target.name)}>Projects</Link>
                <Link name='about' smooth to='#about' onClick={(e) => handleItemClick(e.target.name)}>Contact</Link>
            </div>
        </div>
    )
}

export default Sidebar