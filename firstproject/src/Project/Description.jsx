import React from "react";
import pic from "../assets/pizza.jpg";
// import pic1 from "../assets/customer.jpg";
import burger from '../assets/burger2.jpg'
import Prop from "./PropAbout";
import salad from '../assets/salad.jpg'
import imj from '../assets/imj.jpg'
import juice from '../assets/juice1.jpg'
import flower from '../assets/menuflower.png'
import dine from '../assets/dine1.jpg'
import menu from '../assets/Menu-item-4.jpg'
import cx from '../assets/cx.jpg'

const Description = () => {
  return (
    <>
    <div className="container-fluid my-5">
      <div className="container">
      <div className="row align-items-center">

        {/* LEFT TEXT */}
        <div className="col-md-4 col-sm-12">
          <p className="fw-bold font-italic">Country's Most Loved!</p>

          <h1 className="fw-bold">
            Welcome
          </h1>

          <h4>
            We Are Locally Crafted Food & Wine Serving Since 1978.
          </h4>

          <p className="text-muted">
            Congue, gravida. Placeat nibh sunt semper elementum anim!
            Integer lectus debitis auctor. Molestias vivamus eligendi ut,
            cupidatat nisl iaculis etiam.
          </p>

          <button className="btn down-btn rounded-pill px-4">
            More About Us →
          </button>
        </div>


        {/* CENTER IMAGE */}
        <div className="col-md-4 col-sm-12 text-center">
          <img
            src={pic}
            alt="pizza"
            className="img-fluid rounded shadow"
            style={{height:"350px", width:"400px"}}
          />
        </div>


        {/* RIGHT CARD */}
        <div className="col-md-4 col-sm-12 text-center">
         <div className="hour-card">

      <img src={juice} alt="food" className="card-img"style={{height:"350px", width:"150%"}} />

      <div className="overlay">
        <h2>Hours</h2>
        <p>Monday - Saturday | 9AM - 1PM</p>
        <p>Saturday - Sunday | 9AM - 4AM</p>
      </div>

    </div>
        </div>
        
          <div className="container " >
            <div className="row"
            >
              <img src={flower} alt="..." style={{height:'100px', width:'200px'}} className="mx-auto d-flex my-4"  />
              <h1 className="text-center fst-italic"> Our Menu </h1>
                <h2 className="text-center">Quality Ingredients, Tasty Meals</h2>
                <p className=" text-center text-muted">Congue, gravida. Placeat nibh sunt semper elementum anim! Integer lectus debitis auctor. Molestias vivamus eligendi ut, cupidatat nisl iaculis etiam! Laboris aenean </p>
               
            </div>
            
            </div>
           

      </div>
      </div>
    </div>


      {/* MENU GRID SECTION */}
{/* MENU GRID SECTION */}
<div className="container-fluid px-0 my-5" style={{ borderTop: '2px solid #FF770F', borderBottom: '2px solid #FF770F' }}>
  <div className="row g-0"> {/* One single row handles all wrapping perfectly */}
    
    {/* ITEM 1: TEXT */}
    <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center text-center p-5" 
         style={{ backgroundColor: '#FFF9F1', minHeight: '400px' }}>
      <h2 className="fw-bold mb-2">Ham and Fontina</h2>
      <p className="text-muted mb-0">Roasted eggplant spread, marinated tomatoes.</p>
      <div className="border-top border-dark my-3" style={{ width: '40px' }}></div>
      <h3 className="fw-bold">$29.5</h3>
      <div className="border-top border-dark my-3" style={{ width: '40px' }}></div>
    </div>

    {/* ITEM 2: IMAGE */}
    <div className="col-md-4 col-sm-6" style={{ height: '400px' }}>
      <img src={burger} alt="Burger" className="w-100 h-100" style={{ objectFit: 'cover' }} />
    </div>

    {/* ITEM 3: TEXT */}
    <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center text-center p-5" 
         style={{ backgroundColor: '#FFF9F1', minHeight: '400px' }}>
      <h2 className="fw-bold mb-2">Chicken Italiano</h2>
      <p className="text-muted mb-0">Tristique perferen possimus neque fermentum vel.</p>
      <div className="border-top border-dark my-3" style={{ width: '40px' }}></div>
      <h3 className="fw-bold">$11</h3>
      <div className="border-top border-dark my-3" style={{ width: '40px' }}></div>
    </div>

    {/* ITEM 4: IMAGE */}
    <div className="col-md-4 col-sm-6" style={{ height: '400px' }}>
      <img src={salad} alt="Salad" className="w-100 h-100" style={{ objectFit: 'cover' }} />
    </div>

    {/* ITEM 5: TEXT */}
    <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center text-center p-5" 
         style={{ backgroundColor: '#FFF9F1', minHeight: '400px' }}>
      <h2 className="fw-bold mb-2">Spaghetti Delle</h2>
      <p className="text-muted mb-0">Rustic baguette toasted with herb-garlic butter & parmesan</p>
      <div className="border-top border-dark my-3" style={{ width: '40px' }}></div>
      <h3 className="fw-bold">$28</h3>
      <div className="border-top border-dark my-3" style={{ width: '40px' }}></div>
    </div>

    {/* ITEM 6: IMAGE */}
    <div className="col-md-4 col-sm-6" style={{ height: '400px' }}>
      <img src={imj} alt="Dinner" className="w-100 h-100" style={{ objectFit: 'cover' }} />
    </div>

    {/* ITEM 7: TEXT */}
    <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center text-center p-5" 
         style={{ backgroundColor: '#FFF9F1', minHeight: '400px' }}>
      <h2 className="fw-bold mb-2">Crumbled Sausage</h2>
      <p className="text-muted mb-0">Natural unpressed ham, fontina, provolone, aioli.</p>
      <div className="border-top border-dark my-3" style={{ width: '40px' }}></div>
      <h3 className="fw-bold">$28</h3>
      <div className="border-top border-dark my-3" style={{ width: '40px' }}></div>
    </div>

    {/* ITEM 8: IMAGE */}
    <div className="col-md-4 col-sm-6" style={{ height: '400px' }}>
      <img src={menu} alt="Featured" className="w-100 h-100" style={{ objectFit: 'cover' }} />
    </div>

    {/* ITEM 9: TEXT */}
    <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center text-center p-5" 
         style={{ backgroundColor: '#FFF9F1', minHeight: '400px' }}>
      <h2 className="fw-bold mb-2">Classic Pizza</h2>
      <p className="text-muted mb-0">Fresh mozzarella, basil, and signature red sauce.</p>
      <div className="border-top border-dark my-3" style={{ width: '40px' }}></div>
      <h3 className="fw-bold">$22</h3>
      <div className="border-top border-dark my-3" style={{ width: '40px' }}></div>
    </div>

  </div>
</div>

<div className="container my-5 py-5">
      <div className="row align-items-center g-5">
        
        {/* LEFT SIDE: IMAGE WITH TEXT OVERLAY */}
        <div className="col-md-6">
          <div className="position-relative shadow-lg rounded overflow-hidden">
            <img 
              src={cx} 
              alt="People dining" 
              className="img-fluid w-100" 
              style={{ minHeight: "450px", objectFit: "cover" }} 
            />
            {/* Bottom Text Overlay */}
            <div className="position-absolute bottom-0 start-0 w-100 p-4 text-center" 
                 style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}>
              <h3 className="text-white fst-italic fw-light">Good Food | Good Wine</h3>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="col-md-6">
          <div className="ps-md-4">
            <p className="fst-italic fw-bold mb-1" style={{ fontSize: "1.2rem" }}>
              Wednesdays Means
            </p>
            <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: "serif" }}>
              Happy Hours!
            </h1>
            <h3 className="fw-bold mb-3">
              Half Price Bottles of Wine and Six Tasty Lunches for $9
            </h3>
            <p className="text-muted mb-5">
              Congue, gravida. Placeat nibh sunt semper elementum anim! Integer lectus 
              debitis auctor. Nunc quisquam adipisicing leo, tempora ipsam pede nostrum. 
              Turpis tempus fusce, sed, orci eligendi
            </p>
            
            <button className="btn btn-lg rounded-pill text-white px-5 py-3 shadow" 
                    style={{ backgroundColor: "#FF770F", border: "none" }}>
              Discover Offer <span className="ms-2">→</span>
            </button>
          </div>
        </div>

      </div>
    </div>
             </>
  );
};

export default Description;