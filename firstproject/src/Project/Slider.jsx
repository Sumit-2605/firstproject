import React from 'react'
import fill from '../assets/frill-free-img.png'
import left from '../assets/fork-free-img.png'
import right from '../assets/knife-free-imge.png'
const Slider = () => {
  return (
    <>
    <div className='container-fluid slider-section'>
        <div className="container">
          <div className='row'>
            <div className='col-12 m-0 p-0'>
            {/* <img src={left} alt='...' height={''} className='lineimg' style={{marginTop:'150px'}} /> */}

             <center> <img src={fill} alt='...' height={''} className='lineimg' /></center>
             <div data-aos="fade-down">
               <h1>Fresco.</h1>
               <p>Italian Specialities</p>
                 <p>Good Food | Good Dine</p>
             </div>
              {/* <img src={right} alt='...' height={''} className='lineimg' style={{float:'right'}} /> */}
            </div>
        </div>
        </div>
    </div>

    
    </>
  )
}

export default Slider
