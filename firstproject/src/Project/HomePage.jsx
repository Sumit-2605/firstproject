// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import logo from '../assets/fresco-free-logo.svg'





// const Home = () => {
//   return (
//     <>


//       <div className="container-fluid ">
//         <div className="container">
//           <div className="row align-items-center ">

//             <div className="col-md-2 col-sm-12">
//               <img src={logo} alt="..." height={'80px'} width={'170px'} />
//             </div>

//             <div className="col-md-10 col-sm-12">
//               <nav>
//                 <ul className="d-flex justify-content-end align-items-center list-unstyled gap-4 py-4 m-0">

//                   <li><NavLink to="/menu" className="menunav" id='home'> Home</NavLink></li>
//                   <li><NavLink to="/menu" className="menunav" >Menu </NavLink></li>
//                   <li><NavLink to="/about" className="menunav" > About Us</NavLink></li>

//                   <li><NavLink to="/menu" className="menunav" > Contact</NavLink></li>
//                   <button id='btnreg' className="btn btn rounded-pill ">
//                     Reservation
//                   </button>

//                 </ul>

//               </nav>

//             </div>

//           </div>
//         </div>
//       </div>




//     </>
//   )
// }

// export default Home


import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/fresco-free-logo.svg'

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-2 col-sm-12">
            <img src={logo} alt="logo" height="80" width="170" />
          </div>

          <div className="col-md-10 col-sm-12">
            <nav>
              <ul className="d-flex justify-content-end align-items-center list-unstyled gap-4 py-4 m-0">

                <li>
                  <NavLink to="/" className="menunav">Home</NavLink>
                </li>

                <li>
                  <NavLink to="/menu" className="menunav">Menu</NavLink>
                </li>

                <li>
                  <NavLink to="/about" className="menunav">About Us</NavLink>
                </li>

                <li>
                  <NavLink to="/contact" className="menunav">Contact</NavLink>
                </li>

                <li>
                  <button id="btnreg" className="btn rounded-pill">
                    Reservation
                  </button>
                </li>

              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home