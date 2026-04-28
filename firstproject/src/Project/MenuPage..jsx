import React, { useState, useContext } from "react";
import Home from "./HomePage";
import pic from "../assets/veg.jpg";
import nv from "../assets/non-veg.jpg";
import chin from "../assets/chinese.jpg";
import swwets from "../assets/sweetd.jpg";
import piz from "../assets/pizza.jpg";
import Footer from "./Footer";
import fill from "../assets/frill-free-img.png";
import menu from "../assets/menuBanner.jpg";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";



const Menu = () => {
  const navigate = useNavigate();

  const foodItems = [
    { id: 1, name: "Veg Thali", category: "veg", price: 120, img: pic },
    { id: 2, name: "Paneer Butter Masala", category: "veg", price: 180, img: pic },
    { id: 3, name: "Dal Tadka", category: "veg", price: 100, img: pic },
    { id: 4, name: "Mix Veg Curry", category: "veg", price: 130, img: pic },
    { id: 5, name: "Aloo Paratha", category: "veg", price: 60, img: pic },

    { id: 6, name: "Chicken Curry", category: "nonveg", price: 220, img: nv },
    { id: 7, name: "Butter Chicken", category: "nonveg", price: 260, img: nv },
    { id: 8, name: "Chicken Biryani", category: "nonveg", price: 240, img: nv },

    { id: 9, name: "Veg Noodles", category: "chinese", price: 90, img: chin },
    { id: 10, name: "Chicken Fried Rice", category: "chinese", price: 150, img: chin },

    { id: 11, name: "Gulab Jamun", category: "sweet", price: 50, img: swwets },
    { id: 12, name: "Brownie", category: "sweet", price: 120, img: swwets },

    { id: 13, name: "Cheese Pizza", category: "pizza", price: 220, img: piz },
    { id: 14, name: "Pepperoni Pizza", category: "pizza", price: 250, img: piz },
  ];

  const [category, setCategory] = useState("all");

  // ✅ useContext (ONLY THIS)
  const { addToCart, cart } = useContext(CartContext);

  const filteredFood =
    category === "all"
      ? foodItems
      : foodItems.filter((item) => item.category === category);

  return (
    <>
      <Home />

      {/* ✅ CART COUNTER */}
      <div className="text-end p-3 fw-bold">
  🛒 {cart.length}

  <button
    className="btn btn-success ms-2"
    onClick={() => navigate("/cart")}
  >
    View Cart
  </button>
</div>

      {/* BANNER */}
      <div className="container-fluid banner-menu m-0 p-0">
        <img src={menu} alt="" className="menu-banner" />

        <div className="menu-overlay">
          <center>
            <img
              src={fill}
              alt=""
              className="lineimg"
              style={{ marginTop: "-220px" }}
            />
          </center>

          <h1>Menu</h1>
        </div>
      </div>

      {/* FILTER */}
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

      {/* FOOD */}
      <section className="pb-5">
        <div className="container">
          <div className="row g-4">
            {filteredFood.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-12" key={item.id}>
                <div className="food-card">
                  <img src={item.img} alt="" className="food-img" />

                  <div className="p-3">
                    <h6 className="fw-bold">{item.name}</h6>

                    <p className="text-muted text-capitalize">
                      {item.category}
                    </p>

                    <div className="d-flex justify-content-between">
                      <span className="fw-bold text-success">
                        ₹ {item.price}
                      </span>

                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => addToCart(item)}
                      >
                        Add
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