import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/fresco-free-logo.svg';
import './Navbar.css'; // Make sure to create this file

const Home = () => {
  
  return (
    <div className="container-fluid navbar-wrapper">
      <div className="container">
        <div className="row align-items-center">

          {/* Logo Section */}
          <div className="col-md-2 col-12 d-flex justify-content-center justify-content-md-start">
            <img src={logo} alt="logo" height="80" width="170" className="img-fluid" />
          </div>

          {/* Navigation Links */}
          <div className="col-md-10 col-12">
            <nav>
              <ul className="nav-list d-flex justify-content-center justify-content-md-end align-items-center list-unstyled gap-4 py-4 m-0">
                <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? "menunav active-link" : "menunav"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/menu" className={({ isActive }) => isActive ? "menunav active-link" : "menunav"}>
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({ isActive }) => isActive ? "menunav active-link" : "menunav"}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => isActive ? "menunav active-link" : "menunav"}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Login" className="menunav sign-in-link">
                    Login 
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/reservation" className="btn-reservation" id="btnreg">
                    Reservation
                  </NavLink>
                </li>
              
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;