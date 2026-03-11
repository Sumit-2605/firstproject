import React from 'react'
import './App.css'
import Header from './Project/Header.jsx'
import About from './Project/AboutPage.jsx'
import Menu from './Project/MenuPage.'
import Contact from './Project/ContactPage'
// import Slider from './Project/Slider.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Condition from './Components/Condition.jsx'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

 function App (){

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
<>

  <Router>
      <Routes>
        <Route path='/' element={<Header/>}></Route>
         <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
           <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> 
    {/* <Condition/> */}
    </> 
  )
  
}

export default App
