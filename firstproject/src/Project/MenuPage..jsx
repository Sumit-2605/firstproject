// // import React, { useState } from 'react'
// // import Home from './HomePage'
// // import img from '../assets/menu2.jpg'
// // import pic from '../assets/veg.jpg'
// // import nv from '../assets/non-veg.jpg'
// // import chin from '../assets/chinese.jpg'
// // import swwets from '../assets/sweetd.jpg'
// // import piz from '../assets/pizza.jpg'
// // import Footer from './Footer'


// // const Menu = () => {

// //     const foodItems = [
// //     { id: 1, name: "Veg Thali", category: "veg", price: 60, img: pic },
// //     { id: 2, name: "Chicken", category: "nonveg", price: 120, img: nv },
// //     { id: 3, name: "Burger", category: "chinese", price: 30, img: chin },
// //     { id: 4, name: "Kala Jamun", category: "sweet", price: 20, img: swwets },
// //     { id: 5, name: "Pizza", category: "pizza", price: 100, img: piz },
// //   ];
  
// //   const [category, setCategory] = useState("all");

// //   const filteredFood =
// //     category === "all"?
// //        foodItems
// //       : foodItems.filter((item) => item.category === category);

// //   return (
// //     <>
// //       <Home />
// //         <Footer />  

// //       <div className='container-fluid'>
// //         <div className='row'>
// //           <div >
// //         <img src={img} alt="" className="menu-banner" />
// //       </div>

// //         </div>
// //       </div>

// //       <section>
// //         <div className='container top-all'>
// //           <div className='row'>
// //             <div className='col-12 mt-3'>
// //               <center>
// //                 <button className="btn btn-warning px-4 rounded-pill" onClick={() => setCategory("all")}>All</button>
// //                 <button  className="btn btn-warning px-4 rounded-pill"onClick={() => setCategory("veg")}>Veg</button>
// //                 <button  className="btn btn-warning px-4 rounded-pill"onClick={() => setCategory("nonveg")}>Non Veg</button>
// //                 <button  className="btn btn-warning px-4 rounded-pill" onClick={() => setCategory("sweet")}>Sweets</button>
// //                 <button className="btn btn-warning px-4 rounded-pill" onClick={() => setCategory("pizza")}>Pizza</button>
// //                 <button className="btn btn-warning px-4 rounded-pill" onClick={() => setCategory("chinese")}>Chinese</button>

// //               </center>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section>
// //         <div className='container mt-4'>
// //           <div className='row'>
// //             {filteredFood.map((item) => (
// //               <div className='col-md-3 col-sm-12 '>
// //                 <div className='food-card'>
// //                   <div className='row'>
// //                     <div className='col-md-5 col-sm-12'>
// //                       <img src={item.img} alt='...' height={'150px'} width={'100%'} />
// //                     </div>
// //                     <div className='col-md-7 col-sm-12'>
// //                       <p className='pt-2 '><b>{item.name}</b></p>
// //                       <i className="fa-solid fa-indian-rupee-sign"> </i>{item.price}
// //                       <p><b>Category </b> : {item.category}</p>
// //                     <button className="btn btn-sm btn-success rounded-pill">
// //                          Order
// //                     </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}

// //           </div>
// //         </div>
// //       </section>



// //     </>
// //   )
// // }

// // export default Menu


import React, { useState } from "react";
import Home from "./HomePage";
import img from "../assets/menu2.jpg";
import pic from "../assets/veg.jpg";
import nv from "../assets/non-veg.jpg";
import chin from "../assets/chinese.jpg";
import swwets from "../assets/sweetd.jpg";
import piz from "../assets/pizza.jpg";
import Footer from "./Footer";
import fill from '../assets/frill-free-img.png' 
import menu from '../assets/menuBanner.jpg'

