import React from "react";
import Home from "./HomePage";
import Footer from "./Footer";
import aboutImg from "../assets/customer.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate(); // ✅ must be inside component

  const goToMenu = () => {
    navigate("/Menu"); // or "/menu"
  };
  return (
    <>
      <Home />

      <section className="about-section container my-5">
        <div className="row align-items-center">

          {/* Text Section */}
          <div className="col-md-6" data-aos="fade-right">
            <h2 className="fw-bold mb-3 text-warning">About Us</h2>

            <p className="text-muted text-justify">
              We are a fast-growing food delivery platform dedicated to bringing
              delicious meals from your favorite restaurants right to your doorstep.
              Our mission is to make food ordering simple, fast, and affordable for everyone.
            </p>

            <p className="text-muted text-justify">
              From local street food to premium restaurants, we partner with a wide range
              of kitchens to ensure you always have something tasty to choose from.
              Freshness and quality are always our top priority.
            </p>

            <p className="text-muted text-justify">
              Our platform is designed to give you a smooth ordering experience —
              browse menus, customize your meals, and track your order in real-time.
            </p>

            <p className="text-muted text-justify">
              We believe food is not just about hunger, it’s about happiness, comfort,
              and connection. That’s why we work every day to deliver not just food,
              but a delightful experience.
            </p>

            <button
              className="btn btn-warning px-4 fw-bold about-btn"
              onClick={goToMenu}   // ✅ correct way
            >
              Explore Menu
            </button>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src={aboutImg}
              alt="Food delivery"
              className="img-fluid rounded-4 about-img"
            />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;