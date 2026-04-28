import React from 'react'
import './App.css'
import Header from './Project/Header.jsx'
import About from './Project/AboutPage.jsx'
import Menu from './Project/MenuPage.'
import Contact from './Project/ContactPage'
import Reservation from './Project/Reservation.jsx'
// import Slider from './Project/Slider.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Condition from './Components/Condition.jsx'
import { useEffect } from "react";
import AOS from "aos";
import Login from './Project/Login.jsx'
import ProtectedRoute from './Project/ProtectedRoute.jsx'
import "aos/dist/aos.css";
import Home from './Project/HomePage.jsx'
import HomePage from './HomePage.jsx'
import Offers from './Project/Offers.jsx'
import Loginn from "./Project/Loginn.jsx"
import Password from './Project/Password.jsx'
import Sign from './Project/Sign.jsx'
import Cart from "./Project/Cart";



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
  <Route path="/" element={<Header />} />
  <Route path="/about" element={<About />} />
  <Route path="/menu" element={
  
       <Menu />
    
   } />
  <Route path="/contact" element={<Contact />} />

  <Route
    path="/reservation"
    element={
      // <ProtectedRoute>
        <Reservation />
      // </ProtectedRoute>
    }
  />

  <Route path="/login" element={<Loginn />} />
  <Route path="/sign" element={<Sign />} />
  <Route path="/password" element={<Password />} />
  <Route path="/offers" element={<Offers />} />
  <Route path="/cart" element={<Cart />} />
</Routes>
    </Router> 
       </> 
  )
  
}

export default App
