import React from "react";
import Home from "./HomePage";
import Footer from "./Footer";
import aboutImg from "../assets/customer.jpg";

const About = () => {
  return (
    <>
    <Home />
    <section className="container my-5">
      <div className="row align-items-center">

        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3 text-warning">About Us</h2>

          <p style={{ textAlign: "justify" }} className="text-muted">
            We bring your favorite meals straight to your doorstep. From local
            kitchens to top restaurants, our food ordering app connects food
            lovers with fresh, delicious, and affordable meals—delivered fast
            and safely.
          </p>

          <p style={{ textAlign: "justify" }} className="text-muted">
            Whether you're craving comfort food or exploring new flavors, we
            make ordering simple, reliable, and enjoyable.
          </p>

          <button className="btn btn-warning px-4 fw-bold">
            Explore Menu
          </button>
        </div>


      <div className="col-md-6 text-center">
          <img
            src={aboutImg}
            alt="Food delivery"
            className="img-fluid rounded-5 "
          />
        </div>

        

      </div>
    </section>
    <Footer />
    </>
  );
};

export default About;