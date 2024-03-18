import React from 'react'
import Header from '../../components/Header'
import intro from './Intro'
import Intro from './Intro'
import About from './About'
import Expreiences from './Expreiences'
import Project from './Project'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import LeftSide from './LeftSide'
import { useSelector } from 'react-redux'


function Home() {
  const {portfolioData } = useSelector((state) => state.root);

  return (
    <div>
   <Header />
  {portfolioData &&(
    <div className='bg-primary px-20 sm:px-5'> 
    <Intro /> 
    <About />
    <Expreiences  />
    <Project />
    <Courses />
    <Contact />
    <Footer />
    <LeftSide />
    </div>
  )}
   
   
    </div>
  )
}

export default Home
