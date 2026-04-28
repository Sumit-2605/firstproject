import React from 'react'
import Home from './HomePage'
import Footer from './Footer'

const Offers = () => {

  return (
    <>
    
      <Home/>
    
    <div className="container my-5">

      <div className="text-center mb-4">
        <h2 className="fw-bold">🔥 Special Offers</h2>
        <p className="text-muted">Don’t miss today’s deals</p>
      </div>

      <div className="row g-4">

        {/* Offer 1 */}
        <div className="col-md-4">
          <div className="card shadow border-0 h-100 text-center p-4 offer-card">
            <h4 className="fw-bold text-warning">Happy Hours</h4>
            <p className="text-muted">20% OFF between 3PM - 6PM</p>
            <button className="btn btn-dark rounded-pill mt-2">
              Grab Deal
            </button>
          </div>
        </div>

        {/* Offer 2 */}
        <div className="col-md-4">
          <div className="card shadow border-0 h-100 text-center p-4 offer-card">
            <h4 className="fw-bold text-success">Weekend Special</h4>
            <p className="text-muted">Buy 1 Get 1 Free on Burgers</p>
            <button className="btn btn-dark rounded-pill mt-2">
              Order Now
            </button>
          </div>
        </div>

        {/* Offer 3 */}
        <div className="col-md-4">
          <div className="card shadow border-0 h-100 text-center p-4 offer-card">
            <h4 className="fw-bold text-danger">Family Pack</h4>
            <p className="text-muted">Meals starting at ₹499 only</p>
            <button className="btn btn-dark rounded-pill mt-2">
              View Offer
            </button>
          </div>
        </div>

      </div>
    </div>
      <Footer/>
    </>

   
  )
}

export default Offers