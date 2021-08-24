import React from 'react';
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Main from './components/Main/Main'
import Work from './components/Work/Work'
import Footer from './components/Footer'
const App = props => {
  return (
    <div className="App">
      <Navigation />
      <Main/>
      <Work/>
      <Projects/>
      <Skills/>
      
      <About/>
      <Footer/>
      <Switch>
      
      <Route path='/home' component={Main}/>
      <Route path='/work' component={Work}/>
      <Route path='/about' component={About}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/skills' component={Skills}/>
      </Switch>
    </div>
  )
}

export default App;