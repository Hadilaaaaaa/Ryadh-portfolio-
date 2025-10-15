import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Road from './components/Road/road'
import Clients from './components/clients/clients'
import Contact from './components/Contact/contact'
import Footer from './components/footer/footer'
import ProjectsSlider from './components/ProjectsSlider/ProjectsSlider'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Road/>
      <ProjectsSlider/>
      <Clients/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App

