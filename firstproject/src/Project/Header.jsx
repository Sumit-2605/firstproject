import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './HomePage'
import About from './AboutPage'
import Menu from './MenuPage.'
import Contact from './ContactPage'
import Slider from './Slider'
import Description from './Description'
import Footer from './Footer'

const Header = () => {
   return (
  <>
   <Home />
    <Slider />
    <Description />
    <Footer />
    {/* <About />
    <Menu />
    <Contact /> */}
 
 </>
  )
 

}

export default Header