const Menu = () => {
  const foodItems = [
    { id: 1, name: "Indian Special", category: "veg", price: 130, img: pic },
    { id: 2, name: "Chicken Curry ", category: "nonveg", price: 220, img: nv },
    { id: 3, name: "Noodles ", category: "chinese", price: 90, img: chin },
    { id: 4, name: "Indian Sweets", category: "sweet", price: 50, img: swwets },
    { id: 5, name: "Pizza", category: "pizza", price: 300, img: piz },
  ];

  const [category, setCategory] = useState("all");

  const filteredFood =
    category === "all"
      ? foodItems
      : foodItems.filter((item) => item.category === category);

  return (
    <>
      <Home />

      {/* Banner */}
     {/* Banner */}
<div className="container-fluid banner-menu m-0 p-0">

  <img src={menu} alt="" className="menu-banner" />

  <div className="menu-overlay">
   
      <center> <img src={fill} alt='...' height={''} className='lineimg'  style={{marginTop:'-220px'}}/>
     
      </center>
             <h1>Menu.</h1>

  </div>

</div>

      {/* Filter Buttons */}
      <section className="py-4">
        <div className="container text-center">
          {["all", "veg", "nonveg", "sweet", "pizza", "chinese"].map((cat) => (
            <button
              key={cat}
              className={`btn mx-1 px-4 rounded-pill ${
                category === cat ? "btn-dark" : "btn-warning"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Food Cards */}
      <section className="pb-5">
        <div className="container">
          <div className="row g-4">
            {filteredFood.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-12" key={item.id}>
                <div className="food-card   ">
                  <img src={item.img} alt="" className="food-img" />

                  <div className="p-3">
                    <h6 className="fw-bold mb-1">{item.name}</h6>

                    <p className="text-muted mb-1 text-capitalize">
                      {item.category}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-success">
                        ₹ {item.price}
                      </span>

                      <button className="btn btn-sm btn-success rounded-pill">
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Menu;


// import React from "react";
// import pasta from "../assets/cPasta.jpg";
// import pizza from "../assets/piza.jpg";
// import fill from "../assets/frill-free-img.png";

// const Menu = () => {
//   const pastaMenu = [
//     {
//       name: "Whole Grain Pasta",
//       price: "$25.00",
//       desc: "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
//     },
//     {
//       name: "Tortellini Gorgonzola",
//       price: "$18.50",
//       desc: "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
//     },
//     {
//       name: "Rigatoni Zuccati",
//       price: "$22.50",
//       desc: "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
//     },
//     {
//       name: "Spaghetti Marinara",
//       price: "$21.50",
//       desc: "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
//     },
//   ];

//   const pizzaMenu = [
//     {
//       name: "BBQ Special Pizza",
//       price: "$12.50",
//       desc: "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
//     },
//     {
//       name: "Spe. Cheesy Cheese",
//       price: "$12.50",
//       desc: "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
//     },
//     {
//       name: "Mushroom Chilly Pizza",
//       price: "$22.50",
//       desc: "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
//     },
//     {
//       name: "Chicken BBQ Special",
//       price: "$25.50",
//       desc: "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
//     },
//   ];

//   return (
//     <div className="menu-page">

//       {/* PASTA SECTION */}
//       <div className="container py-5">
//         <center>
//           <h1 className="menu-heading">Pasta</h1>
//           <img src={fill} alt="" />
//         </center>

//         <div className="row align-items-center mt-4">

//           {/* IMAGE */}
//           <div className="col-md-6">
//             <img src={pasta} alt=""  className="img-fluid rounded-5 " />
//           </div>

//           {/* MENU ITEMS */}
//           <div className="col-md-6">
//             {pastaMenu.map((item, index) => (
//               <div key={index} className="img-fluid rounded-5 ">
//                 <div>
//                   <h4>{item.name}</h4>
//                   <p>{item.desc}</p>
//                 </div>

//                 <span className="price">{item.price}</span>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* PIZZA SECTION */}
//       <div className="container py-5">

//         <center>
//           <h1 className="menu-heading">Pizza</h1>
//           <img src={fill} alt="" />
//         </center>

//         <div className="row align-items-center mt-4">

//           {/* MENU ITEMS */}
//           <div className="col-md-6">
//             {pizzaMenu.map((item, index) => (
//               <div key={index} className="menu-item">
//                 <div>
//                   <h4>{item.name}</h4>
//                   <p>{item.desc}</p>
//                 </div>

//                 <span className="price">{item.price}</span>
//               </div>
//             ))}
//           </div>

//           {/* IMAGE */}
//           <div className="col-md-6">
//             <img src={pizza} alt="" className="menu-image" />
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Menu;